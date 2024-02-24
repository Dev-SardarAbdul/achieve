import React, { Children } from "react";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#EEF0F9",
  color: "#616A7C",
  fontSize: "18px",
  textTransform: "initial",
  fontWeight: 700,
  width: "350px",
  "&:hover": {},
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

const MainButton = ({ children }) => {
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
      <StyledButton>{children}</StyledButton>
    </Box>
  );
};

export default MainButton;
