const express = require("express");

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

app.use("/api/sauces", (req, res, next) => {
  const sauces = [
    {
      id: "ObjectID — identifiant unique créé par MongoDB",
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
  ];
  res.status(200).json(sauces);
});

// app.use((req, res, next) => {
//   console.log("requete recue");
//   next();
// });

// app.use((req, res, next) => {
//   res.status(201);
//   next();
// });

// app.use((req, res, next) => {
//   res.json({ message: "Votre requête a bien été reçue !" });
//   next();
// });

// app.use((req, res, next) => {
//   console.log("reponse envoyee avec succes");
// });

module.exports = app;
