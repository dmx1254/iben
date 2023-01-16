import React from "react";
import { Link } from "react-router-dom";

import googleSafe from "../assets/google-safe.webp";
import secureConnection from "../assets/secureconnection.webp";
import shoppingG from "../assets/shopping-g.webp";
import trustedsite from "../assets/trustedsite.png";

import { paymentImage } from "../CONSTANTS/data";

import { useSelector } from "react-redux";

const Footer = () => {
  let { language } = useSelector((state) => state.language);
  return (
    <div className="footer">
      <div className="footer-first">
        <div className="footer-trusted">
          <a href="https://safebrowsing.google.com/" target="__blank">
            <img src={googleSafe} alt="ibendouma google-safe" />
          </a>
          <img src={secureConnection} alt="ibendouma secureconnection" />
          <a href="https://us.norton.com/" target="__blank">
            <img src={shoppingG} alt="ibendouma shopping-g" />
          </a>
          <a href="https://www.trustedsite.com/" target="__blank">
            <img src={trustedsite} alt="ibendouma trustedsite" />
          </a>
        </div>
        <div className="payment-single-image">
          {paymentImage.map((payment) => (
            <Link to="/secure-payment">
              <img
                src={payment}
                alt={payment}
                className="paymentSingleMethode"
              />
            </Link>
          ))}
        </div>
        <div className="footer-second">
          <p className="copyright">
            {language === "anglais" &&
              `Copyright © 2019 - ${new Date().getFullYear()}, iBendouma.com. All rights are reserved to iBendouma Limited.`}
            {language === "espagnol" &&
              `Copyright © 2019 - ${new Date().getFullYear()}, iBendouma.com. Todos los derechos están reservados a iBendouma Limited.`}
            {language === "francais" &&
              `Copyright © 2019 - ${new Date().getFullYear()}, iBendouma.com. Tous les droits sont réservés à iBendouma Limited.`}
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
            <span>
              <Link to="/faqs" className="termsandconditiontoffoter">
                FAQ
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
