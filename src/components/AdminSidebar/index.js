import React from "react";
import {
  LineStyle,
  PermIdentity,
  Storefront,
  LocalAtm,
  Assessment,
  Forum,
} from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const SidebarContainer = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: #f9f9f9;
  position: sticky;
  top: 50px;
`;
const SidebarWrapper = styled.div`
  padding: 20px;
  color: #555;
`;
const SidebarMenu = styled.div`
  margin-bottom: 10px;
`;
const SidebarTitle = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;
const SidebarList = styled.ul`
  list-style: none;
  padding: 5px;
`;
const SidebarListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  &:hover {
    background-color: rgb(240, 240, 255);
  }
`;
const sharedStyle = css`
  margin-right: 5px;
  font-size: 20px !important;
`;
const MyLineStyle = styled(LineStyle)`
  ${sharedStyle}
`;

const MyPermIdentity = styled(PermIdentity)`
  ${sharedStyle}
`;
const MyStorefront = styled(Storefront)`
  ${sharedStyle}
`;
const MyAssessment = styled(Assessment)`
  ${sharedStyle}
`;
const MyLocalAtm = styled(LocalAtm)`
  ${sharedStyle}
`;

const MyForum = styled(Forum)`
  ${sharedStyle}
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarTitle>Dashboard</SidebarTitle>
          <SidebarList>
            <Link to="/admin_dashboard" className="link">
              <SidebarListItem>
                <MyLineStyle />
                Anasayfa
              </SidebarListItem>
            </Link>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Menu</SidebarTitle>
          <SidebarList>
            <Link to="/pet_list" className="link">
              <SidebarListItem>
                <MyPermIdentity />
                Hayvanlar
              </SidebarListItem>
            </Link>
            <Link to="/new_pet" className="link">
              <SidebarListItem>
                <AddIcon />
                Hayvan Ekle
              </SidebarListItem>
            </Link>
            <Link to="/shelter_list" className="link">
              <SidebarListItem>
                <MyStorefront />
                Barınaklar
              </SidebarListItem>
            </Link>
            <Link to="/new_shelter" className="link">
              <SidebarListItem>
                <AddIcon />
                Barınak Ekle
              </SidebarListItem>
            </Link>
            <SidebarListItem>
              <MyAssessment />
              Galeri
            </SidebarListItem>
            <Link to="/donate_list" className="link">
              <SidebarListItem>
                <MyLocalAtm />
                Bağışlar
              </SidebarListItem>
            </Link>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>İletişim</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <MyForum />
              Mesajlar
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
