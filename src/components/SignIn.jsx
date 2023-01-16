import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";

import { addUser } from "../features/userSlice";

import { useSelector } from "react-redux";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { language } = useSelector((state) => state.language);

  const emailError = useRef();
  const passwordError = useRef();
  const checkError = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    emailError.current.innerHTML = "";
    passwordError.current.innerHTML = "";
    checkError.current.innerHTML = "";
    const signinCheck = document.getElementById("signinCheck");
    if (!email || !password) {
      if (!email) {
        language === "anglais"
          ? (emailError.current.innerHTML = "Email unknown")
          : (emailError.current.innerHTML = "Email inconnu");
      }
      if (!password) {
        language === "anglais"
          ? (passwordError.current.innerHTML =
              "Password must have a minimum of 6 characters")
          : (passwordError.current.innerHTML =
              "Le mot de passe doit avoir 6 caracteres minimum");
      }
    } else if (!signinCheck.checked) {
      language === "anglais"
        ? (checkError.current.innerHTML =
            "Please validate the terms and conditions and privacy policy")
        : (checkError.current.innerHTML =
            "Veuillez valider les termes et conditions et la politique de confidentialité");
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
            language === "anglais"
              ? (emailError.current.innerHTML = "Incorrect email or password")
              : (emailError.current.innerHTML = res.data.message);
          } else {
            // console.log(res.data);
            dispatch(addUser(res.data));
            if (location.pathname === "/paymentpage") {
              console.log("nothing");
            } else {
              window.location = "/";
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const location = useLocation();

  return (
    <div
      className={
        location.pathname === "/paymentpage"
          ? "form-sign-payment"
          : "form-signin"
      }
    >
      <form
        onSubmit={handleLogin}
        className={
          location.pathname === "/paymentpage" ? "signin-payment" : "signin"
        }
      >
        <div className="input-signup">
          {location.pathname === "/paymentpage" || (
            <h4
              style={{
                color: "gray",
                fontWeight: 400,
                marginTop: "10px",
                fontSize: "14px",
              }}
            >
              {language === "francais" && "Vous n'avez pas de compte?"}
              {language === "anglais" && "You do not have an account?"}
              {language === "espagnol" && "No tienes una cuenta?"}{" "}
              <Link
                to="/register"
                style={{
                  color: "#1652f0",
                }}
              >
                {" "}
                {language === "francais" && "Inscrivez vous"}
                {language === "anglais" && "Register"}
                {language === "espagnol" && "Registro"}
              </Link>
            </h4>
          )}

          <div className="mail">
            {language === "francais" && <label htmlFor="email">Email</label>}
            {language === "anglais" && <label htmlFor="email">E-mail</label>}
            {language === "espagnol" && (
              <label htmlFor="email">Correo electrónico</label>
            )}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Adresse e-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div ref={emailError} className="signup-errors"></div>
          </div>
          <div className="pass">
            {language === "francais" && (
              <label htmlFor="email">Mot de passe</label>
            )}
            {language === "anglais" && <label htmlFor="email">Password</label>}
            {language === "espagnol" && <label htmlFor="email">Clave</label>}
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div ref={passwordError} className="signup-errors"></div>
          </div>
        </div>
        <div
          className="agree"
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          <input
            type="checkbox"
            style={{
              position: "absolute",
              top: "4%",
              cursor: "pointer",
              outline: "none",
            }}
            id="signinCheck"
          />
          {language === "anglais" && (
            <span
              style={{
                fontSize: "12px",
                marginLeft: "20px",
                // width: "300px",
                display: "flex",
                flexWrap: "wrap",
                lineHeight: "18px",
              }}
            >
              I accept the
              <Link
                to="/term-and-conditions"
                style={{
                  marginLeft: "2px",
                  marginRight: "2px",
                }}
              >
                {" "}
                terms and conditions{" "}
              </Link>{" "}
              and the
              <Link
                to="/privacy-policy"
                style={{
                  marginRight: "2px",
                }}
              >
                {" "}
                privacy policy
              </Link>
            </span>
          )}

          {language === "francais" && (
            <span
              style={{
                fontSize: "12px",
                marginLeft: "15px",
                // maxWidth: "300px",
                display: "flex",
                flexWrap: "wrap",
                lineHeight: "18px",
              }}
            >
              J'accepte les
              <Link
                to="/term-and-conditions"
                style={{
                  marginLeft: "2px",
                  marginRight: "2px",
                }}
              >
                {" "}
                termes et conditions{" "}
              </Link>{" "}
              et la
              <Link
                to="/privacy-policy"
                style={{
                  marginRight: "2px",
                }}
              >
                {" "}
                politique de confidentialité
              </Link>
            </span>
          )}

          {language === "espagnol" && (
            <span
              style={{
                fontSize: "12px",
                marginLeft: "15px",
                // maxWidth: "300px",
                display: "flex",
                flexWrap: "wrap",
                lineHeight: "18px",
              }}
            >
              Acepto los
              <Link
                to="/term-and-conditions"
                style={{
                  marginLeft: "2px",
                  marginRight: "2px",
                }}
              >
                {" "}
                términos y condiciones{" "}
              </Link>
              y la
              <Link
                to="/privacy-policy"
                style={{
                  marginRight: "2px",
                }}
              >
                {" "}
                política de privacidad
              </Link>
            </span>
          )}
        </div>
        <div ref={checkError} className="signup-errors"></div>
        <input type="submit" className="btn-signin" value="Se connecter" />
        <Link to="/resetpassword">
          <span
            style={{
              color: "#1652f0",
            }}
          >
            {language === "anglais" && "Forgot Password ?"}
            {language === "francais" && "Mot de passe oublié"}
            {language === "espagnol" && "contraseña olvidada"}
          </span>
        </Link>
      </form>
      {location.pathname === "/paymentpage" || (
        <div
          style={{
            color: "rgba(244, 244, 244, 0.9)",
            fontSize: "13px",
            width: "300px",
            marginTop: "4rem",
          }}
        >
          Copyright &copy; 2019 - {new Date().getFullYear()}, ibytrade.com
          {language === "francais" &&
            "Tous les droits sont réservés à iBendouma Limited."}
          {language === "anglais" &&
            "All rights are reserved to iBendouma Limited."}
          {language === "espagnol" &&
            "Todos los derechos están reservados a iBendouma Limited."}
        </div>
      )}
    </div>
  );
};

export default SignIn;
