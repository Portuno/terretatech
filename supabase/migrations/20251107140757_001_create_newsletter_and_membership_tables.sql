/*
  # Create Newsletter and Membership Tables

  1. New Tables
    - `newsletter_subscriptions`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `membership_applications`
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `email` (text)
      - `phone` (text)
      - `description` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add public read policies for admins (can be modified based on auth requirements)
    - Public can insert their own records
*/

CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS membership_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  description text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE membership_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert newsletter subscription"
  ON newsletter_subscriptions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can view newsletter subscriptions"
  ON newsletter_subscriptions
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can insert membership application"
  ON membership_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can view membership applications"
  ON membership_applications
  FOR SELECT
  TO anon, authenticated
  USING (true);
