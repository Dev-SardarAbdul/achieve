import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { womanImg, nextImg, prevImg } from "../../assets";
import {
  PaginationItem,
  PaginationWrapper,
  StyledHeader,
  StyledImage,
  StyledNameTag,
  StyledText,
} from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Virtual } from "swiper/core";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Autoplay, Virtual]);

function Hero() {
  let swiperDemo = [1, 1, 1];
  const [disabledSlide, setDisabledSlide] = useState(1);
  const [activeSlide, setActiveSlide] = useState(1);
  const swiperRef = useRef();

  return (
    <div className="main-container">
      <Box sx={{ flexGrow: 1 }} marginTop={"5rem"}>
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onReachEnd={() => setDisabledSlide(3)}
          onReachBeginning={() => setDisabledSlide(1)}
          slidesPerView={1}
          watchSlidesVisibility={true}
          navigation={false}
        >
          {swiperDemo.map((item, index) => (
            <SwiperSlide key={index}>
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
      </Box>

      <div className="swiper-pagination-main-div">
        <img
          src={prevImg}
          alt="Swiper arrow"
          className={`${disabledSlide === 1 && "opacity-50"} swiper-arrow`}
          draggable={false}
          onClick={() => {
            swiperRef.current?.slidePrev();

            if (activeSlide > 1) {
              setActiveSlide((prev) => prev - 1);
            }

            if (disabledSlide === 3) {
              setDisabledSlide(null);
            }
          }}
        />

        <PaginationWrapper>
          <PaginationItem className={`${activeSlide === 1 && "active"}`} />
          <PaginationItem className={`${activeSlide === 2 && "active"}`} />
          <PaginationItem className={`${activeSlide === 3 && "active"}`} />
        </PaginationWrapper>

        <img
          src={nextImg}
          alt="Swiper arrow"
          className={`${disabledSlide === 3 && "opacity-50"} swiper-arrow`}
          draggable={false}
          onClick={() => {
            swiperRef.current?.slideNext();
            if (activeSlide < 3) {
              setActiveSlide((prev) => prev + 1);
            }
            if (disabledSlide === 1) {
              setDisabledSlide(null);
            }
          }}
        />
      </div>
    </div>
  );
}

export default Hero;
