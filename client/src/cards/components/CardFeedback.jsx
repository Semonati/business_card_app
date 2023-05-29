import React from "react";
import { arrayOf, bool, string, func } from "prop-types";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import Cards from "../components/Cards";
import cardType from "../models/types/cardTypes";
import { Typography } from "@mui/material";

const CardFeedback = ({ isPending, error, cards, onDelete, onLike }) => {
  if (isPending) return <Spinner />;
  if (error) return <Error errorMessage={error} />;

  if (cards && !cards.length)
    return (
      <Typography>
        Oops... it seems there are no business cards to display
      </Typography>
    );
  if (cards && !!cards.length)
    return <Cards cards={cards} onDelete={onDelete} onLike={onLike} />;
};

CardFeedback.propTypes = {
  isPending: bool.isRequired,
  error: string,
  cards: arrayOf(cardType),
  onDelete: func.isRequired,
  onLike: func.isRequired,
};

CardFeedback.defaultProps = {
  onLike: () => {},
};

export default CardFeedback;
