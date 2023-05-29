import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

import mapUserToModel from "../helpers/normalization/mapToModelUser";
import ROUTES from "../../routes/routerModel";
import useUsers from "../hooks/useUsers";
import { useUser } from "../../users/providers/UserProviders";
import useForm from "../../forms/hooks/useForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import signupSchema from "../models/joi-schema.js/signupSchema";
import UserForm from "../components/UserForm";
import normalizeUser from "../helpers/normalization/normalizeUser";

const EditUserPage = () => {
  const { userId } = useParams();
  const { handleEditUser, handleGetUser, userValue } = useUsers();
  const { value, ...rest } = useForm(initialSignupForm, signupSchema, () => {
    handleEditUser(userValue.user._id, {
      ...normalizeUser({ ...value.data }),
      user_id: user._id,
    });
  });

  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    handleGetUser(userId).then((data) => {
      if (user._id !== data._id) return navigate(ROUTES.CARDS);
      const modeledUser = mapUserToModel(data);
      rest.setData(modeledUser);
    });
  }, []);

  return (
    <>
      <Container
        sx={{
          paddingTop: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <UserForm
          title="edit user form"
          onSubmit={rest.onSubmit}
          onReset={rest.handleReset}
          onFormChange={rest.validateForm}
          onInputChange={rest.handleChange}
          setData={rest.setData}
          errors={value.errors}
          data={value.data}
        />
      </Container>
    </>
  );
};

export default EditUserPage;
