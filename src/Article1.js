import React from "react";
import "./Article1.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Article1() {
  return (
    <div className="article1">
      <div className="article1__left">
        <p className="article1__line_one">The value of time</p>
        <p className="article1__title">Healthy skin cannot be rushed</p>
        <p className="article1__description">
          Years of contemplation and rigour go into each Aesop
          formulation–hydrators are no exception. Scientifically validated
          ingredients, combined with acquired wisdom, impart lasting benefits.
        </p>
        <a href="" className="link">
          <p className="article1__link">
            Discover deliberate nourishment
            <ArrowForwardIcon className="arrow" />
          </p>{" "}
        </a>
      </div>
      <div classname="article1__right">
        <img
          className="article1__image"
          src="https://www.aesop.com/u1nb1km7t5q7/2a9toBA6YVvZPntYn1qdLH/b5f611688860aee184a8b519f298ee04/Aesop_Healthy_Skin_Nourish_2022_Web_Homepage_Secondary_Warm_Mid_Desktop_2560x1440px.jpg"
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default Article1;
