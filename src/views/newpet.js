import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { toast } from "react-toastify";
import ChipInput from "material-ui-chip-input";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  checkPetByPetId,
  createPet,
  updatePet,
  resetPet,
} from "../redux/feature/petSlice";
import { Input } from "reactstrap";
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
import { getShelters } from "../redux/feature/shelterSlice";

const NewPetContainer = styled.div`
  display: flex;
  flex: 4;
  background-color: #f9f9f9;
`;
const PetLeft = styled.div`
  flex: 1;
`;
const ImageContainer = styled.div`
  flex: 3;
`;
const Preview = styled.div`
  margin-top: 50px;
  margin-left: 10%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  img {
    max-width: 650px;
    max-height: 650px;
    object-fit: fill;
  }
  button {
    cursor: pointer;
    max-width: 540px;
    padding: 15px;
    background-color: red;
    color: white;
    border: none;
    font-weight: 600;
  }
`;

const initialState = {
  name: "",
  petId: "",
  shelter: "",
  shelterId: "",
  age: "",
  type: "",
  breed: "",
  gender: "",
  isBarren: "",
  diseases: [],
};

const NewPet = () => {
  const [petData, setPetData] = useState(initialState);
  const [existingPetErr, setExistingPetErr] = useState(undefined);
  const [diseaseErrMsg, setDiseaseErrMsg] = useState(null);
  const { petShelter } = useSelector((state) => ({ ...state.shelter }));
  const {
    error,
    pets,
    pet: existingPet,
    loading,
  } = useSelector((state) => ({
    ...state.pet,
  }));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    name,
    petId,
    shelter,
    age,
    type,
    breed,
    gender,
    isBarren,
    diseases,
    imageFile,
  } = petData;
  const { id } = useParams();

  const { shelters } = useSelector((state) => ({ ...state.shelter }));

  useEffect(() => {
    dispatch(getShelters());
  }, []);

  useEffect(() => {
    if (id) {
      const singlePet = pets.find((pet) => pet._id === id);
      setPetData({ ...singlePet });
    } else {
      setPetData(initialState);
    }
  }, [id]);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!diseases.length) {
      setDiseaseErrMsg(
        "Hastalıkları giriniz, eğer yoksa `Hastalık Yok` olarak giriniz. "
      );
    }
    if (
      name &&
      shelter &&
      petId &&
      age &&
      type &&
      breed &&
      isBarren &&
      diseases &&
      gender
    ) {
      const updatedPetData = { ...petData };
      if (!id) {
        dispatch(createPet({ updatedPetData, navigate, toast }));
      } else {
        dispatch(updatePet({ id, updatedPetData, toast, navigate }));
      }
      handleClear();
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setPetData({ ...petData, [name]: value });
  };

  const handleAddDisease = (disease) => {
    setDiseaseErrMsg(null);
    setPetData({ ...petData, diseases: [...petData.diseases, disease] });
  };
  const handleDeleteDisease = (deleteDisease) => {
    setPetData({
      ...petData,
      diseases: petData.diseases.filter((disease) => disease !== deleteDisease),
    });
  };

  const onCheckPetByPetId = async () => {
    if (petId && id === undefined) {
      dispatch(checkPetByPetId(petId));
    } else {
      setExistingPetErr(undefined);
    }
  };

  useEffect(() => {
    if (petId === "") {
      dispatch(resetPet());
    }
  }, []);

  useEffect(() => {
    if (id || petId === "") {
      setExistingPetErr(undefined);
    }
  }, [id, petId]);

  useEffect(() => {
    if (Object.keys(existingPet).length && id === undefined) {
      setExistingPetErr("Hayvan kodu kullanımda");
    }
  }, [existingPet, id]);

  useEffect(
    () => () => {
      dispatch(resetPet());
    },
    []
  );

  const handleClear = () => {
    setPetData({
      name: "",
      petId: "",
      shelter: "",
      age: "",
      type: "",
      breed: "",
      gender: "",
      isBarren: "",
      diseases: [],
    });
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
            <MDBCard alignment="center" style={{ backgroundColor: "#f9f9f9" }}>
              <h5>{id ? "Hayvanı Güncelle" : "Hayvan Ekle"}</h5>
              <MDBCardBody style={{ backgroundColor: "#f9f9f9" }}>
                <MDBValidation
                  onSubmit={handleSubmit}
                  className="row g-3"
                  noValidate
                >
                  <div className="col-md-6">
                    <label>Hayvan İsmi</label>
                    <MDBInput
                      placeholder="İsim Giriniz"
                      type="text"
                      value={name || ""}
                      name="name"
                      onChange={onInputChange}
                      className="form-control"
                      required
                      invalid
                      validation="İsim giriniz."
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Hayvan Kodu</label>
                    <MDBInput
                      placeholder="Hayvan Kodu Giriniz."
                      value={petId}
                      name="petId"
                      disabled={id !== undefined}
                      onBlur={onCheckPetByPetId}
                      type="text"
                      onChange={onInputChange}
                      className="form-control"
                      invalid
                      required
                      validation={"Hayvan Kodu Giriniz."}
                    />
                    {existingPetErr && (
                      <div className="diseaseErrMsg">{existingPetErr}</div>
                    )}
                  </div>
                  <div className="col-md-12">
                    <label>Barınak İsmi</label>
                    <Input
                      type="select"
                      name="shelter"
                      onChange={onInputChange}
                      id="exampleSelect"
                      required
                      value={shelter}
                      validation="Barınak İsmi Giriniz."
                    >
                      <option value="" selected disabled hidden>
                        Barınak Seç
                      </option>
                      {shelters &&
                        shelters.map((shelters) => (
                          <option value={shelters.name} name="shelter">
                            {shelters.name}
                          </option>
                        ))}
                    </Input>
                  </div>
                  <div className="col-md-6">
                    <label>Yaş</label>
                    <Input
                      type="select"
                      name="age"
                      value={age}
                      onChange={onInputChange}
                      id="exampleSelect"
                      required
                      validation="Barınak İsmi Giriniz."
                    >
                      <option value="" selected disabled hidden>
                        Yaş Seç
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                    </Input>
                  </div>
                  <div className="col-md-6">
                    <label>Tür</label>
                    <Input
                      type="select"
                      name="type"
                      value={type}
                      onChange={onInputChange}
                      id="exampleSelect"
                      required
                      validation="Tür giriniz."
                    >
                      <option value="" selected disabled hidden>
                        Tür Seç
                      </option>
                      <option value="Kedi">Kedi</option>
                      <option value="Köpek">Köpek</option>
                    </Input>
                  </div>

                  <div className="col-md-12">
                    <label>Cins</label>
                    <MDBInput
                      placeholder="Cins giriniz."
                      value={breed}
                      name="breed"
                      type="text"
                      onChange={onInputChange}
                      className="form-control"
                      required
                      invalid
                      validation="Cins Giriniz."
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Kısır mı?</label>
                    <Input
                      type="select"
                      name="isBarren"
                      value={isBarren}
                      onChange={onInputChange}
                      id="exampleSelect"
                      required
                      validation="Kısır/Kısır Değil Belirtiniz."
                    >
                      <option value="" selected disabled hidden>
                        Kısır mı?
                      </option>
                      <option value="Kısır">Kısır</option>
                      <option value="Kısır Değil">Kısır Değil</option>
                    </Input>
                  </div>
                  <div className="col-md-6">
                    <label>Cinsiyet</label>
                    <Input
                      type="select"
                      name="gender"
                      value={gender}
                      onChange={onInputChange}
                      id="exampleSelect"
                      required
                      validation="Cinsiyet Giriniz."
                    >
                      <option value="" selected disabled hidden>
                        Cinsiyet Seç
                      </option>
                      <option value="Erkek">Erkek</option>
                      <option value="Dişi">Dişi</option>
                    </Input>
                  </div>

                  <div className="col-md-12">
                    <label>Hastalıklar</label>
                    <ChipInput
                      name="diseases"
                      variant="outlined"
                      placeholder="Hastalıkları giriniz."
                      fullWidth
                      value={diseases}
                      onAdd={(disease) => handleAddDisease(disease)}
                      onDelete={(disease) => handleDeleteDisease(disease)}
                    />
                    {diseaseErrMsg && (
                      <div className="diseaseErrMsg">{diseaseErrMsg}</div>
                    )}
                  </div>
                  <div className="d-flex justify-content-start">
                    <FileBase
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) =>
                        setPetData({ ...petData, imageFile: base64 })
                      }
                    />
                  </div>
                  <div className="col-12">
                    <MDBBtn
                      disabled={existingPetErr !== undefined}
                      style={{ width: "100%" }}
                    >
                      {id ? "Güncelle" : "Oluştur"}
                    </MDBBtn>
                    <MDBBtn
                      style={{ width: "100%" }}
                      className="mt-2"
                      color="danger"
                      onClick={handleClear}
                    >
                      Temizle
                    </MDBBtn>
                  </div>
                </MDBValidation>
              </MDBCardBody>
            </MDBCard>
          </PetLeft>
          <ImageContainer>
            <Preview>
              {imageFile && <img src={imageFile} alt="preview" />}
            </Preview>
          </ImageContainer>
        </NewPetContainer>
      </div>
    </>
  );
};
export default NewPet;
