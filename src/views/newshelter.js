import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { LocationSearching } from "@material-ui/icons";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createShelter, updateShelter } from "../redux/feature/shelterSlice";
import {
  MDBCard,
  MDBCardBody,
  MDBValidation,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import styled from "styled-components";
import Navbar from "../components/AdminNavbar";
import Sidebar from "../components/AdminSidebar";
import { getPetsByShelter } from "../redux/feature/petSlice";
import { CircularProgress } from "@material-ui/core";

const NewPetContainer = styled.div`
  display: flex;
  flex: 4;

  background-color: #f9f9f9;
`;
const PetLeft = styled.div`
  flex: 1;
`;
const ShowUser = styled.div`
  flex: 2;
  padding: 030px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
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
const initialState = {
  name: "",
  phone: "",
  email: "",
  city: "",
  address: "",
};

const NewPet = () => {
  const [shelterData, setShelterData] = useState(initialState);
  const [animalTypeCount, setAnimalTypeCount] = useState({ cat: 0, dog: 0 });
  const { error, shelters, loading } = useSelector((state) => ({
    ...state.shelter,
  }));
  const {
    error: petsError,
    pets,
    loading: petsLoading,
  } = useSelector((state) => ({
    ...state.pet,
  }));

  const _shouldRenderLoading = petsLoading || loading;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, phone, email, city, address } = shelterData;
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const singleShelter = shelters.find((shelter) => shelter._id === id);
      setShelterData({ ...singleShelter });
    }
  }, [id]);

  useEffect(() => {
    if (pets?.length) {
      let catCount = 0;
      let dogCount = 0;
      pets.forEach((pet) => {
        if (pet.type === "Köpek") {
          dogCount += 1;
        }
        if (pet.type === "Kedi") {
          catCount += 1;
        }
        console.log("catCount,", catCount);
      });
      setAnimalTypeCount({ cat: catCount, dog: dogCount });
    }
  }, [pets?.length]);

  useEffect(() => {
    if (shelterData.name) {
      dispatch(getPetsByShelter(shelterData.name));
    }
  }, [shelterData.name]);

  useEffect(() => {
    if (error || petsError) {
      toast.error(error || petsError);
    }
  }, [error || petsError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone && email && city && address) {
      const updatedShelterData = { ...shelterData };
      if (!id) {
        dispatch(createShelter({ updatedShelterData, navigate, toast }));
      } else {
        dispatch(updateShelter({ id, updatedShelterData, toast, navigate }));
      }
      handleClear();
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setShelterData({ ...shelterData, [name]: value });
  };
  const handleClear = () => {
    setShelterData({ name: "", phone: "", email: "", city: "", address: "" });
  };

  return (
    <>
      <Navbar />
      <div
        className="home-container"
        style={{ display: "flex ", backgroundColor: "#f9f9f9" }}
      >
        <Sidebar />

        <NewPetContainer>
          <PetLeft
            style={{
              padding: "15px",
              maxWidth: "450px",
              alignContent: "center",
              marginTop: "20px",
            }}
          >
            <MDBCard
              alignment="center  "
              style={{ backgroundColor: "#f9f9f9" }}
            >
              <h5>{id ? "Barınağı Güncelle" : "Barınak Ekle"}</h5>
              <MDBCardBody style={{ backgroundColor: "#f9f9f9" }}>
                <MDBValidation
                  onSubmit={handleSubmit}
                  className="row g-3"
                  noValidate
                >
                  <div className="col-md-12">
                    <label>Barınak İsmi</label>
                    <MDBInput
                      placeholder="İsim Giriniz"
                      type="text"
                      value={name || ""}
                      name="name"
                      onChange={onInputChange}
                      className="form-control"
                      required
                      invalid
                      validation="Lütfen Barınak İsmi Giriniz."
                    />
                  </div>
                  <div className="col-md-12">
                    <label>Telefon Numarası</label>
                    <MDBInput
                      placeholder="Telefon numarası giriniz."
                      value={phone}
                      name="phone"
                      type="text"
                      onChange={onInputChange}
                      className="form-control"
                      required
                      invalid
                      validation="Telefon Numarası Giriniz."
                    />
                  </div>
                  <div className="col-md-12">
                    <label>E-Posta Adresi</label>
                    <MDBInput
                      placeholder="Telefon E-Posta adresi giriniz."
                      value={email}
                      name="email"
                      onChange={onInputChange}
                      className="form-control"
                      required
                      invalid
                      validation="Lütfen E-Posta Giriniz."
                    />
                  </div>
                  <div className="col-md-12">
                    <label>Şehir</label>
                    <MDBInput
                      placeholder="Telefon Şehir giriniz."
                      value={city}
                      name="city"
                      type="text"
                      onChange={onInputChange}
                      className="form-control"
                      required
                      invalid
                      validation="Lütfen Şehir   Giriniz."
                    />
                  </div>
                  <div className="col-md-12">
                    <MDBInput
                      placeholder="Adres Giriniz."
                      type="text"
                      value={address}
                      name="address"
                      onChange={onInputChange}
                      className="form-control"
                      required
                      invalid
                      textarea
                      rows={4}
                      validation="Lütfen Açık Adres Giriniz"
                    />
                  </div>
                  <div className="col-12">
                    <MDBBtn style={{ width: "100%" }}>
                      {id ? "Güncelle" : "Ekle"}
                    </MDBBtn>
                    <MDBBtn
                      style={{ width: "100%" }}
                      className="mt-2"
                      color="danger"
                      onClick={handleClear}
                    >
                      Sıfırla
                    </MDBBtn>
                  </div>
                </MDBValidation>
              </MDBCardBody>
            </MDBCard>
          </PetLeft>
          <div
            className="col-md-6"
            style={{
              marginLeft: "15%",
              padding: "15px",
              maxWidth: "450px",
              alignContent: "center",
              marginTop: "20px",
            }}
          >
            {_shouldRenderLoading && <CircularProgress />}
            {id && !_shouldRenderLoading && (
              <ShowUser>
                <ShowUserTop>
                  <ShowTopTitle>
                    <FontWeight bolder>{name}</FontWeight>
                    <FontWeight>{city}</FontWeight>
                  </ShowTopTitle>
                </ShowUserTop>
                <ShowUserBottom>
                  <UserShowTitle>Detaylar</UserShowTitle>
                  <UserShowInfo>
                    <PhoneIcon className="showIcon" />
                    <span className="showInfoTitle">{phone}</span>
                  </UserShowInfo>
                  <UserShowInfo>
                    <MailIcon className="showIcon" />
                    <span className="showInfoTitle">{email}</span>
                  </UserShowInfo>
                  <UserShowInfo>
                    <LocationSearching className="showIcon" />
                    <span className="showInfoTitle">{address}</span>
                  </UserShowInfo>
                  <UserShowInfo>
                    <LocationSearching className="showIcon" />
                    <span className="showInfoTitle">{`Barınaktaki köpek sayısı: ${animalTypeCount.dog}`}</span>
                  </UserShowInfo>
                  <UserShowInfo>
                    <LocationSearching className="showIcon" />
                    <span className="showInfoTitle">{`Barınaktaki kedi sayısı: ${animalTypeCount.cat}`}</span>
                  </UserShowInfo>
                </ShowUserBottom>
              </ShowUser>
            )}
          </div>
        </NewPetContainer>
      </div>
    </>
  );
};
export default NewPet;
