import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              barınaktan Al
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks>Sahiplen</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>Anlaşmalı Barınaklarımız</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>Hizmetlerimiz</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks>Bağış Yap</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn></NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
