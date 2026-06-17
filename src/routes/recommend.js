const express = require('express');
const router = express.Router();
const { recommend } = require('../controllers/recommendController');

router.post('/recommend', recommend);

module.exports = router;