const axios = require('axios');

exports.translateWithOpenAI = async (text, lang) => {
  const prompt = `Traduza o seguinte conteúdo para ${lang}, mantendo o tom profissional:\n\n"${text}"`;

  const response = await axios.post("https://api.openai.com/v1/chat/completions", {
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }]
  }, {
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    }
  });

  return response.data.choices[0].message.content.trim();
};
