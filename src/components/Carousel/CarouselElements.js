import styled from "styled-components";

export const ImgWrapper = styled.div``;
export const CarouselWrapper = styled.div`
  min-width: 600px;
  height: 600px;

  margin: 0 0 10px 0;
  padding-right: 0;

  @media screen and (max-width: 430px) {
    min-width: 0px;
    max-width: 350px;
    height: auto;
  }
  @media screen and (max-width: 375px) {
    min-width: 0px;
    max-width: 340px;
    height: auto;
  }

  @media screen and (max-width: 320px) {
    min-width: 0px;
    max-width: 280px;
    height: auto;
  }
`;
