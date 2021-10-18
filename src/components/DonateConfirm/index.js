import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import Styles from "../Card/Styles";
import { Form, Field } from "react-final-form";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "../Card/CardUtils";
import {
  DonateConfirmContainer,
  DonateConfirmWrapper,
  DonateConfirmCard,
} from "./DonateConfirmElements";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
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
              <Tab label="Havale/EFT" {...a11yProps(1)} />
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
                        number={values.number || ""}
                        name={values.name || ""}
                        expiry={values.expiry || ""}
                        cvc={values.cvc || ""}
                        focused={active}
                      />
                      <div>
                        <Field
                          name="number"
                          component="input"
                          type="text"
                          pattern="[\d| ]{16,22}"
                          placeholder="Kart Numarası"
                          format={formatCreditCardNumber}
                        />
                      </div>
                      <div>
                        <Field
                          name="name"
                          component="input"
                          type="text"
                          placeholder="Kartın Sahibi"
                        />
                      </div>
                      <div>
                        <Field
                          name="expiry"
                          id="expiry"
                          component="input"
                          type="text"
                          pattern="\d\d/\d\d"
                          placeholder="Son Kullanma Tarihi"
                          format={formatExpirationDate}
                        />
                        <Field
                          name="cvc"
                          id="cvc"
                          component="input"
                          type="text"
                          pattern="\d{3,4}"
                          placeholder="CVC"
                          format={formatCVC}
                        />
                      </div>
                      <div className="buttons">
                        <button type="submit" disabled={submitting}>
                          Bağışı Tamamla
                        </button>
                        <button
                          type="button"
                          onClick={form.reset}
                          disabled={submitting || pristine}
                        >
                          Bilgileri Sıfırla
                        </button>
                      </div>
                      <h2>Values</h2>
                      <pre>{JSON.stringify(values, 0, 2)}</pre>
                    </form>
                  );
                }}
              />
            </Styles>
          </TabPanel>
          <TabPanel value={value} index={1}></TabPanel>
        </DonateConfirmCard>
      </DonateConfirmWrapper>
    </DonateConfirmContainer>
  );
};

export default DonateConfirm;
