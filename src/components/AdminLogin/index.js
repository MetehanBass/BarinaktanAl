import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../redux/feature/authSlice";
import "./AdminLogin.css";
import mainImage from "../../images/animalShelter.png";

const initialState = {
  email: "",
  password: "",
};

const LoginComponent = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const { email, password } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ formValue, navigate, toast }));
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <div className="signin-row">
      <div className="signin-column column-img">
        <img
          className="mainImage"
          alt="özgebir"
          src={mainImage}
          style={{ width: "100%" }}
        />
      </div>
      <div className="signin-column column-form">
        <div className="formContent">
          <form
            className="signin-form"
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="formHeader">
              <h3 className="formH1">Barınaktan Al Admin</h3>
            </div>
            <input
              className="formInput"
              type="email"
              value={email}
              name="email"
              placeholder="E-Posta"
              onChange={onInputChange}
              required
              invalid
              validation="Lütfen E-Posta Giriniz"
            />
            <input
              className="formInput"
              type="password"
              name="password"
              value={password}
              onChange={onInputChange}
              placeholder="Parola"
              required
              oninvalid="this.setCustomValidity('Enter Password Here')"
              oninput="this.setCustomValidity('')"
            />
            {/* <a className="forgotText">ŞİFREMİ UNUTTUM</a> */}
            <button className="formButton" type="submit">
              {loading ? "Yükleniyor.." : "DEVAM"}
            </button>
            <span style={{ marginLeft: "50%", marginTop: "5%" }}></span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
