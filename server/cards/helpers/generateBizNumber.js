const lodash = require("lodash");

const { handleBadRequest } = require("../../utils/handleErrors");
const Card = require("../models/mongodb/Card");

const generateBizNumber = async () => {
  try {
    const random = lodash.random(100_000_000, 900_000_000);
    const card = await Card.findOne({ bizNumber: random });
    if (card) return generateBizNumber();
    return random;
  } catch (error) {
    return handleBadRequest("GenerateBizNumber", error);
  }
};

module.exports = generateBizNumber;
