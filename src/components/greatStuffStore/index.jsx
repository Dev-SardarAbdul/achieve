import React from "react";
import { ContactIntroDiv, MainInfoDiv } from "./styles";
import { line } from "../../assets";

const GreatStuffStore = ({ topInfo, title }) => {
  console.log("title: ", title);
  return (
    <div>
      {topInfo && (
        <ContactIntroDiv>
          <p>{title}</p>
        </ContactIntroDiv>
      )}
    </div>
  );
};

export default GreatStuffStore;
