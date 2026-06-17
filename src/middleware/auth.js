const supabase = require('../clients/supabase');

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: '토큰이 없어요!' });

  const { data, error } = await supabase.auth.getUser(token);
  if (error) return res.status(401).json({ error: '인증 실패!' });

  req.user = data.user;
  next();
};

module.exports = authMiddleware;