import React from "react";
import NumericInput from "react-numeric-input";

import Icon from "../../images/cat_dog_food.png";

import {
  DonateContainer,
  DonateH1,
  DonateWrapper,
  DonateCard,
  DonateIcon,
  DonateH2,
  DonateP,
  DonateButton,
  ChartWrapper,
  ChartP,
  ChartButton,
  DonateForm,
  FormRow,
} from "./DonateElements";
const index = () => {
  return (
    <DonateContainer id="Donate">
      <DonateH1>Nasıl Bağış Yaparım?</DonateH1>
      <DonateWrapper>
        <DonateCard>
          <DonateIcon src={Icon} />
          <DonateH2>Kuru Mama (Kedi)</DonateH2>
          <DonateP>₺15.00.</DonateP>
          <ChartWrapper>
            <ChartP>1Kg Fiyatıdır.</ChartP>
            <NumericInput
              className="form-control"
              value="1"
              min={0}
              max={100}
              step={1}
              precision={0}
              size={5}
              mobile
              required
              style={{
                input: {
                  border: "none",
                },
              }}
            />
            <ChartButton>Sepete Ekle</ChartButton>
          </ChartWrapper>
        </DonateCard>
        <DonateCard>
          <DonateIcon src={Icon} />
          <DonateH2>Kuru Mama (Köpek)</DonateH2>
          <DonateP>₺13.00</DonateP>
          <ChartWrapper>
            <ChartP>1Kg Fiyatıdır.</ChartP>
            <NumericInput
              className="form-control"
              value="1"
              min={0}
              max={100}
              step={1}
              precision={0}
              size={5}
              mobile
              required
              style={{
                input: {
                  border: "none",
                },
              }}
            />
            <ChartButton>Sepete Ekle</ChartButton>
          </ChartWrapper>
        </DonateCard>
      </DonateWrapper>
      <DonateForm></DonateForm>
      <DonateButton href="/bagis_yap">Bağış Yap</DonateButton>
    </DonateContainer>
  );
};

export default index;
