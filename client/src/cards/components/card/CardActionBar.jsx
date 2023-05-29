import { useState } from "react";
import { Box, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import { func, object } from "prop-types";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../users/providers/UserProviders";
import CardDeleteDialog from "./CardDeleteDialog";
import ROUTES from "../../../routes/routerModel";
import useCards from "../../hooks/useCards";

const CardActionBar = ({ card, onDelete, onLike, cardLikes }) => {
  const [isDialogOpen, setDialog] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();
  const [isLike, setLike] = useState(() => {
    if (!user) return false;
    return !!cardLikes.find((id) => id === user._id);
  });
  const { handleLikeCard } = useCards();

  const handleLike = async () => {
    setLike((prev) => !prev);
    await handleLikeCard(card._id);
    onLike();
  };
  const handleDialog = (trim) => {
    if (trim === "open") return setDialog(true);
    setDialog(false);
  };

  const handleDeleteCard = () => {
    handleDialog();
    onDelete(card._id);
  };

  return (
    <>
      <CardActions
        disableSpacing
        sx={{ paddingTop: 0, justifyContent: "space-between" }}
      >
        <Box>
          {user && (user.isAdmin || user._id === card.user_id) && (
            <IconButton
              aria-label="delete card"
              onClick={() => handleDialog("open")}
            >
              <DeleteIcon />
            </IconButton>
          )}

          {user && (user._id === card.user_id || user.isAdmin) && (
            <IconButton
              aria-label="edit card"
              onClick={() => navigate(`${ROUTES.EDIT_CARD}/${card._id}`)}
            >
              <ModeEditIcon />
            </IconButton>
          )}
        </Box>

        <Box>
          <IconButton aria-label="call business">
            <CallIcon />
          </IconButton>
          {user && (
            <IconButton aria-label="add to favorites" onClick={handleLike}>
              <FavoriteIcon color={isLike ? "error" : "inherit"} />
            </IconButton>
          )}
        </Box>
      </CardActions>

      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={handleDialog}
        onDelete={handleDeleteCard}
      />
    </>
  );
};

CardActionBar.propTypes = {
  card: object.isRequired,
  onDelete: func.isRequired,
  onLike: func.isRequired,
};

export default CardActionBar;
