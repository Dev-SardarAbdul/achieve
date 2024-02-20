import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  womanImg,
  nextImg,
  prevImg,
  ratingProgress,
  rating,
  trust,
} from "../../assets";
import {
  PaginationItem,
  PaginationWrapper,
  PilotWrapper,
  StyledHeader,
  StyledImage,
  StyledNameTag,
  StyledText,
} from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Virtual } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import { data } from "./data";

SwiperCore.use([Autoplay, Virtual]);

function Hero() {
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
          onSlideChange={(swiper) => {
            setActiveSlide(swiper.activeIndex + 1);
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Grid
                spacing={2}
                container
                justifyContent="center"
                alignItems="center"
              >
                <Grid item lg={6}>
                  <StyledImage src={item.image} alt="Woman" />
                </Grid>
                <Grid item lg={6}>
                  <StyledHeader>{item.header}</StyledHeader>
                  <StyledText>{item.text}</StyledText>
                  <StyledNameTag>{item.person}</StyledNameTag>
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
          className={` swiper-arrow`}
          draggable={false}
          onClick={() => {
            if (swiperRef.current) {
              swiperRef.current.slidePrev();
              const newActiveSlide = Math.max(activeSlide - 1, 1);
              setActiveSlide(newActiveSlide);
              updatePagination(newActiveSlide);
              if (disabledSlide === 3) {
                setDisabledSlide(null);
              }
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
          className={`swiper-arrow`}
          draggable={false}
          onClick={() => {
            if (swiperRef.current) {
              swiperRef.current.slideNext();
              const newActiveSlide = Math.min(activeSlide + 1, 3);
              setActiveSlide(newActiveSlide);
              updatePagination(newActiveSlide);
              if (disabledSlide === 1) {
                setDisabledSlide(null);
              }
            }
          }}
        />
      </div>
    </div>
  );
}

export default Hero;
