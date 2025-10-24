import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { RetroGrid } from "./RetroGrid";
import { supabase, ML_REGISTRATIONS_TABLE } from "../lib/supabase";

const Section = styled.section`
  padding: 3.5rem 1rem;
  min-height: 100vh;
  background: var(--bg-primary);
`;

const Center = styled.div`
  max-width: 920px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.25rem;
  text-align: center;
  margin-bottom: 0.25rem;
`;

const Subtitle = styled.p`
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 1.25rem;
`;

const Card = styled.form`
  background: var(--bg-secondary);
  padding: 1.25rem;
  border-radius: 10px;
  box-shadow: 0 12px 26px rgba(13, 30, 59, 0.06);
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
`;

const Field = styled.div`
  margin-bottom: 0.75rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.35rem;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  border-radius: 8px;
  border: 1px solid var(--grey);
`;

const Select = styled.select`
  width: 100%;
  padding: 0.6rem;
  border-radius: 8px;
  border: 1px solid var(--grey);
`;

const Button = styled(motion.button)`
  width: 100%;
  padding: 0.9rem;
  border-radius: 10px;
  border: none;
  background: linear-gradient(90deg, var(--blue), var(--medium-blue));
  color: white;
  font-weight: 700;
  cursor: pointer;
`;

const Error = styled.div`
  color: var(--medium-red);
  margin-top: 0.35rem;
`;

const SuccessBox = styled.div`
  text-align: center;
  padding: 1.5rem;
  /* subtle elevated card with stronger contrast for success state */
  background: linear-gradient(180deg, var(--bg-secondary), rgba(255,255,255,0.02));
  color: var(--text-primary);
  border-radius: 12px;
  box-shadow: 0 14px 40px rgba(13,30,59,0.08);
  border: 1px solid rgba(13,30,59,0.06);
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: var(--blue);
    font-weight: 600;
    text-decoration: underline;
  }
`;

const SuccessContent = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: stretch;
  text-align: left;
`;

const ProblemBox = styled.div`
  width: 100%;
  text-align: left;
  padding: 1rem;
  border-radius: 10px;
  background: linear-gradient(90deg, rgba(99,102,241,0.06), rgba(14,165,233,0.02));
  border: 1px solid rgba(13,30,59,0.04);
  color: var(--text-primary);
`;


const LinkButton = styled(Link)`
  display: inline-block;
  padding: 0.7rem 1.05rem;
  border-radius: 10px;
  background: linear-gradient(90deg, var(--blue), var(--medium-blue));
  color: white;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  box-shadow: 0 8px 18px rgba(13,30,59,0.08);
`;

async function saveRegistration(form) {
  const p1Year = form.p1_year ? parseInt(form.p1_year.charAt(0)) : null;
  const p2Year = form.p2_year ? parseInt(form.p2_year.charAt(0)) : null;
  // ensure college emails exist; if not, derive from regno where possible
  const derivedP1Email = form.p1_email && form.p1_email.trim() ? form.p1_email.trim() : (form.p1_regno ? `${form.p1_regno}@klu.ac.in` : null);
  const derivedP2Email = form.p2_email && form.p2_email.trim() ? form.p2_email.trim() : (form.p2_regno ? `${form.p2_regno}@klu.ac.in` : null);

  const row = {
    // top-level compatibility fields
    team_name: form.teamName || `${form.p1_name} & ${form.p2_name}`,
    name: form.teamName || `${form.p1_name} & ${form.p2_name}`,
    registration_number: `${form.p1_regno || ''}_${form.p2_regno || ''}`,
    whatsapp_number: form.p1_whatsapp || '',
    year: isNaN(p1Year) ? null : p1Year,
    department: form.p1_department || form.p2_department || '',
    college_email: form.p1_email || '',
    // participant-specific columns (store each value in its own column)
    p1_name: form.p1_name || null,
    p1_regno: form.p1_regno || null,
    p1_whatsapp: form.p1_whatsapp || null,
    p1_year: isNaN(p1Year) ? null : p1Year,
    p1_department: form.p1_department || null,
  p1_email: derivedP1Email,
    p2_name: form.p2_name || null,
    p2_regno: form.p2_regno || null,
    p2_whatsapp: form.p2_whatsapp || null,
    p2_year: isNaN(p2Year) ? null : p2Year,
    p2_department: form.p2_department || null,
  p2_email: derivedP2Email,
    registration_date: new Date().toISOString(),
    // allow caller to supply ack numbers (if user provided them on step 2)
    p1_ack: form.p1_ack || null,
    p2_ack: form.p2_ack || null,
    problem_statement: form.problemStatement || null
  };

  // select only the id to avoid requesting deprecated/removed columns which may cause a 400
  const { data, error } = await supabase.from(ML_REGISTRATIONS_TABLE).insert([row]).select('id').single();
  if (error) throw error;
  return data;
}

export default function MlEventTeam() {
  const [form, setForm] = useState({
    teamName: '',
    p1_name: '', p1_regno: '', p1_whatsapp: '', p1_year: '', p1_department: '', p1_email: '',
    p2_name: '', p2_regno: '', p2_whatsapp: '', p2_year: '', p2_department: '', p2_email: '',
    // optional acknowledgement numbers (entered on step 2)
    p1_ack: '', p2_ack: '',
    problemStatement: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [csvOptions, setCsvOptions] = useState([]);
  const [acknowledgements, setAcknowledgements] = useState({ p1: '', p2: '' });
  const [step, setStep] = useState(1);
  

  // load problem statements from bundled Excel on mount
  useEffect(() => {
    let mounted = true;
    (async () => {
      // Try to load bundled CSV first (src/ps.csv). This is a simple fallback and easier to maintain than xlsx.
      try {
        const csvUrl = new URL('../ps.csv', import.meta.url).href;
        const resCsv = await fetch(csvUrl);
        if (resCsv && resCsv.ok) {
          const text = await resCsv.text();
          const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
          let start = 0;
          if (lines.length > 0 && /problem|title|statement/i.test(lines[0])) start = 1;
          const options = lines.slice(start).map(line => line.split(',')[0].trim()).filter(Boolean);
          if (options.length) {
            if (!mounted) return;
            setCsvOptions(options);
            setForm(f => ({ ...f, problemStatement: f.problemStatement || options[0] }));
            // we prefer csv over xlsx if present; still attempt xlsx for extra display but don't overwrite options
          }
        }
      } catch (err) {
        // ignore — ps.csv may not exist in some builds
        console.debug('ps.csv not loaded', err);
      }

      // No XLSX fallback — problem statements are loaded from bundled ps.csv only.
    })();
    return () => { mounted = false; };
  }, []);

  // validate participant fields only (used before moving to step 2)
  const validateParticipants = () => {
    const e = {};
    if (!form.p1_name.trim()) e.p1_name = 'Participant 1 name is required';
    if (!form.p2_name.trim()) e.p2_name = 'Participant 2 name is required';
    if (!/^[0-9]{11}$/.test(form.p1_regno || '')) e.p1_regno = 'P1 regno must be 11 digits';
    if (!/^[0-9]{11}$/.test(form.p2_regno || '')) e.p2_regno = 'P2 regno must be 11 digits';
    if (!/^[6-9][0-9]{9}$/.test(form.p1_whatsapp || '')) e.p1_whatsapp = 'Enter valid P1 mobile';
    if (!/^[6-9][0-9]{9}$/.test(form.p2_whatsapp || '')) e.p2_whatsapp = 'Enter valid P2 mobile';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // server-side uniqueness checks for regnos/emails
  const checkDuplicateRegNos = async () => {
    const e = {};
    try {
      const r1 = form.p1_regno && form.p1_regno.trim();
      const r2 = form.p2_regno && form.p2_regno.trim();
      const regs = [r1, r2].filter(Boolean);
      if (!regs.length) return e;

      // build or-clause to check both p1_regno and p2_regno columns for either value
      const orParts = regs.flatMap(r => [`p1_regno.eq.${r}`, `p2_regno.eq.${r}`]).join(',');
      const { data, error } = await supabase.from(ML_REGISTRATIONS_TABLE).select('id,p1_regno,p2_regno').or(orParts);
      if (error) {
        console.error('Duplicate regno lookup failed', error);
        return e;
      }
      if (!data || !data.length) return e;

      // inspect returned rows to set specific field errors
      data.forEach(row => {
        if (r1 && (row.p1_regno === r1 || row.p2_regno === r1)) e.p1_regno = 'Registration number already used';
        if (r2 && (row.p1_regno === r2 || row.p2_regno === r2)) e.p2_regno = 'Registration number already used';
      });
      return e;
    } catch (ex) {
      console.error('checkDuplicateRegNos error', ex);
      return e;
    }
  };

  const checkDuplicateEmails = async () => {
    const e = {};
    try {
      const m1 = form.p1_email && form.p1_email.trim();
      const m2 = form.p2_email && form.p2_email.trim();
      const mails = [m1, m2].filter(Boolean);
      if (!mails.length) return e;

      const orParts = mails.flatMap(m => [`p1_email.eq.${m}`, `p2_email.eq.${m}`]).join(',');
      const { data, error } = await supabase.from(ML_REGISTRATIONS_TABLE).select('id,p1_email,p2_email').or(orParts);
      if (error) {
        console.error('Duplicate email lookup failed', error);
        return e;
      }
      if (!data || !data.length) return e;

      data.forEach(row => {
        if (m1 && (row.p1_email === m1 || row.p2_email === m1)) e.p1_email = 'Email already registered';
        if (m2 && (row.p1_email === m2 || row.p2_email === m2)) e.p2_email = 'Email already registered';
      });
      return e;
    } catch (ex) {
      console.error('checkDuplicateEmails error', ex);
      return e;
    }
  };

  // full validation including problem statement (used on final submit)
  const validateFull = () => {
    const ok = validateParticipants();
    const e = { ...errors };
    if (!form.problemStatement || !form.problemStatement.trim()) e.problemStatement = 'Please select a problem statement';
    setErrors(e);
    return ok && !e.problemStatement;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if ((name === 'p1_regno' || name === 'p2_regno') && value.length === 11) {
      const emailField = name === 'p1_regno' ? 'p1_email' : 'p2_email';
      setForm(f => ({ ...f, [emailField]: `${value}@klu.ac.in` }));
    }
  };

  const goNext = async (e) => {
    // validate basic participant fields before moving to next
    if (!validateParticipants()) return;
    setSubmitError('');
    setLoading(true);
    try {
      const dupRegs = await checkDuplicateRegNos();
      if (Object.keys(dupRegs).length) {
        setErrors(prev => ({ ...prev, ...dupRegs }));
        return;
      }
      // all good
      setStep(2);
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => setStep(1);

  // CSV upload feature removed — problem statements are loaded from bundled ps.csv or pS.xlsx

  const onSubmit = async (e) => {
  e.preventDefault();
  setSubmitError('');
  if (!validateFull()) return;
    setLoading(true);
    try {
      const saved = await saveRegistration(form);
      // generate acknowledgement numbers for both students (use returned row id when available)
      const base = (saved && saved.id) ? saved.id : Date.now();
      // if user supplied ack numbers on step 2, prefer those
      const ack1 = form.p1_ack && form.p1_ack.trim() ? form.p1_ack.trim() : `TS-${base}-S1-${form.p1_regno.slice(-4)}`;
      const ack2 = form.p2_ack && form.p2_ack.trim() ? form.p2_ack.trim() : `TS-${base}-S2-${form.p2_regno.slice(-4)}`;
      setAcknowledgements({ p1: ack1, p2: ack2 });
      // persist acknowledgement numbers back to the DB
      try {
        if (saved && saved.id) {
          await supabase.from(ML_REGISTRATIONS_TABLE).update({ p1_ack: ack1, p2_ack: ack2, problem_statement: form.problemStatement || null }).eq('id', saved.id);
        } else {
          // fallback: update by computed registration_number from the form
          const regNum = `${form.p1_regno || ''}_${form.p2_regno || ''}`;
          if (regNum) {
            await supabase.from(ML_REGISTRATIONS_TABLE).update({ p1_ack: ack1, p2_ack: ack2, problem_statement: form.problemStatement || null }).eq('registration_number', regNum);
          }
        }
      } catch (err) {
        console.error('Failed to update ack numbers in DB', err);
      }
      // Try to read back the ack values from the DB to ensure we display the authoritative values
      try {
        if (saved && saved.id) {
          const { data: refreshed, error: refreshErr } = await supabase.from(ML_REGISTRATIONS_TABLE).select('p1_ack, p2_ack').eq('id', saved.id).single();
          if (!refreshErr && refreshed) {
            setAcknowledgements({ p1: refreshed.p1_ack || ack1, p2: refreshed.p2_ack || ack2 });
          } else {
            // fallback to locally computed values
            setAcknowledgements({ p1: ack1, p2: ack2 });
          }
        } else {
          setAcknowledgements({ p1: ack1, p2: ack2 });
        }
      } catch (err) {
        console.error('Failed to read ack numbers from DB', err);
        setAcknowledgements({ p1: ack1, p2: ack2 });
      }
      // Do not re-fetch the full row after registration. We display a simple success confirmation.
      setSuccess(true);
      // Do not load or display XLSX after registration — keep confirmation concise
    } catch (err) {
      // log full error for debugging
      console.error('Registration error', err);

      // Build a friendlier, actionable message for the UI
      let friendly = 'Registration failed. See console for details.';
      try {
        if (err && typeof err === 'object') {
          // Supabase client sometimes returns { status, error, message }
          if (err.message) friendly = String(err.message);
          else if (err.error) friendly = String(err.error);
          else if (err.status) friendly = `Server responded with status ${err.status}`;
        } else if (typeof err === 'string') {
          friendly = err;
        }
      } catch (ex) {
        // fallback to default message
      }

      // Detect common SSL / network issues and add guidance
      const lower = String(friendly).toLowerCase();
      if (lower.includes('err_cert') || lower.includes('certificate') || lower.includes('ssl') || lower.includes('cert_authority')) {
        friendly += ' (Possible SSL/certificate issue — check VITE_SUPABASE_URL, system date/time, and any HTTPS-intercepting proxy/antivirus.)';
      } else if (lower.includes('400') || lower.includes('bad request')) {
        friendly += ' (Bad request from server — verify the Supabase table name and that RLS/policies allow inserts/selects.)';
      }

      setSubmitError(friendly);
    } finally {
      setLoading(false);
    }
  };

  // when success is true we render the success box within the normal layout

  return (
    <Section>
      <RetroGrid />
      <Center>
        <Title initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>TECH SPRINT</Title>
        <Subtitle>Register your team of two for TECH SPRINT and Select your Problem Statement.</Subtitle>

        {success && (
          <SuccessBox>
            <SuccessContent>
              <h3 style={{ margin: 0, textAlign: 'center' }}>🎉 Registered successfully</h3>

              <ProblemBox>
                <div style={{ fontWeight: 700, marginBottom: 6 }}>Selected Problem Statement</div>
                <div style={{ whiteSpace: 'pre-wrap' }}>{form.problemStatement}</div>
              </ProblemBox>

              {/* Acknowledgement numbers removed from the success confirmation per request */}

              <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: 8, textAlign: 'center' }}>
                If you have queries, reach out at <a href="mailto:gdsckare@klu.ac.in">gdsckare@klu.ac.in</a> and join our community.
              </div>

              <div style={{ marginTop: 12, textAlign: 'center' }}>
                <LinkButton to="/events">← Back to Events</LinkButton>
              </div>
            </SuccessContent>
          </SuccessBox>
        )}

        {!success && (
          <Card onSubmit={onSubmit}>

          <h4>Participant 1</h4>
          <Row>
            <Field>
              <Label>Full name</Label>
              <Input name="p1_name" value={form.p1_name} onChange={onChange} />
              {errors.p1_name && <Error>{errors.p1_name}</Error>}
            </Field>
            <Field>
              <Label>Reg. number</Label>
              <Input name="p1_regno" value={form.p1_regno} onChange={onChange} maxLength={11} />
              {errors.p1_regno && <Error>{errors.p1_regno}</Error>}
            </Field>
          </Row>

          <Row>
            <Field>
              <Label>WhatsApp</Label>
              <Input name="p1_whatsapp" value={form.p1_whatsapp} onChange={onChange} maxLength={10} />
              {errors.p1_whatsapp && <Error>{errors.p1_whatsapp}</Error>}
            </Field>
            <Field>
              <Label>Year</Label>
              <Select name="p1_year" value={form.p1_year} onChange={onChange}>
                <option value="">Select</option>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
              </Select>
            </Field>
          </Row>

          <Field>
            <Label>Department</Label>
            <Select name="p1_department" value={form.p1_department} onChange={onChange}>
              <option value="">Select</option>
              <option>Computer Science and Engineering</option>
              <option>Information Technology</option>
              <option>Electronics and Communication Engineering</option>
              <option>Other</option>
            </Select>
          </Field>

          <Field>
            <Label>College email</Label>
            <Input name="p1_email" value={form.p1_email} onChange={onChange} />
          </Field>
          

          <h4 style={{ marginTop: 12 }}>Participant 2</h4>
          <Row>
            <Field>

              <Label>Full name</Label>
              <Input name="p2_name" value={form.p2_name} onChange={onChange} />
              {errors.p2_name && <Error>{errors.p2_name}</Error>}
            </Field>
            <Field>
              <Label>Reg. number</Label>
              <Input name="p2_regno" value={form.p2_regno} onChange={onChange} maxLength={11} />
              {errors.p2_regno && <Error>{errors.p2_regno}</Error>}
            </Field>
          </Row>

          <Row>
            <Field>
              <Label>WhatsApp</Label>
              <Input name="p2_whatsapp" value={form.p2_whatsapp} onChange={onChange} maxLength={10} />
              {errors.p2_whatsapp && <Error>{errors.p2_whatsapp}</Error>}
            </Field>
            <Field>
              <Label>Year</Label>
              <Select name="p2_year" value={form.p2_year} onChange={onChange}>
                <option value="">Select</option>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
              </Select>
            </Field>
          </Row>

          <Field>
            <Label>Department</Label>
            <Select name="p2_department" value={form.p2_department} onChange={onChange}>
              <option value="">Select</option>
              <option>Computer Science and Engineering</option>
              <option>Information Technology</option>
              <option>Electronics and Communication Engineering</option>
              <option>Other</option>
            </Select>
          </Field>

          <Field>
            <Label>College email</Label>
            <Input name="p2_email" value={form.p2_email} onChange={onChange} />
          </Field>

          {submitError && <Error>{submitError}</Error>}

          {step === 1 && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8, marginTop: 12 }}>
              <Button type="button" onClick={goNext} whileHover={{ scale: 1.02 }} disabled={loading || success}>Next →</Button>
            </div>
          )}

          {step === 2 && (
            <div style={{ marginTop: 12 }}>
              <Field>
                <Label>Problem Statement</Label>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <Select name="problemStatement" value={form.problemStatement} onChange={onChange}>
                    <option value="">Select a problem statement</option>
                    {(csvOptions || []).map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </Select>
                  {/* file upload removed — options loaded from bundled ps.csv or pS.xlsx */}
                </div>
                {errors.problemStatement && <Error>{errors.problemStatement}</Error>}
              </Field>

              <div style={{ marginTop: 12 }}>
                <Field>
                  <Label>Acknowledgement (Student 1)</Label>
                  <Input name="p1_ack" value={form.p1_ack} onChange={onChange} />
                </Field>
                <Field>
                  <Label>Acknowledgement (Student 2)</Label>
                  <Input name="p2_ack" value={form.p2_ack} onChange={onChange} />
                </Field>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 12 }}>
                <Button type="button" onClick={goBack} whileHover={{ scale: 1.02 }} disabled={loading || success}>← Back</Button>
                <Button type="submit" whileHover={{ scale: 1.02 }} disabled={loading || success}>{loading ? 'Registering...' : success ? 'Registered' : 'Register Team'}</Button>
              </div>
            </div>
          )}

          {/* acknowledgement display moved to SuccessBox when registration succeeds */}
          
          </Card>
        )}

        {/* main submit buttons are inside the step blocks; no persistent submit here */}

        <div style={{ marginTop: 12, textAlign: 'center' }}>
          <Link to="/events">← Back to Events</Link>
        </div>
      </Center>
    </Section>
  );
}
