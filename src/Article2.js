import React from "react";
import "./Article2.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Article2() {
  return (
    <div className="article2">
      <div className="article2__left">
        <video
          className="article2__video"
          src="https://player.vimeo.com/external/665481880.hd.mp4?s=60a49771d272d24e7e8276ce610c3dd6d14d6d08&profile_id=175"
          autoPlay={"autoplay"}
          preLoad="auto"
          loop
        ></video>
        <div className="line_one">The Athenaeum</div>
        <br />
        <br />
        <div className="article2__title">
          How to curate a skin care
          <br />
          regiment
        </div>
        <br />
        <br />
        <div className="article2__description">
          A well-considered, attentive skin care regimen takes time
          <br />
          —a resource that is as finite and precious as our skin. But
          <br />
          be assured: time spent caring for the self is always time
          <br />
          well spent.{" "}
        </div>
        <a href="" className="link">
          <p className="article2__link">
            Read our guide
            <ArrowForwardIcon className="arrow" />
          </p>{" "}
        </a>
      </div>
    </div>
  );
}

export default Article2;
