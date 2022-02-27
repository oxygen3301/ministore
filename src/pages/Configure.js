import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import styles from "./Configure.module.css";
import ProductCard from "../components/ProductCard";
import products from "../assets/products";

const Configure = () => {
  const [storeName, setStoreName] = useState("Starbucks");
  const { isAuthenticated } = useAuth0();
  const [theme, setTheme] = useState({
    name: "Your Shop",
    color: "green",
    font: "sans-serif",
  });

  const handleColor = (e) => {
    console.log(e.target.value);
    setTheme({ ...theme, color: e.target.value });
  };

  const updater = (e) => {
    console.log("Updated");
  };
  if (isAuthenticated) {
    return (
      <React.Fragment>
        <h2 className={styles.welcome}>Manage Store</h2>
        <img
          className={styles.uline}
          src={require("../assets/Vector 4.png")}
          alt=""
        />
        <div className={styles.flex_form}>
          <div className={styles.form_group}>
            <label>Store Name</label> <br />
            <input
              className={styles.inputname}
              type="text"
              onChange={updater}
              placeholder={storeName}
            />
          </div>

          <div>
            <label>Theme</label>
            <br />
            <select value={theme.color} onChange={handleColor}>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>
        </div>
        <label className={styles.payment}>Payment</label>
        <p className={styles.stripe}>Connect Stripe</p>
        <p className={styles.save}>Save Changes</p>
        <h2 className={styles.welcome}>Products</h2>
        <img
          className={styles.uline}
          src={require("../assets/Vector 4.png")}
          alt=""
        />
        <div style={{ height: "2.1vh" }}></div>
        <div className="products_div">
          <Link to="/editproduct" className={styles.btn_primary}>
            Add Products
          </Link>
          <div style={{ height: "8vh" }}></div>
          {products.map((product) => (
            <ProductCard
              key={product}
              name={product.name}
              desc={product.desc}
              price={product.price}
            />
          ))}
        </div>
        <div style={{ height: "10vh" }}></div>
        <Footer active="3" />
      </React.Fragment>
    );
  }
};

export default Configure;
