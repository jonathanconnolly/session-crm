'use client'
import { useState } from 'react'
import Link from 'next/link'
const SESSIONS=[{id:1,title:'Dallas, TX',date:'2026-03-28',type:'Mini Session',booked:20,total:30},{id:2,title:'Washington D.C.',date:'2026-03-28',type:'Mini Session',booked:21,total:30},{id:3,title:'Long Beach, CA',date:'2026-03-28',type:'Mini Session',booked:21,total:30},{id:4,title:'Fort Worth, TX',date:'2026-03-29',type:'Mini Session',booked:18,total:25},{id:5,title:'Washington D.C.',date:'2026-03-29',type:'Mini Session',booked:19,total:30},{id:6,title:'Long Beach, CA',date:'2026-03-29',type:'Mini Session',booked:21,total:30},{id:7,title:'Phoenix, AZ',date:'2026-04-11',type:'Mini Session',booked:15,total:30},{id:8,title:'Chicago, IL',date:'2026-04-18',type:'Mini Session',booked:22,total:30}]
const MONTHS=['January','February','March','April','May','June','July','August','September','October','November','December']
export default function CalendarPage() {
  const now=new Date()
  const [yr,setYr]=useState(2026)
  const [mo,setMo]=useState(2)
  const firstDay=new Date(yr,mo,1).getDay()
  const dim=new Date(yr,mo+1,0).getDate()
  const dip=new Date(yr,mo,0).getDate()
  const prev=()=>{if(mo===0){setMo(11);setYr(y=>y-1)}else setMo(m=>m-1)}
  const next=()=>{if(mo===11){setMo(0);setYr(y=>y+1)}else setMo(m=>m+1)}
  const forDay=(d:number)=>{const s=yr+'-'+String(mo+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');return SESSIONS.filter(x=>x.date===s)}
  const cells:{day:number,cur:boolean}[]=[]
  for(let i=firstDay-1;i>=0;i--)cells.push({day:dip-i,cur:false})
  for(let i=1;i<=dim;i++)cells.push({day:i,cur:true})
  for(let i=1;i<=42-cells.length;i++)cells.push({day:i,cur:false})
  const isToday=(d:number)=>d===now.getDate()&&mo===now.getMonth()&&yr===now.getFullYear()
  return(
    <div style={{display:'flex',flexDirection:'column',height:'100vh',background:'#fff',fontFamily:'system-ui'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'20px 28px 16px',borderBottom:'1px solid #EBEBEB'}}>
        <div style={{display:'flex',alignItems:'center',gap:16}}>
          <h1 style={{fontSize:22,fontWeight:700,margin:0}}>{MONTHS[mo]} {yr}</h1>
          <div style={{display:'flex',gap:4}}>
            <button onClick={prev} style={{width:30,height:30,borderRadius:'50%',border:'1px solid #E0E0E0',background:'#fff',cursor:'pointer',fontSize:16,display:'flex',alignItems:'center',justifyContent:'center'}}>&#8249;</button>
            <button onClick={()=>{setMo(now.getMonth());setYr(now.getFullYear())}} style={{padding:'5px 12px',border:'1px solid #E0E0E0',borderRadius:16,background:'#fff',cursor:'pointer',fontSize:13,fontWeight:500}}>Today</button>
            <button onClick={next} style={{width:30,height:30,borderRadius:'50%',border:'1px solid #E0E0E0',background:'#fff',cursor:'pointer',fontSize:16,display:'flex',alignItems:'center',justifyContent:'center'}}>&#8250;</button>
          </div>
        </div>
        <div style={{display:'flex',gap:8}}>
          <button style={{padding:'8px 16px',border:'1px solid #E0E0E0',borderRadius:8,background:'#fff',cursor:'pointer',fontSize:13,fontWeight:500}}>Edit availability</button>
          <button style={{padding:'8px 16px',border:'1px solid #E0E0E0',borderRadius:8,background:'#fff',cursor:'pointer',fontSize:13,fontWeight:500}}>Block off time</button>
        </div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',borderBottom:'1px solid #EBEBEB'}}>
        {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d=>(<div key={d} style={{padding:'8px 0',textAlign:'center',fontSize:12,fontWeight:600,color:'#888'}}>{d}</div>))}
      </div>
      <div style={{flex:1,display:'grid',gridTemplateColumns:'repeat(7,1fr)',gridTemplateRows:'repeat(6,1fr)',overflow:'hidden'}}>
        {cells.map((c,i)=>{
          const sessions=c.cur?forDay(c.day):[]
          const tod=c.cur&&isToday(c.day)
          return(<div key={i} style={{borderRight:'1px solid #F5F5F5',borderBottom:'1px solid #F5F5F5',padding:'8px 6px',overflow:'hidden',background:c.cur?'#fff':'#FAFAFA'}}>
            <div style={{marginBottom:4}}><span style={{fontSize:13,fontWeight:500,color:!c.cur?'#CCC':tod?'#fff':'#333',background:tod?'#111':'transparent',width:24,height:24,borderRadius:'50%',display:'inline-flex',alignItems:'center',justifyContent:'center'}}>{c.day}</span></div>
            {sessions.slice(0,3).map(s=>(<Link key={s.id} href='/dashboard/sessions' style={{textDecoration:'none'}}><div style={{background:'#F9F5F0',border:'1px solid #EDE5D8',borderRadius:6,padding:'4px 6px',marginBottom:3}}><div style={{fontSize:11,fontWeight:600,color:'#333',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{s.title}</div><div style={{display:'flex',alignItems:'center',gap:4,marginTop:1}}><div style={{width:6,height:6,borderRadius:'50%',background:'#C4A882',flexShrink:0}}/><span style={{fontSize:10,color:'#888'}}>{s.type}</span></div><div style={{fontSize:10,fontWeight:600,color:'#555',marginTop:1}}>{s.booked}/{s.total}</div></div></Link>))}
            {sessions.length>3&&<div style={{fontSize:10,color:'#888'}}>+{sessions.length-3} more</div>}
          </div>)
        })}
      </div>
    </div>
  )
}