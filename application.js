// Import all the required packages
const express = require("express");
var bodyParser = require('body-parser');
const thing = require("./lib/thing");

const app = express(); // Create a server handle
const port = 3000; //Define port to be used

app.use(bodyParser.json()) //Set json parser for server handle
app.use(express.static("./public")) //Set server handle to server all file from public directory

app.get("/things", thing.get_things); //Define a GET url and map it to a handler function
app.post("/get_thing_data", thing.get_thing_data); //Define a POST url and map it to a handler function

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); //Bind the server to a port and start listening
