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
