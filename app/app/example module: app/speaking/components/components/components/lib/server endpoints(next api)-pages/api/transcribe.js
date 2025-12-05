import formidable from 'formidable';
import fs from 'fs';

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  // parse multipart and get file buffer
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'Parse error' });
    // In production: send files.file to OpenAI Whisper or other STT.
    // For starter: return demo transcription
    return res.json({ text: 'Demo transcription — replace with Whisper call' });
  });
}
