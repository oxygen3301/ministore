import React from "react";
import styles from "./Dashboard.module.css";
import Order from "../components/Order";
import Footer from "../components/Footer";
import orders from "../assets/orders";

const ViewOrders = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.welcome}>view orders</h2>

      {orders.map((order) => (
        <Order
          key={order}
          name={order.name}
          address={order.address}
          email={order.email}
          amount={order.amount}
        />
      ))}
      <div style={{ height: "5vh" }}></div>
      <Footer active="2" />
    </div>
  );
};

export default ViewOrders;
