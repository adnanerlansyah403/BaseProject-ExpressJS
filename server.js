const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const responseHelper = require("express-response-helper");
const db = require("./app/models/index")

// const express = require('express')
const app = express()
const port = 3000

// CORS Config
var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));

// attach the middleware before any route definition
app.use(responseHelper.helper());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to my base project!')
})

app.get('/user', async function(req, res) {

  const users = await db.User.findAll();

  res.respond(users, 200);
});

app.get('/404', async function(req, res) {


  res.failNotFound("Resource not found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})