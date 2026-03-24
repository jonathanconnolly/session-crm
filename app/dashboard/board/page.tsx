'use client'
export default function BoardPage(){
const PAST=[{id:1,t:'Charlotte, NC - Mar 21-22',d:'Mar 22, 2025',s:19},{id:2,t:'Hoboken, NJ - Mar 21-22',d:'Mar 22, 2025',s:19},{id:3,t:'Charlotte, NC - Mar 21-22',d:'Mar 21, 2025',s:21},{id:4,t:'Garden City, NY - Mar 14-15',d:'Mar 15, 2025',s:20}]
const PLAN=[{id:5,t:'Natalie Whitener - Greenville, SC',d:'May 31, 2025 9:00 AM',type:'Mini Session'}]
return(<div style={{display:'flex',flexDirection:'column',height:'100vh',fontFamily:'system-ui',background:'#F9F9F9'}}>
<div style={{padding:'20px 24px',borderBottom:'1px solid #EBEBEB',background:'#fff'}}><h1 style={{fontSize:22,fontWeight:700,margin:0}}>Board</h1></div>
<div style={{flex:1,overflowX:'auto',padding:24,display:'flex',gap:16,alignItems:'flex-start'}}>
<div style={{width:300,flexShrink:0}}><div style={{marginBottom:12,fontSize:14,fontWeight:600,color:'#444'}}>Past sessions</div>
<div style={{display:'flex',flexDirection:'column',gap:8}}>{PAST.map(c=>(<div key={c.id} style={{background:'#fff',borderRadius:10,padding:'12px 14px',border:'1px solid #EBEBEB',opacity:0.6}}><div style={{fontSize:13,fontWeight:600,marginBottom:4}}>{c.t}</div><div style={{fontSize:12,color:'#888'}}>{c.d}</div><div style={{fontSize:12,color:'#888',marginTop:2}}>{c.s} spots</div></div>))}</div></div>
<div style={{width:300,flexShrink:0}}><div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12}}><span style={{fontSize:14,fontWeight:600,color:'#444'}}>Planning</span><button style={{background:'none',border:'none',cursor:'pointer',color:'#999',fontSize:18}}>...</button></div>
<div style={{display:'flex',flexDirection:'column',gap:8}}>{PLAN.map(c=>(<div key={c.id} style={{background:'#fff',borderRadius:10,padding:'12px 14px',border:'1px solid #EBEBEB'}}><div style={{fontSize:13,fontWeight:600,marginBottom:4}}>{c.t}</div><div style={{fontSize:12,color:'#888'}}>{c.d}</div><div style={{display:'flex',alignItems:'center',gap:4,marginTop:4}}><div style={{width:8,height:8,borderRadius:'50%',background:'#C4A882'}}/><span style={{fontSize:11,color:'#888'}}>{c.type}</span></div></div>))}</div></div>
<div style={width:300,flexShrink:0}}><button style={{width:'100%',padding:'12px 0',border:'2px dashed #E0E0E0',borderRadius:10,background:'none',cursor:'pointer',fontSize:13,color:'#888',fontWeight:500}}>+ Add column</button></div>
</div></div>)}