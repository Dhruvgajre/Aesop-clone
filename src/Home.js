import React from "react";
import "./Home.css";
import Product from "./Product";
import Article1 from "./Article1.js";
import Product1 from "./Product1";
import Article2 from "./Article2.js";
import Locator from "./Locator.js";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Home() {
  return (
    <div className="home">
      <img
        className="home__banner"
        src="https://images.ctfassets.net/u1nb1km7t5q7/7clxD7eNaBZIcSC3ypABda/9de320505533faae4d6278ea02fb4e5d/Aesop_Lunar_New_Year_2022_Web_Homepage_Primary_Full_Bleed_Desktop_L_2880x1044px.jpg"
        alt=" "
      />

      <img
        className="home__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Aesop_logo_2013.svg/1200px-Aesop_logo_2013.svg.png"
        alt=""
      />
      <div className="home__header_text">
        <div className="header__intro">
          <h1>In boldness, a bond</h1>
          Celebrating the power of self-expression this Lunar New <br></br>
          Year throught gestures replete with character.
        </div>
        <a href="" className="browse__link">
          <div className="browse__Option">
            Browse all gifts
            <ArrowForwardIcon className="arrow" />
          </div>
        </a>
      </div>

      <div className="product__row">
        <Product
          image="https://www.aesop.com/u1nb1km7t5q7/3f2oytDw9wmcetShJHqGaw/14356c3ae0f314ca8dd896fb67776f6e/Aesop_Body_Rejuvenate_Intensive_Body_Balm_120mL_large.png"
          title="Rejuvenate Intensive Body Balm"
          description="A sumptuous moisturising balm"
        />
        <Product
          image="https://www.aesop.com/u1nb1km7t5q7/1Bvr76NWKg0CgUR2bAYwtf/0123f846ce85d98c71ffa70a60946a47/Aesop_Resurrection_Portable_Hand_Care_Hybris_Large_1584x962px__1_.png"
          title="Ressurection Portable Hand Care"
          description="A portable trio for hands"
        />
        <Product
          image="https://www.aesop.com/u1nb1km7t5q7/5tohXrYPG52gI48cP9TbJR/c8fd45a7665745c81dffaf5c6b5895b2/Large-PNG-Aesop-Skin-Parsley-Seed-Anti-Oxidant-Facial-Toner-100mL-large.png"
          title="Parseley Seed Anti-Oxidant Facial Toner"
          description="For use post-cleasing, prefacing hydration"
        />
      </div>
      <Article1 />
      <div className="product__row2">
        <Product1
          image="https://www.aesop.com/u1nb1km7t5q7/5f6C19Q6xLutRoJ1tvEYDF/c3632e644b1ce72b71b70d8d34abe57f/Aesop-Skin-Fabulous-Face-Cleanser-100mL-large.png"
          title="Fabulous Face Cleanser"
          description="For skin require gentle cleansing"
        />
        <Product1
          image="https://www.aesop.com/u1nb1km7t5q7/LL8pUKUiuq1n8mKKpLdbb/b41e1d77b6dfeca7632d6677ee232fcb/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png"
          title="Parseley Seed Face Cleanser"
          description="Ideal for city dwellers"
        />
        <Product1
          image="https://www.aesop.com/u1nb1km7t5q7/1D8SZ3pwiWAd4iHgyaLwUK/58cab4eb3026ea8c0a48760a52830b85/Aesop-Body-Geranium-Leaf-Body-Cleanser-100mL-Hybris-Large-835x962px.png"
          title="Geranium Leaf Body Cleanser"
          description="A gentle, invigorating gel cleanser"
        />
      </div>
      <Article2 />
      <Locator />
    </div>
  );
}

export default Home;
