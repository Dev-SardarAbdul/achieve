import React from "react";
import { ContactIntroDiv, MainInfoDiv } from "./styles";
import { line } from "../../assets";

const GreatStuffStore = ({ topInfo }) => {
  console.log("topInfo: ", topInfo);
  return (
    <div>
      {topInfo && (
        <ContactIntroDiv>
          <p>Great stuff is in store</p>
        </ContactIntroDiv>
      )}

      <MainInfoDiv>
        <div className="helpTextMain">
          {topInfo ? (
            <>
              <p className="helpText">
                <span>Tell us: </span> How can we help?
              </p>
              <img className="topImg" width={145} src={line} />
              <p className="helpDesc">Tap the debt tool you want most.</p>
            </>
          ) : (
            <>
              <p className="helpBootomTitle">We’ll let you know </p>

              <p className="helpBottomText">When It's ready</p>
              <img className="bottomImg" src={line} />
              <p className="reachText">Just tell us how to reach you:</p>
            </>
          )}
        </div>
      </MainInfoDiv>
    </div>
  );
};

export default GreatStuffStore;
