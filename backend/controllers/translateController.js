const { translateWithOpenAI } = require('../services/openaiService');

exports.translateText = async (req, res) => {
  const { text, targetLang } = req.body;

  try {
    const translated = await translateWithOpenAI(text, targetLang || 'en');
    res.json({ translated });
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
};
