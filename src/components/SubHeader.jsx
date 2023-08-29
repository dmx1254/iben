import React, { useState } from "react";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

// import cookie from "js-cookie";

import { MdMenu } from "react-icons/md";

import { removeUser } from "../features/userSlice";

import { VscAccount } from "react-icons/vsc";

const SubHeader = ({ click, toggleArrowProfile, handleToggleArrow }) => {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.language);
  let { user } = useSelector((state) => state.user);

  // const removeCookie = (key) => {
  //   if (window !== "undefined") {
  //     cookie.remove(key, { expires: 1 });
  //   }
  // };

  const handleLogout = () => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_CLIENT_URL}/users/logout`,
      withCredentials: true,
    })
      .then(() => {
        dispatch(removeUser());
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="subheader">
      <span className="subheader-icon" onClick={click}>
        <MdMenu />
      </span>
      {user?.user ? (
        <div className="usertruth">
          <span className="user-contaner">
            {user.person.profil ? (
              <img
                src={user.person.profil}
                alt={user.person.lastname}
                className="img-user-person"
                onClick={handleToggleArrow("non")}
              />
            ) : (
              <VscAccount
                onClick={handleToggleArrow("non")}
                className="logo-subheader"
              />
            )}

            {toggleArrowProfile && (
              <div className="account-reveal">
                <Link to="/profil" className="link-profil">
                  <span>
                    {language === "anglais" && "Profile"}
                    {language === "francais" && "Profile"}
                    {language === "espagnol" && "Perfil"}
                  </span>
                </Link>
                <span className="sepa"></span>
                <span onClick={handleLogout}>
                  {language === "anglais" && "Logout"}
                  {language === "francais" && "Deconnexion"}
                  {language === "espagnol" && "Cerrar sesión"}
                </span>
              </div>
            )}
          </span>
        </div>
      ) : (
        <div className="subheader-acountUser">
          <Link to="/register">
            <button className="btnToLog">
              {language === "francais" && "S'inscrire"}
              {language === "anglais" && "Sign up"}
              {language === "espagnol" && "Inscribirse"}
            </button>
          </Link>
          <Link to="/login">
            <button className="btnToLog">
              {language === "francais" && "S'enregistrer"}
              {language === "anglais" && "Sign in"}
              {language === "espagnol" && "registrarse"}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SubHeader;
