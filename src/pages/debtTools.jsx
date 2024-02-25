import React, { useState } from "react";
import Card from "../components/card/card";
import GreatStuffStore from "../components/greatStuffStore";
import TextInput from "../components/input/textInput";
import MainButton from "../components/button/MainButton";

import { styled } from "@mui/system";
import DebtInfoComp from "../components/debtInfo";
import MainForm from "../components/form/mainForm";

const MainWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  paddingTop: "1rem",
  paddingBottom: "1rem",
}));

function DebtTools() {
  const [debtTool, setdebtTool] = useState("");

  return (
    <MainWrapper className=" ">
      <GreatStuffStore title={"Great stuff is in store"} />
      <DebtInfoComp
        isTopComp={true}
        grayTitle={"Tell Us:"}
        title={"How can we help?"}
        subTitle={"Tap the debt tool you want most."}
      />
      <Card setdebtTool={setdebtTool} />
      <DebtInfoComp
        isTopComp={false}
        grayTitle={"We’ll let you know"}
        title={"When It's ready"}
        subTitle={"Just tell us how to reach you:"}
      />
      <MainForm debtTool={debtTool} />
    </MainWrapper>
  );
}

export default DebtTools;
