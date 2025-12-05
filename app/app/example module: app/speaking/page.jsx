import QuestionCard from '../../components/QuestionCard';
import Recorder from '../../components/Recorder';

export default function Speaking() {
  // demo question (replace with Firestore fetch)
  const q = { id:'q_s_0001', text: 'Describe a memorable trip you had.' };

  return (
    <div className="container">
      <div className="card">
        <h2>Speaking — Practice</h2>
        <QuestionCard q={q} />
        <Recorder />
        <p style={{marginTop:12}}>After recording click <button>Submit</button> to get AI score (server-side).</p>
      </div>
    </div>
  );
}
