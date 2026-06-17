const supabase = require('../clients/supabase');

const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  return data;
};

const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
};

const signOut = async (token) => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
  return { message: '로그아웃 완료' };
};

module.exports = { signUp, signIn, signOut };