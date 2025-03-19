import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", (req, res) => {
    const generations = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    res.render("index", { generations });
});


app.get("/sukupolvi/:numero", async (req, res) => {
    try {
        const numero = req.params.numero;
        const vastaus = await fetch(`https://pokeapi.co/api/v2/generation/${numero}/`);
        const data = await vastaus.json();

        const pokemonit = data.pokemon_species.map(pokemon => ({
            nimi: pokemon.name,
            url: `/pokemon/${pokemon.name}`
        }));

        res.render("generation", { numero, pokemonit });
    } catch (error) {
        res.status(500).send("Virhe haettaessa tietoja.");
    }
});

app.get("/pokemon/:nimi", async (req, res) => {
    try {
        const nimi = req.params.nimi;
        const vastaus = await fetch(`https://pokeapi.co/api/v2/pokemon/${nimi}/`);
        
        if (!vastaus.ok) {
            return res.status(404).send("Pokemonia ei löytynyt.");
        }

        const data = await vastaus.json();

        const pokemon = {
            nimi: data.name,
            kuva: data.sprites.other["official-artwork"].front_default,
            tyypit: data.types.map(t => t.type.name),
            stats: data.stats.map(stat => ({
                nimi: stat.stat.name,
                arvo: stat.base_stat
            }))
        };

        res.render("pokemon", { pokemon });
    } catch (error) {
        res.status(500).send("Virhe haettaessa tietoja.");
    }
});

// Käynnistä palvelin
app.listen(PORT, () => {
    console.log(`Palvelin käynnissä osoitteessa http://localhost:${PORT}`);
});
