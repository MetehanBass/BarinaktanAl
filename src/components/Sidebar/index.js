import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink href="/sahiplen" onClick={toggle}>
            Sahiplen
          </SidebarLink>
          <SidebarLink to="shelters" onClick={toggle}>
            Anlaşmalı Barınaklarımız
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Hizmetlerimiz
          </SidebarLink>
          <SidebarLink href="/bagis" onClick={toggle}>
            Bağış Yap
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
