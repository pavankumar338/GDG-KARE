# Supabase Setup for ML Event Registration

## 1. Database Table Schema

Run this SQL in your Supabase SQL editor to create the `ml-registrations` table:

```sql
-- Create the ml-registrations table
CREATE TABLE IF NOT EXISTS "ml-registrations" (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  registration_number VARCHAR(50) NOT NULL UNIQUE,
  whatsapp_number VARCHAR(15) NOT NULL,
  year_of_study VARCHAR(20) NOT NULL,
  department TEXT NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  transaction_id VARCHAR(100) NOT NULL,
  screenshot_url TEXT,
  registration_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_ml_reg_email ON "ml-registrations"(email);
CREATE INDEX IF NOT EXISTS idx_ml_reg_regno ON "ml-registrations"(registration_number);
CREATE INDEX IF NOT EXISTS idx_ml_reg_status ON "ml-registrations"(status);
CREATE INDEX IF NOT EXISTS idx_ml_reg_created_at ON "ml-registrations"(created_at);

-- Add RLS (Row Level Security) policies
ALTER TABLE "ml-registrations" ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for registration)
CREATE POLICY "Allow public registration" ON "ml-registrations"
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- Allow authenticated users to read their own data
CREATE POLICY "Users can view own registration" ON "ml-registrations"
  FOR SELECT TO authenticated
  USING (auth.jwt() ->> 'email' = email);

-- Allow admin users to read all data (you'll need to set up admin role)
CREATE POLICY "Admin can view all registrations" ON "ml-registrations"
  FOR ALL TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.users.id = auth.uid() 
      AND auth.users.raw_user_meta_data ->> 'role' = 'admin'
    )
  );
```

## 2. Storage Bucket Setup

Create a storage bucket for screenshot uploads:

```sql
-- Create storage bucket for ML event files
INSERT INTO storage.buckets (id, name, public)
VALUES ('ml-event-files', 'ml-event-files', true);

-- Allow public access to upload files
CREATE POLICY "Allow public upload" ON storage.objects
  FOR INSERT TO anon, authenticated
  WITH CHECK (bucket_id = 'ml-event-files');

-- Allow public access to view files
CREATE POLICY "Allow public access" ON storage.objects
  FOR SELECT TO anon, authenticated
  USING (bucket_id = 'ml-event-files');
```

## 3. Environment Variables

Add these to your `.env.local` file:

```env
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## 4. Install Supabase Client (if not already installed)

```bash
npm install @supabase/supabase-js
```

## 5. Features Implemented

✅ **Database Integration:**
- Stores all registration form data
- Handles file uploads for payment screenshots
- Unique constraints on email and registration number
- Timestamps for audit trail

✅ **File Storage:**
- Screenshots stored in Supabase Storage
- Public URLs generated for access
- Organized folder structure

✅ **Error Handling:**
- Specific error messages for different failure types
- Handles duplicate registrations
- Network error handling

✅ **Security:**
- Row Level Security enabled
- Public registration allowed
- Admin access controls

## 6. Data Structure

The registration data stored includes:
- Personal Information (name, email, registration number)
- Academic Details (year, department)
- Contact (WhatsApp number)
- Payment Information (transaction ID, screenshot URL)
- Metadata (registration date, status)

## 7. Admin Dashboard Query

To view all registrations as an admin:

```sql
SELECT 
  id,
  name,
  registration_number,
  email,
  department,
  year_of_study,
  whatsapp_number,
  transaction_id,
  status,
  registration_date,
  screenshot_url
FROM "ml-registrations"
ORDER BY registration_date DESC;
```

## 8. Status Management

You can update registration status:

```sql
-- Approve a registration
UPDATE "ml-registrations" 
SET status = 'approved', updated_at = NOW()
WHERE registration_number = '99230304050';

-- Reject a registration
UPDATE "ml-registrations" 
SET status = 'rejected', updated_at = NOW()
WHERE registration_number = '99230304050';
```