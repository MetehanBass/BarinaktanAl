import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React from "react";

import Cat from "../../images/svg-7.svg";
import { Button } from "../ButtonElement";
import {
  AdoptionContainer,
  AdoptionWrapper,
  AdoptionRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  PetWrapper,
  PagiRow,
} from "./AdoptionElements";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const AdoptionPage = () => {
  return (
    <>
      <AdoptionContainer>
        <AdoptionWrapper>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 3">
              <div className="filterButtonsMain">
                <button value="ALL" className="filterButtonsAll">
                  TÜMÜ
                </button>
                <button value="USER" className="filterButtonsUser">
                  KÖPEK
                </button>
                <button value="STUDENT" className="filterButtonsStudent">
                  KEDİ
                </button>
              </div>
            </Box>
            <Box gridColumn="span 8">
              <Grid container spacing={2} columns={24}>
                <Grid item xs={24} sm={12} md={8}>
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
                <Grid item xs={24} sm={12} md={8}>
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
                <Grid item xs={24} sm={12} md={8}>
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
                <Grid item xs={24} sm={12} md={8}>
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
                <Grid item xs={24} sm={12} md={8}>
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
                <Grid item xs={24} sm={12} md={8}>
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
          <PagiRow>
            <Stack spacing={2}>
              <Pagination count={10} showFirstButton showLastButton />
            </Stack>
          </PagiRow>
        </AdoptionWrapper>
      </AdoptionContainer>
    </>
  );
};

export default AdoptionPage;
