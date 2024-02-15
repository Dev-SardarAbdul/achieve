import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { womanImg,nextImg,prevImg } from "../../assets";
import {
  PaginationWrapper,
  StyledHeader,
  StyledImage,
  StyledNameTag,
  StyledText,
} from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
} from "swiper/core";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

function Hero() {
  let swiperDemo = [1, 1, 1];

  const renderCustomPagination = (swiper, current, total) => {
    return `<span class="swiper-pagination-bullet">${current}</span>`;
  };

  return (
    <div className="main-container">
      <Box sx={{ flexGrow: 1 }} marginTop={"5rem"}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          watchSlidesVisibility={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
          }}
        >
          {swiperDemo.map((item, index) => (
            <SwiperSlide key={index} className="sample-slider">
              <Grid
                spacing={2}
                container
                justifyContent="center"
                alignItems="center"
              >
                <Grid item lg={6}>
                  <StyledImage src={womanImg} alt="Woman" />
                </Grid>
                <Grid item lg={6}>
                  <StyledHeader>Real people, real progress</StyledHeader>
                  <StyledText>
                    “Vicki helped me. From the application to the approval, to
                    the funding. She was with me through the whole process. She
                    walked me through everything I needed to know and submit.”
                  </StyledText>
                  <StyledNameTag>— Becky C. member since 2021</StyledNameTag>
                </Grid>
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
        <Grid container justifyContent="center">
          <Grid item lg={8}>
            <div className="PaginationWrapper">
              <div className="swiper-button-prev">
                <img src={prevImg} alt="" />
              </div>
              <div className="swiper-button-next">
                <img src={nextImg} alt="" />
              </div>
            </div>
          </Grid>
        </Grid>

      </Box>
    </div>
  );
}

export default Hero;
