// Fichero src/index.js

//Import npm modules to start to work

const express = require("express");
const cors = require("cors");

// server creation
const app = express();


// server config
app.use(cors(), express.json({limit: '10mb'}))
const serverPort = process.env.PORT || 4000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const staticServerPathWeb = './public';
app.use(express.static(staticServerPathWeb));

//endpoint
app.get('/cv-MartaRubio', (req, res) => {
    res.sendFile(__dirname + '/files/Marta-Rubio-Front-end.pdf');
  });
  


  
