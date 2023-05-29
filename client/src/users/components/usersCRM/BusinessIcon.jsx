import React, { useState } from "react";
import { func } from "prop-types";
import { IconButton } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import usersListType from "../../models/types/usersListsType";

const BusinessIcon = ({ onBusiness, user }) => {
  const [isBusiness, setBusiness] = useState(user.isBusiness);

  const handleBusiness = async (userId) => {
    setBusiness((prev) => !prev);
    await onBusiness(userId);
  };

  return (
    <IconButton aria-label="admin" onClick={() => handleBusiness(user._id)}>
      <WorkIcon color={isBusiness ? "primary" : "inherit"} />
    </IconButton>
  );
};

BusinessIcon.propTypes = {
  onBusiness: func.isRequired,
  user: usersListType.isRequired,
};

export default BusinessIcon;
