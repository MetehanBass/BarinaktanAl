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
    width: 65%;
  }
  @media screen and (max-width: 400px) {
    max-width: 60%;
  }
`;
