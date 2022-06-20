import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPet } from "../../redux/feature/petSlice";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./modal-style.css";
import { getShelters } from "../../redux/feature/shelterSlice";

import {
  AdoptionContainer,
  AdoptionWrapper,
  ImgWrap,
  Column1,
  Column2,
  AdoptionRow,
  Img,
  TopLine,
  Heading,
  Subtitle,
  TextWrapper,
  BtnWrap,
  ButtonContact,
  ContactText,
} from "./AdoptionDetailsElements";

const AdoptionDetailsPage = () => {
  const [open, setOpen] = useState(false);
  const { pet } = useSelector((state) => ({ ...state.pet }));
  const { shelters } = useSelector((state) => ({ ...state.shelter }));
  const [shelterData, setShelterData] = useState("");
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getShelters());
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(getPet(id));
    }
  }, [id]);

  useEffect(() => {
    const singleShelter = shelters.find(
      (shelter) => shelter.name === pet.shelter
    );
    setShelterData({ ...singleShelter });
  }, [pet]);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <AdoptionContainer>
        <AdoptionWrapper>
          <AdoptionRow>
            <Column1>
              <TextWrapper>
                <TopLine>{pet.shelter}</TopLine>
                <Heading>{shelterData.address}</Heading>
                <Subtitle>
                  İsim:<b> {pet.name}</b>
                </Subtitle>
                <Subtitle>
                  Yaş: <b>{pet.age}</b>
                </Subtitle>
                <Subtitle>
                  Cinsiyeti:<b> {pet.gender}</b>
                </Subtitle>
                <Subtitle>
                  Cinsi:<b> {pet.breed}</b>
                </Subtitle>
                <Subtitle>
                  Kısır:<b> {pet.isBarren}</b>
                </Subtitle>
                <Subtitle>
                  Hastalık:
                  <b>
                    {pet &&
                      pet.diseases &&
                      pet.diseases.map((item) => `${item} `)}
                  </b>
                </Subtitle>
                <Subtitle>
                  Hayvan Kodu:<b> {pet.petId}</b>
                </Subtitle>
                <BtnWrap>
                  <ButtonContact onClick={onOpenModal}>
                    İletişime geç
                  </ButtonContact>

                  <Modal
                    open={open}
                    onClose={onCloseModal}
                    classNames={{
                      overlay: "customOverlay",
                      modal: "customModal",
                    }}
                    center
                  >
                    <ContactText>
                      Barınak Telefonu:<b> {shelterData.phone}</b>
                    </ContactText>
                    <ContactText>
                      Barınak E-postası:
                      <b> {shelterData.email}</b>
                    </ContactText>
                    <ContactText>
                      İlanda belirtilen <em>Hayvan Kodu</em> ile barınağa bu
                      dostumuzu sorabilirsiniz. Örneğin :<b> {pet.petId}</b>
                    </ContactText>
                  </Modal>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={pet.imageFile}></Img>
              </ImgWrap>
            </Column2>
          </AdoptionRow>
        </AdoptionWrapper>
      </AdoptionContainer>
    </>
  );
};

export default AdoptionDetailsPage;
