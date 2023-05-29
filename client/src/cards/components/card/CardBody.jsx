import {
  Box,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";

import cardType from "../../models/types/cardTypes";

const CardBody = ({ card }) => {
  const { cardId } = useParams();
  const { title, subtitle, phone, address, bizNumber, createdAt, email, web } =
    card;
  const { street, houseNumber, city, zip, state, country } = address;
  return (
    <CardContent>
      <CardHeader title={title} subheader={subtitle} sx={{ p: 0, mb: 1 }} />
      <Divider />
      <Box mt={1}>
        <Typography variant="body2" color="text.secondary">
          <Typography variant="subtitle2" component="strong">
            Phone:{" "}
          </Typography>
          {phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Address: </strong>
          {cardId && state} {cardId && country} {street} {houseNumber} {city}{" "}
          {cardId && zip}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Card Number: </strong>
          {bizNumber}
        </Typography>
        {cardId && (
          <Box>
            <Typography variant="body2" color="text.secondary">
              <strong>Card email: </strong>
              {email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Card created at: </strong>
              {createdAt}
            </Typography>
            {web && (
              <Typography variant="body2" color="text.secondary">
                <strong>Card web: </strong>
                {web}
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </CardContent>
  );
};

CardBody.propTypes = {
  card: cardType.isRequired,
};

export default CardBody;
