'use client'
import { useState } from 'react'
const MOCK_SESSIONS=[{id:1,title:'Dallas, TX',date:'Sat Mar 28',type:'Mini Session',booked:20,total:30,earnings:10217},{id:2,title:'Washington D.C.',date:'Sat Mar 28-29',type:'Mini Session',booked:21,total:30,earnings:8400},{id:3,title:'Long Beach, CA',date:'Sat Mar 28-29',type:'Mini Session',booked:21,total:30,earnings:9200}]
const MOCK_SLOTS=[{time:'8:00 AM',status:'reserved',client:null},{time:'8:20 AM',status:'reserved',client:null},{time:'8:40 AM',status:'reserved',client:null},{time:'9:00 AM',status:'booked',client:'Georgia and Mason'},{time:'9:20 AM',status:'booked',client:'Ashley Briggs'},{time:'9:40 AM',status:'reserved',client:null},{time:'10:00 AM',status:'booked',client:'Jessy Stainback'},{time:'10:20 AM',status:'booked',client:'Hillary Cooper',balanceDue:true},{time:'10:40 AM',status:'booked',client:'Adelaide Erickson'},{time:'11:00 AM',status:'booked',client:'Erika Garcia',balanceDue:true},{time:'11:20 AM',status:'open',client:null},{time:'11:40 AM',status:'open',client:null}]
const SC={booked:{bg:'#E8F5E9',text:'#2E7D32',label:'Booked'},reserved:{bg:'#E3F2FD',text:'#1565C0',label:'Reserved'},open:{bg:'#F5F5F5',text:'#757575',label:'Open'}}
type Props={sessions:any[],bookings:any[],slots:any[]}
export default function SessionsClient({sessions:ps,bookings,slots}:Props){
const[selected,setSelected]=useState(MOCK_SESSIONS[0])
const[slot,setSlot]=useState<any>(null)
return(
<div style={{display:'flex',height:'100vh',background:'#fff',fontFamily:'system-ui',overflow:'hidden'}}>
<div style={{width:280,borderRight:'1px solid #EBEBEB',display:'flex',flexDirection:'column',flexShrink:0}}>
<div style={{padding:'16px 16px 12px',borderBottom:'1px solid #EBEBEB'}}>
<div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12}}>
<span style={{fontSize:15,fontWeight:600}}>My sessions</span>
<button style={{background:'#111',color:'#fff',border:'none',borderRadius:20,padding:'6px 14px',fontSize:13,fontWeight:500,cursor:'pointer'}}>+ New</button>
</div>
<input placeholder="Search" style={{width:'100%',padding:'8px 10px',border:'1px solid #EBEBEB',borderRadius:8,fontSize:13,outline:'none',background:'#FAFAFA',boxSizing:'border-box'}}/>
<div style={{display:'flex',gap:6,marginTop:10}}>
{['upcoming','past'].map(t=>(<button key={t} style={{flex:1,padding:'7px 0',border:'1px solid #EBEBEB',borderRadius:8,fontSize:12,fontWeight:500,cursor:'pointer',background:t==='upcoming'?'#111':'#fff',color:t==='upcoming'?'#fff':'#666',textTransform:'capitalize'}}>{t==='upcoming'?'Upcoming 34':'Past 195'}</button>))}
</div></div>
<div style={{flex:1,overflowY:'auto'}}>
<div style={{padding:'10px 16px 4px',fontSize:11,color:'#999',fontWeight:600,textTransform:'uppercase'}}>March, 2026</div>
{MOCK_SESSIONS.map(s=>(<div key={s.id} onClick={()=>{setSelected(s);setSlot(null)}} style={{padding:'10px 16px',cursor:'pointer',background:selected?.id===s.id?'#F5F5F5':'transparent',borderLeft:selected?.id===s.id?'3px solid #111':'3px solid transparent'}}>
<div style={{display:'flex',gap:8}}>
<div style={{textAlign:'center',minWidth:32}}><div style={{fontSize:10,color:'#999',textTransform:'uppercase'}}>Sat</div><div style={{fontSize:16,fontWeight:700}}>28</div></div>
<div><div style={{fontSize:13,fontWeight:600}}>{s.title} • {s.date}</div><div style={{display:'flex',alignItems:'center',gap:4,marginTop:2}}><div style={{width:8,height:8,borderRadius:'50%',background:'#C4A882'}}/><span style={{fontSize:12,color:'#888'}}>{s.type}</span></div></div>
</div></div>))}
</div></div>
<div style={{flex:1,overflowY:'auto'}}>
{selected&&(<>
<div style={{padding:'20px 24px 0',borderBottom:'1px solid #EBEBEB'}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
<span style={{fontSize:11,fontWeight:600,color:'#22C55E',background:'#F0FDF4',border:'1px solid #BBF7D0',borderRadius:6,padding:'2px 8px'}}>Published</span>
<div style={{width:36,height:20,background:'#111',borderRadius:10,position:'relative',cursor:'pointer'}}><div style={{position:'absolute',right:3,top:3,width:14,height:14,background:'#fff',borderRadius:'50%'}}/></div>
</div>
<div style={{display:'flex',gap:8,marginBottom:12}}>
<div style={{flex:1,padding:'8px 12px',background:'#FAFAFA',border:'1px solid #EBEBEB',borderRadius:8,fontSize:12,color:'#888'}}>https://book.usesession.com/s/u_2rwtoe3T</div>
<button style={{padding:'8px 14px',border:'1px solid #EBEBEB',borderRadius:8,fontSize:12,cursor:'pointer'}}>Copy link</button>
</div>
<div style={{display:'flex',gap:16,marginBottom:12}}>
{[{label:'Earnings',value:'$'+selected.earnings.toLocaleString(),sub:'Future earnings +$1,780'},{label:'Bookings',value:selected.booked+'/'+selected.total},{label:'Views',value:'626'}].map(s=>(<div key={s.label} style={{flex:1,padding:'14px 16px',border:'1px solid #EBEBEB',borderRadius:10}}><div style={{fontSize:12,color:'#888',marginBottom:4}}>{s.label}</div><div style={{fontSize:22,fontWeight:700}}>{s.value}</div>{s.sub&&<div style={{fontSize:11,color:'#888'}}>{s.sub}</div>}</div>))}
</div>
<div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 0',borderTop:'1px solid #EBEBEB'}}>
<div style={{display:'flex',alignItems:'center',gap:8}}><span style={{fontSize:13}}>👥 Waitlist ON</span>{['Anton K','Bailey K','Jalisa V','Alexis C','Leah B'].map(n=>(<span key={n} style={{fontSize:12,color:'#555',background:'#F5F5F5',padding:'2px 8px',borderRadius:12}}>{n}</span>))}<span style={{fontSize:12,color:'#888'}}>+25 →</span></div>
<div style={{width:36,height:20,background:'#111',borderRadius:10,position:'relative'}}><div style={{position:'absolute',right:3,top:3,width:14,height:14,background:'#fff',borderRadius:'50%'}}/></div>
</div></div>
<div style={{padding:'16px 24px'}}>
<div style={{display:'flex',alignItems:'center',gap:6,marginBottom:4}}><span>📅</span><span style={{fontSize:14,fontWeight:600}}>Saturday, March 28, 2026</span></div>
<div style={{fontSize:12,color:'#888',marginBottom:16}}>15 minutes @ Lumen Room Design District Dallas, TX 75207</div>
{MOCK_SLOTS.map((sl,i)=>{const c=SC[sl.status as keyof typeof SC];return(<div key={i} onClick={()=>sl.client&&setSlot(sl)} style={{display:'flex',alignItems:'center',gap:12,padding:'10px 12px',borderRadius:8,cursor:sl.client?'pointer':'default',background:slot?.time===sl.time?'#F5F5F5':'transparent'}}>
<span style={{fontSize:13,color:'#666',width:70,flexShrink:0}}>{sl.time}</span>
<span style={{fontSize:12,fontWeight:500,padding:'3px 10px',borderRadius:12,background:c.bg,color:c.text}}>{sl.status==='booked'?'✓':sl.status==='reserved'?'✋':''} {c.label}</span>
{(sl as any).balanceDue&&<span style={{fontSize:11,padding:'3px 8px',borderRadius:12,background:'#FFF3E0',color:'#E65100'}}>Balance due</span>}
{sl.client&&<span style={{fontSize:13}}>{sl.client}</span>}
{sl.client&&<span style={{marginLeft:'auto',color:'#CCC'}}>›</span>}
</div>)})}
</div></>)}
</div>
<div style={{width:300,borderLeft:'1px solid #EBEBEB',overflowY:'auto',flexShrink:0}}>
{slot?(<div style={{padding:20}}>
<div style={{display:'flex',alignItems:'center',gap:8,marginBottom:16,paddingBottom:12,borderBottom:'1px solid #EBEBEB'}}>
<button onClick={()=>setSlot(null)} style={{background:'none',border:'none',cursor:'pointer',fontSize:16,color:'#888'}}>‹</button>
<span style={{fontSize:13,fontWeight:600}}>{slot.time} on Mar 28, 2026</span></div>
<div style={{display:'flex',alignItems:'center',gap:12,marginBottom:16}}>
<div style={{width:44,height:44,borderRadius:'50%',background:'#E0E0E0',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,fontWeight:700,color:'#555'}}>{slot.client?.[0]}</div>
<div style={{flex:1}}><div style={{fontSize:14,fontWeight:600}}>{slot.client}</div><div style={{fontSize:12,color:'#888'}}>gmason91@gmail.com</div><div style={{fontSize:12,color:'#888'}}>(479) 841-2899</div></div>
<div style={{textAlign:'right'}}><div style={{fontSize:11,color:'#888'}}>Session earnings</div><div style={{fontSize:20,fontWeight:700}}>$595</div></div></div>
<button style={{width:'100%',padding:'8px',border:'1px solid #EBEBEB',borderRadius:8,fontSize:13,cursor:'pointer',background:'#fff',marginBottom:16}}>View client file</button>
<div style={{fontSize:13,fontWeight:600,marginBottom:12}}>Booking details</div>
{[{icon:'📅',label:'Saturday, March 28th, 2026'},{icon:'📄',label:'PPU Agreement'},{icon:'📋',label:'Client responses'}].map((d,i)=>(<div key={i} style={{display:'flex',gap:8,marginBottom:8,fontSize:13}}><span>{d.icon}</span><span style={{color:'#444'}}>{d.label}</span></div>))}
{[{label:'Remainder',value:'Paid on Mar 23, 2026',amount:'$445'},{label:'Retainer',value:'Paid on Feb 25, 2026',amount:'$150'}].map((row,i)=>(<div key={i} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px 0',borderBottom:'1px solid #F5F5F5'}}>
<div><div style={{fontSize:12,color:'#888'}}>{row.label}</div><span style={{fontSize:11,background:'#E8F5E9',color:'#2E7D32',padding:'2px 8px',borderRadius:10}}>{row.value}</span></div>
<div style={{display:'flex',alignItems:'center',gap:4}}><span style={{fontSize:13,fontWeight:500}}>{row.amount}</span><span style={{color:'#CCC'}}>›</span></div></div>))}
</div>):(<div style={{padding:20}}>
<div style={{borderRadius:10,overflow:'hidden',marginBottom:16,background:'#111',height:160,display:'flex',alignItems:'flex-end',padding:12}}><span style={{color:'#fff',fontSize:18,fontWeight:800,letterSpacing:1}}>DALLAS, TX</span></div>
<div style={{fontSize:13,fontWeight:600,marginBottom:12}}>Session details</div>
{[{icon:'📅',text:'Saturday, March 28th, 2026'},{icon:'💳',text:'Total Fee: $595   Retainer: $150'},{icon:'📄',text:'PPU Agreement'},{icon:'📋',text:'PPU Questionnaire'}].map((d,i)=>(<div key={i} style={{display:'flex',gap:8,marginBottom:10,fontSize:13}}><span>{d.icon}</span><span style={{color:'#444'}}>{d.text}</span></div>))}
<button style={{width:'100%',padding:'9px',border:'1px solid #EBEBEB',borderRadius:8,fontSize:13,cursor:'pointer',marginTop:8}}>Edit session</button>
<div style={{marginTop:20}}><div style={{fontSize:13,fontWeight:600,marginBottom:8}}>Notes</div><button style={{fontSize:13,color:'#555',background:'none',border:'none',cursor:'pointer',padding:0}}>+ Add a note</button></div>
</div>)}
</div>
</div>)
}