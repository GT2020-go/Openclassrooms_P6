const Sauce = require("../models/sauces");
const fs = require("fs");
const { Mongoose } = require("mongoose");

exports.getSauces = (req, res, next) => {
  Sauce.find()
    .then((sauces) => res.status(200).json(sauces))
    .catch((error) => res.status(400).json({ error }));
};

exports.createSauce = (req, res, next) => {
  const sauceObject = JSON.parse(req.body.sauce);
  delete sauceObject._id;
  const sauce = new Sauce({
    ...sauceObject,
    likes: 0,
    dislikes: 0,
    userLikes: [],
    userdislikes: [],
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  sauce
    .save()
    .then(() => res.status(201).json({ message: "Sauce enregistrée !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
    .then((sauces) => res.status(200).json(sauces))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyOneSauce = (req, res, next) => {
  const sauceObject = req.file
    ? {
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  Sauce.updateOne(
    { _id: req.params.id },
    { ...sauceObject, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: "Sauce modifiée !" }))
    .catch((error) => res.status(400).json({ error }));
};

//controller to do: 1 SEULE METHODE AVEC UN SWITCH STATES: 0, LIKE, DISLIKE en utilisantles operateurs mongoDB $pull, $push, $inc

exports.likes = (req, res, next) => {
  const like = req.body.like;
  const userId = req.body.userId;
  const sauceId = req.params.id;

  console.log(like);
  console.log(userId);
  console.log(sauceId);

  switch (like) {
    case 1:
      console.log("liked");
      Sauce.updateOne(
        { _id: sauceId },
        { $push: { usersLiked: userId }, $inc: { likes: like } }
      )
        .then(() => res.status(200).json({ message: "Sauce liked !" }))
        .catch((error) => res.status(400).json({ error }));
      break;
    case -1:
      console.log("disliked");
      Sauce.updateOne(
        { _id: sauceId },
        { $push: { usersDisliked: userId }, $inc: { dislikes: like } }
      )
        .then(() => res.status(200).json({ message: "Sauce disliked !" }))
        .catch((error) => res.status(400).json({ error }));
      break;

    //------------------
    case 0:
      console.log("null");

      console
        .log(usersLiked.some(userId))

        // Sauce.findOne({ _id: sauceId })
        //   .then(() => {
        //     if (usersLiked.some(userId) === true) {
        //       Sauce.updateOne(
        //         { _id: sauceId },
        //         { $pull: { usersLiked: userId }, $inc: { likes: -1 } }
        //       )
        //         .then(() => res.status(200).json({ message: "Sauce unliked !" }))
        //         .catch((error) => res.status(401).json({ error }));
        //     }

        //     console.log("that's all folks:" + usersLiked.some(userId));
        //   })
        .then(() => res.status(200).json({ message: "Back to ZERO !" }))
        .catch((error) => res.status(400).json({ error }));
      break;
    //------------------
  }
};

//-------------------------------------------------------

exports.deleteOneSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
    .then((sauce) => {
      const filename = sauce.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Sauce.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: "Sauce supprimée !" }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
};
