'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
export default function LoginPage() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [tab,setTab]=useState('signin')
  const [error,setError]=useState('')
  const [loading,setLoading]=useState(false)
  const router=useRouter()
  const supabase=createClient()
  const handle=async(e:React.FormEvent)=>{
    e.preventDefault();setLoading(true);setError('')
    const fn=tab==='signin'?supabase.auth.signInWithPassword:supabase.auth.signUp
    const{error:err}=await fn({email,password})
    if(err){setError(err.message);setLoading(false)}
    else router.push('/dashboard/sessions')
  }
  return(<div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#F9F7F4',fontFamily:'system-ui'}}><div style={{background:'#fff',borderRadius:16,padding:'40px 36px',width:340,boxShadow:'0 4px 24px rgba(0,0,0,0.08)'}}><div style={{textAlign:'center',marginBottom:28}}><div style={{fontSize:24,fontWeight:800,letterSpacing:-0.5}}>Session <span style={{color:'#C4A882'}}>✦</span></div><div style={{fontSize:13,color:'#888',marginTop:4}}>Photography CRM</div></div><div style={{display:'flex',background:'#F5F5F5',borderRadius:8,padding:3,marginBottom:24}}>{['signin','signup'].map(t=>(<button key={t} onClick={()=>setTab(t)} style={{flex:1,padding:'8px 0',border:'none',borderRadius:6,fontSize:13,fontWeight:500,cursor:'pointer',background:tab===t?'#fff':'transparent',color:tab===t?'#111':'#888'}}>{t==='signin'?'Sign In':'Sign Up'}</button>))}</div><form onSubmit={handle}><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" required style={{width:'100%',padding:'10px 12px',border:'1px solid #E0E0E0',borderRadius:8,fontSize:14,marginBottom:10,outline:'none',boxSizing:'border-box'}}/><input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" required style={{width:'100%',padding:'10px 12px',border:'1px solid #E0E0E0',borderRadius:8,fontSize:14,marginBottom:16,outline:'none',boxSizing:'border-box'}}/>{error&&<div style={{color:'#E53935',fontSize:12,marginBottom:12}}>{error}</div>}<button type="submit" disabled={loading} style={{width:'100%',padding:'11px',background:'#C4A882',color:'#fff',border:'none',borderRadius:8,fontSize:14,fontWeight:600,cursor:'pointer'}}>{loading?'...':(tab==='signin'?'Sign In →':'Sign Up →')}</button></form></div></div>)
}