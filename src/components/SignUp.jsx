import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import axios from "axios";

import { useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Country } from "country-state-city";

import emailjs from "@emailjs/browser";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validCode, setValidCode] = useState("K95F");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [profil, setProfil] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [countryList, setCountryList] = useState(Country.getAllCountries());

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
  //     user_name: "ibendouma",
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
  //           console.log(res.data);
  //         });
  //         // console.log("SUCCESS!", response.status, response.text);
  //       },
  //       function (error) {
  //         console.log("FAILED...", error);
  //       }
  //     );
  // };

  const { language } = useSelector((state) => state.language);

  const notifyEmail = () =>
    toast.success(
      "Vérifier votre adresse e-mail, le code de vérification vous est envoyé"
    );
  const notifyEmailEnglish = () =>
    toast.success(
      "Check your e-mail address, the verification code is sent to you"
    );

  const notifyErrorCode = () => toast.error("Votre code n'est pas valide");

  const notifyEmailEspanish = () =>
    toast.success(
      "Compruebe su dirección de correo electrónico, se le envía el código de verificación"
    );

  const notyFySuccessRegister = () => toast.success("Inscription réussie");

  const notyFySuccessRegisterEnglish = () =>
    toast.success("Registration successful");

  const notyFySuccessRegisterSpanish = () => toast.success("Registro exitoso");

  const notifyEmailError = () => toast.error("Email inconnu");

  const notifyEmailErrorEnglish = () => toast.error("Email unknown");

  const notifyErrorCheckError = () =>
    toast.error(
      "Veuillez valider les termes et conditions et la politique de confidentialité"
    );
  const codeErrorBackend = (text) => toast.error(text);
  const emailErrorBackend = (text) => toast.error(text);
  const passwordErrorBackend = (text) => toast.error(text);

  const notifyErrorCheckErrorEnglish = () =>
    toast.error("Please validate the terms and conditions and privacy policy");

  const notifyConfirmErrorPass = () =>
    toast.error("Les mot de passe ne correspondent pas");

  const notifyErrorConfirmPassEnglish = () =>
    toast.error("Passwords do not match");

  const notifyPasswordError = () =>
    toast.error("Le mot de passe doit avoir 6 caracteres minimum");

  const notifyPasswordErrorEnglish = () =>
    toast.error("Password must have a minimum of 6 characters");
  const notifyvalidCodeErrorEnglish = () =>
    toast.error("Please enter a valid code");
  const notifyvalidCodedError = () =>
    toast.error("Veuillez entrer un code valide");

  const notifyBackErrors = (nameErrors) => toast.error(nameErrors);

  const verifyUser = () => {
    if (!email || !password) {
      if (!email) {
        language === "anglais" && notifyEmailErrorEnglish();
        language === "francais" && notifyEmailError();
      }
      if (!password) {
        language === "anglais" && notifyPasswordErrorEnglish();
        language === "francais" && notifyPasswordError();
      }
    } else if (confirmPassword !== password) {
      language === "anglais" && notifyErrorConfirmPassEnglish();
      language === "francais" && notifyConfirmErrorPass();
    } else {
      try {
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
          user_name: "ibendouma",
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
                console.log(res.data);
                language === "francais" && notifyEmail();
                language === "anglais" && notifyEmailEnglish();
                language === "espagnol" && notifyEmailEspanish();
              });
              console.log(response);
            },
            function (error) {
              console.log("FAILED...", error);
            }
          );
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmit = () => {
    const check = document.getElementById("myCheck");

    if (!email || !password) {
      if (!email) {
        language === "anglais" && notifyEmailErrorEnglish();
        language === "francais" && notifyEmailError();
      }
      if (!password) {
        language === "anglais" && notifyPasswordErrorEnglish();
        language === "francais" && notifyPasswordError();
      }
    } else if (confirmPassword !== password) {
      language === "anglais" && notifyErrorConfirmPassEnglish();
      language === "francais" && notifyConfirmErrorPass();
    } else if (!validCode) {
      language === "anglais" && notifyvalidCodeErrorEnglish();
      language === "francais" && notifyvalidCodedError();
    } else if (!check.checked) {
      language === "anglais" && notifyErrorCheckErrorEnglish();
      language === "francais" && notifyErrorCheckError();
    } else {
      try {
        axios({
          method: "post",
          url: `${process.env.REACT_APP_CLIENT_URL}/users/register`,
          data: {
            email,
            password,
            lastname,
            firstname,
            phone,
            city,
            address,
            country,
            code: validCode,
            profil,
            postalCode,
          },
        })
          .then((res) => {
            if (res.data.messageError) {
              codeErrorBackend(res.data.messageError);
            }
            if (res.data.errors) {
              emailErrorBackend(res.data.errors.email);
              passwordErrorBackend(res.data.errors.password);
            } else {
              language === "francais" && notyFySuccessRegister();
              language === "anglais" && notyFySuccessRegisterEnglish();
              language === "espagnol" && notyFySuccessRegisterSpanish();
              window.location = "/login";
            }
          })
          .catch(({ response }) => notifyBackErrors(response?.data?.message));
      } catch (error) {
        console.log(error);
        notifyErrorCode();
      }
    }
  };

  // const location = useLocation();

  return (
    // <form
    //   onSubmit={handleSubmit}
    //   className={
    //     location.pathname === "/paymentpage" ? "signup-form-payment" : "signup"
    //   }
    // >
    //   {
    //     !location.pathname === "/paymentpage" && ""
    //     // <h2
    //     //   style={{
    //     //     marginTop: "20px",
    //     //     marginBottom: "40px",
    //     //     fontWeight: 400,
    //     //     fontSize: "28px",
    //     //   }}
    //     // >
    //     //   {language === "francais" &&
    //     //     "Inscrivez-vous pour obtenir plus d'offres !"}
    //     //   {language === "anglais" && "Sign up to get more offers!"}
    //     //   {language === "espagnol" && "Suscríbete para recibir más ofertas!"}
    //     // </h2>
    //   }
    //   <div className="input-signup">
    //     <div className="firstandsecondcontainer">
    //       <div className="input-firstSign">
    //         {
    //           !location.pathname === "/paymentpage" && ""
    //           // <h4
    //           //   style={{
    //           //     color: "gray",
    //           //     fontWeight: 400,
    //           //   }}
    //           // >
    //           //   {language === "francais" && "Vous avez déjà un compte?"}
    //           //   {language === "anglais" && "Already have an account?"}
    //           //   {language === "espagnol" && "Ya tienes una cuenta?"}{" "}
    //           //   <Link
    //           //     to="/login"
    //           //     style={{
    //           //       color: "#1652f0",
    //           //     }}
    //           //   >
    //           //     {" "}
    //           //     {language === "francais" && "Connexion"}
    //           //     {language === "anglais" && "Sign in"}
    //           //     {language === "espagnol" && "Registrarse"}
    //           //   </Link>
    //           // </h4>
    //         }
    //         <div
    //           className={
    //             location.pathname !== "/register"
    //               ? "mail-nocontainer"
    //               : "mail-container"
    //           }
    //         >
    //           <div className="mail">
    //             {language === "francais" && (
    //               <label htmlFor="email">Email</label>
    //             )}
    //             {language === "anglais" && (
    //               <label htmlFor="email">E-mail</label>
    //             )}
    //             {language === "espagnol" && (
    //               <label htmlFor="email"> Electrónico</label>
    //             )}

    //             <input
    //               type="email"
    //               name="email"
    //               id="email"
    //               placeholder="Adresse e-mail"
    //               required
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //             />
    //           </div>
    //           <div ref={emailError} className="signup-errors"></div>

    //           <div
    //             className={
    //               location.pathname !== "/register" ? "mail-payment" : "mail"
    //             }
    //           >
    //             <label htmlFor="lastname">
    //               {language === "francais" && "Prenom"}
    //               {language === "anglais" && "Lastname"}
    //               {language === "espagnol" && "Nombre de pila"}
    //             </label>
    //             <input
    //               type="text"
    //               value={lastname}
    //               onChange={(e) => setLastname(e.target.value)}
    //               placeholder={
    //                 language === "anglais"
    //                   ? "Your lastname"
    //                   : language === "espagnol"
    //                   ? "Nombre de pila"
    //                   : "Votre Prénom"
    //               }
    //               id="lastname"
    //             />
    //           </div>
    //         </div>

    //         <div
    //           className={
    //             location.pathname !== "/register"
    //               ? "mail-nocontainer"
    //               : "mail-container"
    //           }
    //         >
    //           <div
    //             className={
    //               location.pathname !== "/register" ? "mail-payment" : "mail"
    //             }
    //           >
    //             <label htmlFor="firstname">
    //               {" "}
    //               {language === "francais" && "Nom"}
    //               {language === "anglais" && "Firstname"}
    //               {language === "espagnol" && "Apellido"}
    //             </label>
    //             <input
    //               type="text"
    //               placeholder={
    //                 language === "anglais"
    //                   ? "Your name"
    //                   : language === "espagnol"
    //                   ? "Apellido"
    //                   : "Votre nom"
    //               }
    //               id="firstname"
    //               value={firstname}
    //               onChange={(e) => setFirstName(e.target.value)}
    //             />
    //           </div>

    //           <div
    //             className={
    //               location.pathname !== "/register" ? "mail-payment" : "mail"
    //             }
    //           >
    //             <label htmlFor="phone">
    //               {language === "francais" && "Téléphone"}
    //               {language === "anglais" && "Mobile phone"}
    //               {language === "espagnol" && "Teléfono móvil"}
    //             </label>
    //             <input
    //               type="tel"
    //               placeholder={
    //                 language === "Anglais"
    //                   ? "Mobile phone"
    //                   : language === "espagnol"
    //                   ? "Teléfono móvil"
    //                   : "Téléphone"
    //               }
    //               id="phone"
    //               value={phone}
    //               onChange={(e) => setPhone(e.target.value)}
    //             />
    //           </div>
    //         </div>

    //         <div
    //           className={
    //             location.pathname !== "/register"
    //               ? "mail-nocontainer"
    //               : "mail-container"
    //           }
    //         >
    //           <div
    //             className={
    //               location.pathname !== "/register" ? "mail-payment" : "mail"
    //             }
    //           >
    //             <label htmlFor="address">
    //               {language === "francais" && "Adresse"}
    //               {language === "anglais" && "Address"}
    //               {language === "espagnol" && "Dirección"}
    //             </label>
    //             <input
    //               type="text"
    //               placeholder={
    //                 language === "Anglais"
    //                   ? "Your adress"
    //                   : language === "espagnol"
    //                   ? "Dirección"
    //                   : "Votre adresse"
    //               }
    //               value={address}
    //               onChange={(e) => setAddress(e.target.value)}
    //             />
    //           </div>
    //         </div>

    //         <div
    //           className={
    //             location.pathname !== "/register" ? "mail-payment" : "mail"
    //           }
    //         >
    //           <label htmlFor="country">
    //             {language === "francais" && "Pays"}
    //             {language === "anglais" && "Country"}
    //             {language === "espagnol" && "País"}
    //           </label>
    //           <select
    //             name="country"
    //             id="country"
    //             value={country}
    //             onChange={(e) => setCountry(e.target.value)}
    //             className="select-count"
    //           >
    //             <option value="Choisir un pays">Choisir un pays</option>
    //             {countryList.slice(2).map((singleCountry) => (
    //               <option value={singleCountry?.name}>
    //                 {singleCountry?.name}
    //               </option>
    //             ))}
    //           </select>
    //         </div>
    //       </div>
    //       <div className="input-secondSign">
    //         <div
    //           className={
    //             location.pathname !== "/register"
    //               ? "mail-nocontainer"
    //               : "mail-container"
    //           }
    //         >
    //           <div
    //             className={
    //               location.pathname !== "/register" ? "mail-payment" : "mail"
    //             }
    //           >
    //             <label htmlFor="city">
    //               {language === "francais" && "Ville"}
    //               {language === "anglais" && "City"}
    //               {language === "espagnol" && "Pueblo"}
    //             </label>
    //             <input
    //               type="text"
    //               placeholder={
    //                 language === "Anglais"
    //                   ? "City"
    //                   : language === "espagnol"
    //                   ? "Pueblo"
    //                   : "Ville"
    //               }
    //               value={city}
    //               onChange={(e) => setCity(e.target.value)}
    //             />
    //           </div>

    //           <div
    //             className={
    //               location.pathname !== "/register" ? "mail-payment" : "mail"
    //             }
    //           >
    //             {language === "francais" && (
    //               <label htmlFor="email">Mot de passe</label>
    //             )}
    //             {language === "anglais" && (
    //               <label htmlFor="email">Password</label>
    //             )}
    //             {language === "espagnol" && (
    //               <label htmlFor="email">Clave</label>
    //             )}
    //             <input
    //               type="password"
    //               name="password"
    //               id="password"
    //               required
    //               placeholder="Mot de passe"
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //             />
    //           </div>
    //           <div ref={passwordError} className="signup-errors"></div>
    //         </div>

    //         <div
    //           className={
    //             !location.pathname === "/register"
    //               ? "confirmpass-payment"
    //               : "confirmpass"
    //           }
    //         >
    //           {language === "francais" && (
    //             <label htmlFor="email">Confirmer mot de passe</label>
    //           )}
    //           {language === "anglais" && (
    //             <label htmlFor="email">Confirm password</label>
    //           )}
    //           {language === "espagnol" && (
    //             <label htmlFor="email">Confirmar contraseña</label>
    //           )}
    //           <input
    //             type="password"
    //             name="confirmPassword"
    //             id="confirmPassword"
    //             className="confirm-pass"
    //             required
    //             placeholder={
    //               language === "anglais"
    //                 ? "Confirme password"
    //                 : "Confirmer le mot de passe"
    //             }
    //             value={confirmPassword}
    //             onChange={(e) => setConfirmPassword(e.target.value)}
    //           />
    //           <div ref={confirmPasswordError} className="signup-errors"></div>
    //         </div>
    //         <div
    //           className={
    //             !location.pathname === "/register"
    //               ? "sendcode-payment"
    //               : "sendcode"
    //           }
    //         >
    //           <input
    //             type="text"
    //             name="code"
    //             id="code"
    //             placeholder={
    //               language === "anglais"
    //                 ? "Verification code"
    //                 : "Code de vérification"
    //             }
    //             style={{
    //               marginLeft: "15px",
    //             }}
    //             value={validCode}
    //             onChange={(e) => setValidCode(e.target.value)}
    //           />

    //           {location.pathname === "/paymentpage"
    //             ? !validCode.length > 0 && (
    //                 <input
    //                   type="button"
    //                   value={
    //                     language === "anglais" ? "Get code" : "Obtenir le code"
    //                   }
    //                   style={{
    //                     fontSize: "15px",
    //                     border: "1px solid #ccc",
    //                     width: "115px",
    //                     paddingLeft: "7px",
    //                     paddingTop: "11px",
    //                     paddingBottom: "11px",
    //                     outline: "none",
    //                     marginRight: "5px",
    //                   }}
    //                   onClick={verifyUser}
    //                 />
    //               )
    //             : !validCode.length > 0 && (
    //                 <input
    //                   type="button"
    //                   name="code"
    //                   id="code"
    //                   style={{
    //                     fontSize: "15px",
    //                     border: "1px solid #ccc",
    //                     width: "123px",
    //                     paddingLeft: "7px",
    //                     paddingTop: "12px",
    //                     paddingBottom: "12px",
    //                     outline: "none",
    //                     marginRight: "10px",
    //                   }}
    //                   value={
    //                     language === "anglais" ? "Get code" : "Obtenir le code"
    //                   }
    //                   onClick={verifyUser}
    //                 />
    //               )}
    //         </div>
    //         <div ref={codeError} className="signup-errors"></div>
    //       </div>
    //     </div>
    //     <div className="input-thirdSign">
    //       <div
    //         className="agree"
    //         style={{
    //           display: "flex",
    //           alignItems: "center",
    //           position: "relative",
    //         }}
    //       >
    //         <input
    //           type="checkbox"
    //           style={{
    //             position: "absolute",
    //             top: "4%",
    //             cursor: "pointer",
    //             outline: "none",
    //           }}
    //           id="myCheck"
    //         />

    //         {language === "anglais" && (
    //           <span
    //             style={{
    //               fontSize: "12px",
    //               marginLeft: "15px",
    //               // maxWidth: "300px",
    //               display: "flex",
    //               flexWrap: "wrap",
    //               lineHeight: "18px",
    //             }}
    //           >
    //             I accept the
    //             <Link
    //               to="/term-and-conditions"
    //               style={{
    //                 marginLeft: "2px",
    //                 marginRight: "2px",
    //               }}
    //             >
    //               {" "}
    //               terms and conditions{" "}
    //             </Link>{" "}
    //             and the
    //             <Link
    //               to="/privacy-policy"
    //               style={{
    //                 marginLeft: "2px",
    //               }}
    //             >
    //               {" "}
    //               privacy policy
    //             </Link>
    //           </span>
    //         )}

    //         {language === "francais" && (
    //           <span
    //             style={{
    //               fontSize: "12px",
    //               marginLeft: "15px",
    //               // maxWidth: "300px",
    //               display: "flex",
    //               flexWrap: "wrap",
    //               lineHeight: "18px",
    //             }}
    //           >
    //             J'accepte les
    //             <Link
    //               to="/term-and-conditions"
    //               style={{
    //                 marginLeft: "2px",
    //                 marginRight: "2px",
    //               }}
    //             >
    //               {" "}
    //               termes et conditions{" "}
    //             </Link>{" "}
    //             et la
    //             <Link
    //               to="/privacy-policy"
    //               style={{
    //                 marginLeft: "2px",
    //               }}
    //             >
    //               {" "}
    //               politique de confidentialité
    //             </Link>
    //           </span>
    //         )}

    //         {language === "espagnol" && (
    //           <span
    //             style={{
    //               fontSize: "12px",
    //               marginLeft: "15px",
    //               // maxWidth: "300px",
    //               display: "flex",
    //               flexWrap: "wrap",
    //               lineHeight: "18px",
    //             }}
    //           >
    //             Acepto los
    //             <Link
    //               to="/term-and-conditions"
    //               style={{
    //                 marginLeft: "2px",
    //                 marginRight: "2px",
    //               }}
    //             >
    //               {" "}
    //               términos y condiciones{" "}
    //             </Link>
    //             y la
    //             <Link
    //               to="/privacy-policy"
    //               style={{
    //                 marginLeft: "2px",
    //               }}
    //             >
    //               {" "}
    //               política de privacidad
    //             </Link>
    //           </span>
    //         )}
    //       </div>
    //       <div ref={checkError} className="signup-errors"></div>
    //     </div>
    //     <div className="input-fourthSign">
    //       {language === "francais" && validCode.length > 0 && (
    //         <input
    //           type="submit"
    //           className="btn-signup"
    //           value="Valider l'inscription"
    //         />
    //       )}

    //       {language === "anglais" && validCode.length > 0 && (
    //         <input
    //           type="submit"
    //           className="btn-signup"
    //           value="
    //       Confirm sign up"
    //         />
    //       )}

    //       {language === "espagnol" && validCode.length > 0 && (
    //         <input
    //           type="submit"
    //           className="btn-signup"
    //           value="Confirmar registro"
    //         />
    //       )}
    //     </div>
    //   </div>

    //   {/* <div ref={successSignUP} className="verifyEmail-success-signup"></div> */}
    //   {location.pathname === "/register" && (
    //     <div
    //       style={{
    //         color: "#f4f4f4",
    //         fontSize: "13px",
    //         width: "300px",
    //         fontWeight: 400,
    //       }}
    //     >
    //       Copyright &copy; 2019 - {new Date().getFullYear()}, ibendouma.com.
    //       {language === "francais" &&
    //         "Tous les droits sont réservés à ibendouma Limited."}
    //       {language === "anglais" &&
    //         "All rights are reserved to ibendouma Limited."}
    //       {language === "espagnol" &&
    //         "Todos los derechos están reservados a ibendouma Limited."}
    //       <ToastContainer
    //         position="top-center"
    //         autoClose={5000}
    //         hideProgressBar={false}
    //         newestOnTop={false}
    //         closeOnClick
    //         rtl={false}
    //         pauseOnFocusLoss
    //         draggable
    //         pauseOnHover
    //       />
    //     </div>
    //   )}
    // </form>
    <div className="signup">
      <div className="signup-container">
        <div className="paymentsignup-first">
          <h1 className="title">VOS INFORMATIONS PERSONNELLES</h1>
          <div className="personal">
            <div className="personal-lab">
              <label htmlFor="lastname">
                {language === "francais" && "Prenom"}
                {language === "anglais" && "Lastname"}
                {language === "espagnol" && "Nombre de pila"}
              </label>
              <label htmlFor="firstname">
                {language === "francais" && "Nom"}
                {language === "anglais" && "Firstname"}
                {language === "espagnol" && "Apellido"}
              </label>
              <label htmlFor="email">
                {language === "francais" && "Email"}
                {language === "anglais" && "E-mail"}
                {language === "espagnol" && "Electrónico"}
              </label>
              <label htmlFor="phone">
                {language === "francais" && "Téléphone"}
                {language === "anglais" && "Phone"}
                {language === "espagnol" && "Teléfono"}
              </label>
              <label htmlFor="password">
                {language === "francais" && "Mot de passe"}
                {language === "anglais" && "Password"}
                {language === "espagnol" && "Clave"}
              </label>
              <label htmlFor="password">
                {language === "francais" && "Confirmation"}
                {language === "anglais" && "Confirmation"}
                {language === "espagnol" && "Confirmación"}
              </label>
              {/* <label htmlFor="">
                <input
                  type="button"
                  name="code"
                  id="code"
                  className="getCode"
                  value={
                    language === "anglais" ? "Get code" : "Obtenir le code"
                  }
                  onClick={verifyUser}
                />
              </label> */}
            </div>
            <div className="personal-inp">
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                name="lastname"
                id="lastname"
                placeholder={language === "anglais" ? "Last Name:" : "Prénom"}
                className="lastname"
              />
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                name="firstname"
                id="firstname"
                placeholder={language === "anglais" ? "First Name:" : "Nom"}
                className="firstname"
              />
              <input
                type="email"
                name="emal"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={
                  language === "anglais" ? "Email adress:" : "Adresse email"
                }
                className="email"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
                id="phone"
                placeholder={language === "anglais" ? "Phone" : "Téléphone"}
                className="phone"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                id="password"
                placeholder={
                  language === "anglais" ? "Password" : "Mot de passe"
                }
                className="password"
              />
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="confirm-pass"
                required
                placeholder={
                  language === "anglais"
                    ? "Confirm password"
                    : "Confirmer le mot de passe"
                }
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {/* <input
                type="text"
                name="code"
                id="code"
                placeholder={
                  language === "anglais"
                    ? "Verification code"
                    : "Code de vérification"
                }
                value={validCode}
                onChange={(e) => setValidCode(e.target.value)}
              /> */}
              {/* <div ref={confirmPasswordError} className="signup-errors"></div> */}
            </div>
          </div>
        </div>
        <div className="paymentsignup-second">
          <h1 className="title">INFORMATIONS DE FACTURATION</h1>
          <div className="billing">
            <div className="billing-lab">
              <label
                htmlFor="adress"
                style={{
                  marginTop: "-5px",
                }}
              >
                {language === "francais" && "Adresse"}
                {language === "anglais" && "Address"}
                {language === "espagnol" && "Dirección"}
              </label>
              <label htmlFor="">
                {language === "francais" && "Pays"}
                {language === "anglais" && "Country"}
                {language === "espagnol" && "País"}
              </label>
              <label htmlFor="">
                {" "}
                {language === "francais" && "Ville"}
                {language === "anglais" && "City"}
                {language === "espagnol" && "Pueblo"}
              </label>
              <label
                htmlFor="postal"
                style={{
                  marginTop: "5px",
                }}
              >
                {language === "francais" && "Code Postal"}
                {language === "anglais" && "zip code"}
                {language === "espagnol" && "código postal"}
              </label>
            </div>
            <div className="billing-inp">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                name="adress"
                id="adress"
                placeholder={language === "anglais" ? "Adress" : "Adresse"}
              />
              <select
                name=""
                id=""
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="select-country"
              >
                <option value="Choisir un pays">
                  {" "}
                  {language === "francais" && "Choisir un pays"}
                  {language === "anglais" && "Select a country"}
                  {language === "espagnol" && "Elegir país"}
                </option>
                {countryList.slice(2).map((singleCountry) => (
                  <option value={singleCountry?.name}>
                    {singleCountry?.name}
                  </option>
                ))}
              </select>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder={
                  language === "anglais" ? "Your city" : "Votre ville"
                }
              />
              <input
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                name="postal"
                id="postal"
                placeholder={
                  language === "anglais" ? "Zip code" : "Code Postal"
                }
              />
              <div className="agree">
                <input
                  type="checkbox"
                  style={{
                    cursor: "pointer",
                    outline: "none",
                  }}
                  id="myCheck"
                />

                {language === "anglais" && (
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
                    I accept the
                    <Link
                      to="/term-and-conditions"
                      style={{
                        marginLeft: "2px",
                        marginRight: "2px",
                        color: "#1055ea",
                      }}
                    >
                      {" "}
                      terms and conditions{" "}
                    </Link>
                    and the
                    <Link
                      to="/privacy-policy"
                      style={{
                        marginLeft: "2px",
                        color: "#1055ea",
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
                        color: "#1055ea",
                      }}
                    >
                      {" "}
                      termes et conditions{" "}
                    </Link>{" "}
                    et la
                    <Link
                      to="/privacy-policy"
                      style={{
                        marginLeft: "2px",
                        color: "#1055ea",
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
                        color: "#1055ea",
                      }}
                    >
                      {" "}
                      términos y condiciones{" "}
                    </Link>
                    y la
                    <Link
                      to="/privacy-policy"
                      style={{
                        marginLeft: "2px",
                        color: "#1055ea",
                      }}
                    >
                      {" "}
                      política de privacidad
                    </Link>
                  </span>
                )}
              </div>

              <button className="btn-signup" onClick={handleSubmit}>
                {language === "anglais" && "Confirm"}{" "}
                {language === "francais" && "Confirmer"}
                {language === "espagnol" && "Confirmar"}
              </button>
            </div>
          </div>
        </div>

        {/* <button className="btn-paysign" onClick={handleSubmit}>
          {language === "francais" && "S'inscrire"}
          {language === "anglais" && "Sign Up"}
          {language === "espagnol" && "Inscribirse"}
        </button> */}
      </div>
      <div
        style={{
          color: "#f4f4f4",
          // fontSize: "13px",
          width: "300px",
          fontWeight: 400,
          textAlign: "center",
        }}
        className="copy-bottom"
      >
        Copyright &copy; 2019 - {new Date().getFullYear()}, ibendouma.
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

export default SignUp;
