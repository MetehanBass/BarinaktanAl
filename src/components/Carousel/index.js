import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img from "../../images/svg-7.svg";
import img1 from "../../images/svg-6.svg";
import img2 from "../../images/svg-5.svg";
import { CarouselWrapper, ImgWrapper } from "./CarouselElements";

export default function CarouselComponent() {
  return (
    <CarouselWrapper>
      <Carousel useKeyboardArrows>
        <ImgWrapper>
          <img src={img} alt="deneme" />
        </ImgWrapper>
        <ImgWrapper>
          <img src={img1} alt="deneme" />
        </ImgWrapper>
        <ImgWrapper>
          <img src={img2} alt="deneme" />
        </ImgWrapper>
        <ImgWrapper>
          <img src={img2} alt="deneme" />
        </ImgWrapper>
        <ImgWrapper>
          <img src={img2} alt="deneme" />
        </ImgWrapper>
        <ImgWrapper>
          <img src={img2} alt="deneme" />
        </ImgWrapper>
      </Carousel>
    </CarouselWrapper>
  );
}
