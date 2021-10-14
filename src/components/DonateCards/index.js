import React from "react";
import Icon1 from "../../images/svg-4.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-6.svg";

import {
  DonateCardsContainer,
  DonateCardsH1,
  DonateCardsWrapper,
  DonateCardsCard,
  DonateCardsIcon,
  DonateCardsH2,
  DonateCardsP,
  DonateButton,
} from "./DonateCardsElements";

const DonateCards = () => {
  return (
    <DonateCardsContainer id="DonateCards">
      <DonateCardsH1>Nasıl Bağış Yaparım?</DonateCardsH1>
      <DonateCardsWrapper>
        <DonateCardsCard>
          <DonateCardsIcon src={Icon1} />
          <DonateCardsH2>Barınağını seç</DonateCardsH2>
          <DonateCardsP>Bağışta bulunmak istediğin barınağı seç.</DonateCardsP>
        </DonateCardsCard>
        <DonateCardsCard>
          <DonateCardsIcon src={Icon2} />
          <DonateCardsH2>Mama miktarını seç</DonateCardsH2>
          <DonateCardsP>
            Bağışta bulunmak istediğin mama miktarını seç.
          </DonateCardsP>
        </DonateCardsCard>
        <DonateCardsCard>
          <DonateCardsIcon src={Icon3} />
          <DonateCardsH2>Bilgilerini gir ve tamamla</DonateCardsH2>
          <DonateCardsP>
            Bağışını tamamla ve belgen e-posta ile sana ulaşsın.
          </DonateCardsP>
        </DonateCardsCard>
      </DonateCardsWrapper>
      <DonateButton href="/bagis_yap">Bağış Yap</DonateButton>
    </DonateCardsContainer>
  );
};

export default DonateCards;
