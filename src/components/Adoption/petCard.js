import React from "react";
import { Link } from "react-router-dom";
import { PetWrapper } from "./AdoptionElements";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";

const petCard = ({
  imageFile,
  name,
  _id,
  shelter,
  age,
  breed,
  type,
  isBarren,
  diseases,
}) => {
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });
  return (
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
                <Img alt={name} src={imageFile} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    <b>{type}</b>
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Cinsi:<b> {breed}</b>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Yaşı: {age}
                  </Typography>
                </Grid>
                <Grid item>
                  <Link
                    to={`/sahiplen_detay/${_id}`}
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
  );
};

export default petCard;
