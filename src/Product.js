import React from "react";
import "./Product.css";

function Product({ image, title, description }) {
  return (
    <div className="product">
      <a href=" ">
        <img className="product__image" src={image} />
        <div className="product__info">
          <p className="product__title">{title}</p>

          <p className="product__description">{description}</p>
        </div>
      </a>
    </div>
  );
}

export default Product;
