const { signUp, signIn, signOut } = require('../services/authService');

const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await signUp(email, password);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await signIn(email, password);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const logout = async (req, res) => {
  try {
    const result = await signOut();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { register, login, logout };