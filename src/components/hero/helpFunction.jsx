import React from "react";
import { calendar, newfeature, tick, shuffle, line } from "../../assets";

import {
  ContactCard,
  ContactCardDesc,
  ContactCardIcon,
  ContactCardTitle,
  ContactCardWrapper,
  ContactIntroDiv,
  ContactWrapper,
  MainInfoDiv,
  MainWrapper,
  StyledButton,
  StyledInput,
} from "./styles";
import { Box } from "@mui/system";

function HelpFunction() {
  let cardData = [
    {
      icon: tick,
      title: "Find a debt fix",
      description: "See solution in 2 minutes",
    },
    {
      icon: shuffle,
      title: "Compare",
      description: "How does your debt stack up?",
    },
    {
      icon: newfeature,
      title: "Predict",
      description: "Find out how long 'til your debt is gone",
    },
    {
      icon: calendar,
      title: "Forecast",
      description: "Track your debts into the future",
    },
  ];

  return (
    <MainWrapper
      className=" "
    
    >
      <ContactIntroDiv>
        <p>Great stuff is in store</p>
      </ContactIntroDiv>
      <MainInfoDiv>
        <div className="helpTextMain">
          <p className="helpText">
            <span>Tell us: </span> How can we help?
          </p>
          <img className="topImg" width={145} src={line} />
          <p className="helpDesc">Tap the debt tool you want most.</p>
        </div>
      </MainInfoDiv>

      <ContactWrapper>
        <ContactCardWrapper>
          {cardData.map((item, index) => (
            <ContactCard key={index}>
              <ContactCardIcon
                src={item.icon}
                width={24}
                height={item.title == "Find a debt fix" ? 28 : 24}
                alt="Rating progress"
              />
              <ContactCardTitle className="">{item.title}</ContactCardTitle>
              <ContactCardDesc className="">{item.description}</ContactCardDesc>
            </ContactCard>
          ))}
        </ContactCardWrapper>
      </ContactWrapper>
      <MainInfoDiv>
        <div className="helpTextMain">
          <p className="helpBootomTitle">We’ll let you know </p>

          <p className="helpBottomText">When It's ready</p>
          <img className="bottomImg" src={line} />
          <p className="reachText">Just tell us how to reach you:</p>
        </div>
      </MainInfoDiv>
      <Box style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"100%"}}>
      <StyledInput type="email" placeholder="example@email.com"/>
      <StyledButton>
        Continue
      </StyledButton>
      </Box>
   
    </MainWrapper>
  );
}

export default HelpFunction;
