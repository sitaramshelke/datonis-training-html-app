// Import all the required packages
const express = require("express");
var bodyParser = require('body-parser');

const app = express(); // Create a server handle
const port = 3000; //Define port to be used

app.use(bodyParser.json()) //Set json parser for server handle
app.use(express.static("./public")) //Set server handle to server all file from public directory

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); //Bind the server to a port and start listening
