const bodyParser = require('body-parser');
const express = require('express');

const app = express();
require('dotenv').config();

const news = require('./routes/api/news');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.SERVER_PORT || '9001';
// const API_KEY = process.env.API_KEY || 'NO_API_KEY_FOUND';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // CORS
  next();
});

app.use('/api/news', news);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // eslint-disable-line no-console
