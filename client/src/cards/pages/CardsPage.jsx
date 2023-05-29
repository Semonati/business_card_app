import { useEffect } from "react";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import CardFeedback from "../components/CardFeedback";
import useCards from "../hooks/useCards";

const CardsPage = () => {
  const { value, handleGetCards, handleDeleteCard } = useCards();
  const { cards, error, isPending, filtered } = value;
  
  useEffect(() => {
    handleGetCards();
  }, []);

  const onDeleteCard = async (cardId) => {
    await handleDeleteCard(cardId);
    await handleGetCards();
  };

  return (
    <Container>
      <PageHeader
        title="Cards"
        subtitle="Here you can find business cards from all categories"
      />
      <CardFeedback
        isPending={isPending}
        error={error}
        cards={filtered}
        onDelete={onDeleteCard}
      />
    </Container>
  );
};

export default CardsPage;
