import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { womanImg } from "../../assets";
import { StyledHeader, StyledImage, StyledNameTag, StyledText } from "./styles";

function Hero() {
  return (
    <div className="main-container">
      <Box sx={{ flexGrow: 1 }} marginTop={"5rem"}>
        <Grid spacing={2} container justifyContent="center" alignItems="center">
          <Grid item lg={6}>
            <StyledImage src={womanImg} alt="Woman" />
          </Grid>
          <Grid item lg={6}>
            <StyledHeader>Real people, real progress</StyledHeader>
            <StyledText>
              “Vicki helped me. From the application to the approval, to the
              funding. She was with me through the whole process. She walked me
              through everything I needed to know and submit.”
            </StyledText>
            <StyledNameTag>— Becky C. member since 2021</StyledNameTag>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Hero;
