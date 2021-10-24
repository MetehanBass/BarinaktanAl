import styled from "styled-components";

export const DonateContainer = styled.div`
  height: 1300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;

  @media screen and (max-width: 768px) {
    height: 1300px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const DonateWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const DonateCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 540px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 480px) {
    max-width: 180px;
  }
  @media screen and (max-width: 375px) {
    max-width: 150px;
  }

  @media screen and (max-width: 325px) {
    max-width: 130px;
  }
`;

export const ChartWrapper = styled.div`
  margin-top: 20px;
`;

export const ChartP = styled.p`
  font-size: 10px;
  margin-bottom: 10px;
`;

export const DonateIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;

  @media screen and (max-width: 375px) {
    height: 150px;
    width: 150px;
  }
  @media screen and (max-width: 321px) {
    height: 130px;
    width: 130px;
  }
`;

export const DonateH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 32px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-top: -64px;
  }
  @media screen and (max-width: 400px) {
    font-size: 1.5rem;
    margin-top: 0px;
  }
`;

export const DonateH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const DonateP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const ChartButton = styled.button`
  border-radius: 50px;
  background: #01bf71;

  padding: 10px 16px;
  color: #fff;
  margin-top: 15px;
  font-size: 12px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-left: 15px;
`;
export const DonateCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 540px;
  padding: 30px;
`;

export const DonateForm = styled.form`
  margin-top: 25px;
`;

export const FormRow = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const DonateButton = styled.a`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 14px 48px;
  color: #fff;
  margin-top: 45px;
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
