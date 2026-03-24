'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
const NAV=[{href:'/dashboard/sessions',icon:'📅',label:'Sessions'},{href:'/dashboard/calendar',icon:'🗓',label:'Calendar'},{href:'/dashboard/board',icon:'📋',label:'Board'},{href:'/dashboard/clients',icon:'👥',label:'Clients'}]
const MANAGE=[{href:'/dashboard/manage/account',icon:'👤',label:'Account'},{href:'/dashboard/manage/session-types',icon:'📷',label:'Session types'},{href:'/dashboard/manage/contracts',icon:'📄',label:'Contracts'},{href:'/dashboard/manage/payments',icon:'💳',label:'Payments'},{href:'/dashboard/manage/emails',icon:'✉',label:'Emails'},{href:'/dashboard/manage/booking-site',icon:'🌐',label:'Booking site'}]
export default function DashboardLayout({children}:{children:React.ReactNode}){
const path=usePathname()
const [open,setOpen]=useState(path.includes('/manage'))
const lk=(href:string)=>({display:'flex',alignItems:'center',gap:10,padding:'8px 14px',borderRadius:8,fontSize:14,fontWeight:500,textDecoration:'none',color:path===href?'#111':'#666',background:path===href?'#F5F5F5':'transparent'} as React.CSSProperties)
return(
<div style={{display:'flex',height:'100vh',fontFamily:'system-ui'}}>
<div style={{width:210,background:'#fff',borderRight:'1px solid #EBEBEB',display:'flex',flexDirection:'column',flexShrink:0,overflowY:'auto'}}>
<div style={{padding:'18px 16px 12px',borderBottom:'1px solid #EBEBEB',marginBottom:6}}>
<div style={{display:'flex',alignItems:'center',gap:10}}>
<div style={{width:30,height:30,background:'#111',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}>
<span style={{color:'#fff',fontSize:14}}>✦</span></div>
<div><div style={{fontSize:14,fontWeight:700}}>Session</div><div style={{fontSize:11,color:'#888'}}>Photography CRM</div></div>
</div></div>
<div style={{padding:'6px 10px'}}>
{NAV.map(item=>(<Link key={item.href} href={item.href} style={lk(item.href)}><span style={{fontSize:15}}>{item.icon}</span>{item.label}</Link>))}
</div>
<div style={{padding:'4px 10px'}}>
<button onClick={()=>setOpen(!open)} style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%',padding:'8px 14px',borderRadius:8,fontSize:14,fontWeight:600,color:'#444',background:'none',border:'none',cursor:'pointer'}}>
<span>Manage</span><span style={{fontSize:11,color:'#999'}}>{open?'▴':'▾'}</span></button>
{open&&MANAGE.map(item=>(<Link key={item.href} href={item.href} style={lk(item.href)}><span style={{fontSize:13}}>{item.icon}</span>{item.label}</Link>))}
</div>
<div style={{marginTop:'auto',padding:'12px 10px',borderTop:'1px solid #EBEBEB'}}>
<div style={{display:'flex',alignItems:'center',gap:8,padding:'8px 14px'}}>
<div style={{width:30,height:30,borderRadius:'50%',background:'#E8E0D6',display:'flex',alignItems:'center',justifyContent:'center',fontSize:13,fontWeight:700,color:'#666'}}>J</div>
<div><div style={{fontSize:13,fontWeight:600}}>Jonathan</div><div style={{fontSize:11,color:'#888'}}>Golden Hour Photo</div></div>
</div>
<Link href="/auth/logout" style={{display:'flex',alignItems:'center',gap:8,padding:'8px 14px',borderRadius:8,fontSize:13,color:'#888',textDecoration:'none'}}>↩ Sign out</Link>
</div>
</div>
<div style={{flex:1,overflow:'hidden',display:'flex',flexDirection:'column'}}>{children}</div>
</div>)
}