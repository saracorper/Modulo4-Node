"use strict";
const axios = require("axios");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/api/proxy/pokemons", (req, res, next) => {
  axios({
    method: "GET",
    url: "https://pokeapi.co/api/v2/pokemon"
  })
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.error("error", err);
      res.status(500).send();
    });
});

app.post("/api/pokemons", (req, res, next) => {
  const pokemonData = Object.assign({}, req.body);
  console.log("me llego el siguiente request body", pokemonData);
  setTimeout(() => {
    res.status(201).send("Todo listo");
  }, 3000);

  req.REQUEST_ID = "1234";
  next();
});

//Middleware de ejemplo para jacer un console.log

// app.use((req, res, next) =>{
//     console.log('Recibi la request', req.REQUEST_ID);
// });

app.get("/api/pokemons", (req, res, next) => {
  const pokemon2 = {
    name: "bulbasur",
    attacks: ["whip"]
  };

  const data = [
    {
      name: "pikachu",
      attacks: ["attack1", "attack2"]
    },
    pokemon2,
    {
      name: "charmander",
      attacks: ["fire ball"]
    }
  ];

  res.send(data);
}); // el segundo parametro -> formato callback (tres parametros).

app.get("/api/pokemons/:name", (req, res, next) => {
  const pokemons = [
    {
      name: "pikachu",
      attacks: ["attack1", "attack2"]
    },
    {
      name: "bulbasur",
      attacks: ["whip"]
    },
    {
      name: "charmander",
      attacks: ["fire ball"]
    }
  ];

  // const name = req.params.name;
  const { name } = req.params;

  const pokemonsFound = pokemons.filter(pokemon => {
    if (pokemon.name === name) {
      return true;
    }
    return false;
  });

  if (pokemonsFound.length === 0) {
    res.status(404).send("not found");
  } else {
    res.send(pokemonsFound[0]);
  }
});

app.get('/api/tests/test01', (req, res,next) => {
    console.log('Recibi los siguientes query params', req.query);

    res.send(req.query);
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
