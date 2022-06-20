import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment";
import { MDBValidation, MDBBtn, MDBInput } from "mdb-react-ui-kit";

import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { getCartTotal } from "../../redux/feature/cartSlice";
import { createDonate } from "../../redux/feature/donateSlice";

import {
  DonateContainer,
  DonateH1,
  DonateWrapper,
  DonateCart,
} from "./DonateElements";

const initialState = {
  catFood: "",
  dogFood: "",
  totalPrice: "",
  donaterName: "",
  donaterPhone: "",
  donaterEmail: "",
  createdAt: "",
};

const date = moment().format("MM-DD-YYYY"); // It will return 05-16-2022

const CartContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { items, totalAmount } = useSelector((state) => state.cart);
  const { error } = useSelector((state) => ({
    ...state.donate,
  }));
  const [donateData, setDonateData] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const {
    catFood,
    dogFood,
    totalPrice,
    donaterName,
    donaterPhone,
    donaterEmail,
  } = donateData;

  useEffect(() => {
    dispatch(getCartTotal());
  }, [items]);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const totalPriceForm =
    items[1].amount * items[1].price + items[0].amount * items[0].price;
  const catFoodForm = items[0].amount;
  const dogFoodForm = items[1].amount;

  // console.log(
  //   "toplam fiyat: " +
  //     totalPriceForm +
  //     " kedi :" +
  //     catFoodForm +
  //     "köpke: " +
  //     dogFoodForm
  // );

  const handleSubmit = (e) => {
    e.preventDefault();
    setDonateData({
      catFood: catFoodForm,
      dogFood: dogFoodForm,
      totalPrice: totalPriceForm,
      donaterName: donaterName,
      donaterPhone: donaterPhone,
      donaterEmail: donaterEmail,
      createdAt: date,
    });
    setIsSubmitted(true);
  };

  React.useEffect(() => {
    if (
      catFood &&
      dogFood &&
      totalPrice &&
      donaterName &&
      donaterPhone &&
      donaterEmail &&
      isSubmitted
    ) {
      const updatedDonateData = { ...donateData };
      if (!id) {
        dispatch(createDonate({ updatedDonateData, navigate, toast }));
      } else {
        console.log("Something went wrong.");
      }
      handleClear();
    }
  }, [
    catFood,
    dogFood,
    totalPrice,
    donaterName,
    donaterPhone,
    donaterEmail,
    isSubmitted,
  ]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setDonateData({ ...donateData, [name]: value });
  };

  const handleClear = () => {
    setDonateData({
      catFood: "",
      dogFood: "",
      totalPrice: "",
      donaterName: "",
      donaterPhone: "",
      donaterEmail: "",
      createdAt: "",
    });
  };

  return (
    <DonateContainer id="Donate">
      <DonateH1>Onları önemsiyoruz</DonateH1>
      <DonateWrapper>
        {items.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
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
              {items.map((item) => {
                return <CartSummary key={item.id} {...item} />;
              })}

              <TableRow>
                <TableCell colSpan={2}>
                  <b>Toplam Tutar</b>
                </TableCell>
                <TableCell align="right">{totalAmount} ₺</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </DonateCart>
      <MDBValidation
        onSubmit={handleSubmit}
        className="row g-3"
        noValidate
        style={{ maxWidth: "95%" }}
      >
        <Container component="main" maxWidth="xs">
          <MDBInput
            placeholder="."
            type="number"
            label=""
            hidden
            value={catFoodForm}
            name="catFood"
            onChange={onInputChange}
            className="form-control d-none"
            required
            invalid
            validation=""
          />
          <MDBInput
            placeholder="."
            type="number"
            label=""
            hidden
            value={dogFoodForm}
            name="dogFood"
            onChange={onInputChange}
            className="form-control d-none"
            required
            invalid
            validation=""
          />
          <MDBInput
            placeholder=""
            type="number"
            label=""
            hidden
            value={totalPriceForm || ""}
            name="totalPrice"
            onChange={onInputChange}
            className="form-control d-none"
            required
            invalid
            validation="En az 1 kg. mama eklemelisiniz."
          />
          <CssBaseline />

          <Box
            style={{ marginTop: -1 }}
            sx={{
              marginTop: -3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              style={{ marginTop: "10px" }}
            >
              Fatura Detayları
            </Typography>
            <Box component="" noValidate action="" sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <MDBInput
                    placeholder="İsim Giriniz."
                    type="text"
                    label="İsim Soyisim"
                    value={donaterName || ""}
                    name="donaterName"
                    onChange={onInputChange}
                    className="form-control"
                    required
                    invalid
                    validation="İsim giriniz."
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MDBInput
                    placeholder="0 555 555 55 55"
                    type="text"
                    label="Telefon Numarası"
                    value={donaterPhone || ""}
                    name="donaterPhone"
                    onChange={onInputChange}
                    className="form-control"
                    required
                    invalid
                    validation="Telefon Numarası Giriniz."
                  />
                </Grid>
                <Grid item xs={12}>
                  <MDBInput
                    placeholder="E-Posta Adresi Giriniz."
                    type="text"
                    label="E-Posta Adresi"
                    value={donaterEmail || ""}
                    name="donaterEmail"
                    onChange={onInputChange}
                    className="form-control"
                    required
                    invalid
                    validation="E-Posta Adresi Giriniz."
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="conditions" color="primary" />}
                    label="Web sitesinin şartlar ve koşullar sayfasını okudum ve kabul ediyorum *"
                  />
                </Grid>
              </Grid>

              <MDBBtn
                type="submit"
                color="success"
                style={{ width: "100%", marginTop: "10px" }}
              >
                Bağış Yap
              </MDBBtn>
            </Box>
          </Box>
        </Container>
      </MDBValidation>
    </DonateContainer>
  );
};

export default CartContainer;
