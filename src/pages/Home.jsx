import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useSelector, useDispatch } from "react-redux";

import useStyles from "./homeStyle";

import { Helmet } from "react-helmet";

import CookieConsent from "react-cookie-consent";

import { addNewCookState } from "../features/cookieSlices";

import secure from "../assets/service/secure.png";
import express from "../assets/service/express.png";
import best_price from "../assets/service/best_price.png";
import support from "../assets/service/support.png";
import retour from "../assets/service/return.png";
import SingleProduct from "../components/SingleProduct";
import { FaqsSection } from "../components";
import axios from "axios";
import { addServers } from "../features/serverList";
import { addProducts } from "../features/productSlices";
import { addCurrencyVal } from "../features/currencyExchange";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const { currency } = useSelector((state) => state.currency);

  const { products } = useSelector((state) => state.products);

  const { loading } = useSelector((state) => state.products);

  const { cook } = useSelector((state) => state.cook);

  let [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const fetchAllProducts = async () => {
      await axios
        .get(`${process.env.REACT_APP_CLIENT_URL}/products`)
        .then((res) => {
          dispatch(addProducts(res.data));
        });
    };
    fetchAllProducts();
  }, [dispatch]);

  useEffect(() => {
    const fetchEuro = async () => {
      await axios
        .get(`${process.env.REACT_APP_CLIENT_URL}/euro`)
        .then((res) => dispatch(addCurrencyVal(res?.data[0]?.euro)))
        .catch((error) => console.log(error));
    };
    fetchEuro();
  }, [dispatch]);

  useEffect(() => {
    const getServers = async () => {
      await axios
        .get(`${process.env.REACT_APP_CLIENT_URL}/server`)
        .then((res) => dispatch(addServers(res.data)));
    };
    getServers();
  }, [dispatch]);

  const { language } = useSelector((state) => state.language);

  const classes = useStyles();

  const handleAcceptCookie = () => {
    dispatch(addNewCookState(false));
  };
  const handleDeclineCookie = () => {
    dispatch(addNewCookState(false));
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // const options = {
    //   method: "GET",
    //   url: "https://currency-exchange.p.rapidapi.com/exchange",
    //   params: { from: "MAD", to: currency, q: "1.0" },
    //   headers: {
    //     "X-RapidAPI-Key": "04f6d53fdcmsh873622ea058d2ffp17df81jsn32e8a6b0499a",
    //     "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    //   },
    // };

    // axios
    //   .request(options)
    //   .then(function (response) {
    //     if (response.data) {
    //       setValueExchange(response.data);
    //     } else {
    //       setValueExchange(1);
    //     }
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    try {
      axios({
        method: "get",
        url: `${process.env.REACT_APP_CLIENT_URL}/${currency}`,
      }).then((res) => {
        if (currency === "euro") {
          dispatch(addCurrencyVal(res?.data[0]?.euro));
        } else if (currency === "gbp") {
          dispatch(addCurrencyVal(res?.data[0]?.gbp));
        } else if (currency === "usdt") {
          dispatch(addCurrencyVal(res?.data[0]?.usdt));
        } else if (currency === "dollar") {
          dispatch(addCurrencyVal(res?.data[0]?.dollar));
        } else if (currency === "cad") {
          dispatch(addCurrencyVal(res?.data[0]?.cad));
        } else if (currency === "chf") {
          dispatch(addCurrencyVal(res?.data[0]?.chf));
        } else if (currency === "rub") {
          dispatch(addCurrencyVal(res?.data[0]?.rub));
        } else if (currency === "mad") {
          dispatch(addCurrencyVal(res?.data[0]?.mad));
        } else {
          dispatch(addCurrencyVal(res?.data[0]?.euro));
        }
      });
    } catch (error) {}
  }, [currency, dispatch]);

  return (
    <div>
      <Helmet>
        <title>
          Acheter Dofus, Dofus Touch, et Dofus Retro à des prix imbattables
        </title>
      </Helmet>
      <Container
        maxWidth="xl"
        sx={{
          padding: "20px 0px",
        }}
        className={classes.container}
      >
        {loading ? (
          <div className="home-skeleton">
            <div>
              <Skeleton
                height="250px"
                width={screenSize < 416 ? "320px" : "400px"}
              />
              <Skeleton
                count={1}
                width={screenSize < 416 ? "320px" : "400px"}
                height="52px"
              />
            </div>
            <div>
              <Skeleton
                height="250px"
                width={screenSize < 416 ? "320px" : "400px"}
              />
              <Skeleton
                count={1}
                width={screenSize < 416 ? "320px" : "400px"}
                height="52px"
              />
            </div>
            <div>
              <Skeleton
                height="250px"
                width={screenSize < 416 ? "320px" : "400px"}
              />
              <Skeleton
                count={1}
                width={screenSize < 416 ? "320px" : "400px"}
                height="52px"
              />
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
              margin: "0px 10px",
            }}
          >
            {products?.map((data) => (
              <SingleProduct data={data} key={data._id} />
            ))}
          </div>
        )}
      </Container>

      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
          margin: "60px 0px",
        }}
        className="homepage-service"
      >
        <div className="card-content">
          <img src={secure} alt="paiement securise" />
          <h4>
            {language === "anglais" && "Secure payment"}
            {language === "espagnol" && "Pago seguro"}
            {language === "francais" && "Paiement sécurisé"}
          </h4>
          <span>
            {language === "anglais" &&
              "System of online payment secure and recommended by our users."}
            {language === "espagnol" &&
              "Sistema seguro de pago en línea probado por todos nuestros usuarios."}
            {language === "francais" &&
              " Système de paiement en ligne sécurisé éprouvé par tous nos utilisateurs."}
          </span>
        </div>
        <div className="card-content">
          <img src={express} alt="livraison express" />
          <h4>
            {language === "anglais" && "Fast delivery"}
            {language === "espagnol" && "Entrega de rayos"}
            {language === "francais" && "Livraison éclaire"}
          </h4>
          <span>
            {language === "anglais" &&
              "More than 98% of orders are delivered in last than 15 minutes."}
            {language === "espagnol" &&
              "Más del 98% de los pedidos entregados en menos de 15 minutos."}
            {language === "francais" &&
              "Plus de 98% des commandes livrées en moins de 15 minutes."}
          </span>
        </div>
        <div className="card-content">
          <img src={best_price} alt="meilleur prix" />
          <h4>
            {language === "anglais" && "Best price"}
            {language === "espagnol" && "Mejor precio"}
            {language === "francais" && "Meilleur prix"}
          </h4>
          <span>
            {language === "anglais" &&
              "iBendouma make sure that it's prices are the best in the market."}
            {language === "espagnol" &&
              "iBendouma asegura que sus precios son los mejores del mercado."}
            {language === "francais" &&
              "iBendouma s'assure que ses prix soient les meilleurs sur le marché."}
          </span>
        </div>
        <div className="card-content">
          <img src={support} alt="support" />
          <h4>
            {language === "anglais" && "24 × 7 Online support"}
            {language === "espagnol" && "Soporte en línea 24 × 7"}
            {language === "francais" && "24 × 7 Support en ligne"}
          </h4>
          <span>
            {language === "anglais" &&
              "Our customer service is available 24/7. Contact us at any time of the day."}
            {language === "espagnol" &&
              "Servicio disponible 24/7. Contáctenos en cualquier hora."}
            {language === "francais" &&
              "Service disponible 24/7. Contactez-nous à n'importe quelle heure."}
          </span>
        </div>
        <div className="card-content">
          <img src={retour} alt="retour" />
          <h4>
            {language === "anglais" && "Satistied or refunded"}
            {language === "espagnol" && "Satisfecho o rembolsado"}
            {language === "francais" && "Satisfait ou remboursé"}
          </h4>
          <span>
            {language === "anglais" &&
              "iBendouma make sure that their customers receive the ordered product."}
            {language === "espagnol" &&
              "iBendouma se asegura de que los compradores reciban el producto solicitado."}
            {language === "francais" &&
              "iBendouma s'assure que les acheteurs reçoivent le produit commandé."}
          </span>
        </div>
      </div>
      <div>
        <div>
          <FaqsSection />
        </div>
      </div>

      <CookieConsent
        onAccept={handleAcceptCookie}
        enableDeclineButton="Refusé"
        onDecline={handleDeclineCookie}
        location="bottom"
        buttonText="J'accepte"
        declineButtonText="Je refuse"
        cookieName="ibendoumaconfidentialitycookie"
        style={{ background: "#000000" }}
        buttonStyle={{
          color: "#4e503b",
          fontSize: "13px",
        }}
        flipButtons
        expires={5000}
        visible={cook ? "show" : "hidden"}
        debug={true}
      >
        {language === "anglais" && (
          <div className="cookie-container">
            <p
              style={{
                letterSpacing: "1.5px",
              }}
            >
              By continuing to navigate on the site{" "}
              <Link
                to="/"
                style={{
                  color: "#76bef2",
                  fontSize: "14px",
                }}
              >
                ibendouma.com
              </Link>{" "}
              it implies for the user, the full and unreserved acceptance of
              <Link
                to="/privacy-policy/#cookie-privacy"
                style={{
                  color: "#76bef2",
                  fontSize: "14px",
                }}
              >
                {" "}
                cookies
              </Link>
              .<br></br>
            </p>
          </div>
        )}
        {language === "espagnol" && (
          <div className="cookie-container">
            <p>
              La conexión y la navegación en el sitio{" "}
              <Link
                to="/"
                style={{
                  color: "#004a99",
                  fontSize: "14px",
                }}
              >
                ibendouma.com
              </Link>{" "}
              por parte del usuario implica la aceptación plena y sin reservas
              de los cookies.<br></br>
            </p>
          </div>
        )}

        {language === "francais" && (
          <div className="cookie-container">
            <p>
              La connexion et la navigation sur le site{" "}
              <Link
                to="/"
                style={{
                  color: "#004a99",
                  fontSize: "14px",
                }}
              >
                ibendouma.com
              </Link>{" "}
              par l’utilisateur implique l'acceptation intégrale et sans réserve
              des cookies.<br></br>
            </p>
          </div>
        )}
      </CookieConsent>
    </div>
  );
};

export default Home;
