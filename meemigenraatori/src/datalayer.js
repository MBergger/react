const fs = require('fs');
const path = require('path');

// Ladataan meme-data (json-tiedosto)
const memes = JSON.parse(fs.readFileSync(path.join(__dirname, 'captions.json')));

// Funktio satunnaisen meemikuvaan ja tekstiin
function getRandomMeme() {
  const randomIndex = Math.floor(Math.random() * memes.length);
  return memes[randomIndex];
}

// Funktio peukutusten tallentamiseen
function rateMeme(memeId, rating) {
  const meme = memes.find(m => m.id === memeId);
  if (meme) {
    if (rating === 'up') {
      meme.likes++;
    } else {
      meme.dislikes++;
    }
    fs.writeFileSync(path.join(__dirname, 'captions.json'), JSON.stringify(memes, null, 2));
  }
}

// Funktio tekstin lisäämiseen meemille
function addCaption(memeId, newCaption) {
  const meme = memes.find(m => m.id === memeId);
  if (meme) {
    meme.caption = newCaption;
    fs.writeFileSync(path.join(__dirname, 'captions.json'), JSON.stringify(memes, null, 2));
  }
}

module.exports = { getRandomMeme, rateMeme, addCaption };
