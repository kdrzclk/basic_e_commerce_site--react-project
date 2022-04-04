import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";

const Details = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  console.log(params.productId);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [params.productId]);

  return (
    <div>
      <h1>Details Page</h1>
      <div className={styles.detailsWrapper}>
        <img
          className={styles.detailsImage}
          src={product?.image}
          alt={product?.title}
        />
        <p> {product?.id} </p>
        <p> {product?.title} </p>
        <p> {product?.description} </p>
        <p> {product?.category} </p>
        <p> {product?.price} </p>
        <p> {product?.rating?.rate} </p>
        <p> {product?.rating?.count} </p>
      </div>
    </div>
  );
};

export default Details;
