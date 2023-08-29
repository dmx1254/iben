import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { addUser } from "../features/userSlice";

import axios from "axios";

const PaymentSignin = ({ setRegister, setLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notifyEmailError = () => toast.error("Email inconnu");

  const notifyEmailErrorEnglish = () => toast.error("Email unknown");

  const notifyEmailErrorBackend = (text) => toast.error(text);

  const notifyEmailErrorEnglishBackend = () =>
    toast.error("Incorrect email or password");

  const notifyPasswordError = () =>
    toast.error("Le mot de passe doit avoir 6 caracteres minimum");

  const notifyPasswordErrorEnglish = () =>
    toast.error("Password must have a minimum of 6 characters");

  const dispatch = useDispatch();

  const { language } = useSelector((state) => state.language);

  const location = useLocation();

  const emailError = useRef();
  const passwordError = useRef();
  const checkError = useRef();

  const hangleSubmit = () => {
    if (!email || !password) {
      if (!email) {
        language === "anglais" && notifyEmailErrorEnglish();
        language === "francais" && notifyEmailError();
      }
      if (!password) {
        language === "anglais" && notifyPasswordErrorEnglish();
        language === "francais" && notifyPasswordError();
      }
    } else {
      try {
        axios({
          method: "post",
          url: `${process.env.REACT_APP_CLIENT_URL}/users/login`,
          data: {
            email,
            password,
          },
          withCredentials: true,
        }).then((res) => {
          if (res.data.message) {
            language === "anglais" && notifyEmailErrorBackend();

            language === "francais" &&
              notifyEmailErrorEnglishBackend(res.data.message);
          } else {
            // console.log(res.data);
            dispatch(addUser(res.data));
            if (location.pathname === "/login") {
              window.location = "/";
            } else {
              console.log("nothing");
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="paymentsignin">
      <div className="paymentsignin-container">
        <div className="paymentsignin-not-account">
          <span className="paymentsignin-not-account1">
            {" "}
            {language === "anglais" && "Don't have an account"}
            {language === "francais" && "Pas de compte"}
            {language === "espagnol" && "Ninguna cuenta"}?{" "}
          </span>
          <span
            className="paymentsignin-not-account2"
            onClick={function () {
              setLogin(false);
              setRegister(true);
            }}
          >
            {language === "anglais" && "Sign Up"}
            {language === "francais" && "S'inscrire"}
            {language === "espagnol" && "Registrar"}
          </span>
        </div>
        <div className="paymentsignin-first">
          <input
            type="email"
            name="email"
            id="email"
            placeholder={
              language === "anglais" ? "Email adress" : "Adresse email"
            }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div ref={emailError} className="signup-errors"></div>
        </div>
        <div className="paymentsignin-second">
          <input
            type="password"
            name="password"
            id="password"
            placeholder={language === "anglais" ? "Password" : "Mot de passe"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div ref={passwordError} className="signup-errors"></div>
          <button onClick={hangleSubmit}>
            {language === "francais" && "Connexion"}
            {language === "anglais" && "Sign in"}
            {language === "espagnol" && "Registrarse"}
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default PaymentSignin;
