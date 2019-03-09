'use strict'

const express = require('express');
const router = express.Router(); // ¿Por que?

router.post("/pokemons", (req, res, next) => {
    const pokemonData = Object.assign({}, req.body);

    console.log("me llego el siguiente request body", pokemonData);
    
    setTimeout(() => {
      res.status(201).send("Todo listo");
    }, 2000);
  
});

router.get("/pokemons", (req, res, next) => {
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
  
router.get("/pokemons/:name", (req, res, next) => {
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

module.exports = router; // porque no pokemon-router?


