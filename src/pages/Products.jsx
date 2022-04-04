import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Products.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Products Page</h2>

      <div className={styles.products}>
        {products.map((each) => (
          <Link
            to={`details/${each.id}`}
            key={each.id}
            className={styles.product}
          >
            <img style={{ width: "100px" }} src={each.image} alt="" />
            <h6> {each.category} </h6>
            <p> {each.title} </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
