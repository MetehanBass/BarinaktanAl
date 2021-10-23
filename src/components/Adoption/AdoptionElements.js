import styled from "styled-components";

export const AdoptionContainer = styled.div`
  padding: 50px 0;
  color: #fff;
  background: "#f9f9f9";

  @media screen and (max-width: 768px) {
    padding: 50px 0;
    height: 1100px;
  }
  @media screen and (max-width: 600px) {
    height: 2000px;
  }
  @media screen and (max-width: 380px) {
    height: 2200px;
  }
`;

export const AdoptionWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const PetWrapper = styled.div`
  display: grid;
  grid-auto-rows: minimax(auto, 1fr);
  align-items: center;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7ffa" : "#000")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#000" : "#f7ffa")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const PagiRow = styled.div`
  margin-left: 35%;

  @media screen and (max-width: 768px) {
    width: 420px;
    margin-top: 5%;
    margin-left: 30%;
  }

  @media screen and (max-width: 670px) {
    width: 300px;
    margin-top: 5%;
    margin-left: 25%;
  }

  @media screen and (max-width: 380px) {
    width: 200px;
    margin-top: 5%;
    margin-left: 20%;
  }
`;
