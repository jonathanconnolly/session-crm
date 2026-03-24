'use client'
import { useState } from 'react'
type C={id:string,first_name:string,last_name:string,email:string,phone:string|null,total_bookings:number,total_spent:number,last_booked_at:string|null,tag:string|null}
export default function ClientsClient({clients}:{clients:C[]}){
const[s,setS]=useState('')
const[f,setF]=useState('all')
const[sel,setSel]=useState<C|null>(null)
const filt=clients.filter(c=>{
const n=(c.first_name+' '+c.last_name).toLowerCase()
const ms=n.includes(s.toLowerCase())||(c.email||'').toLowerCase().includes(s.toLowerCase())
const mf=f==='all'||(f==='booked'&&c.total_bookings>0)||(f==='not_booked'&&c.total_bookings===0)
return ms&&mf})
const fmt=(d:string|null)=>d?new Date(d).toLocaleDateString('en-US',{month:'short',year:'numeric'}):'Never'
const cell={padding:'13px 24px',fontSize:13} as React.CSSProperties
return(<div style={{display:'flex',height:'100vh',fontFamily:'system-ui',background:'#fff'}}>
<div style={{flex:1,overflowY:'auto'}}>
<div style={{padding:'24px 28px 0'}}>
<h1 style={{fontSize:22,fontWeight:700,margin:'0 0 16px'}}>Clients</h1>
<div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:8}}>
<div style={{display:'flex',gap:6}}>
{[['all','All clients'],['booked','Booked'],['not_booked','Not booked']].map(([v,l])=>(
<button key={v} onClick={()=>setF(v)} style={{padding:'7px 14px',border:'1px solid #E0E0E0',borderRadius:20,fontSize:13,fontWeight:500,cursor:'pointer',background:f===v?'#111':'#fff',color:f===v?'#fff':'#444'}}>{l}</button>
))}
</div>
<div style={{display:'flex',gap:8}}>
<input value={s} onChange={e=>setS(e.target.value)} placeholder="Search all clients" style={{padding:'8px 14px',border:'1px solid #E0E0E0',borderRadius:20,fontSize:13,outline:'none',width:200}}/>
<button style={{padding:'8px 16px',border:'1px solid #E0E0E0',borderRadius:20,fontSize:13,fontWeight:500,cursor:'pointer'}}>Export CSV</button>
</div></div>
<div style={{fontSize:13,color:'#888',marginBottom:4}}>{filt.length.toLocaleString()} total</div>
</div>
<table style={{width:'100%',borderCollapse:'collapse'}}>
<thead><tr style={{borderBottom:'1px solid #F0F0F0'}}>
{['Name','Email','Phone','Sessions','Total Spent','Last Booked'].map(col=>(
<th key={col} style={{...cell,textAlign:'left',fontWeight:600,color:'#888',fontSize:12}}>{col}</th>
))}</tr></thead>
<tbody>{filt.map(c=>(
<tr key={c.id} onClick={()=>setSel(c)} style={{borderBottom:'1px solid #F8F8F8',cursor:'pointer',background:sel?.id===c.id?'#FAFAFA':'transparent'}}>
<td style={cell}><div style={{display:'flex',alignItems:'center',gap:10}}>
<div style={{width:32,height:32,borderRadius:'50%',background:'#E8E0D6',display:'flex',alignItems:'center',justifyContent:'center',fontSize:13,fontWeight:700,color:'#666',flexShrink:0}}>{c.first_name?.[0]||'?'}</div>
<div><div style={{fontWeight:500}}>{c.first_name} {c.last_name}</div>
{c.total_bookings>=5&&c.tag==='booked'&&<span style={{fontSize:10,background:'#FFF3E0',color:'#E65100',padding:'1px 6px',borderRadius:8}}>VIP</span>}
</div></div></td>
<td style={{...cell,color:'#555'}}>{c.email}</td>
<td style={{...cell,color:'#555'}}>{c.phone||'--'}</td>
<td style={{...cell,color:'#555'}}>{c.total_bookings}</td>
<td style={{...cell,fontWeight:500}}>${(c.total_spent||0).toLocaleString()}</td>
<td style={{...cell,color:'#888'}}>{fmt(c.last_booked_at)}</td>
</tr>))}</tbody>
</table>
</div>
{sel&&(<div style={{width:300,borderLeft:'1px solid #EBEBEB',overflowY:'auto',flexShrink:0}}>
<div style={{padding:24}}>
<div style={{display:'flex',justifyContent:'flex-end',marginBottom:12}}>
<button onClick={()=>setSel(null)} style={{background:'none',border:'none',cursor:'pointer',fontSize:18,color:'#999'}}>x</button>
</div>
<div style={{display:'flex',alignItems:'center',gap:12,marginBottom:20,paddingBottom:16,borderBottom:'1px solid #F0F0F0'}}>
<div style={{width:48,height:48,borderRadius:'50%',background:'#E8E0D6',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,fontWeight:700,color:'#666'}}>{sel.first_name?.[0]||'?'}</div>
<div style={{flex:1}}><div style={{fontSize:15,fontWeight:700}}>{sel.first_name} {sel.last_name}</div>
<div style={{fontSize:12,color:'#888'}}>{sel.email}</div>
{sel.phone&&<div style={{fontSize:12,color:'#888'}}>{sel.phone}</div>}
</div></div>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:20}}>
{([['Sessions',sel.total_bookings],['Total spent','$'+(sel.total_spent||0).toLocaleString()],['Last booked',fmt(sel.last_booked_at)],['Tag',sel.tag||'none']] as [string,string|number][]).map(([l,v])=>(
<div key={l} style={{background:'#FAFAFA',borderRadius:8,padding:'10px 12px'}}>
<div style={{fontSize:11,color:'#888',marginBottom:2}}>{l}</div>
<div style={{fontSize:14,fontWeight:600}}>{v}</div>
</div>))}
</div>
<div><div style={{fontSize:13,fontWeight:600,marginBottom:8}}>Client notes</div>
<button style={{fontSize:13,color:'#888',background:'none',border:'1px dashed #E0E0E0',borderRadius:8,padding:'8px 12px',cursor:'pointer',width:'100%',textAlign:'left'}}>+ Add a note</button>
</div></div></div>)}
</div>)}