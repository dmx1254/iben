import React from "react";
import ibendoumalogo from "../../assets/ibendouma-logo.png";
import { Step, Stepper } from "react-form-stepper";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderPaymenPage = () => {
  const { language } = useSelector((state) => state.language);

  return language === "anglais" ? (
    <div className="headerpaymentpage">
      <div className="textandlogotopay">
        <div className="logotopay">
          <Link to="/">
            <img src={ibendoumalogo} alt="ibendouma logo" />
          </Link>
          <span className="iben">iBendouma</span>
        </div>
        <span className="separator"></span>
        <span className="texttopay">Secure payment</span>
      </div>
      <div className="stepper-container">
        <Stepper activeStep={0}>
          <Step label="To order" />
          <Step label="Payment" />
          <Step label="Delivery" />
        </Stepper>
      </div>
    </div>
  ) : language === "espagnol" ? (
    <div className="headerpaymentpage">
      <div className="textandlogotopay">
        <div className="logotopay">
          <Link to="/">
            <img src={ibendoumalogo} alt="ibendouma logo" />
          </Link>
          <span className="iben">iBendouma</span>
        </div>
        <span className="separator"></span>
        <span className="texttopay">pago seguro</span>
      </div>
      <div className="stepper-container">
        <Stepper activeStep={0}>
          <Step label="Ordenar" />
          <Step label="Pago" />
          <Step label="Entrega" />
        </Stepper>
      </div>
    </div>
  ) : (
    <div className="headerpaymentpage">
      <div className="textandlogotopay">
        <div className="logotopay">
          <Link to="/">
            <img src={ibendoumalogo} alt="ibendouma logo" />
          </Link>
          <span className="iben">iBendouma</span>
        </div>
        <span className="separator"></span>
        <span className="texttopay">Paiement Sécurisé</span>
      </div>
      <div className="stepper-container">
        <Stepper activeStep={0}>
          <Step label="Passer la commande" />
          <Step label="Paiement" />
          <Step label="Livraison" />
        </Stepper>
      </div>
    </div>
  );
};

export default HeaderPaymenPage;
