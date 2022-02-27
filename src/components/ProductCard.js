import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = (props) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.product_name}>{props.name}</h3>
      <p className={styles.product_desc}>{props.desc}</p>
    </div>
  );
};

export default ProductCard;
