import axios from "axios";
import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";

const ResetPassword = () => {
  const { language } = useSelector((state) => state.language);
  const [isVErified, setIsVerified] = useState(false);

  const notifyEmail = () =>
    toast.success(
      "Vérifier votre adresse e-mail, le code de vérification vous est envoyé"
    );
  const notifyEmailErrorPasswordFrench = () =>
    toast.error("Le mot de passe doit comporter au minimum 6 caractères");

  const notifyEmailErrorPasswordEnglish = () =>
    toast.error("Password must be a minimum of 6 characters");

  const notifyEmailErrorRequireEnglish = () =>
    toast.error("Email address is required");

  const notifyEmailErrorRequireFrench = () =>
    toast.error("L'adresse e-mail est requise");

  const notifyEmailErrorUnknownFrench = () => toast.error("Email inconnu");

  const notifyEmailErrorUnknownEnglish = () => toast.error("Email unknown");

  const notifyEmailEnglishCheck = () =>
    toast.success(
      "Check your e-mail address, the verification code is sent to you"
    );

  const notyFyResetPasswordError = () => toast.error("Adresse e-mail inconnu");
  const notifySuccessResetPassword = (message) => toast.success(message);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const [codeInput, setCodeInput] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);

  const emailError = useRef();
  const passwordError = useRef();
  const confirmPasswordError = useRef();
  const codeEmailError = useRef();

  // const sendEmail = () => {
  //   const codeGenerated = () => {
  //     const generateRandomCode =
  //       "0123456789abcdefghijklmnopkrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  //     let myCode = "";
  //     for (let i = 0; i < 4; i++) {
  //       let code = Math.floor(Math.random() * generateRandomCode.length);
  //       myCode += generateRandomCode[code];
  //     }
  //     return myCode;
  //   };

  //   const codeSending = codeGenerated();
  //   var templateParams = {
  //     user_name: "Ibendouma",
  //     user_email: email,
  //     message: `Votre code de confirmation est: ${codeSending}`,
  //   };

  //   emailjs
  //     .send(
  //       "service_u3lvu6c",
  //       "template_wuj5kqm",
  //       templateParams,
  //       "FsoutDjD1w8st7me5"
  //     )
  //     .then(
  //       function (response) {
  //         axios({
  //           method: "post",
  //           url: `${process.env.REACT_APP_CLIENT_URL}/code`,
  //           data: {
  //             code: codeSending,
  //           },
  //         }).then((res) => {
  //           // console.log(res.data);
  //           setCodeInput(true);
  //           language === "anglais" && notifyEmailEnglishCheck();
  //           language === "francais" && notifyEmail();
  //         });
  //         // console.log("SUCCESS!", response.status, response.text);
  //       },
  //       function (error) {
  //         console.log("FAILED...", error);
  //         notifySuccessResetPassword();
  //       }
  //     );
  // };

  const sendEmail = () => {
    const codeGenerated = () => {
      const generateRandomCode =
        "0123456789abcdefghijklmnopkrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

      let myCode = "";
      for (let i = 0; i < 4; i++) {
        let code = Math.floor(Math.random() * generateRandomCode.length);
        myCode += generateRandomCode[code];
      }
      return myCode;
    };

    const codeSending = codeGenerated();
    var templateParams = {
      user_name: "Ibendouma",
      user_email: email,
      message: `Votre code de confirmation est: ${codeSending}`,
    };

    emailjs
      .send(
        "service_65ohhqn",
        "template_2m3hhxh",
        templateParams,
        "JSZ-EVq9iVjCDp0k1"
      )
      .then(
        function (response) {
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/code`,
            data: {
              code: codeSending,
            },
          }).then((res) => {
            setCodeInput(true);
            language === "anglais" && notifyEmailEnglishCheck();
            language === "francais" && notifyEmail();
          });
          // console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  const handleCheckEmail = (e) => {
    e.preventDefault();
    if (codeInput) {
      if (!code) {
        codeEmailError.current.innerHTML =
          "Veuillez remplir ce champ avant de continuer";
      } else {
        axios({
          method: "post",
          url: `${process.env.REACT_APP_CLIENT_URL}/checkemail/code/reset`,
          data: {
            code,
          },
        }).then((res) => {
          if (res.data.message === true) {
            setCodeInput(false);
            setIsVerified(true);
          } else {
            notyFyResetPasswordError();
          }
        });
      }
    } else {
      if (isVErified) {
        if (!email || !password) {
          if (!email) {
            // emailError.current.innerHTML = "Email inconnu";
            language === "anglais" && notifyEmailErrorUnknownEnglish();
            language === "francais" && notifyEmailErrorUnknownFrench();
          }

          if (!password || password.length < 6) {
            // passwordError.current.innerHTML =
            //   "Le mot de passe doit comporter au minimum 6 caracteres";
            language === "anglais" && notifyEmailErrorPasswordEnglish();
            language === "francais" && notifyEmailErrorPasswordFrench();
          }
        } else if (confirmPassword !== password) {
          confirmPasswordError.current.innerHTML =
            "Les mots de passe ne correspondent pas";
        } else {
          console.log(email);
          console.log(password);
          try {
            axios({
              method: "post",
              url: `${process.env.REACT_APP_CLIENT_URL}/users/createnewpassword`,
              data: {
                email,
                password,
              },
            }).then((res) => {
              notifySuccessResetPassword(res?.data?.message);
            });
          } catch (error) {
            console.log(error);
          }
        }
      } else {
        if (!email) {
          if (language === "anglais") {
            // emailError.current.innerHTML = "Email address is required";
            notifyEmailErrorRequireEnglish();
          } else {
            // emailError.current.innerHTML = "L'adresse e-mail est requise";
            notifyEmailErrorRequireFrench();
          }
        } else {
          try {
            sendEmail();
          } catch (error) {
            console.log(error);
          }
        }
      }
    }
  };

  const handleConfirmEmail = () => {};

  return (
    <div className="reset-password">
      <form onSubmit={handleCheckEmail}>
        {!codeInput && (
          <div>
            <label htmlFor="email">
              {language === "anglais"
                ? "Your Email Adress"
                : "Votre adresse e-mail"}
            </label>
            <input
              type="email"
              placeholder={
                language === "anglais"
                  ? "Your Email Adress"
                  : "Votre adresse e-mail"
              }
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div ref={emailError} className="reset-password-error"></div>
          </div>
        )}

        {codeInput && (
          <div className="emailconfirm-container">
            <input
              type="text"
              placeholder={
                language === "anglais" ? "enter the code" : "entrer le code"
              }
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <div ref={codeEmailError} className="reset-password-error"></div>
          </div>
        )}
        {isVErified && (
          <div>
            <label htmlFor="password">
              {language === "anglais" ? "New Password" : "Nouveau mot de passe"}
            </label>
            <input
              type="password"
              placeholder={
                language === "anglais" ? "New Password" : "Nouveau mot de passe"
              }
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div ref={passwordError} className="reset-password-error"></div>
            <label htmlFor="confirmpassword">
              {language === "anglais"
                ? "Confirm Password"
                : "Confirmer mot de passe"}
            </label>
            <input
              type="password"
              id="confirmpassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder={
                language === "anglais"
                  ? "Confirm Password"
                  : "Confirmer mot de passe"
              }
            />
            <div
              ref={confirmPasswordError}
              className="reset-password-error"
            ></div>
          </div>
        )}

        {isVErified ? (
          <input
            type="submit"
            value={
              language === "anglais"
                ? "Validate changes"
                : "Valider les modifiactions"
            }
            className="reset-password-submit"
          />
        ) : codeInput ? (
          <input
            type="submit"
            value={language === "anglais" ? "validate code" : "Valider le code"}
            className="reset-password-submit"
          />
        ) : (
          <input
            type="submit"
            value={language === "anglais" ? "Check" : "Vérifier"}
            className="reset-password-submit"
          />
        )}
      </form>
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

export default ResetPassword;
