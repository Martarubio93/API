// Fichero src/index.js

//Import npm modules to start to work

const express = require("express");
const cors = require("cors");

// server creation
const app = express();

// server config
app.use(cors());
app.use(express.json());

// we start at the port 4000
const serverPort = 4000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//endpoint
app.get('/cv', (req, res) => {
    res.sendFile(__dirname + '/files/Frontend-MartRubio.CV');
  });
  
