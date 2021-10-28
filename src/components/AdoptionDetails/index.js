import React, { useState } from "react";
import Cat from "../../images/svg-7.svg";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./modal-style.css";
import CarouselComponent from "../Carousel/index";

import {
  AdoptionContainer,
  AdoptionWrapper,
  ImgWrap,
  InfoWrap,
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

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <AdoptionContainer>
        <AdoptionWrapper>
          <AdoptionRow>
            <Column1>
              <TextWrapper>
                <TopLine>Antalya Konyaaltı Hayvan Barınağı</TopLine>
                <Heading>Konyaaltı/Antalya</Heading>
                <Subtitle>
                  İsim:<b> Yok</b>
                </Subtitle>
                <Subtitle>
                  Yaş: <b>3-5</b>
                </Subtitle>
                <Subtitle>
                  Cinsiyeti:<b> Erkek</b>
                </Subtitle>
                <Subtitle>
                  Cinsi:<b> Tekir</b>
                </Subtitle>
                <Subtitle>
                  Kısır:<b> Değil</b>
                </Subtitle>
                <Subtitle>
                  Hastalık:<b> Yok</b>
                </Subtitle>
                <Subtitle>
                  Hayvan Kodu:<b> KD9951</b>
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
                      Barınak Telefonu:<b> 0 242 653 35 53</b>
                    </ContactText>
                    <ContactText>
                      Barınak E-postası:
                      <b> konyaaltıbarınak@gmail.com</b>
                    </ContactText>
                    <ContactText>
                      İlanda belirtilen <em>Hayvan Kodu</em> ile barınağa bu
                      dostumuzu sorabilirsiniz. Örneğin :<b> KD9951</b>
                    </ContactText>
                  </Modal>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <CarouselComponent />
              </ImgWrap>
            </Column2>
          </AdoptionRow>
        </AdoptionWrapper>
      </AdoptionContainer>
    </>
  );
};

export default AdoptionDetailsPage;
