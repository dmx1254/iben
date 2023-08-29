import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { BsCheckSquare, BsCheckSquareFill } from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FiSquare } from "react-icons/fi";

import { addUser } from "../features/userSlice";

import spin from "../assets/spinners/spin.gif";

import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkRemember, setCheckRember] = useState(false);
  const [loadingUser, setLoadingUser] = useState(false);

  const notifyEmailError = () => toast.error("Email inconnu");

  const notifyEmailErrorEnglish = () => toast.error("Email unknown");

  const notifyPasswordError = () =>
    toast.error("Le mot de passe doit avoir 6 caracteres minimum");

  const notifyPasswordErrorEnglish = () =>
    toast.error("Password must have a minimum of 6 characters");

  const emailErrorBackend = (text) => toast.error(text);
  const notifyBackErrors = (nameErrors) => toast.error(nameErrors);

  const emailErrorBackendEnglish = () =>
    toast.error("Incorrect email or password");

  const dispatch = useDispatch();

  const { language } = useSelector((state) => state.language);

  const location = useLocation();
  const handleToggleCheckRemember = () => {
    setCheckRember((prevCheckRemember) => !prevCheckRemember);
  };
  const handleSubmit = () => {
    if (!email || !password) {
      if (!email) {
        language === "anglais" ? notifyEmailErrorEnglish() : notifyEmailError();
      }
      if (!password) {
        language === "anglais"
          ? notifyPasswordErrorEnglish()
          : notifyPasswordError();
      }
    } else {
      setLoadingUser(true);
      try {
        axios({
          method: "post",
          url: `${process.env.REACT_APP_CLIENT_URL}/users/login`,
          data: {
            email,
            password,
          },
          withCredentials: true,
        })
          .then((res) => {
            // console.log(res.data);
            dispatch(addUser(res.data));
            setLoadingUser(true);
            if (location.pathname === "/login") {
              window.location = "/";
            } else {
              console.log("nothing");
            }
          })
          .catch(({ response }) => {
            notifyBackErrors(response?.data?.message);
            setLoadingUser(false);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="signin">
      <h1 className="signin-title">
        {language === "anglais" && "Welcome to ibendouma"}
        {language === "francais" && "Bienvenu sur ibendouma"}
        {language === "espagnol" && "Bienvenido a ibendouma"}
      </h1>
      <div className="signin-form">
        <div className="signin-form-inputfield">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={email}
            placeholder={
              language === "anglais" ? "Email address" : "Adresse e-mail"
            }
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* <div className="signup-errors"></div> */}
        <div className="signin-form-inputfield">
          <label htmlFor="password">
            {language === "anglais" && "Password"}
            {language === "francais" && "Mot de passe"}
            {language === "espagnol" && "contraseña"}{" "}
          </label>
          <input
            type="password"
            value={password}
            placeholder={language === "anglais" ? "Password" : "Mot de passe"}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* <div className="signup-errors">
            
          </div> */}

        <div className="signin-remember">
          <div
            className="signin-remember-square"
            onClick={handleToggleCheckRemember}
          >
            {checkRemember ? (
              <span className="icon-checked">
                <BsCheckSquareFill />
              </span>
            ) : (
              <span className="icon">
                <FiSquare />
              </span>
            )}
            <span className="remember">
              {language === "anglais" && "Remember me"}
              {language === "francais" && "Se souvenir de moi"}
              {language === "espagnol" && "Recordarme"}
            </span>
          </div>
          <span className="signin-remember-forget">
            {" "}
            <Link
              to="/resetpassword"
              style={{
                color: "#ccc",
              }}
            >
              {language === "anglais" && "Forgot your password"}
              {language === "francais" && "Mot de passe oublié"}
              {language === "espagnol" && "Contraseña olvidada"}?
            </Link>
          </span>
        </div>
        <div className="sign-loginbutton">
          {loadingUser ? (
            <span className="login-btn">
              <img
                src={spin}
                alt="loading"
                className=" w-[40px] h-[23px] object-contain"
              />
            </span>
          ) : (
            <span className="login-btn" onClick={handleSubmit}>
              {language === "anglais" && "Sign In"}
              {language === "francais" && "Se connecter"}
              {language === "espagnol" && "Conectar"}
            </span>
          )}

          <span className="signin-btn">
            <Link
              to="/register"
              style={{
                color: "#ccc",
              }}
            >
              {language === "anglais" && "Sign Up"}
              {language === "francais" && "S'inscrire"}
              {language === "espagnol" && "Registrar"}
            </Link>
          </span>
        </div>
      </div>

      <div className="signin-copyright">
        Copyright &copy; 2019 - {new Date().getFullYear()},{" "}
        {language === "francais" &&
          "Tous les droits sont réservés à ibendouma Limited."}
        {language === "anglais" &&
          "All rights are reserved to ibendouma Limited."}
        {language === "espagnol" &&
          "Todos los derechos están reservados a ibendouma Limited."}
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

export default SignIn;
