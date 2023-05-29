import React from "react";
import { Grid } from "@mui/material";
import CardComponent from "./card/Card";
import { arrayOf, func } from "prop-types";
import cardType from "../models/types/cardTypes";

const Cards = ({ cards, onDelete, onLike }) => {
  return (
    <Grid container spacing={2} pb={2}>
      {cards.map((card) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={card._id}>
          <CardComponent
            card={card}
            onDelete={onDelete}
            onLike={onLike}
          />
        </Grid>
      ))}
    </Grid>
  );
};

Cards.propTypes = {
  cards: arrayOf(cardType).isRequired,
  onDelete: func.isRequired,
};

export default Cards;
