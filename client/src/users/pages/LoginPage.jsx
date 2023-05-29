import { Container } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import useForm from "../../forms/hooks/useForm";
import ROUTES from "../../routes/routerModel";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import useUsers from "../hooks/useUsers";
import loginSchema from "../models/joi-schema.js/loginSchema";
import { useUser } from "../providers/UserProviders";

const LoginPage = () => {
  const { user } = useUser();
  const { handleLogin } = useUsers();
  const { value, ...rest } = useForm(
    initialLoginForm,
    loginSchema,
    handleLogin
  );

  if (user) return <Navigate replace to={ROUTES.CARDS} />;

return (
  <Container
    sx={{
      paddingTop: 8,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Form
      onSubmit={rest.onSubmit}
      onReset={rest.handleReset}
      onChange={rest.validateForm}
      title="login"
      styles={{ maxWidth: "450px" }}
      to={ROUTES.CARDS}
    >
      <Input
        label="email"
        name="email"
        type="email"
        error={value.errors.email}
        onChange={rest.handleChange}
        data={value.data}
      />
      <Input
        label="password"
        name="password"
        type="password"
        error={value.errors.password}
        onChange={rest.handleChange}
        data={value.data}
      />
    </Form>
  </Container>
);
};

export default LoginPage;
