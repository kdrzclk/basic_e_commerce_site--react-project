import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackArrow from "../assets/BackArrow";
import CheckoutBag from "../assets/CheckoutBag";

import styles from "./Details.module.css";

const Details = () => {
  const params = useParams();
  let navigate = useNavigate();
  const [product, setProduct] = useState({});
  console.log(params.productId);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [params.productId]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div>
      <div className={styles.detailsNav}>
        <BackArrow onClick={handleBack} />
        <h1>Details Page</h1>
        <CheckoutBag onClick={handleCheckout} />
      </div>

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
