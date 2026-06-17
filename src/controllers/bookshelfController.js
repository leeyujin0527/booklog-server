const { getBookshelf, addBook, updateStatus, updateReview, deleteBook } = require('../services/bookshelfService');

const getBooks = async (req, res) => {
  try {
    const result = await getBookshelf(req.user.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addNewBook = async (req, res) => {
  const { title, author, status } = req.body;
  try {
    const result = await addBook(title, author, status, req.user.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const changeStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const result = await updateStatus(id, status);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const writeReview = async (req, res) => {
  const { id } = req.params;
  const { review } = req.body;
  try {
    const result = await updateReview(id, review);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const removeBook = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteBook(id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getBooks, addNewBook, changeStatus, writeReview, removeBook };