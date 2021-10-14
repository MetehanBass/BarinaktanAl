import styled from "styled-components";

export const Button = styled.a`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01BF71" : "#01BF71")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#FFF" : "#FFF")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
