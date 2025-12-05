'use client';
import { useRef, useState } from 'react';

export default function Recorder({ onRecorded }) {
  const ref = useRef(null);
  const [recording, setRecording] = useState(false);
  const [url, setUrl] = useState(null);

  const start = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mr = new MediaRecorder(stream);
    ref.current = { mr, chunks: [] };
    mr.ondataavailable = (e) => ref.current.chunks.push(e.data);
    mr.onstop = () => {
      const blob = new Blob(ref.current.chunks, { type: 'audio/webm' });
      const u = URL.createObjectURL(blob);
      setUrl(u);
      onRecorded && onRecorded(blob);
    };
    mr.start(); setRecording(true);
  };

  const stop = () => { ref.current.mr.stop(); setRecording(false); };

  return (
    <div style={{ marginTop:12 }}>
      <button onClick={ recording ? stop : start }>{ recording ? 'Stop' : 'Record' }</button>
      { url && <audio src={url} controls style={{ display:'block', marginTop:8 }} /> }
    </div>
  );
}
