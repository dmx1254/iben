import React, { useState } from "react";

import { AiFillCloseSquare } from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";
import { BsInstagram, BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaSkype } from "react-icons/fa";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";

import logo from "../assets/ibendouma-logo.png";

const SideDrawer = ({ show, click }) => {
  const { language } = useSelector((state) => state.language);

  const sideDrawerClass = ["sidedrawer"];
  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    <div className={sideDrawerClass.join(" ")}>
      <div className="sidedrawer-first">
        <Link to="/">
          <img src={logo} alt="ibbendouma logo" />
        </Link>
        <span className="sidedrawer-closeIcon" onClick={click}>
          <AiFillCloseSquare />
        </span>
      </div>
      <div className="sidedrawer-second">
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              id="home"
              // value={activeClassHome}
              // onClick={handleToggleActiveClassName}
              // className={activeClassHome && "nav-active"}
            >
              {language === "anglais" && "Home"}
              {language === "francais" && "Accueil"}
              {language === "espagnol" && "Acogida"}
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/dofus/dofus-kamas" id="sell-kamas">
              Dofus kamas
            </NavLink>
          </li>

          <li>
            <NavLink exact to="/les-dofus" id="solde-buy">
              Les Dofus
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/paysafecard" id="kamas-exchange">
              Paysafecard
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/kamas-price" className="li-link">
              <span className="header-second-nav-title">Prix Serveur</span>
            </NavLink>
          </li> */}
        </ul>
      </div>
      <div className="sidedrawer-third">
        {language === "anglais" && (
          <p>
            <span className="sidedrawer-third-go">ibendouma</span>,sells kamas
            for Dofus, Dofus Retro and Dofus Touch games at unbeatable prices.
            Our main goal is fast and cost-effective delivery. We guarantee you
            an excellent service 24/7.
            {/* Buying kamas and playing dofus or dofus
            touch will now be much easier for you. Your satisfaction is
            therefore at the heart of our mission. */}
          </p>
        )}{" "}
        {language === "francais" && (
          <p>
            <span className="sidedrawer-third-go">ibendouma</span> vend des
            kamas pour les jeux Dofus, Dofus Retro et Dofus Touch à des prix
            défiant toute concurrence. Notre objectif principal est une
            livraison rapide et à moindre coût. Nous vous garantissons un
            service d'excellence 24h/24, 7j/7.
            {/* Acheter des kamas et jouer à dofus ou à dofus touch sera désormais
            beaucoup plus facile pour vous. Votre satisfaction est donc au coeur
            de notre mission. */}
          </p>
        )}
        {language === "espagnol" && (
          <p>
            <span className="sidedrawer-third-go">ibendouma</span> vende Kamas
            para los juegos Dofus, Dofus Retro y Dofus Touch a precios muy
            competitivos. Nuestro objetivo principal es una entrega rápida y
            económica. Le garantizamos un servicio de excelencia 24h/24, 7j/7.
            {/* Comprar Kamas y jugar Dofus o Dofus touch ahora será mucho más fácil
            para usted. Por lo tanto, su satisfacción está en el centro de
            nuestra misión. */}
          </p>
        )}
      </div>
      <div className="sidedrawer-fourth">
        <a
          href="https://discordapp.com/users/993596419950792724/"
          target="__blank"
        >
          <span className="insta">
            <IoLogoDiscord />
          </span>
        </a>
        <a href="https://www.facebook.com/ibendouma/" target="__blank">
          <span className="face">
            <BsFacebook />
          </span>
        </a>
        <a href="skype:ilyass bendouma?chat" target="__blank">
          <span className="twitt">
            <FaSkype />
          </span>
        </a>
        <a href="https://wa.me/+85251625108" target="__blank">
          <span className="link">
            <BsWhatsapp />
          </span>
        </a>
      </div>
    </div>
  );
};

export default SideDrawer;
