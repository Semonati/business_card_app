import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Grid, Typography } from "@mui/material";

import PageHeader from "./../components/PageHeader";
import ROUTES from "../routes/routerModel";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <PageHeader title="Error 404" subtitle="Page not found" />

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" color="initial">
            Oops... The requested URL was not found on this server
          </Typography>
          <Button
            variant="text"
            color="primary"
            onClick={() => navigate(ROUTES.CARDS)}
          >
            Click here to return to the home page...
          </Button>
        </Grid>
        <Grid item xs={12} md={4} justifyContent="center">
          <img
            width="100%"
            src="/assets/images/broken-robot.png"
            alt="broken robot"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ErrorPage;
