import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { StylesProvider } from "@chakra-ui/react";
import styles from "../pages/Dashboard.module.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <p className={styles.login} onClick={() => loginWithRedirect()}>
      Log In
    </p>
  );
};

export default LoginButton;
