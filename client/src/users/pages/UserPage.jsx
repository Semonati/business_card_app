import { Container, Link, Typography } from "@mui/material";
import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import useUsers from "../hooks/useUsers";
import { useUser } from "../providers/UserProviders";
import ROUTES from "../../routes/routerModel";

const UserPage = () => {
  const { userId } = useParams();
  const { user } = useUser();
  const { handleGetUser, userValue } = useUsers();

  //   useEffect(() => {
  //     handleGetUser(userId);
  //   }, []);

    // console.log(userValue);
  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  //   if (!userValue.user)
  //     return (
  //       <Typography>
  //         Oops... it seems there are no business card to display
  //       </Typography>
  //     );

  return (
    <Container>
      <PageHeader
        title="User Profile"
        subtitle="Here you can find all about the user"
      />
      {/* <PageHeader
        title={`${user.name.last} ${user.name.middle} ${user.name.first}`}
        subtitle={user.isBusiness ? "Business User" : "Not a Business User"}
      />

      <Typography variant="body1" component="h2">
        Phone: {<Link href={`tel:${userValue.user.phone}`}>{userValue.user.phone}</Link>}
      </Typography>
      <Typography variant="body1" component="h2">
        Email: {<Link href={`mailto:${userValue.user.email}`}>{userValue.user.email}</Link>}
      </Typography>
      <Typography variant="body1" component="h2">
        Created At: {new Date(userValue.user.createdAt).toLocaleString()}
      </Typography> */}
    </Container>
  );
};

export default UserPage;
