import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useState } from "react";

import Cat from "../../images/svg-7.svg";
import { BsFilterCircle } from "react-icons/bs";
import { BsSortDown } from "react-icons/bs";

import {
  AdoptionContainer,
  AdoptionWrapper,
  PetWrapper,
  FormWrapper,
  AdvertWrapper,
  PagiRow,
  ButtonFilter,
  ButtonPopover,
} from "./AdoptionElements";
import { Link, Popover } from "@mui/material";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const AdoptionPage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [sort, setSort] = useState("Varsayılan");
  const [openSort, setOpenSort] = React.useState(false);

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  const handleCloseSort = () => {
    setOpenSort(false);
  };

  const handleOpenSort = () => {
    setOpenSort(true);
  };
  console.log({ sort });
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <AdoptionContainer>
        <AdoptionWrapper>
          <FormWrapper>
            <ButtonPopover
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
            >
              <BsFilterCircle /> Filtrele
            </ButtonPopover>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <Typography sx={{ p: 2 }}>
                Filtrelemek istediğiniz özellikleri seçin.
              </Typography>
              <div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Tür
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Age"
                    defaultValue="Hepsi"
                  >
                    <MenuItem value={"Hepsi"} defaultValue>
                      Hepsi
                    </MenuItem>
                    <MenuItem value={"Köpek"}>Köpek</MenuItem>
                    <MenuItem value={"Kedi"}>Kedi</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Barınak
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Age"
                    defaultValue="Hepsi"
                  >
                    <MenuItem value={"Hepsi"}>Hepsi</MenuItem>
                    <MenuItem value={"Antalya Konyaaltı"}>
                      Antalya Konyaaltı Barınağı
                    </MenuItem>
                    <MenuItem value={"Fatih Yedikule"}>
                      Fatih Yedikule Barınağı
                    </MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Barınak
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Age"
                    defaultValue="Hepsi"
                  >
                    <MenuItem value={"Hepsi"}>Hepsi</MenuItem>
                    <MenuItem value={"Antalya Konyaaltı"}>
                      Antalya Konyaaltı Barınağı
                    </MenuItem>
                    <MenuItem value={"Fatih Yedikule"}>
                      Fatih Yedikule Barınağı
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
              <ButtonFilter>Filtrele</ButtonFilter>
            </Popover>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-controlled-open-select-label">
                <BsSortDown /> Sırala
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={openSort}
                onClose={handleCloseSort}
                onOpen={handleOpenSort}
                value={sort}
                label="Sort"
                onChange={handleChange}
              >
                <MenuItem value="Varsayılan">
                  <em>Varsayılan</em>
                </MenuItem>
                <MenuItem value="BARINAGA">Barınağa göre</MenuItem>
                <MenuItem value="CINSE">Cinse göre</MenuItem>
              </Select>
            </FormControl>
          </FormWrapper>
          <AdvertWrapper>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
              <Box gridColumn="span 12">
                <Grid container spacing={2} columns={24}>
                  <Grid item xs={24} sm={12} md={6}>
                    <PetWrapper>
                      <Paper
                        sx={{
                          p: 2,
                          margin: "auto",
                          maxWidth: 500,
                          flexGrow: 1,
                        }}
                      >
                        <Grid container spacing={2}>
                          <Grid item>
                            <ButtonBase
                              sx={{
                                width: 128,
                                height: 128,
                              }}
                            >
                              <Img alt="complex" src={Cat} />
                            </ButtonBase>
                          </Grid>
                          <Grid item xs={12} sm container>
                            <Grid
                              item
                              xs
                              container
                              direction="column"
                              spacing={2}
                            >
                              <Grid item xs>
                                <Typography
                                  gutterBottom
                                  variant="subtitle1"
                                  component="div"
                                >
                                  <b>Kedi</b>
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                  Cinsi: Tekir
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Yaşı: 2
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Link
                                  href="/sahiplen_detay"
                                  variant="body2"
                                  underline="none"
                                >
                                  Detaylar
                                </Link>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Paper>
                    </PetWrapper>
                  </Grid>
                  <Grid item xs={24} sm={12} md={6}>
                    <PetWrapper>
                      <Paper
                        sx={{
                          p: 2,
                          margin: "auto",
                          maxWidth: 500,
                          flexGrow: 1,
                        }}
                      >
                        <Grid container spacing={2}>
                          <Grid item>
                            <ButtonBase sx={{ width: 128, height: 128 }}>
                              <Img alt="complex" src={Cat} />
                            </ButtonBase>
                          </Grid>
                          <Grid item xs={12} sm container>
                            <Grid
                              item
                              xs
                              container
                              direction="column"
                              spacing={2}
                            >
                              <Grid item xs>
                                <Typography
                                  gutterBottom
                                  variant="subtitle1"
                                  component="div"
                                >
                                  <b>Kedi</b>
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                  Cinsi: Tekir
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Yaşı: 2
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography
                                  sx={{ cursor: "pointer" }}
                                  variant="body2"
                                >
                                  Detaylar
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Paper>
                    </PetWrapper>
                  </Grid>
                  <Grid item xs={24} sm={12} md={6}>
                    <PetWrapper>
                      <Paper
                        sx={{
                          p: 2,
                          margin: "auto",
                          maxWidth: 500,
                          flexGrow: 1,
                        }}
                      >
                        <Grid container spacing={2}>
                          <Grid item>
                            <ButtonBase sx={{ width: 128, height: 128 }}>
                              <Img alt="complex" src={Cat} />
                            </ButtonBase>
                          </Grid>
                          <Grid item xs={12} sm container>
                            <Grid
                              item
                              xs
                              container
                              direction="column"
                              spacing={2}
                            >
                              <Grid item xs>
                                <Typography
                                  gutterBottom
                                  variant="subtitle1"
                                  component="div"
                                >
                                  <b>Kedi</b>
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                  Cinsi: Tekir
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Yaşı: 2
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography
                                  sx={{ cursor: "pointer" }}
                                  variant="body2"
                                >
                                  Detaylar
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Paper>
                    </PetWrapper>
                  </Grid>
                  <Grid item xs={24} sm={12} md={6}>
                    <PetWrapper>
                      <Paper
                        sx={{
                          p: 2,
                          margin: "auto",
                          maxWidth: 500,
                          flexGrow: 1,
                        }}
                      >
                        <Grid container spacing={2}>
                          <Grid item>
                            <ButtonBase sx={{ width: 128, height: 128 }}>
                              <Img alt="complex" src={Cat} />
                            </ButtonBase>
                          </Grid>
                          <Grid item xs={12} sm container>
                            <Grid
                              item
                              xs
                              container
                              direction="column"
                              spacing={2}
                            >
                              <Grid item xs>
                                <Typography
                                  gutterBottom
                                  variant="subtitle1"
                                  component="div"
                                >
                                  <b>Kedi</b>
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                  Cinsi: Tekir
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Yaşı: 2
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography
                                  sx={{ cursor: "pointer" }}
                                  variant="body2"
                                >
                                  Detaylar
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Paper>
                    </PetWrapper>
                  </Grid>
                  <Grid item xs={24} sm={12} md={6}>
                    <PetWrapper>
                      <Paper
                        sx={{
                          p: 2,
                          margin: "auto",
                          maxWidth: 500,
                          flexGrow: 1,
                        }}
                      >
                        <Grid container spacing={2}>
                          <Grid item>
                            <ButtonBase sx={{ width: 128, height: 128 }}>
                              <Img alt="complex" src={Cat} />
                            </ButtonBase>
                          </Grid>
                          <Grid item xs={12} sm container>
                            <Grid
                              item
                              xs
                              container
                              direction="column"
                              spacing={2}
                            >
                              <Grid item xs>
                                <Typography
                                  gutterBottom
                                  variant="subtitle1"
                                  component="div"
                                >
                                  <b>Kedi</b>
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                  Cinsi: Tekir
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Yaşı: 2
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography
                                  sx={{ cursor: "pointer" }}
                                  variant="body2"
                                >
                                  Detaylar
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Paper>
                    </PetWrapper>
                  </Grid>
                  <Grid item xs={24} sm={12} md={6}>
                    <PetWrapper>
                      <Paper
                        sx={{
                          p: 2,
                          margin: "auto",
                          maxWidth: 500,
                          flexGrow: 1,
                        }}
                      >
                        <Grid container spacing={2}>
                          <Grid item>
                            <ButtonBase sx={{ width: 128, height: 128 }}>
                              <Img alt="complex" src={Cat} />
                            </ButtonBase>
                          </Grid>
                          <Grid item xs={12} sm container>
                            <Grid
                              item
                              xs
                              container
                              direction="column"
                              spacing={2}
                            >
                              <Grid item xs>
                                <Typography
                                  gutterBottom
                                  variant="subtitle1"
                                  component="div"
                                >
                                  <b>Kedi</b>
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                  Cinsi: Tekir
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Yaşı: 2
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography
                                  sx={{ cursor: "pointer" }}
                                  variant="body2"
                                >
                                  Detaylar
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Paper>
                    </PetWrapper>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </AdvertWrapper>
          <PagiRow>
            <Stack spacing={1}>
              <Pagination count={10} />
            </Stack>
          </PagiRow>
        </AdoptionWrapper>
      </AdoptionContainer>
    </>
  );
};

export default AdoptionPage;
