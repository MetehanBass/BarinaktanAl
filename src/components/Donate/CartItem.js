import React from "react";
import { useDispatch } from "react-redux";

import Icon from "../../images/cat_dog_food.png";
import { increase, decrease } from "../../redux/feature/cartSlice";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

import {
  DonateCard,
  DonateIcon,
  DonateH2,
  DonateP,
  ChartWrapper,
  ChartP,
  CartButton,
  Amount,
} from "./DonateElements";

const CartItem = ({ id, title, price, amount, singleTotal }) => {
  const dispatch = useDispatch();

  return (
    <DonateCard>
      <DonateIcon src={Icon} />
      <DonateH2>{title}</DonateH2>
      <DonateP>₺{price}</DonateP>
      <ChartWrapper>
        <ChartP>1Kg Fiyatıdır.</ChartP>
        <CartButton>
          {amount === 0 ? (
            <h2>
              <FaMinusCircle />
            </h2>
          ) : (
            <h2 style={{ cursor: "pointer" }}>
              <FaMinusCircle onClick={() => dispatch(decrease(id))} />
            </h2>
          )}

          <Amount>&nbsp; {amount}&nbsp;&nbsp; </Amount>
          <h2>
            <FaPlusCircle
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(increase(id))}
            />{" "}
          </h2>
        </CartButton>
      </ChartWrapper>
    </DonateCard>
  );
};

export default CartItem;
