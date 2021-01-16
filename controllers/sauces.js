const Sauces = require("../models/sauces");

exports.getSauces = (req, res, next) => {
  //function sauces() >> replace content by actual funtion to GET all sauces from DB
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
};
