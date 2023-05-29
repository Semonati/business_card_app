import React, { useEffect } from "react";
import { Container, Box } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import { useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import CardComponent from "../components/card/Card";

const CardDetailsPage = () => {
  const { cardId } = useParams();
  const { handleGetCard, value } = useCards();
  const { error, isLoading, card } = value;

  useEffect(() => {
    handleGetCard(cardId);
  }, []);

  return (
    <Container maxWidth="lg">
      <PageHeader
        title="Business Details"
        subtitle="Here you can find more details about the business"
      />
      {isLoading && <Spinner />}
      {error && <Error errorMessage={error} />}
      {card && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CardComponent card={card} onDelete={() => {}} onLike={() => {}} />
        </Box>
      )}
    </Container>
  );
};

export default CardDetailsPage;
