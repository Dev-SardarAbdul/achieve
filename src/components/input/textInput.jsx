import React from "react";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";

const StyledInput = styled(TextField)(({ theme }) => ({
  width: "350px",
  marginBottom: "1rem",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

const TextInput = () => {
  return (
    <Box   style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
       width: "100%"}}>
      <StyledInput type="email" placeholder="example@email.com" />
    </Box>
  );
};

export default TextInput;
