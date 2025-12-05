export default function Nav(){
  return (
    <nav style={{background:'#fff', padding:12, borderBottom:'1px solid #eee'}}>
      <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div><a href="/" style={{fontWeight:700}}>PTE Portal</a></div>
        <div style={{display:'flex', gap:12}}>
          <a href="/speaking">Speaking</a>
          <a href="/listening">Listening</a>
          <a href="/reading">Reading</a>
          <a href="/writing">Writing</a>
          <a href="/mock-tests">Mock Tests</a>
        </div>
      </div>
    </nav>
  );
}
