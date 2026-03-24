import { createClient } from '@/lib/supabase/server'
import ClientsClient from './ClientsClient'
export default async function ClientsPage() {
  const supabase = createClient()
  const { data: clients } = await supabase
    .from('clients').select('*')
    .order('first_name',{ascending:true}).limit(500)
  return <ClientsClient clients={clients||[]} />
}