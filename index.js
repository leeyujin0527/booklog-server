require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', require('./src/routes/recommend'));
app.use('/api', require('./src/routes/briefing'));
app.use('/api', require('./src/routes/bookshelf'));
app.use('/api', require('./src/routes/auth'));

app.listen(3000, () => {
  console.log('서버 실행중 http://localhost:3000');
});