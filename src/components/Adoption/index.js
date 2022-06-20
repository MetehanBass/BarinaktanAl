import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PetCard from "./petCard";
import { useNavigate } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import {
  AdoptionContainer,
  AdoptionWrapper,
  FormWrapper,
  AdvertWrapper,
  PagiRow,
} from "./AdoptionElements";
import { Typography } from "@mui/material";
import {
  getPets,
  getPetsByPagination,
  searchPets,
} from "../../redux/feature/petSlice";
import ScreenLoader from "../Loader/ScreenLoader";
import { getShelters } from "../../redux/feature/shelterSlice";

const FETCH_COUNT = 12;

const AdoptionPage = () => {
  const { pets, loading, petsCount } = useSelector((state) => ({
    ...state.pet,
  }));
  const { shelters, loading: sheltersLoading } = useSelector((state) => ({
    ...state.shelter,
  }));
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [selectedShelterFilter, setSelectedShelterFilter] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getPetsByPagination({ count: FETCH_COUNT, page: 0, shelter: undefined })
    );
  }, []);

  useEffect(() => {
    dispatch(getShelters());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      dispatch(searchPets(search));
      navigate(`/sahiplen/search?searchQuery=${search}`);
    } else {
      dispatch(getPets());
      navigate(`/sahiplen`);
    }
  };

  const handleSearchByShelter = (e) => {
    console.log("e.taret.value", e.target.value);
    setSelectedShelterFilter(e.target.value);
    dispatch(
      getPetsByPagination({
        count: FETCH_COUNT,
        page: 0,
        shelter: e.target.value,
      })
    );
  };

  const onPageClick = (_, page) => {
    setPage(page);
    dispatch(
      getPetsByPagination({
        count: FETCH_COUNT,
        page: page - 1,
        shelter: selectedShelterFilter,
      })
    );
  };

  return (
    <>
      {loading ? (
        <ScreenLoader />
      ) : (
        <AdoptionContainer>
          <AdoptionWrapper>
            <FormWrapper>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Barınaklar
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedShelterFilter}
                  label="Age"
                  onChange={handleSearchByShelter}
                >
                  <MenuItem value={undefined}>{"Hepsini ara"}</MenuItem>
                  {shelters.map((x) => (
                    <MenuItem value={x.name}>{x.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </FormWrapper>
            {pets.length === 0 && (
              <Typography variant="h4" color="ButtonText">
                {`No data available with the given search parameter ${search}`}
              </Typography>
            )}
            <AdvertWrapper>
              <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box gridColumn="span 12">
                  <Grid
                    container
                    spacing={2}
                    columns={24}
                    style={{ marginTop: "4%" }}
                  >
                    {pets &&
                      pets.map((item, index) => (
                        <PetCard key={index} {...item} />
                      ))}
                  </Grid>
                </Box>
              </Box>
            </AdvertWrapper>
            <PagiRow>
              <Stack spacing={1}>
                <Pagination
                  page={page}
                  onChange={onPageClick}
                  count={Math.ceil(petsCount / FETCH_COUNT)}
                />
              </Stack>
            </PagiRow>
          </AdoptionWrapper>
        </AdoptionContainer>
      )}
    </>
  );
};

export default AdoptionPage;
