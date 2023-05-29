import React from "react";
import useForm from "./../../forms/hooks/useForm";
import initialCardForm from "./../helpers/initialForms/initialCardForm";
import createCradSchema from "../models/joi-schema/createCardSchima";
import useCards from "./../hooks/useCards";
import { useUser } from "../../users/providers/UserProviders";
import { Navigate } from "react-router-dom";
import { Container } from "@mui/material";
import ROUTES from "../../routes/routerModel";
import CardForm from "../components/CardForm";

const CreateCardPage = () => {
  const { handleCreateCard } = useCards();
  const { user } = useUser();
  const { value, ...rest } = useForm(
    initialCardForm,
    createCradSchema,
    handleCreateCard
  );


  if (!user || !user.isBusiness) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardForm
        title="create card"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        errors={value.errors}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        data={value.data}
      />
    </Container>
  );
};

export default CreateCardPage;
