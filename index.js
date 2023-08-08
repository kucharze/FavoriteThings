const express = require("express");

const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

const myFavoriteVideoGames = [
  "Fortnite",
  "Call of Duty",
  "Five nights at Freddy's",
  "Batman",
  "Spiderman",
  "Battlefield",
  "Five nights at Freddy's 2",
  "Five nights at Freddy's 3",
  "Five nights at Freddy's 4",
  "Five nights at Freddy's Security breach",
];

app.get("/", (req, res) => {
  res.render("Home");
});

app.get("/about", (req, res) => {
  res.render("About");
});

app.get("/:favoriteitem", (req, res) => {
  res.send(myFavoriteVideoGames[req.params.favoriteitem]);
});

app.listen("3000", (req, res) => {
  console.log("Server listening on port 3000");
});
