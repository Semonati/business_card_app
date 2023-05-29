import { useState, useCallback, useMemo, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useSnackBar } from "../../providers/SnackBarProvifer";
import ROUTES from "../../routes/routerModel";
import normalizeCard from "../helpers/normalization/normalizeCard";
import {
  changeLikeStatus,
  createCard,
  deleteCard,
  editCard,
  getCard,
  getCards,
  getMyCards,
} from "../services/cardApiService";

const useCards = () => {
  const [cards, setCards] = useState();
  const [card, setCard] = useState();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const snack = useSnackBar();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(null);
  const [searchParams] = useSearchParams();
  const { userId } = useParams();
  

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  useEffect(() => {
    if (cards) {
      setFiltered(
        cards.filter(
          (card) =>
            card.title.includes(query) || String(card.bizNumber).includes(query)
        )
      );
    }
  }, [cards, query]);

  useAxios();

  const requestStatus = useCallback(
    (pending, errorMessage, cards, card = null) => {
      setIsPending(pending);
      setError(errorMessage);
      setCards(cards);
      setCard(card);
    },
    [cards]
  );

  const handleGetCards = useCallback(async () => {
    try {
      setIsPending(true);
      const cards = await getCards();
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleGetCard = useCallback(async (cardId) => {
    try {
      setIsPending(true);
      const card = await getCard(cardId);
      requestStatus(false, null, null, card);
      return card;
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleGetMyCards = useCallback(async () => {
    try {
      setIsPending(true);
      const cards = await getMyCards();
      return requestStatus(false, null, cards);
    } catch (error) {
      return requestStatus(false, error, null);
    }
  }, []);

  const handleCreateCard = useCallback(async (cardFromClient) => {
    try {
      setIsPending(true);
      const normelizedCard = normalizeCard(cardFromClient);
      const card = await createCard(normelizedCard);
      snack("success", "A new business cars was seccessfully created");
      return requestStatus(false, null, card);
    } catch (error) {
      return requestStatus(false, error, null);
    }
  }, []);

  const handleUpdateCard = useCallback(async (cardId, cardFromClient) => {
    try {
      setIsPending(true);
      const card = await editCard(cardId, cardFromClient);
      requestStatus(false, null, null, card);
      snack("success", "The card was seccessfully updated");
      navigate(ROUTES.CARDS);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleDeleteCard = useCallback(async (cardId) => {
    try {
      setIsPending(true);
      const cardDeleted = await deleteCard(cardId);
      snack("success", "The card was seccessfully deleted");
      navigate(ROUTES.MY_CARDS);
      return requestStatus(false, null, cardDeleted);
    } catch (error) {
      return requestStatus(false, error, null);
    }
  }, []);

  const handleLikeCard = async (cardId) => {
    try {
      setIsPending(false);
      const card = await changeLikeStatus(cardId);
      return requestStatus(false, null, cards, card);
    } catch (error) {
      return requestStatus(false, error, null);
    }
  };

  const handleGetFavCards = useCallback(async () => {
    try {
      setIsPending(true);
      const cards = await getCards();
      const favCards = cards.filter(
        (card) => !!card.likes.find((id) => id === userId)
      );
      return requestStatus(false, null, favCards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const value = useMemo(() => {
    return { isPending, card, cards, error, filtered };
  }, [isPending, card, cards, error, filtered]);

  return {
    value,
    handleGetCards,
    handleGetCard,
    handleGetMyCards,
    handleDeleteCard,
    handleCreateCard,
    handleUpdateCard,
    handleLikeCard,
    handleGetFavCards,
  };
};

export default useCards;
