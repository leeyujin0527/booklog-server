const express = require('express');
const router = express.Router();
const { getBooks, addNewBook, changeStatus, writeReview, removeBook } = require('../controllers/bookshelfController');
const authMiddleware = require('../middleware/auth');

router.get('/bookshelf', authMiddleware, getBooks);
router.post('/bookshelf', authMiddleware, addNewBook);
router.patch('/bookshelf/:id', authMiddleware, changeStatus);
router.patch('/bookshelf/:id/review', authMiddleware, writeReview);
router.delete('/bookshelf/:id', authMiddleware, removeBook);

module.exports = router;