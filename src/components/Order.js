import styles from "./Order.module.css";
import React from "react";

const Order = (props) => {
  if (props.large === "true")
    return (
      <div className={styles.card}>
        <img
          className={styles.face}
          src={require("../assets/person.png")}
          alt=""
        />
        <p className={styles.name}>{props.name}</p>
        <p className={styles.amount}>${props.amount}</p>
      </div>
    );
  else
    return (
      <div className={styles.card}>
        <img
          className={styles.face}
          src={require("../assets/person.png")}
          alt=""
        />
        <div>
          <p className={styles.name}>{props.name}</p>
          <p className={styles.email}>{props.email}</p>
          <p className={styles.address}>{props.address}</p>
        </div>
        <p className={styles.amount}>${props.amount}</p>
      </div>
    );
};

export default Order;
