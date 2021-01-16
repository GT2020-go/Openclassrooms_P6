const express = require("express");
const bodyParser = require("body-parser");

const saucesRoutes = require("./routes/sauces");

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://User1:D57BZ36m77Wia3p@cluster0.xlqdt.mongodb.net/sopekocko?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();

//CORS:
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

app.use("/api", saucesRoutes);

module.exports = app;
