const supabase = require('../clients/supabase');

const getBookshelf = async (userId) => {
  const { data, error } = await supabase.from('book').select('*').eq('user_id', userId);
  if (error) throw error;

  return {
    want: data.filter(b => b.status === 'want'),
    reading: data.filter(b => b.status === 'reading'),
    done: data.filter(b => b.status === 'done')
  };
};

const addBook = async (title, author, status, userId) => {
  const { data, error } = await supabase.from('book').insert([{ title, author, status, user_id: userId }]).select();
  if (error) throw error;
  return data[0];
};

const updateStatus = async (id, status) => {
  const { data, error } = await supabase.from('book').update({ status }).eq('id', id).select();
  if (error) throw error;
  return data[0];
};

const updateReview = async (id, review) => {
  const { data, error } = await supabase.from('book').update({ review }).eq('id', id).select();
  if (error) throw error;
  return data[0];
};

const deleteBook = async (id) => {
  const { error } = await supabase.from('book').delete().eq('id', id);
  if (error) throw error;
  return { message: '삭제 완료' };
};

module.exports = { getBookshelf, addBook, updateStatus, updateReview, deleteBook };