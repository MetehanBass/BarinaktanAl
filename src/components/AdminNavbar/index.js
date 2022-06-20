import React from "react";
import { Settings } from "@material-ui/icons";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setLogout } from "../../redux/feature/authSlice";

const NavbarContainer = styled.div`
  width: 100%;
  margin-top: 0px;
  height: 50px;
  background-color: #f9f9f9;
  position: sticky;
  top: 5px;
  z-index: 999;
`;
const NavbarWrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: black;
  cursor: pointer;
`;
const TopLeft = styled.div``;
const TopRight = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color: #555;
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setLogout());
  };

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <TopLeft>
          <Logo>Barınaktan Al Admin</Logo>
        </TopLeft>
        <TopRight>
          <IconContainer>
            <Settings />
          </IconContainer>
          <IconContainer>
            <a
              style={{ textDecoration: "none" }}
              onClick={handleLogout}
              href="/admin"
            >
              Çıkış Yap
            </a>
          </IconContainer>
        </TopRight>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
