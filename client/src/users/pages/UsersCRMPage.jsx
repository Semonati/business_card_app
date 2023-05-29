import React, { useEffect } from "react";
import { Container } from "@mui/material";
import useUsers from "../hooks/useUsers";
import { Navigate } from "react-router-dom";
import { useUser } from "../providers/UserProviders";
import ROUTES from "../../routes/routerModel";
import UsersCRMFeedback from "../components/UsersCRMFeedback";
import PageHeader from "../../components/PageHeader";

const UsersCRMPage = () => {
  const { user } = useUser();
  const { handleGetUsers, handleBusinessUser, userValue } = useUsers();
  const { users, isPending, error } = userValue;

  useEffect(() => {
    handleGetUsers();
  }, []);

  const onDeleteUser = async () => {
    await handleGetUsers();
  };

   const onBusinessUser = async (userId) => {
     await handleBusinessUser(userId);
   };

  if (!user) return <Navigate replace to={ROUTES.CARDS} />;
  return (
    <Container>
      <PageHeader title="CRM Page" subtitle="Manage your users" />
      <UsersCRMFeedback
        isPending={isPending}
        error={error}
        users={users}
        onDelete={onDeleteUser}
        onBusiness={onBusinessUser}
      />
    </Container>
  );
};

export default UsersCRMPage;
