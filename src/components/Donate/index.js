import React from "react";
import NumericInput from "react-numeric-input";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Icon from "../../images/cat_dog_food.png";

import {
  DonateContainer,
  DonateH1,
  DonateWrapper,
  DonateCard,
  DonateIcon,
  DonateH2,
  DonateP,
  ChartWrapper,
  ChartP,
  ChartButton,
  DonateForm,
  DonateCart,
} from "./DonateElements";

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("Kuru Mama (Kedi)", 9, 15),
  createRow("Kuru Mama (Köpek)", 10, 13),
];
const invoiceTotal = subtotal(rows);

const theme = createTheme();

export default function index() {
  return (
    <DonateContainer id="Donate">
      <DonateH1>Onları önemsiyoruz</DonateH1>
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
      <DonateCart>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={2}>
                  Detaylar
                </TableCell>
                <TableCell align="right">Tutar</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>Mama</b>
                </TableCell>
                <TableCell align="right">
                  <b>Kilogram</b>
                </TableCell>
                <TableCell align="right">
                  <b>Toplam</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.desc}>
                  <TableCell>{row.desc}</TableCell>
                  <TableCell align="right">{row.qty} kg.</TableCell>
                  <TableCell align="right">{ccyFormat(row.price)}₺</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={2}>
                  <b>Toplam Tutar</b>
                </TableCell>
                <TableCell align="right">{ccyFormat(invoiceTotal)}₺</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </DonateCart>
      <DonateForm>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: -3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Fatura Detayları
              </Typography>
              <Box
                component="form"
                noValidate
                action="/bagis_tamamla"
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="name"
                      required
                      fullWidth
                      title="Gerekli"
                      id="name"
                      label="İsim Soyisim"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      title="Gerekli"
                      id="phone"
                      label="Telefon Numarası"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      title="Gerekli"
                      id="email"
                      label="E-Posta Adresi"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox value="conditions" color="primary" />}
                      label="Web sitesinin şartlar ve koşullar sayfasını okudum ve kabul ediyorum *"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  color="success"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Bağışı Onayla
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </DonateForm>
    </DonateContainer>
  );
}
