const { getRecommendBooks } = require('../services/recommendService');

const recommend = async (req, res) => {
  const { message } = req.body;
  try {
    const result = await getRecommendBooks(message);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { recommend };