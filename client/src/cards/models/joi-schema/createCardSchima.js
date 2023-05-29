import Joi from "joi";

const urlRegex =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
const titleAndSub = Joi.string().min(2).max(256).required();

const createCradSchema = {
  title: titleAndSub,
  subtitle: titleAndSub,
  description: Joi.string().min(2).max(1024).required(),
  phone: Joi.string()
    .ruleset.regex(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/)
    .rule({ message: 'card "phone" mast be a valid phone number' })
    .required(),
  email: Joi.string()
    .ruleset.pattern(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
    .rule({ message: 'card "mail" mast be a valid mail' })
    .required(),
  webUrl: Joi.string()
    .ruleset.regex(urlRegex)
    .rule({ message: 'card "web" mast be a valid url' })
    .allow(""),
  imageUrl: Joi.string()
    .ruleset.regex(urlRegex)
    .rule({ message: 'card.image "url" mast be a valid url' })
    .allow(""),
  imageAlt: Joi.string().min(2).max(256).allow(""),
  state: Joi.string().allow(""),
  country: titleAndSub,
  city: titleAndSub,
  street: titleAndSub,
  houseNumber: Joi.number().required(),
  zip: Joi.number(),
  bizNumber: Joi.number().allow(""),
};

export default createCradSchema;
