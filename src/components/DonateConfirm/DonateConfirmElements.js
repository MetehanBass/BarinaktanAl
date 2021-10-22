import styled from "styled-components";

export const DonateConfirmContainer = styled.div`
  min-height: 1000px;
  display: flex;
  flex-direction: column;

  align-items: center;
  background: #f9f9f9;

  @media screen and (max-width: 768px) {
    height: 1000px;
  }
  @media screen and (max-width: 480px) {
    height: 1000px;
  }
`;

export const DonateConfirmWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  margin-top: 4%;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const DonateConfirmCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-ease-out;

  &:hover {
    transition: all 0.2s ease-in-out;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }

  @media screen and (max-width: 415px) {
    max-width: 330px;
  }
  @media screen and (max-width: 350px) {
    max-width: 270px;
  }
`;

export const TextWrapper = styled.div`
  width: 444px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 480px) {
    width: 100%;
  }

  @media screen and (max-width: 415px) {
    max-width: 330px;
  }
  @media screen and (max-width: 350px) {
    max-width: 270px;
  }
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
  font-size: 24px;
  border-bottom: 1px solid #dcdcdc;
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

export const Info = styled.p`
  max-width: 440px;
  font-size: 12px;
  line-height: 24px;
  color: "#000";
`;
