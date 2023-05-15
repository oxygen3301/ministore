import React from "react";
import styles from "./LoginPage.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className={styles.section}>
        <div className={styles.biggerFlex}>
          <div className={styles.heroFlex}>
            <img
              alt="ministore logo"
              className={styles.splash}
              src={require("../assets/splash.png")}
            />
            <div className={styles.heroTextContainer}>
              <p className={styles.mini}>
                Mini<span className={styles.store}>store</span>
              </p>
              <p className={styles.heroText}>
                Build your online store in &lt;5 mins
              </p>
            </div>
          </div>
          <div className={styles.mobileHeroText}>
            Build your online store in &lt;5 mins.
          </div>
          <div
            className={styles.firstButton}
            onClick={() => loginWithRedirect()}
          >
            Create your store
          </div>
        </div>
        <div className={styles.gridContainer}>
          <div className={`${styles.gridChild} ${styles.grid1}`}>
            <p>for the artists</p>
            <div className={styles.imageContainer}>
              <img alt="Artist" src={require("../assets/artist1.jpg")}></img>
              <img alt="Artist" src={require("../assets/artist2.jpg")}></img>
            </div>
            <p
              className={`${styles.button1} ${styles.button}`}
              onClick={() => loginWithRedirect()}
            >
              Sell artwork online
            </p>
          </div>
          <div className={`${styles.gridChild} ${styles.grid2}`}>
            <p>for the entrepreuners</p>
            <div className={styles.imageContainer}>
              <img
                alt="Artist"
                src={require("../assets/entrepreneur1.jpg")}
              ></img>
              <img
                alt="Artist"
                src={require("../assets/entrepreneur2.jpg")}
              ></img>
            </div>
            <p
              className={`${styles.button2} ${styles.button}`}
              onClick={() => loginWithRedirect()}
            >
              Setup your brand online
            </p>
          </div>
          <div className={`${styles.gridChild} ${styles.grid3}`}>
            <p>for the cafes and restaurants</p>
            <div className={styles.imageContainer}>
              <img alt="Artist" src={require("../assets/cafe1.jpg")}></img>
              <img alt="Artist" src={require("../assets/cafe2.jpg")}></img>
            </div>
            <p
              className={`${styles.button3} ${styles.button}`}
              onClick={() => loginWithRedirect()}
            >
              Take your shop online
            </p>
          </div>
        </div>
      </div>
      <footer>
        <div>
          <div>
            <img src={require("../assets/FooterMinistore.png")}></img>
          </div>
          <p>
            Creator:{" "}
            <a
              className={styles.githubLink}
              href="https://github.com/rhtshwprk"
              target="_blank"
              rel="noopener noreferrer"
            >
              @rhtshwprk
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
