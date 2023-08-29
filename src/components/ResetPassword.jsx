import React, { useState } from "react";

import emailjs from "@emailjs/browser";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const { language } = useSelector((state) => state.language);

  const resetPassword = () => {
    if (!email || !code || !password) {
      toast.error("Veuillez d'abord remplir tous les champs");
    } else if (password !== confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas");
    } else {
      axios({
        method: "post",
        url: `${process.env.REACT_APP_CLIENT_URL}/code/reset-password`,
        data: {
          email,
          code,
          password,
        },
      })
        .then((res) => {
          toast.success(res?.data.message);
          setEmail("");
          setCode("");
          setPassword("");
          setConfirmPassword("");
        })
        .catch(({ response }) => toast.error(response?.data.message));
    }
  };

  const sendEmail = () => {
    if (!email) {
      toast.error("L'adresse email ne doit pas être vide");
    } else {
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
        user_email: email,
        message: codeSending,
      };

      emailjs
        .send(
          "service_dc0avag",
          "template_hibxo4a",
          templateParams,
          "eb2OqawTMlgobdYSx"
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
              toast.success(
                "Vérifier votre adresse e-mail, le code de vérification vous a été envoyé"
              );
            });
            // console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      {isPasswordReset ? (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">
            {language === "anglais" && "Successful password reset"}
            {language === "francais" &&
              "Réinitialisation du mot de passe réussie"}
            {language === "espagnol" &&
              "Restablecimiento de contraseña exitoso"}
          </h2>
          <p className="text-white">
            {language === "anglais" &&
              "Your password has been successfully reset."}
            {language === "francais" &&
              "Votre mot de passe a été réinitialisé avec succès."}
            {language === "espagnol" &&
              "Su contraseña se ha restablecido correctamente."}
          </p>
        </div>
      ) : (
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-white">
            {language === "anglais" && "Reset password"}
            {language === "francais" && "Réinitialisation du mot de passe"}
            {language === "espagnol" && "Restablecer la contraseña"}
          </h2>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email..."
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
            <button
              className="text-base p-2 outline-none rounded  mb-4 mt-4 bg-red-600 text-white"
              onClick={sendEmail}
            >
              {language === "anglais" && "Get Code"}
              {language === "francais" && "Obtenir le code"}
              {language === "espagnol" && "Obtener código"}
            </button>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-white">
              {language === "anglais" && "Code"}
              {language === "francais" && "Code"}
              {language === "espagnol" && "codificado"}
            </label>
            <input
              type="text"
              id="code"
              value={code}
              placeholder="Code"
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-white">
              {language === "anglais" && "New Password"}
              {language === "francais" && "Nouveau mot de passe"}
              {language === "espagnol" && "Nueva contraseña"}
            </label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-2 text-white">
              {language === "anglais" && "confirm new password"}
              {language === "francais" &&
                "confirmation du nouveau mot de passe"}
              {language === "espagnol" && "confirmar nueva contraseña"}
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <button
            onClick={resetPassword}
            className="bg-red-600 text-white px-4 py-2 rounded mt-4"
          >
            {language === "anglais" && "Reset password"}
            {language === "francais" && "Réinitialiser le mot de passe"}
            {language === "espagnol" && "Restablecer la contraseña"}
          </button>
        </div>
      )}
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

export default ForgotPassword;
