export default function QuestionCard({ q }) {
  return (
    <div style={{ marginTop:12 }}>
      <h4>{q.id}</h4>
      <p>{q.text}</p>
    </div>
  );
}
