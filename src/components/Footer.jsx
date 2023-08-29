import React, { useState } from "react";
import { Link } from "react-router-dom";

import visa from "../assets/iben/visa.webp";
import crypto from "../assets/iben/crypto.webp";
import bancontact from "../assets/iben/bancontact.webp";
import giropay from "../assets/iben/giropay.webp";
import ideal from "../assets/iben/ideal.webp";
import mastercard from "../assets/iben/mastercard.webp";
import skrill from "../assets/iben/skrill.webp";
import usdt from "../assets/iben/usdt.webp";
import neosurf from "../assets/iben/neosurf.webp";
import paysafecard from "../assets/iben/paysafecard.webp";
import paypal from "../assets/iben/paypal.png";

import barid from "../assets/payment-checkout/barid_bank.png";
import cih from "../assets/payment-checkout/cih_bank.png";
import atti from "../assets/payment-checkout/atti_bank.png";
import bmce from "../assets/payment-checkout/bmce_bank.png";
import wu from "../assets/payment-checkout/wu.png";
import cdm from "../assets/payment-checkout/cdm_bank.png";
import cashplus from "../assets/payment-checkout/cashplus.png";
import wafacash from "../assets/payment-checkout/wafacash.png";

import nortonbrand from "../assets/secure/nortonbrand.png";
import ssl from "../assets/secure/ssl.png";
import trustS from "../assets/secure/trustS.png";

import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

import { AiFillLike } from "react-icons/ai";
import { MdSecurity, MdFlashOn } from "react-icons/md";
import { IoArrowUndo } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

const Footer = () => {
  const location = useLocation();
  const { user } = useSelector((state) => state.user);
  let { language } = useSelector((state) => state.language);

  const { ipAddr } = useSelector((state) => state.ipAddr);

  return (
    <div className="footer">
      <div className="before_first-foot">
        <div className="before_first-foot-sec1">
          <p
            style={{
              textTransform: "uppercase",
            }}
          >
            {language === "francais" && "99.9% SATISFACTION"}
            {language === "anglais" && "99.9% SATISFACTION"}
            {language === "espagnol" && "99.9% SATISFACCIÓN"}
          </p>
          <div className="before_first-foot-sec1-fisrt">
            <span className="icon1">
              <AiFillLike className="icon1-icon" />
            </span>
            <span className="text1">
              {language === "anglais" &&
                "More than 30,000 players have benefited from the services of Ibendouma since 2012."}

              {language === "francais" &&
                "Plus de 30,000 joueurs ont beneficié des services de Ibendouma depuis 2012."}

              {language === "espagnol" &&
                "Más de 30,000 jugadores se han beneficiado de los servicios de Ibendouma desde 2012."}
            </span>
          </div>
        </div>
        <div className="before_first-foot-sec2">
          <p
            style={{
              textTransform: "uppercase",
            }}
          >
            {language === "francais" && "PAIEMENT SÉCURISÉ"}
            {language === "anglais" && "secure payment"}
            {language === "espagnol" && "pago seguro"}
          </p>
          <div className="before_first-foot-sec1-sec">
            <span className="icon2">
              <MdSecurity className="icon2-icon" />
            </span>
            <span className="text2">
              {language === "anglais" &&
                "Payment system 100% secure and approved by more than a 30,000 players!"}

              {language === "francais" &&
                "Système de paiement 100% sécurisé et approuvé par plus d'un 30,000 de joueurs!"}

              {language === "espagnol" &&
                "Sistema de pago 100% seguro y aprobado por más de un 30,000 jugadores!"}
            </span>
          </div>
        </div>
        <div className="before_first-foot-sec3">
          <p
            style={{
              textTransform: "uppercase",
            }}
          >
            {language === "francais" && "LIVRAISON RAPIDE"}
            {language === "anglais" && "fast delivery"}
            {language === "espagnol" && "envío rápido"}
          </p>
          <div className="before_first-foot-sec1-third">
            <span className="icon3">
              <MdFlashOn className="icon3-icon" />
            </span>
            <span className="text3">
              {language === "anglais" &&
                "More than 95% of kamas orders delivered in less than 15 minutes."}

              {language === "francais" &&
                "Plus de 95% des kamas commandes livrées en moins de 15 minutes."}

              {language === "espagnol" &&
                "Más del 95% de los Kamas pedidos entregados en menos de 15 minutos."}
            </span>
          </div>
        </div>
        <div className="before_first-foot-sec4">
          <p
            style={{
              textTransform: "uppercase",
            }}
          >
            {language === "francais" && "SATISFAIT OU REMBOURSÉ"}
            {language === "anglais" && "satisfied or refunded"}
            {language === "espagnol" && "devolución de dinero"}
          </p>
          <div className="before_first-foot-sec1-fourth">
            <span className="icon4">
              <IoArrowUndo className="icon4-icon" />
            </span>
            <span className="text4">
              {language === "anglais" &&
                "Refund made if you do not want to wait for your order."}

              {language === "francais" &&
                "Remboursement effectué si vous ne souhaitez pas attendre votre commande."}

              {language === "espagnol" &&
                "Reembolso realizado si no desea esperar su pedido."}
            </span>
          </div>
        </div>
      </div>
      <div className="footer-first">
        <div className="footer-first1">
          <h1>
            {language === "anglais" && "ABOUT US"}
            {language === "francais" && "À PROPOS DE NOUS"}
            {language === "espagnol" && "SOBRE NOSOTROS"}
          </h1>
          {language === "anglais" && (
            <p>
              Ibendouma sells kamas for Dofus, Dofus Retro and Dofus Touch at
              unbeatable prices. Our main goal is fast and cost-effective
              delivery. We will help you guarantee an excellent service 24/7,
              7/7. Purchase kamas and playing dofus or dofus touch will now be
              much easier for you. Your satisfaction is therefore at the heart
              of our mission
            </p>
          )}
          {language === "francais" && (
            <p>
              Ibendouma vend des kamas pour les jeux Dofus, Dofus Retro et Dofus
              Touch à des prix défiant toute concurrence. Notre objectif
              principal est une livraison rapide et à moindre coût. Nous vous
              garantissons un service d'excellence 24h/24, 7j/7. Acheter des
              kamas et jouer à dofus ou à dofus touch sera désormais beaucoup
              plus facile pour vous. Votre satisfaction est donc au coeur de
              notre mission
            </p>
          )}
          {language === "espagnol" && (
            <p>
              Ibendouma vende Kamas para los juegos Dofus, Dofus Retro y Dofus
              Touch a precios competitivos. Nuestro objetivo principal es una
              entrega rápida y económica. Le garanticemos un servicio de
              excelencia 24h/24, 7j/7. Comprar Kamas y jugar Dofus o Dofus touch
              ahora será mucho más fácil para usted. Su satisfacción está en el
              centro de nuestra misión
            </p>
          )}
        </div>
        <div className="security-btns">
          <img src={nortonbrand} alt="nortonbrand" />
          <img src={ssl} alt="ssl-secure" />
          <img src={trustS} alt="trusted-site" />
        </div>
        <div className="secContainer">
          <div className="footer-first2">
            <h1>
              {language === "anglais" && "QUICK LINK"}
              {language === "francais" && "LIEN RAPIDE"}
              {language === "espagnol" && "ENLACE RÀPIDO"}
            </h1>
            <div className="first-link">
              <p>
                <Link
                  to="/dofus/dofus-kamas"
                  style={{
                    color: "#f4f4f4",
                    fontSize: "15px",
                  }}
                >
                  Dofus kamas
                </Link>
              </p>
              <p>
                <Link
                  to="/dofus/dofus-retro"
                  style={{
                    color: "#f4f4f4",
                    fontSize: "15px",
                  }}
                >
                  Dofus retro
                </Link>
              </p>

              <p>
                <Link
                  to="/dofus/dofus-touch"
                  style={{
                    color: "#f4f4f4",
                    fontSize: "15px",
                  }}
                >
                  Dofus touch
                </Link>
              </p>

              <p>
                <Link
                  to={user?.user ? "/profil" : "/login"}
                  style={{
                    color: "#f4f4f4",
                    fontSize: "15px",
                  }}
                >
                  {language === "anglais" && "My orders"}
                  {language === "francais" && "Mes commandes"}
                  {language === "espagnol" && "Mis pedidos"}
                </Link>
              </p>
            </div>
          </div>
          <div className="footer-first3">
            <h1>INFORMATION</h1>
            <div className="third-link">
              <p>
                <Link
                  to="/faqs"
                  style={{
                    color: "#f4f4f4",
                    fontSize: "15px",
                  }}
                >
                  FAQ
                </Link>
              </p>
              <p>
                <Link
                  to="/privacy-policy"
                  style={{
                    color: "#f4f4f4",
                    fontSize: "15px",
                  }}
                >
                  {language === "anglais" && "Privacy policy"}
                  {language === "francais" && "Politique de confidentialité"}
                  {language === "espagnol" && "Política de privacidad"}
                </Link>
              </p>

              <p>
                <Link
                  to="/term-and-conditions"
                  style={{
                    color: "#f4f4f4",
                    fontSize: "15px",
                  }}
                >
                  {language === "anglais" && "Terms & Conditions"}
                  {language === "francais" && "Termes & Conditions"}
                  {language === "espagnol" && "Términos y Condiciones"}
                </Link>
              </p>

              <p>
                <Link
                  to="/contact"
                  style={{
                    color: "#f4f4f4",
                    fontSize: "15px",
                  }}
                >
                  {language === "anglais" && "Contact us"}
                  {language === "francais" && "Nous contacter"}
                  {language === "espagnol" && "Contactarnos"}
                </Link>
              </p>
            </div>
          </div>

          <div className="footer-first4">
            <h1>NOS SERVICES</h1>
            <div className="third-link">
              <p>
                <Link
                  to="/dofus/dofus-kamas"
                  style={{
                    color: "#f4f4f4",
                    fontSize: "15px",
                  }}
                >
                  {language === "anglais" && "buy kamas"}
                  {language === "francais" && "Acheter des Kamas"}
                  {language === "espagnol" && "comprar kamas"}
                </Link>
              </p>

              <p>
                <Link
                  to="/dofus/dofus-touch"
                  style={{
                    color: "#f4f4f4",
                    fontSize: "15px",
                  }}
                >
                  Kamas dofus Touch
                </Link>
              </p>

              <p>
                <Link
                  to="/paysafecard"
                  style={{
                    color: "#f4f4f4",
                    fontSize: "15px",
                  }}
                >
                  {language === "anglais" && "Pay by Paysafecard"}
                  {language === "francais" && "Payer par Paysafecard"}
                  {language === "espagnol" && "Pagar por Paysafecard"}
                </Link>
              </p>

              <p style={{ display: "flex", alignItems: "center" }}>
                <Link
                  to={user?.user ? "/profil" : "/login"}
                  style={{
                    color: "#f4f4f4",
                    fontSize: "15px",
                  }}
                >
                  <span
                    style={{
                      color: "rgb(221, 0, 23)",
                      marginTop: "2px",
                    }}
                  >
                    <FaShoppingCart />
                  </span>{" "}
                  {language === "anglais" && "My orders"}
                  {language === "francais" && "Mes commandes"}
                  {language === "espagnol" && "Mis pedidos"}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="adress_ibendouma">
        <p>
          &copy; 2023 iBendouma. JBIK INTERNATIONAL CO., LIMITED Registered
          address :ROOMS 1318-20,HOLLYWOODPLAZA, 610 NATHAN ROAD, MONGKOK
          KOWLOON . IBENDOUMA LIMITED (payment processing for Cardpay).
          Registered address:59 St Martin’s Lane, Suite 8, WC2N 4JS, London,
          United Kingdom
        </p>
      </div>

      {ipAddr === "Morocco" ? (
        <div className="footer-secma">
          <div className="img-mapay">
            <img src={cih} alt="cih" className="cih" />
            <img src={barid} alt="barid" className="barid" />
            <img src={atti} alt="atti" className="atti" />
            <img src={wu} alt="bmce" className="bmce" />
            <img src={cdm} alt="cdm" className="cdm" />
            <img src={cashplus} alt="cashplus" className="cashplus" />
            <img src={wafacash} alt="wafacash" className="wafacash" />
          </div>
        </div>
      ) : (
        <div className="footer-sec">
          <div className="copy">
            {" "}
            <p className="copyright">
              {language === "anglais" &&
                `Copyright © 2019 - ${new Date().getFullYear()}, ibendouma.com. All rights reserved to ibendouma Limited`}
              {language === "espagnol" &&
                `Copyright © 2019 - ${new Date().getFullYear()}, ibendouma.com. Todos los derechos están reservados a ibendouma Limited`}
              {language === "francais" &&
                `Copyright © 2019 - ${new Date().getFullYear()}, ibendouma.com. Tous droits réservés à ibendouma Limited`}
            </p>
          </div>

          <Link to="/secure-payment">
            <div className="img-pay">
              <img src={visa} alt="visa" />
              <img src={mastercard} alt="mastercard" />
              <img src={paysafecard} alt="paysafecard" />
              <img src={bancontact} alt="bancontact" />
              <img src={crypto} alt="crypto" />
              <img src={usdt} alt="usdt" />
              <img src={skrill} alt="skrill" />
              <img src={ideal} alt="ideal" />
              <img src={paypal} alt="paypal" />
              <img src={neosurf} alt="neosurf" />
              <img src={giropay} alt="giropay" />
            </div>
          </Link>
        </div>
      )}
      {/* <div className="footer-second">
        <p className="copyright">
          {language === "anglais" &&
            `Copyright © 2019 - ${new Date().getFullYear()}, ibendouma.com. All rights are reserved to ibendouma Limited.`}
          {language === "espagnol" &&
            `Copyright © 2019 - ${new Date().getFullYear()}, ibendouma.com. Todos los derechos están reservados a ibendouma Limited.`}
          {language === "francais" &&
            `Copyright © 2019 - ${new Date().getFullYear()}, ibendouma.com. Tous les droits sont réservés à ibendouma Limited.`}
        </p>
        <div className="footerConditions">
          <span>
            <Link to="/privacy-policy" className="termsandconditiontoffoter">
              {language === "anglais" && "Privacy policy"}
              {language === "espagnol" && "Política de confidencialidad"}
              {language === "francais" && "Politique de confidentialité"}{" "}
            </Link>
          </span>
          <span>
            <Link
              to="/term-and-conditions"
              className="termsandconditiontoffoter"
            >
              {language === "anglais" && "Terms and conditions"}
              {language === "espagnol" && "Términos y Condiciones"}
              {language === "francais" && "Termes et conditions"}
            </Link>
          </span>
          <span>
            <Link to="/contact" className="termsandconditiontoffoter">
              {language === "anglais" && "Contact us"}
              {language === "espagnol" && "Contáctenos"}
              {language === "francais" && "Contactez-nous"}
            </Link>
          </span>
        </div> */}
    </div>
  );
};

export default Footer;
