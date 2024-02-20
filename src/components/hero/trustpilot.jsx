import React, { useRef, useState } from "react";

import { ratingProgress, rating, trust } from "../../assets";
import { PaginationItem, PilotWrapper } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Virtual } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import { data } from "./data";
 
function TrustPilot() {
  let ratingData = [
    {
      status: "completed",
    },
    {
      status: "completed",
    },
    {
      status: "completed",
    },
    {
      status: "progress",
    },
  ];

  return (
    <div className=" " style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}>
      <PilotWrapper>
        <p
          className=""
          style={{
            fontWeight: "bold",
          }}
        >
          4.8 / 5.0{" "}
        </p>
        {ratingData.map((item, index) => (
          <img
            src={item.status == "completed" ? rating : ratingProgress}
            alt="Rating progress"
            className={`rating-progress`}
            draggable={false}
            key={index}
          />
        ))}
        <div
          className="trustWrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.3rem",
          }}
        >
          <p>with 10,350 reviews on</p>

          <img className="rating" src={trust} width={20} height={20} />
          <p
            style={{
              fontWeight: "bold",
            }}
          >
            TrustPilot
          </p>
        </div>
      </PilotWrapper>
    </div>
  );
}

export default TrustPilot;
