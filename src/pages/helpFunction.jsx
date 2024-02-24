import React from "react";
import { calendar, newfeature, tick, shuffle, line } from "../assets";

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
} from "../components/hero/styles";
import { Box } from "@mui/system";
import Card from "../components/card/card";
import GreatStuffStore from "../components/greatStuffStore";
import TextInput from "../components/input/textInput";
import MainButton from "../components/button/MainButton";

function HelpFunction() {
  return (
    <MainWrapper className=" ">
      <GreatStuffStore topInfo={true} />
      <Card />
      <GreatStuffStore topInfo={false} />
      <TextInput type="email" placeholder="example@email.com" />
      <MainButton>Continue</MainButton>
    </MainWrapper>
  );
}

export default HelpFunction;
