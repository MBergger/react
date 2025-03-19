import express from 'express';
import mysql from 'mysql2/promise';
import path from 'path';

// Tuodaan tietokannan asetukset
import dbconfig from './dbconfig.json';

// Luodaan yhteysnippu (Connection Pool)
const pool = mysql.createPool(dbconfig);

// Luodaan Express-sovellus
const app = express();
const port = 3000;

// Asetetaan EJS-pohjaksi
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Palvelin käynnistyy
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Reitti, joka hakee kaikki palautteet tietokannasta
app.get('/feedback', async (req, res) => {
  let connection;
  try {
    // Haetaan yhteys yhteysnipusta
    connection = await pool.getConnection();
    
    // Suoritetaan SQL-kysely palautteiden hakemiseksi
    const [rows] = await connection.execute('SELECT * FROM feedback');

    // Renderöidään EJS-pohja, ja lähetetään tiedot näkymään
    res.render('feedback', { rows });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      await connection.release();  // Vapautetaan yhteys pooliin
    }
  }
});
