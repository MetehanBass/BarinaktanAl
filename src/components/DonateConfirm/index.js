import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import PropTypes from "prop-types";
import Card from "../Card/Card";
import Styles from "../Card/Styles";
import { Form, Field } from "react-final-form";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "../Card/CardUtils";
import {
  DonateConfirmContainer,
  DonateConfirmWrapper,
  DonateConfirmCard,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Info,
} from "./DonateConfirmElements";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  console.log(JSON.stringify(values, 0, 2));
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const theme = createTheme();
const DonateConfirm = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <DonateConfirmContainer id="DonateConfirm">
      <DonateConfirmWrapper>
        <DonateConfirmCard>
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="Kredi Kartı" {...a11yProps(0)} />
              <Tab label="Banka Havalesi/EFT" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Styles>
              <Form
                onSubmit={onSubmit}
                render={({
                  handleSubmit,
                  form,
                  submitting,
                  pristine,
                  values,
                  active,
                }) => {
                  return (
                    <form onSubmit={handleSubmit}>
                      <Card
                        locale={{ valid: "SKT" }}
                        placeholders={{ name: "Kart Sahibi" }}
                        number={values.number || ""}
                        name={values.name || ""}
                        expiry={values.expiry || ""}
                        cvc={values.cvc || ""}
                        focused={active}
                      />
                      <ThemeProvider theme={theme}>
                        <Container component="main" maxWidth="xs">
                          <CssBaseline />
                          <Box
                            sx={{
                              marginTop: 0,
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <Grid container spacing={2}>
                              <Grid item xs={12} sm={6}>
                                <Field
                                  name="number"
                                  component="input"
                                  type="text"
                                  pattern="[\d| ]{16,22}"
                                  placeholder="Kart Numarası"
                                  format={formatCreditCardNumber}
                                />
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <Field
                                  name="name"
                                  component="input"
                                  type="text"
                                  placeholder="Kartın Sahibi"
                                />
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <Field
                                  name="expiry"
                                  id="expiry"
                                  component="input"
                                  type="text"
                                  pattern="\d\d/\d\d"
                                  placeholder="Son Kullanma Tarihi"
                                  format={formatExpirationDate}
                                />
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <Field
                                  name="cvc"
                                  id="cvc"
                                  component="input"
                                  type="text"
                                  pattern="\d{3,4}"
                                  placeholder="CVC"
                                  format={formatCVC}
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      value="conditions"
                                      color="primary"
                                    />
                                  }
                                  label="Lorem ipsum  *"
                                />
                              </Grid>
                            </Grid>
                            <Button
                              type="submit"
                              disabled={submitting}
                              fullWidth
                              variant="outlined"
                              color="success"
                              sx={{ mt: 3, mb: 2 }}
                            >
                              Bağışı Tamamla
                            </Button>
                            <Button
                              type="button"
                              onClick={form.reset}
                              disabled={submitting || pristine}
                              fullWidth
                              variant="outlined"
                              color="primary"
                              sx={{ mt: 3, mb: 2 }}
                            >
                              Bilgileri Sıfırla
                            </Button>
                          </Box>
                        </Container>
                      </ThemeProvider>
                    </form>
                  );
                }}
              />
            </Styles>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TextWrapper>
              <TopLine>Banka Bilgilerimiz</TopLine>
              <Heading>İŞ BANKASI</Heading>
              <Info>IBAN :</Info>
              <Subtitle>TR29 0006 4000 0014 2480 9449 63</Subtitle>
              <Heading>VAKIFBANK</Heading>
              <Info>IBAN :</Info>
              <Subtitle>TR38 0001 5001 5800 7312 6477 71</Subtitle>
              <Heading>Nasıl Tamamlarım</Heading>
              <Subtitle>
                Havale/EFT açıklamasına fatura bilgilerinde girdiğiniz bilgileri{" "}
                <b>(İsim/E-posta/Telefon Numarası)</b> yazmanız yeterlidir.
              </Subtitle>
            </TextWrapper>
          </TabPanel>
        </DonateConfirmCard>
      </DonateConfirmWrapper>
    </DonateConfirmContainer>
  );
};

export default DonateConfirm;
