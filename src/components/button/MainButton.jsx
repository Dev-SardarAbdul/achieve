import React from "react";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const StyledButton = styled(Button)(({ theme, isValidEmail }) => ({
  backgroundColor: isValidEmail ? "#3300FF" : "#EEF0F9",
  color: isValidEmail ? "#fff" : "#616A7C",
  fontSize: "18px",
  textTransform: "initial",
  fontWeight: 700,
  width: "350px",
  "&:hover": {
    backgroundColor: isValidEmail ? "#3300FF" : "#EEF0F9",
  },
  [theme.breakpoints.down(400)]: {
    width: "330px",
  },
  [theme.breakpoints.down(340)]: {
    width: "90%",
  },
}));

const MainButton = ({ children, submitData, isValidEmail }) => {
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
      <StyledButton
        disabled={!isValidEmail}
        isValidEmail={isValidEmail}
        onClick={submitData}
      >
        {children}
      </StyledButton>
    </Box>
  );
};
export default MainButton;
