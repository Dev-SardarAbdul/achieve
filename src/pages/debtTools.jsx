import React, { useState } from "react";
import Card from "../components/card/card";
import GreatStuffStore from "../components/greatStuffStore";
import TextInput from "../components/input/textInput";
import MainButton from "../components/button/MainButton";

import { styled } from "@mui/system";

 const MainWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  paddingTop:"1rem",
  paddingBottom:"1rem",

}));


function DebtTools() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [isValidEmail, setIsValidEmail] = useState(false);

  const [debtTool, setdebtTool] = useState("");
  let submitData = () => {
    console.log("submitData", 2);
  };

  console.log("debtTool", debtTool);

  const validateEmail = (event) => {
    const email = event.target.value;
    setIsValidEmail(emailRegex.test(email));
  };

  return (
    <MainWrapper className=" ">
      <GreatStuffStore topInfo={true} />
      <Card setdebtTool={setdebtTool} />
      <GreatStuffStore topInfo={false} />
      <TextInput validateEmail={validateEmail} isValidEmail={isValidEmail} />
      <MainButton submitData={submitData} isValidEmail={isValidEmail} >
        Continue
      </MainButton>
    </MainWrapper>
  );
}

export default DebtTools;
