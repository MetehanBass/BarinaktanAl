import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getPets } from "../redux/feature/petSlice";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ScreenLoader from "./Loader/ScreenLoader";

const SmWidgetContainer = styled.div`
  flex: 1;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-right: 20px;
`;
const SmWidgetTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
`;
const SmWidgetImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const SmWidgetList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  .SmWidgetListItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
  }
`;
const SmWidgetUser = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  .SmWidgetUsername {
    font-weight: 600;
  }
  .SmWidgetUserTitle {
    font-weight: 300;
  }
`;
const SmWidgetButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
  .SmWidgetIcon {
    font-size: 16px !important;
    margin-right: 5px;
  }
`;

const SmWidget = () => {
  const { pets, loading } = useSelector((state) => ({ ...state.pet }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPets());
  }, []);

  const doubled = pets.map((pet) => pet);

  return (
    <SmWidgetContainer>
      <SmWidgetTitle>Yeni Hayvanlar</SmWidgetTitle>
      {loading ? (
        <ScreenLoader />
      ) : (
        <SmWidgetList>
          {pets &&
            pets
              .slice(-5) // last 5 pet
              .reverse() // new -> top of list
              .map((pet) => (
                <li key={pet.id} className="SmWidgetListItem">
                  <SmWidgetImg src={pet.imageFile} alt={pet.name} />
                  <SmWidgetUser>
                    <span className="SmWidgetUsername">{pet.name}</span>
                    <span className="SmWidgetUserTitle">{pet.shelter}</span>
                  </SmWidgetUser>
                  <Link to={"/new_pet/" + pet._id}>
                    <SmWidgetButton>
                      <ArrowForwardIcon className="SmWidgetIcon" />
                      Git
                    </SmWidgetButton>
                  </Link>
                </li>
              ))}
        </SmWidgetList>
      )}
    </SmWidgetContainer>
  );
};

export default SmWidget;
