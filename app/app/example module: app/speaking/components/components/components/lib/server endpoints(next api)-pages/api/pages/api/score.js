import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { transcript, taskType, question } = req.body;
  // In production: call OpenAI ChatCompletion with prompts (server side)
  // Example demo response:
  const demo = { fluency:7, pronunciation:6.5, content:7, overall:7, feedback:'Good. Work on pronunciation clarity.' };
  return res.json(demo);
}
