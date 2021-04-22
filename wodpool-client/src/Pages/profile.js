import React from "react";
import { AuthenticationContext } from "../Components/AuthenticationContext";

const Profile = () => {
  const auth = React.useContext(AuthenticationContext);
  return auth?.profile ? `Hey, ${auth.profile.firstName}` : "Not logged in";
};

export default Profile;
