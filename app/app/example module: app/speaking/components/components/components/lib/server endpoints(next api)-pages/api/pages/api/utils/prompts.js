export const speakingPrompt = (transcript, question) => `
You are an experienced PTE rater.
Question: ${question}
Transcript: ${transcript}
Return JSON { "fluency":0-9, "pronunciation":0-9, "content":0-9, "overall":0-9, "feedback":"..." }
`;
