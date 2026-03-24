import { createClient } from '@/lib/supabase/server'
import SessionsClient from './SessionsClient'
export default async function SessionsPage() {
  const supabase = createClient()
  return <SessionsClient sessions={[]} bookings={[]} slots={[]} />
}