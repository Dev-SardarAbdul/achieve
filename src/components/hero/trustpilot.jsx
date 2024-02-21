import React from "react";
import { ratingProgress, rating, trust } from "../../assets";

import { styled } from "@mui/system";


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
  
   const PilotWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
  
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "1rem",
    },
  }));
  
   const TrustPilotDiv = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.3rem",
  }));

  return (
    <div
      className=" "
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <PilotWrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.3rem",
          }}
        >
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
        </div>
        <TrustPilotDiv className="trustWrapper">
          <p>with 10,350 reviews on</p>

          <img className="rating" src={trust} width={20} height={20} />
          <p
            style={{
              fontWeight: "bold",
            }}
          >
            TrustPilot
          </p>
        </TrustPilotDiv>
      </PilotWrapper>
    </div>
  );
}

export default TrustPilot;
