export default function Home() {
  return (
    <div className="container">
      <div className="card">
        <h1>PTE Practice Portal</h1>
        <p>Practice Speaking, Listening, Reading and Writing — mock tests, sessions, AI scoring.</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:16, marginTop:20 }}>
          <a className="card" href="/speaking">Speaking Module</a>
          <a className="card" href="/listening">Listening Module</a>
          <a className="card" href="/reading">Reading Module</a>
          <a className="card" href="/writing">Writing Module</a>
          <a className="card" href="/mock-tests">Mock Tests</a>
        </div>
      </div>
    </div>
  );
}
