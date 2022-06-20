import styled from "styled-components";
import Sidebar from "../components/AdminSidebar";
import Navbar from "../components/AdminNavbar";
import Featured from "../components/Featured";
import SmWidget from "../components/SmWidget";
import LgWidget from "../components/LgWidget";

const HomeContainer = styled.div`
  flex: 4;
  background-color: #f9f9f9;
`;

const HomeWidgets = styled.div`
  display: flex;
  margin: 20px;
`;

const Admin = () => {
  return (
    <>
      <Navbar />
      <div className="home-container" style={{ display: "flex " }}>
        <Sidebar />
        <HomeContainer>
          <Featured />
          <HomeWidgets>
            <SmWidget />
            <LgWidget />
          </HomeWidgets>
        </HomeContainer>
      </div>
    </>
  );
};

export default Admin;
