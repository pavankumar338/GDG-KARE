import { saveRegistration } from './saveRegistration';

// Simple client-side submission queue / rate-limiter
// - concurrency: max parallel requests
// - intervalMs: minimum delay between starting requests (to spread load)
// - maxRetries: retry count for transient failures

const DEFAULTS = {
  concurrency: 3,
  intervalMs: 250,
  maxRetries: 3,
};

class SubmissionQueue {
  constructor(opts = {}) {
    this.concurrency = opts.concurrency ?? DEFAULTS.concurrency;
    this.intervalMs = opts.intervalMs ?? DEFAULTS.intervalMs;
    this.maxRetries = opts.maxRetries ?? DEFAULTS.maxRetries;

    this.queue = [];
    this.running = 0;
    this.lastStart = 0;
  }

  enqueue(form) {
    return new Promise((resolve, reject) => {
      this.queue.push({ form, resolve, reject, attempts: 0 });
      // start processing asap
      this._processNext();
    });
  }

  _processNext() {
    if (!this.queue.length) return;
    if (this.running >= this.concurrency) return;

    const now = Date.now();
    const sinceLast = now - this.lastStart;
    const wait = Math.max(0, this.intervalMs - sinceLast);

    if (wait > 0) {
      setTimeout(() => this._processNext(), wait);
      return;
    }

    const task = this.queue.shift();
    if (!task) return;

    this.running += 1;
    this.lastStart = Date.now();

    this._runTask(task).finally(() => {
      this.running -= 1;
      // schedule next tick quickly to allow concurrency to refill
      setTimeout(() => this._processNext(), 0);
    });
  }

  async _runTask(task) {
    const { form, resolve, reject } = task;
    try {
      const result = await this._attemptSaveWithRetries(form, task);
      resolve(result);
    } catch (err) {
      reject(err);
    }
  }

  async _attemptSaveWithRetries(form, task) {
    const max = this.maxRetries;
    while (true) {
      try {
        task.attempts += 1;
        return await saveRegistration(form);
      } catch (err) {
        const isLast = task.attempts > max;
        // If last attempt, throw
        if (isLast) throw err;
        // else wait with exponential backoff + jitter
        const backoff = Math.min(30_000, 500 * Math.pow(2, task.attempts - 1));
        const jitter = Math.floor(Math.random() * 200);
        await new Promise(r => setTimeout(r, backoff + jitter));
        // continue loop to retry
      }
    }
  }
}

// single shared queue instance for the client
const shared = new SubmissionQueue();

export function enqueueRegistration(form) {
  return shared.enqueue(form);
}

export function configureSubmissionQueue(opts) {
  // Replace the shared instance with new configuration
  // (useful for tests or advanced tuning)
  // NOTE: simple replacement — existing queued tasks remain on old instance
  return new SubmissionQueue(opts);
}
