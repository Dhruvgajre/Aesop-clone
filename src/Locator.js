import React from "react";
import "./Locator.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Locator() {
  return (
    <div className="store__locator">
      <div className="locator__left">
        <p className="locator__title">Store Locator</p>
        <p className="locator__desc">
          Our counsultants are available to host you in-store and <br />
          provide tailored guidance on gift purchases.
        </p>
        <br />
        <a href="" className="locator__link">
          <p className="guide__link">
            Find a nearby store
            <ArrowForwardIcon className="locator__arrow" />
          </p>{" "}
        </a>
        <img
          class="stores__image"
          src="https://www.aesop.com/u1nb1km7t5q7/3b6KRiDt3QpNut8LoYGgB9/1d62a7373daa8a6ba4dff6ea300b891e/Aesop-HK-Hollywood-Road-Hero-Desktop-2880x1620.jpg"
        ></img>
      </div>
      <div className="quote__lineOne">
        ‘Wisely, and slow. They stumble that run fast.’
      </div>
      <div className="quote__lineTwo">William Shakespeare</div>
    </div>
  );
}

export default Locator;
