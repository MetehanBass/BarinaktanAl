import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDonates } from "../redux/feature/donateSlice";
import styled from "styled-components";

const LgWidgetContainer = styled.div`
  flex: 2;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;
const LgWidgetTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;
const LgWidgetButton = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor || "#ebf1fe"};
  color: ${(props) => props.fdColor || "#2a7ade"};
`;
const LgWidgetTable = styled.table`
  width: 100%;
  border-spacing: 20px;
`;
const LgWidgetTh = styled.th`
  text-align: left;
`;
const LgWidgetUser = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const LightTd = styled.td`
  font-weight: 300;
`;

const LgWidget = () => {
  const { donates, loading } = useSelector((state) => ({ ...state.donate }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDonates());
  }, []);

  return (
    <LgWidgetContainer>
      <LgWidgetTitle>Son Bağışlar</LgWidgetTitle>
      <LgWidgetTable>
        <tr>
          <LgWidgetTh>Bağışçı</LgWidgetTh>
          <LgWidgetTh>Tarih</LgWidgetTh>
          <LgWidgetTh>Miktar</LgWidgetTh>
          <LgWidgetTh>Telefon Numarası</LgWidgetTh>
          <LgWidgetTh>E-Posta</LgWidgetTh>
        </tr>
        {donates &&
          donates
            .slice(-10) // last 5 pet
            .reverse() // new -> top of list
            .map((donate) => (
              <tr key={donate.id}>
                <LgWidgetUser>
                  <span>{donate.donaterName}</span>
                </LgWidgetUser>
                <LightTd>{donate.createdAt}</LightTd>
                <LightTd>{donate.totalPrice}</LightTd>
                <LightTd>{donate.donaterPhone}</LightTd>

                <td>
                  <LgWidgetButton
                    bgColor={donate.bgColor}
                    fdColor={donate.fdColor}
                  >
                    {donate.donaterEmail}
                  </LgWidgetButton>
                </td>
              </tr>
            ))}
      </LgWidgetTable>
    </LgWidgetContainer>
  );
};

export default LgWidget;
