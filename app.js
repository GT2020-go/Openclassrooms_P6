const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://User1:D57BZ36m77Wia3p@cluster0.xlqdt.mongodb.net/sopekocko?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

//validate login (get login) with test login only
app.use("/api/auth/login", (req, res, next) => {
  const user = {
    email: "test@test.com",
    password: "test",
  };
  res.status(200).json(user);
});

//get sauces
app.use("/api/sauces", (req, res, next) => {
  const sauces = [
    {
      id: "123456789",
      userId: "string",
      name: "tabasco",
      manufacturer: "tabasco corp",
      description: "wow",
      mainPepper: "hot stuff made by mother nature",
      imageUrl:
        "https://images.unsplash.com/photo-1519666213631-be6e024eac6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1888&q=80",
      heat: 5,
      likes: 3,
      dislikes: 1,
      usersLiked: ["me", "mom", "sister"],
      usersDisliked: ["brother"],
    },
    {
      id: "987654321",
      userId: "string",
      name: "tabasco2",
      manufacturer: "tabasco corp",
      description: "wow",
      mainPepper: "hot stuff made by mother nature",
      imageUrl:
        "https://images.unsplash.com/photo-1519666213631-be6e024eac6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1888&q=80",
      heat: 5,
      likes: 3,
      dislikes: 1,
      usersLiked: ["me", "mom", "sister"],
      usersDisliked: ["brother"],
    },
  ];
  res.status(200).json(sauces);
});

module.exports = app;
