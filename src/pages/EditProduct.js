import React from "react";
import styles from "./EditProduct.module.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const EditProduct = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.welcome}>Edit Product</h2>
      <img
        className={styles.uline}
        src={require("../assets/Vector 4.png")}
        alt=""
      />

      <div className={styles.form_group}>
        <label>Product Name</label> <br />
        <input
          className={styles.inputname}
          type="text"
          placeholder="Starbucks"
        />
      </div>
      <div className={styles.form_group}>
        <label>Product Description</label> <br />
        <textarea
          className={styles.inputdesc}
          placeholder="Starbucks is an old old brand          with overated coffees, now buy these coffees online from my ministore!"
          rows="4"
        />
      </div>
      <div className={styles.form_group}>
        <label>Product Image</label> <br />
        <input type="file" id="img" name="img" accept="image/*" />
      </div>
      <div className={styles.form_group}>
        <label>Product Price</label> <br />
        <span className={styles.inputprice}>$ </span>
        <input className={styles.inputprice} type="text" placeholder="25.99" />
      </div>
      <Link to="/configure" className={styles.publish}>
        Publish Product
      </Link>
      <a className={styles.delete}>Delete Product</a>

      <Footer />
    </div>
  );
};

export default EditProduct;
