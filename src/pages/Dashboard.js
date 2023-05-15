import React from "react";
import styles from "./Dashboard.module.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Order from "../components/Order";
import orders from "../assets/orders";

import { useState } from "react";
import LoginPage from "./LoginPage";

const Dashboard = () => {
  const { isAuthenticated, user, logout } = useAuth0();
  console.log(isAuthenticated);
  const [numord, setNumord] = useState(2);
  const [sales, setSales] = useState(242.11);

  const store_name = "sd";

  if (!isAuthenticated) {
    return <LoginPage />;
  } else if (!store_name)
    return (
      <React.Fragment>
        <h2 className={styles.welcome}>Welcome {user.given_name}! 👋</h2>
        <img
          className={styles.conn_image}
          src={require("../assets/Connectivity 03.png")}
          alt=""
        />
        <p className={styles.info}>
          Finish setup to unlock features.
          <br />
          Get Started!
        </p>

        <Link to="/configure" className={styles.btn_primary}>
          Add Products
        </Link>
        <br />
        <Footer active="1" />
      </React.Fragment>
    );
  else
    return (
      <div className={styles.section}>
        <div className={styles.headerFlex}>
          <div className={styles.smallFlex}>
            <h2 className={styles.welcome}>Welcome {user.given_name}! 👋</h2>
            <p
              className={styles.logoutHeader}
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </p>
          </div>
          <div className={styles.nav}>
            <Link to="/" className={styles.nav_item}>
              Dashboard
            </Link>
            <Link to="/vieworders" className={styles.nav_item}>
              Orders
            </Link>
            <Link to="/configure" className={styles.nav_item}>
              Configure
            </Link>
          </div>
        </div>
        <div className={styles.cards}>
          <a href="http://127.0.0.1:5500/index.html">
            <div className={`${styles.card1} ${styles.card}`}>
              <h4>Your site is live at:</h4>
              <p className={styles.site_link}>https://rohit.myministore.com</p>
            </div>
          </a>
          <div className={styles.secondrow}>
            <div className={`${styles.card2} ${styles.card}`}>
              <h4>Total Sales</h4>
              <p className={styles.big_card_desc}>${sales}</p>
            </div>
            <div className={`${styles.card3} ${styles.card}`}>
              <h4>No. of Orders</h4>
              <p className={styles.big_card_desc}>{numord}</p>
            </div>
          </div>
          <div
            onClick={() => {
              setNumord(3);
              setSales(242.11 + 24.99);
            }}
            className={`${styles.card4} ${styles.card}`}
          >
            <h4>Accept Payments using Stripe</h4>
            <img
              alt=""
              width="120px"
              src={require("../assets/image 7.png")}
              className={styles.logo}
            />
          </div>
        </div>
        <div style={{ height: "2vh" }}></div>
        <h2 className={styles.orders}>Orders</h2>
        <div style={{ height: "4vh" }}></div>
        {orders.map((order) => (
          <Order
            key={order}
            name={order.name}
            address={order.address}
            email={order.email}
            amount={order.amount}
          />
        ))}

        <div style={{ height: "10vh" }}></div>
        <Footer active="1" />
      </div>
    );
};
export default Dashboard;
