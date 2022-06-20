import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { ArrowUpward } from "@material-ui/icons";
import styled from "styled-components";
import { featuredData } from "../../dummyData";
import { getShelters } from "../../redux/feature/shelterSlice";
import { getPets } from "../../redux/feature/petSlice";
import { getDonates } from "../../redux/feature/donateSlice";
import ScreenLoader from "../Loader/ScreenLoader";

const FeaturedContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const FeaturedItem = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const FeaturedTitle = styled.span`
  font-size: 20px;
`;
const FeaturedMoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
  .featuredMoney {
    font-size: 30px;
    font-weight: 600;
  }
  .featuredMoneyRate {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .featuredIcon {
    font-size: 14px;
    margin-left: 5px;
    color: green;
  }
`;
const FeaturedSub = styled.span`
  font-size: 15px;
  color: gray;
`;

const Featured = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCalculated, setCalculated] = useState(false);
  const { pets, loading: petsLoading } = useSelector((state) => ({
    ...state.pet,
  }));
  const { shelters, loading: sheltersLoading } = useSelector((state) => ({
    ...state.shelter,
  }));
  const { donates, loading: donatesLoading } = useSelector((state) => ({
    ...state.donate,
  }));
  const dispatch = useDispatch();

  const _shouldRenderLoading =
    petsLoading || sheltersLoading || donatesLoading || !isCalculated;

  useEffect(() => {
    dispatch(getPets());
    dispatch(getShelters());
    dispatch(getDonates());
  }, []);

  React.useEffect(() => {
    if (donates.length) {
      let _totalPrice = 0;
      for (let { totalPrice: donateTotalPrice } of donates) {
        _totalPrice += Number(donateTotalPrice);
      }
      setTotalPrice(_totalPrice);
      setCalculated(true);
    }
  }, [donates.length]);

  const featuredData = [
    {
      title: "Kayıtlı Hayvan",
      qty: pets.length,
      qtyRate: "+" + pets.length,
    },
    { title: "Kayıtlı Barınak", qty: shelters.length },
    { title: "Bağış Miktarı (TL)", qty: `₺ ${totalPrice}`, qtyRate: "+8.4 %" },
  ];

  return (
    <FeaturedContainer>
      {featuredData &&
        featuredData.map((item, index) => (
          <FeaturedItem key={index}>
            <FeaturedTitle>{item.title}</FeaturedTitle>
            <FeaturedMoneyContainer>
              {_shouldRenderLoading ? (
                <ScreenLoader />
              ) : (
                <span className="featuredMoney">{item.qty}</span>
              )}

              <span className="featuredMoneyRate">
                {item.qtyRate} <ArrowUpward className="featuredIcon" />
              </span>
            </FeaturedMoneyContainer>
            <FeaturedSub>Geçen ay ile karşılaştırmasıdır</FeaturedSub>
          </FeaturedItem>
        ))}
    </FeaturedContainer>
  );
};

export default Featured;
