const { handleBadRequest } = require("../../utils/handleErrors");
const Card = require("./mongodb/Card");

const DB = process.env.DB || "MONGODB";

const getCards = async () => {
  if (DB === "MONGODB") {
    try {
      const cards = await Card.find({}, { __v: 0, password: 0 });
      
      return Promise.resolve(cards);
    } catch (error) {
      error.status = 404;
      handleBadRequest("MONGODB", error);
      return Promise.reject(error);
    }
  }
  return Promise.resolve([]);
};

const getCard = async (cardId) => {
  if (DB === "MONGODB") {
    try {
      const card = await Card.findById({ _id: cardId });
      if (!card) throw new Error("Could not find this card in the database");
      return Promise.resolve(card);
    } catch (error) {
      error.status = 404;
      handleBadRequest("MONGODB", error);
      return Promise.reject(error);
    }
  }
  return Promise.resolve([]);
};

const getMyCards = async (user_id) => {
  if (DB === "MONGODB") {
    try {
      const cards = await Card.find({ user_id: user_id });
      return Promise.resolve(cards);
    } catch (error) {
      error.status = 404;
      handleBadRequest("MONGODB", error);
      return Promise.reject(error);
    }
  }
  return Promise.resolve([]);
};

const createCard = async (normalizedCard) => {
  if (DB === "MONGODB") {
    try {
      let card = new Card(normalizedCard);
      card = await card.save();
      return Promise.resolve(card);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("createCard card not in mongodb");
};

const updateCard = async (cardId, normalizedCard) => {
  if (DB === "MONGODB") {
    try {
      const card = await Card.findByIdAndUpdate(cardId, normalizedCard, {
        new: true,
      });
      if (!card)
        throw new Error(
          "Could not update this card because a card with this ID cannot be founf in the database"
        );
      return Promise.resolve({ ...normalizedCard, cardId });
    } catch (error) {
      error.status = 400;
      handleBadRequest("MONGODB", error);
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card deleted not in mongodb");
};

const likeCard = async (cardId, userId) => {
  if (DB === "MONGODB") {
    try {
      let card = await Card.findById(cardId);
      if (!card)
        throw new Error("A card with this ID cannot be found in the database");

      const cardLikes = card.likes.find((id) => id === userId);
      if (!cardLikes) {
        card.likes.push(userId);
        card = await card.save();
        return Promise.resolve(card);
      }

      const cardFiltered = card.likes.filter((id) => id !== userId);
      card.likes = cardFiltered;
      card = await card.save();
      return Promise.resolve(card);
    } catch (error) {
      error.status = 400;
      handleBadRequest("MONGODB", error);
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card update!");
};

const deleteCard = async (cardId, user) => {
  if (DB === "MONGODB") {
    try {
      let card = await Card.findById(cardId);
      if (!card)
        throw new Error(
          "could not delete this card because a card with this ID cannot be found in the database"
        );
      if (!user.isAdmin && user._id !== card.user_id.toHexString())
        throw new Error(
          "Authorization Error: Only the user who created the business card or admin can delete this card"
        );
      card = await Card.findByIdAndDelete(cardId);
      return Promise.resolve(card);
    } catch (error) {
      error.status = 400;
      handleBadRequest("MONGODB", error);
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card deleted not in mongodb!");
};

const updateCardNumber = async (_id, newBizBumber) => {
  try {
    const cards = await Card.find().select(["bizNumber"]);
    const cardToUpdate = await Card.findById(_id);
    cards.forEach((bizNumber) => {
      if (newBizBumber === bizNumber.bizNumber)
        throw new Error("This business number already taken");
    });
    cardToUpdate.bizNumber = newBizBumber;
    cardToUpdate.save();
    return Promise.resolve(cardToUpdate);
  } catch (error) {
    error.status = 400;
    handleBadRequest("MONGODB", error);
    return Promise.reject(error);
  }
};

exports.getCards = getCards;
exports.getMyCards = getMyCards;
exports.getCard = getCard;
exports.createCard = createCard;
exports.updateCard = updateCard;
exports.likeCard = likeCard;
exports.deleteCard = deleteCard;
exports.updateCardNumber = updateCardNumber;
