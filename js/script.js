const express = require("express");
const app = express();
var port = process.env.port || 3000;

app.use(express.static(__dirname));

app.get("", (req, res) => {
  res.sendFile("index.html", { root: '.'});
});

function changeText(){
    var textsArray = ["Hello World!","What is JS?", "SIT725", "404 Page Not Found", "HDs Get Degrees!"]
    var number = getRandomNumberBetween(0,textsArray.length - 1)
    console.log("Index: ", number)
    document.getElementById("heading").innerHTML = textsArray[number];
}

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

app.listen(port, () => {
    console.log(`Web server running at: http://localhost:${port}`);
    console.log("Type Ctrl+C to shut down the web server");
  });