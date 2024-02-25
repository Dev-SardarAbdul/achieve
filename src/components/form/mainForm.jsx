import React, { useState } from "react";
import TextInput from "../input/textInput";
import MainButton from "../button/MainButton";

const MainForm = ({ debtTool }) => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [email, setEmail] = useState(false);

  let submitData = () => {
    console.log("submitData", debtTool, email);
  };

  return (
    <div>
      <TextInput
        isValidEmail={isValidEmail}
        setIsValidEmail={setIsValidEmail}
        setEmail={setEmail}
      />
      <MainButton submitData={submitData} isValidEmail={isValidEmail}>
        Continue
      </MainButton>
    </div>
  );
};

export default MainForm;
