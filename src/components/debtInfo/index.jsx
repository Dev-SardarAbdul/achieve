import React from "react";
import { MainInfoDiv } from "../greatStuffStore/styles";
import { line } from "../../assets";

const DebtInfoComp = ({ isTopComp, grayTitle, title, subTitle }) => {
  return (
    <div>
      <MainInfoDiv>
        <div className="helpTextMain">
          {isTopComp ? (
            <>
              <p className="helpText">
                <span>{grayTitle} </span> {title}
              </p>
              <img className="topImg" width={145} src={line} />
              <p className="helpDesc">{subTitle}</p>
            </>
          ) : (
            <>
              <p className="helpBootomTitle"> {grayTitle} </p>

              <p className="helpBottomText">{title}</p>
              <img className="bottomImg" src={line} />
              <p className="reachText">{subTitle}</p>
            </>
          )}
        </div>
      </MainInfoDiv>
    </div>
  );
};

export default DebtInfoComp;
