'use strict';

const express = require("express");
const bodyParser = require("body-parser");
const routers =require('./routers');

const app = express();
app.use(bodyParser.json());

app.use('api',routers.testRouter);
app.use('/api', routers.pokemonRouter);
app.use('/api', routers.proxyRouter);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
