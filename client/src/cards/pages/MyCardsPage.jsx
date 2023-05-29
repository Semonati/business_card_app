import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Container, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import ROUTES from "../../routes/routerModel";
import { useUser } from "../../users/providers/UserProviders";
import useCards from "../hooks/useCards";
import PageHeader from "../../components/PageHeader";
import CardFeedback from "../components/CardFeedback";

const MyCardsPage = () => {
  const { handleGetMyCards, value } = useCards();
  const { isPending, cards, error } = value;
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    handleGetMyCards();
  }, []);
  
  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container sx={{ position: "relative", minHeight: "92vh" }}>
      <PageHeader
        title="My Cards Page"
        subtitle="Here you can find your business cards"
      />
      {cards && (
        <Fab
          onClick={() => navigate(ROUTES.CREATE_CARD)}
          color="primary"
          aria-label="add"
          sx={{ position: "absolute", bottom: 75, right: 16 }}
        >
          <AddIcon />
        </Fab>
      )}
      <CardFeedback
        isPending={isPending}
        error={error}
        cards={cards}
        onDelete={() => {}}
      />
    </Container>
  );
};

export default MyCardsPage;
