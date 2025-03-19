const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// Oletetaan, että datalayer.js tarjoaa meille tarvitsemasi datan ja funktiot
const dataLayer = require('./datalayer.js'); // tai oma tiedosto, jossa datan käsittely

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Reitti satunnaiselle meemille
app.get('/', (req, res) => {
  const randomMeme = dataLayer.getRandomMeme();
  res.render('index', { meme: randomMeme });
});

// Reitti peukutukseen
app.post('/rate', (req, res) => {
  const { memeId, rating } = req.body;
  dataLayer.rateMeme(memeId, rating); // Tähän lisätään peukutuksen käsittely
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
