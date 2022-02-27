import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { Link } from "@chakra-ui/react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Link onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Link>
  );
};

export default LogoutButton;
