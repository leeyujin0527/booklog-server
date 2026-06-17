const { getBookBriefing } = require('../services/briefingService');

const briefing = async (req, res) => {
  const { bookTitle } = req.params;
  try {
    const result = await getBookBriefing(bookTitle);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { briefing };