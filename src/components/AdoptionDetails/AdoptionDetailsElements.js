import styled from "styled-components";

export const AdoptionContainer = styled.div`
  padding: 50px 0;
  background-color: #f9f9f9;
  @media screen and (max-width: 768px) {
    padding: 50px 0;
    height: 1100px;
  }
  @media screen and (max-width: 600px) {
    height: 2200px;
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

export const AdoptionRow = styled.div`
  display: grid;
  grid-auto-columns: minimax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col2 col1";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col2" "col1";
  }
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

export const ImgWrap = styled.div`
  background-color: #000;
`;

export const Img = styled.img`
  max-width: 600px;
  height: 600px;

  margin: 0 0 10px 0;
  padding-right: 0;

  @media screen and (max-width: 1700px) {
    max-width: 550px;
    height: 550px;
  }

  @media screen and (max-width: 1180px) {
    max-width: 500px;
    height: 500px;
  }

  @media screen and (max-width: 530px) {
    max-width: 100%;
    height: auto;
  }
`;
export const InfoWrap = styled.div`
  color: #000;
`;
export const TextWrapper = styled.div`
  width: 800px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 1700px) {
    width: 700px;
  }
  @media screen and (max-width: 1540px) {
    width: 650px;
  }
  @media screen and (max-width: 1450px) {
    width: 600px;
  }
  @media screen and (max-width: 1280px) {
    width: 500px;
  }
  @media screen and (max-width: 1180px) {
    width: 400px;
  }
  @media screen and (max-width: 1070px) {
    width: 300px;
  }
  @media screen and (max-width: 970px) {
    width: 200px;
  }
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  letter-spacing: 1px;

  margin-bottom: 16px;

  @media screen and (max-width: 1180px) {
    font-size: 18px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 1.1;
  font-weight: 600;
  color: #000;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 24px;
  color: "#000";
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ButtonContact = styled.button`
  border-radius: 50px;
  color: #fff;
  background-color: #dec26f;
  white-space: nowrap;
  padding: 12px 12px;
  margin-top: 24px;
  margin-bottom: 12px;
  margin-left: 0px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  justify-content: flex-end;
  align-items: flex-end;
  text-decoration: none;
`;

export const ContactText = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;
