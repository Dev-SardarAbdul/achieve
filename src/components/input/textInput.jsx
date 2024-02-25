import React, { useState } from "react";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";

const StyledInput = styled(TextField)(({ theme }) => ({
  width: "350px",
  marginBottom: "1rem",

  "& .error": {
    color: "red",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

const TextInput = ({ setIsValidEmail, setEmail }) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateEmail = (event) => {
    const email = event.target.value;
    setIsValidEmail(emailRegex.test(email));
    setEmail(email);
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <StyledInput
        type="email"
        placeholder="Enter your email"
        onChange={validateEmail}
      />
    </Box>
  );
};

export default TextInput;
