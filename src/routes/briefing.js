const express = require('express');
const router = express.Router();
const { briefing } = require('../controllers/briefingController');

router.get('/briefing/:bookTitle', briefing);

module.exports = router;