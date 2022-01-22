import React from "react";
import "./Product1.css";

function Product1({ image, title, description }) {
  return (
    <div className="product1">
      <a href=" ">
        <img className="product1__image" src={image} />
        <div className="product1__info">
          <p className="product1__title">{title}</p>

          <p className="product1__description">{description}</p>
        </div>
      </a>
    </div>
  );
}

export default Product1;
