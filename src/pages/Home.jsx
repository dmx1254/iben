import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useSelector, useDispatch } from "react-redux";

import dofuskamas from "../assets/product-imageandlogo/dofus-kamas.png";

import useStyles from "./homeStyle";

import { Helmet } from "react-helmet";

import CookieConsent from "react-cookie-consent";

import { addNewCookState } from "../features/cookieSlices";

import SingleProduct from "../components/SingleProduct";
import { FaqsSection } from "../components";
import axios from "axios";
import { addServers } from "../features/serversSlice";
import { addProducts } from "../features/productSlices";
import { addCurrencyVal } from "../features/currencyExchange";
import { Link } from "react-router-dom";

import itemDofus from "../assets/homeadditem/legendofus.jpg";
import paysafecard from "../assets/homeadditem/paysafecard.png";

import { addNewIp } from "../features/ipSlice";
import { rmIpAdress } from "../features/ipSlice";
import { addNewCurrencyExchange } from "../features/currencyExchange";
import { addToggleState } from "../features/toggleIpSlice";
import { dataser } from "./serviceData";
import SingleServiceDetails from "../components/SingleServiceDetails";

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const { currency } = useSelector((state) => state.currency);

  const { products } = useSelector((state) => state.products);

  const { loading } = useSelector((state) => state.products);

  const { cook } = useSelector((state) => state.cook);

  const { ipAddr } = useSelector((state) => state.ipAddr);

  const { toggleIp } = useSelector((state) => state.toggleIp);

  let [screenSize, setScreenSize] = useState(window.innerWidth);

  const [location, setLocation] = useState(null);

  const [ipAdress, setIpAdress] = useState("");


  useEffect(() => {
    const getGeoLocate = async () => {
      await axios
        .get("https://api.ipify.org?format=json")
        .then((res) => setIpAdress(res?.data?.ip))
        .catch((error) => console.log(error));
      // fetch('https://api.ipify.org?format=json')
      // .then(response => response.json())
      // .then(data => console.log(data.ip))
      // .catch(error => console.error(error));
    };
    getGeoLocate();
  }, []);

  useEffect(() => {
    if (ipAdress) {
      const getCountry = async () => {
        await axios
          .get(`https://ipapi.co/${ipAdress}/json/`)
          .then((res) => {
            dispatch(rmIpAdress());
            dispatch(addToggleState(true));
            dispatch(addNewIp(res?.data?.country_name));
          })
          .catch((error) => console.log(error));
      };
      getCountry();
    }
  }, [toggleIp, ipAdress, dispatch]);

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

  useEffect(() => {
    if (ipAddr === "Morocco") {
      dispatch(addNewCurrencyExchange("mad"));
    } else {
      dispatch(addNewCurrencyExchange("euro"));
    }
  }, [ipAddr, dispatch]);

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
    } catch (error) {
      console.log(error);
    }
  }, [currency, dispatch]);

  return (
    <div className="home">
      <Helmet>
        <title>
          Acheter Dofus, Dofus Touch, et Dofus Retro à des prix imbattables sur
          ibendouma
        </title>
      </Helmet>
      <Helmet>
        <title>
          Acheter Dofus, Dofus Touch, et Dofus Retro à des prix imbattables sur
          ibendouma
        </title>
        <meta
          property="og:title"
          content=" Acheter Dofus, Dofus Touch, et Dofus retro"
        />
        <meta
          property="og:description"
          content=" Acheter Dofus, Dofus Touch, et Dofus Retro à des prix imbattables sur
          ibendouma"
        />
        <meta property="og:image" content={dofuskamas} />
        <meta
          property="og:url"
          content="https://ibendouma.com/dofus/dofus-kamas"
        />
        <meta property="og:type" content="product" />
        <meta property="og:site_name" content="https://ibendouma.com" />
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

      {/* <div className="services-infos" style={{ display: "none" }}>
        {dataser?.map((data) => (
          <SingleServiceDetails service={data} key={data?.id} />
        ))}
      </div> */}

      {loading ? (
        <div className="dofus-another-item">
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
        <div className="dofus-another-item">
          <div className="dofus-another-item-lesdofus">
            <Link to="/les-dofus">
              <img src={itemDofus} alt="item-dofus" />
            </Link>
            <Link to="/les-dofus" className="btn">
              <button>
                {language === "anglais" && "Dofus object"}
                {language === "francais" && "Objet Dofus"}
                {language === "espagnol" && "Asunto Dofus"}
              </button>
            </Link>
          </div>
          <div className="dofus-another-item-paysafecard">
            <Link to="/paysafecard">
              <img src={paysafecard} alt="item-dofus" />
            </Link>
            <Link to="/paysafecard" className="btn2">
              <button>Paysafecard</button>
            </Link>
          </div>
        </div>
      )}

      <div
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-delay="10"
        data-aos-duration="1000"
      >
        <FaqsSection />
      </div>

      <CookieConsent
        onAccept={handleAcceptCookie}
        enableDeclineButton="Refusé"
        onDecline={handleDeclineCookie}
        location="bottom"
        buttonText={
          language === "anglais"
            ? "I agree"
            : language === "francais"
            ? "J'accepte"
            : language === "espagnol"
            ? "Acepto"
            : "I agree"
        }
        declineButtonText={
          language === "anglais"
            ? "Denied"
            : language === "francais"
            ? "Refusé"
            : language === "espagnol"
            ? "Rechazó"
            : "Denied"
        }
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
