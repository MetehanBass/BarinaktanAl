import styled from "styled-components";
import background from "../../images/background.jpg";

export const AdoptionContainer = styled.div`
  padding: 50px 0;
  color: #fff;
  /* background-image: url("${background}");
  background-size: 250%; */
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

export const PetWrapper = styled.div`
  display: grid;
  grid-auto-rows: minimax(auto, 1fr);
  align-items: center;
  transition: all 0.2s ease-in-ease-out;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

export const FormWrapper = styled.div`
  max-height: 0px;
  align-items: center;
  display: flex;
`;

export const AdvertWrapper = styled.div`
  margin-top: -90px;

  @media screen and (max-width: 1012px) {
    margin-top: 0px;
  }

  @media screen and (max-width: 600px) {
    margin-top: 90px;
  }
`;

export const ButtonFilter = styled.button`
  border-radius: 50px;
  color: #fff;
  background-color: #dec26f;
  white-space: nowrap;
  padding: 12px 12px;
  /* background: transparent; */
  margin-top: 12px;
  margin-bottom: 12px;
  margin-left: 8px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const ButtonPopover = styled.button`
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  color: #000;
  justify-content: center;
  padding: 12px 12px;
  align-items: center;
  outline: none;
  font-size: 20px;

  transition: all 0.2s ease-in-ease-out;

  &:hover {
    background-color: #dec26f;
    transition: all 0.2s ease-in-out;
  }
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
