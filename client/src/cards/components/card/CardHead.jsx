import { CardMedia } from "@mui/material";

import imageType from "../../models/types/imageType";

const CardHead = ({ image }) => {
  return (
    <CardMedia component="img" height="140" image={image.url} alt={image.alt} />
  );
};

CardHead.propTypes = {
  image: imageType.isRequired,
};

export default CardHead;
