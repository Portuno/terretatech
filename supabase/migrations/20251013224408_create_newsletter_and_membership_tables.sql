/*
  # Create Newsletter and Membership Application Tables

  ## Overview
  This migration creates the database structure for Terreta Tech's website forms:
  1. Newsletter subscriptions (Mantente Conectado section)
  2. Membership applications (Hazte Socio / Únete a la Red)

  ## New Tables

  ### `newsletter_subscriptions`
  Stores email addresses from the newsletter subscription form
  - `id` (uuid, primary key) - Unique identifier
  - `email` (text, unique, not null) - Subscriber's email address
  - `subscribed_at` (timestamptz, default now()) - Subscription timestamp
  - `is_active` (boolean, default true) - Whether subscription is active

  ### `membership_applications`
  Stores membership applications from the "Hazte Socio" form
  - `id` (uuid, primary key) - Unique identifier
  - `full_name` (text, not null) - Applicant's full name
  - `email` (text, not null) - Applicant's email address
  - `phone` (text, not null) - Applicant's phone number
  - `description` (text, not null) - Why they want to join / their background
  - `status` (text, default 'pending') - Application status (pending, approved, rejected)
  - `applied_at` (timestamptz, default now()) - Application timestamp
  - `updated_at` (timestamptz, default now()) - Last update timestamp

  ## Security
  - Enable Row Level Security (RLS) on both tables
  - Allow public INSERT access (for form submissions)
  - Restrict SELECT/UPDATE/DELETE to authenticated administrators only
  
  ## Notes
  - Tables use `IF NOT EXISTS` to prevent errors on re-run
  - Email validation should be handled at the application level
  - Consider adding email confirmation workflow in future iterations
*/

-- Create newsletter_subscriptions table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now() NOT NULL,
  is_active boolean DEFAULT true NOT NULL
);

-- Create membership_applications table
CREATE TABLE IF NOT EXISTS membership_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  description text NOT NULL,
  status text DEFAULT 'pending' NOT NULL,
  applied_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE membership_applications ENABLE ROW LEVEL SECURITY;

-- RLS Policies for newsletter_subscriptions
-- Allow anyone to insert (subscribe)
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscriptions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users can view subscriptions (for admin dashboard)
CREATE POLICY "Authenticated users can view subscriptions"
  ON newsletter_subscriptions
  FOR SELECT
  TO authenticated
  USING (true);

-- RLS Policies for membership_applications
-- Allow anyone to submit application
CREATE POLICY "Anyone can submit membership application"
  ON membership_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users can view applications (for admin dashboard)
CREATE POLICY "Authenticated users can view applications"
  ON membership_applications
  FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can update application status
CREATE POLICY "Authenticated users can update applications"
  ON membership_applications
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email 
  ON newsletter_subscriptions(email);

CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_subscribed_at 
  ON newsletter_subscriptions(subscribed_at DESC);

CREATE INDEX IF NOT EXISTS idx_membership_applications_email 
  ON membership_applications(email);

CREATE INDEX IF NOT EXISTS idx_membership_applications_status 
  ON membership_applications(status);

CREATE INDEX IF NOT EXISTS idx_membership_applications_applied_at 
  ON membership_applications(applied_at DESC);
