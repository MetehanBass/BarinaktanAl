import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { LocationSearching } from "@material-ui/icons";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import Chart from "../components/Chart";
import { productData } from "../dummyData";
import {
  ItemContainer,
  ItemTitleContainer,
  ItemUpdateButton,
} from "../components/StyledElements";
import styled from "styled-components";
import Navbar from "../components/AdminNavbar";
import Sidebar from "../components/AdminSidebar";
import { getShelter } from "../redux/feature/shelterSlice";

const UserContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
const TopLeftContainer = styled.div`
  flex: 1;
`;
const ShowUser = styled.div`
  flex: 2;
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const UpdateUser = styled.div`
  flex: 3;
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 20px;
`;
const ShowUserTop = styled.div`
  display: flex;
  align-items: center;
`;
const ShowUserBottom = styled.div`
  margin-top: 20px;
`;
const ShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const FontWeight = styled.span`
  font-weight: ${(props) => (props.bolder ? "600" : "300")};
`;
const UserShowTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: rgb(175, 170, 170);
`;
const UserShowInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  color: #444;
  .showIcon {
    font-size: 16px !important;
  }
  .showInfoTitle {
    margin-left: 10px;
  }
`;
const UpdateTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
const UpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const UpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  label {
    margin-bottom: 5px;
    font-size: 14px;
  }
  input {
    border: none;
    width: 250px;
    height: 30px;
    border-bottom: 1px solid gray;
    background: #f9f9f9;
  }
`;

const Pet = () => {
  const dispatch = useDispatch();
  const { shelter } = useSelector((state) => ({ ...state.shelter }));
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getShelter(id));
    }
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="home-container" style={{ display: "flex " }}>
        <Sidebar />
        <ItemContainer>
          <ItemTitleContainer>
            <h1>Detaylar</h1>
          </ItemTitleContainer>
          <UserContainer>
            <ShowUser>
              <ShowUserTop>
                <ShowTopTitle>
                  <FontWeight bolder>{shelter.name}</FontWeight>
                  <FontWeight>{shelter.city}</FontWeight>
                </ShowTopTitle>
              </ShowUserTop>
              <ShowUserBottom>
                <UserShowTitle>Detaylar</UserShowTitle>
                <UserShowInfo>
                  <PhoneIcon className="showIcon" />
                  <span className="showInfoTitle">{shelter.phone}</span>
                </UserShowInfo>
                <UserShowInfo>
                  <MailIcon className="showIcon" />
                  <span className="showInfoTitle">{shelter.email}</span>
                </UserShowInfo>
                <UserShowInfo>
                  <LocationSearching className="showIcon" />
                  <span className="showInfoTitle">{shelter.address}</span>
                </UserShowInfo>
              </ShowUserBottom>
            </ShowUser>
            <UpdateUser>
              <UpdateTitle>Düzenle</UpdateTitle>
              <UpdateForm>
                <div>
                  <UpdateItem>
                    <label>İsim</label>
                    <input type="text" placeholder={shelter.name} />
                  </UpdateItem>
                  <UpdateItem>
                    <label>Telefon</label>
                    <input type="text" placeholder={shelter.phone} />
                  </UpdateItem>
                  <UpdateItem>
                    <label>E-Posta</label>
                    <input type="text" placeholder={shelter.email} />
                  </UpdateItem>
                  <UpdateItem>
                    <label>Adres</label>
                    <input type="text" placeholder={shelter.address} />
                  </UpdateItem>

                  <ItemUpdateButton>Güncelle</ItemUpdateButton>
                </div>
              </UpdateForm>
            </UpdateUser>
          </UserContainer>
          <TopLeftContainer>
            <Chart
              data={productData}
              dataKey="Hayvan_Sayısı"
              title="Kayıtlı Hayvan Sayısı"
            />
          </TopLeftContainer>
        </ItemContainer>
      </div>
    </>
  );
};

export default Pet;
