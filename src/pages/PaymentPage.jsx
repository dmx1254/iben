import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdLockOutline } from "react-icons/md";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";

// import Loader from "../components/Loader";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  changeQuantity,
  addCharacterByPaymentpage,
} from "../features/productInfoSlice";

import image1 from "../assets/checkout/image-1-checkout.jpg";
import image2 from "../assets/checkout/image-2-checkout.jpg";
import image3 from "../assets/checkout/image-3-checkout.jpg";

import creditcard_pay from "../assets/newpay/creditcard_pay.webp";
import creditcardgooglepay from "../assets/newpay/creditcardgooglepay.webp";
import google_pay from "../assets/newpay/google_pay.webp";
import paypals from "../assets/newpay/paypals.webp";
import paysafecard from "../assets/newpay/paysafecard.webp";
import neosurf from "../assets/newpay/neosurf.webp";
import crypto from "../assets/newpay/crypto.webp";
import usdt from "../assets/newpay/usdt.webp";
import coinpal from "../assets/newpay/coinpal.png";

import noverif from "../assets/payment-checkout/noverif.png";
import barid from "../assets/payment-checkout/barid_bank.png";
import cih from "../assets/payment-checkout/cih_bank.png";
import atti from "../assets/payment-checkout/atti_bank.png";
import bmce from "../assets/payment-checkout/bmce_bank.png";
import wu from "../assets/payment-checkout/wu.png";
import cdm from "../assets/payment-checkout/cdm_bank.png";
import cashplus from "../assets/payment-checkout/cashplus.png";
import wafacash from "../assets/payment-checkout/wafacash.png";

import sepalogo from "../assets/payment-checkout/sepalogo.jpg";
import skrillmoney from "../assets/payment-checkout/skill-money.png";
import binancePayLogo from "../assets/payment-checkout/binance-pay-crypto.jpg";

import paypal from "../assets/payment-checkout/paypals.webp";

import axios from "axios";

import SignIn from "../components/SignIn";
import PaymentSignUp from "../components/PaymentSignUp";

import PaymentSignin from "../components/PaymentSignin";
import { addNewOrderId } from "../features/orderIdSlice";

const PaymentPage = () => {
  const [isScrolled, setIsScrolled] = useState(0);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const productInfo = useSelector((state) => state.productsinfo);
  const { user } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [curVal, setCurVal] = useState("");

  const { ipAddr } = useSelector((state) => state.ipAddr);

  // const [ipAddr, setIpAddr] = useState("France");

  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition >= 0 && scrollPosition <= 850) {
      setIsScrolled(scrollPosition);
    } else {
      setIsScrolled(850);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleChatClick() {
    void window.Tawk_API.toggle();
  }

  const commentErrorUser = () =>
    toast.error("Veuillez vous connecter avant d'ajouter un commentaire");

  const commentErrorVal = () =>
    toast.error("Veuillez remplir le champ de commentaire avant de confirmer");

  const commentSuccess = () =>
    toast.success("Merci d'avoir ajouter un commentaire !");

  const handleConfirmComment = () => {
    if (!user?.user) {
      commentErrorUser();
    } else if (!comment) {
      commentErrorVal();
    } else {
      axios({
        method: "post",
        url: `${process.env.REACT_APP_CLIENT_URL}/users/create-comment`,
        data: {
          commentEmail: user?.person?.email,
          commentLastname: user?.person?.lastname,
          commentFirstname: user?.person?.firstname,
          comment: comment,
          image: user?.person?.profil,
        },
      })
        .then((res) => {
          // console.log(res);
          commentSuccess();
          setComment("");
        })
        .catch((error) => console.log(error));
    }
  };

  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1, $2");
    return x;
  }

  const { currency } = useSelector((state) => state.currency);

  const { currencyValue } = useSelector((state) => state.currency);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currency === "euro") {
      setCurVal("EUR");
    } else if (currency === "dollar") {
      setCurVal("USD");
    } else if (currency === "gbp") {
      setCurVal("GBP");
    } else if (currency === "cad") {
      setCurVal("CAD");
    } else if (currency === "chf") {
      setCurVal("CHF");
    } else if (currency === "rub") {
      setCurVal("RUB");
    } else if (currency === "mad") {
      setCurVal("MAD");
    } else {
      setCurVal("USD");
    }
  }, [currency]);

  const { language } = useSelector((state) => state.language);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedChange, setSelectedChange] = useState(
    productInfo?.serverSelected
  );
  const [character1, setCharacter1] = useState("");
  const [character2, setCharacter2] = useState("");
  const [loader, setLoader] = useState(false);

  const [visamastercardPay, setVisamastercardPay] = useState(false);
  const [creditcardPay, setCreditcardPay] = useState(false);
  const [paysafecardPay, setPaysafecardPay] = useState(false);
  const [googlePay, setGooglePay] = useState(false);
  const [creditcardgooglePay, setCreditcardgooglePay] = useState(false);
  const [usdtPay, setUsdtPay] = useState(false);
  const [paypalPay, setPaypalPay] = useState(false);
  const [visamasterPay, setVisamasterPay] = useState(false);
  const [credicardPay, setCredicardPay] = useState(false);
  const [idealPay, setIdealPay] = useState(false);
  const [cryptoPay, setCryptoPay] = useState(false);
  const [neosurfPay, setNeosurfPay] = useState(false);
  const [skrillPay, setSkrillPay] = useState(false);
  const [ltcPay, setLtcPay] = useState(false);
  const [bnbPay, setBnbPay] = useState(false);
  const [cihPay, setCihPay] = useState(false);
  const [baridPay, setBaridPay] = useState(false);
  const [attiPay, setAttiPay] = useState(false);
  const [bmcePay, setBmcePay] = useState(false);
  const [cdmPay, setCdmPay] = useState(false);
  const [wafaPay, setWafaPay] = useState(false);
  const [cashPay, setCashPay] = useState(false);
  const [sepaPay, setSepaPay] = useState(false);
  const [binancePay, setBinancePay] = useState(false);
  const [skrillibenPay, setSkrillIbenPay] = useState(false);
  const [coinpalPay, setCoinpalPay] = useState(false);
  const [paypalOrder, setPaypalOrder] = useState({});

  const notifyNotRegisteredPaymentFrench = () =>
    toast.error("Veuillez vous connecter d'abord avant de faire une commande");

  const notifyNotRegisteredPaymentEnglish = () =>
    toast.error("Please login first before placing an order");

  const notifyfirstCharacterRefFrench = () =>
    toast.error("Le nom du personnage ne doit pas être vide");

  const notifyfirstCharacterRefEnglish = () =>
    toast.error("Character name must not be empty");

  const notifyconfirmCharacterRefFrench = () =>
    toast.error("Les noms de personnages ne correspondent pas");

  const notifyconfirmCharacterRefEnglish = () =>
    toast.error("Character names don't match");

  const notifycheckErrorFrench = () =>
    toast.error(
      "Veuillez valider les termes et conditions et la politique de confidentialité"
    );

  const notifycheckErrorEnglish = () =>
    toast.error(
      "Please validate the terms and conditions and the privacy policy"
    );

  const notyFysuccessMessageFrench = () =>
    toast.success(
      "Votre commande a été créé avec succéss, vous pouvez verifier sur votre profil, mes commandes"
    );

  const notyFysuccessMessageEnglish = () =>
    toast.success(
      "Your order has been created successfully, you can check on your profile, my orders"
    );

  const notyFysuccessMessageEspagnol = () =>
    toast.success(
      "Su pedido ha sido creado con éxito, puede comprobar en su perfil, mis pedidos"
    );

  const notifyNotSigninFrench = () =>
    toast.error("Veuillez vous connecter d'abord avant de faire une commande");

  const notifyPaymentErrorFrench = () =>
    toast.error("Veuillez choisir une méthode de paiements valide.");

  const notifyPaymentErrorEnglish = () =>
    toast.error("Please choose a valid payment method.");

  const notifyPaymentErrorSpanish = () =>
    toast.error("Elija un método de pago válido.");

  const notifyTotalPriceFrench = () =>
    toast.error("Le prix de la commande ne doit pas être nul");

  const notifyTotalPriceEnglish = () =>
    toast.error("Order price must be valid");

  const notifyNotSigninEnglish = () =>
    toast.error("Please login first before placing an order");

  const notyFySuccessCharacterFrench = () =>
    toast.success("Nom du personnage validé avec succéss");

  const notyFySuccessCharacterEnglish = () =>
    toast.success("Character name validated successfully");

  const handleDisplayLoginOrRegister = (e) => {
    if (e.target.id === "login") {
      setLogin(true);
      setRegister(false);
    } else if (e.target.id === "register") {
      setRegister(true);
      setLogin(false);
    } else {
      setLogin(false);
      setRegister(false);
    }
  };

  const fixedPriceBuyNow = (val) => {
    let numberToReturn = 0;
    if (val !== "undefinded" && typeof val !== "string" && val !== "") {
      numberToReturn = val.toFixed(2);
    }
    return numberToReturn;
  };

  useEffect(() => {
    setTotalPrice((productInfo?.amount / 1000000) * productInfo?.price);
  }, [productInfo, selectedChange]);

  useEffect(() => {
    setTotalPrice((productInfo?.amount / 1000000) * productInfo?.price);
  }, [productInfo, selectedChange]);

  const handleChangeValue = (e) => {
    setSelectedChange(e.target.value);
    dispatch(changeQuantity(e.target.value));
  };
  const orderNumGenerated = () => {
    const generateOrderNum = "0123456789";

    let myCode = "";
    for (let i = 0; i < 6; i++) {
      let code = Math.floor(Math.random() * generateOrderNum.length);
      myCode += generateOrderNum[code];
    }
    return myCode;
  };

  useEffect(() => {
    const newProduct = {
      productId: productInfo?.productId,
      category: productInfo?.category,
      server: productInfo?.server,
      qty: productInfo?.amount,
      amount: productInfo?.amount / 1000000,
      price: Number(productInfo?.price),
      character: character1,
    };

    setPaypalOrder({
      userId: user?.user,
      orderNum: orderNumGenerated(),
      detailUser: user?.person,
      products: [newProduct],
      address: "",
      status: "En attente",
      totalPrice: Number(fixedPriceBuyNow(totalPrice)),
      paymentMethod: "",
    });
  }, [productInfo]);

  const payCheck = document.getElementById("payCheckPayment");

  const handleAddOrdersPayment = () => {
    if (!character1 || character1 !== character2) {
      language === "anglais" && notifyfirstCharacterRefEnglish();
      language === "francais" && notifyfirstCharacterRefFrench();
    } else if (!payCheck.checked) {
      language === "anglais" && notifycheckErrorEnglish();
      language === "francais" && notifycheckErrorFrench();
    } else if (!user.user) {
      language === "anglais" && notifyNotRegisteredPaymentEnglish();
      language === "francais" && notifyNotRegisteredPaymentFrench();
    } else if (totalPrice < 0) {
      language === "anglais" && notifyTotalPriceEnglish();
      language === "francais" && notifyTotalPriceFrench();
    } else {
      let orderNum = orderNumGenerated();
      const newProduct = {
        productId: productInfo?.productId,
        category: productInfo?.category,
        server: productInfo?.server,
        qty: productInfo?.amount,
        amount: productInfo?.amount / 1000000,
        price: Number(productInfo?.price),
        character: character1,
      };
      const orderData = {
        userId: user?.user,
        orderNum: orderNum,
        detailUser: user?.person,
        products: [newProduct],
        address: "",
        status: "En attente",
        totalPrice: Number(fixedPriceBuyNow(totalPrice)),
        paymentMethod: "",
        orderIdPaid: "",
      };

      let orderToPush = [];
      orderToPush.push(orderData);
      let payments = [];
      let cur = "";

      if (currency === "euro") {
        if (visamastercardPay || visamasterPay || credicardPay) {
          orderData.paymentMethod = "Carte bancaire";
          payments = ["card"];
          cur = "eur";
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/create-checkout-session`,
            data: { line_items: orderToPush, devise: cur, pay: payments },
          })
            .then((res) => {
              window.location = res.data.url;
              // console.log(res.data.url);
              // language === "anglais" && notyFysuccessMessageEnglish();
              // language === "francais" && notyFysuccessMessageFrench();
            })
            .then(() => {
              axios({
                method: "post",
                url: `${process.env.REACT_APP_CLIENT_URL}/order`,
                data: orderData,
              })
                .then((res) => {
                  // console.log(res.data);
                  // language === "anglais" && notyFySuccessOrderEnglish();
                  // language === "francais" && notyFySuccessOrderFrench();
                })
                .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
        } else if (idealPay) {
          orderData.paymentMethod = "Ideal";
          payments = ["ideal"];
          cur = "eur";
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/create-checkout-session`,
            data: { line_items: orderToPush, devise: cur, pay: payments },
          })
            .then((res) => {
              window.location = res.data.url;
              // console.log(res.data.url);
              // language === "anglais" && notyFysuccessMessageEnglish();
              // language === "francais" && notyFysuccessMessageFrench();
            })
            .then(() => {
              axios({
                method: "post",
                url: `${process.env.REACT_APP_CLIENT_URL}/order`,
                data: orderData,
              })
                .then((res) => {
                  // console.log(res.data);
                  // language === "anglais" && notyFySuccessOrderEnglish();
                  // language === "francais" && notyFySuccessOrderFrench();
                })
                .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
        } else if (cryptoPay) {
          orderData.paymentMethod = "Coinbase";
          getCoinbaseCommerce();
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          });
        } else if (paypalPay) {
          orderData.paymentMethod = "Paypal";
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (creditcardPay) {
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (paysafecardPay) {
          orderData.paymentMethod = "Paysafecard";
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (googlePay) {
          orderData.paymentMethod = "GooglePay";
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (creditcardgooglePay) {
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (coinpalPay) {
          orderData.paymentMethod = "coinpal";
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (bnbPay) {
          orderData.paymentMethod = "Sofort";
          payments = ["sofort"];
          cur = "eur";
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/create-checkout-session`,
            data: { line_items: orderToPush, devise: cur, pay: payments },
          })
            .then((res) => {
              window.location = res.data.url;
              // console.log(res.data.url);
              // language === "anglais" && notyFysuccessMessageEnglish();
              // language === "francais" && notyFysuccessMessageFrench();
            })
            .then(() => {
              axios({
                method: "post",
                url: `${process.env.REACT_APP_CLIENT_URL}/order`,
                data: orderData,
              })
                .then((res) => {
                  // console.log(res.data);
                  // language === "anglais" && notyFySuccessOrderEnglish();
                  // language === "francais" && notyFySuccessOrderFrench();
                })
                .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
        } else if (usdtPay) {
          orderData.paymentMethod = "Usdt TRC20";
          window.location = `/paymentusdt/${user?.user}/${Number(
            fixedPriceBuyNow(totalPrice + 1)
          )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          });
        } else if (neosurfPay) {
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else {
          language === "anglais" && notifyPaymentErrorEnglish();
          language === "francais" && notifyPaymentErrorFrench();
          language === "espagnol" && notifyPaymentErrorSpanish();
        }
      } else if (currency === "dollar") {
        if (visamastercardPay || visamasterPay || credicardPay) {
          orderData.paymentMethod = "Carte bancaire";
          payments = ["card"];
          cur = "usd";
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/create-checkout-session`,
            data: { line_items: orderToPush, devise: cur, pay: payments },
          })
            .then((res) => {
              window.location = res.data.url;
              // console.log(res.data.url);
              // language === "anglais" && notyFysuccessMessageEnglish();
              // language === "francais" && notyFysuccessMessageFrench();
            })
            .then(() => {
              axios({
                method: "post",
                url: `${process.env.REACT_APP_CLIENT_URL}/order`,
                data: orderData,
              })
                .then((res) => {
                  // console.log(res.data);
                  // language === "anglais" && notyFySuccessOrderEnglish();
                  // language === "francais" && notyFySuccessOrderFrench();
                })
                .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
        } else if (cryptoPay) {
          orderData.paymentMethod = "Coinbase";
          getCoinbaseCommerce();
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          });
        } else if (coinpalPay) {
          orderData.paymentMethod = "coinpal";

          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (usdtPay) {
          orderData.paymentMethod = "Usdt TRC20";
          window.location = `/paymentusdt/${user?.user}/${Number(
            fixedPriceBuyNow(totalPrice)
          )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          });
        } else if (paypalPay) {
          orderData.paymentMethod = "Paypal";
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (creditcardPay) {
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (paysafecardPay) {
          orderData.paymentMethod = "Paysafecard";
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (googlePay) {
          orderData.paymentMethod = "GooglePay";
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (creditcardgooglePay) {
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (neosurfPay) {
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else {
          language === "anglais" && notifyPaymentErrorEnglish();
          language === "francais" && notifyPaymentErrorFrench();
          language === "espagnol" && notifyPaymentErrorSpanish();
        }
      } else if (currency === "cad") {
        if (visamastercardPay || visamasterPay || credicardPay) {
          orderData.paymentMethod = "Carte bancaire";
          payments = ["card"];
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/create-checkout-session`,
            data: { line_items: orderToPush, devise: currency, pay: payments },
          })
            .then((res) => {
              window.location = res.data.url;
              // console.log(res.data.url);
              // language === "anglais" && notyFysuccessMessageEnglish();
              // language === "francais" && notyFysuccessMessageFrench();
            })
            .then(() => {
              axios({
                method: "post",
                url: `${process.env.REACT_APP_CLIENT_URL}/order`,
                data: orderData,
              })
                .then((res) => {
                  // console.log(res.data);
                  // language === "anglais" && notyFySuccessOrderEnglish();
                  // language === "francais" && notyFySuccessOrderFrench();
                })
                .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
        } else if (paypalPay) {
          orderData.paymentMethod = "Paypal";
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (creditcardPay) {
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (paysafecardPay) {
          orderData.paymentMethod = "Paysafecard";
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (googlePay) {
          orderData.paymentMethod = "GooglePay";
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (creditcardgooglePay) {
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (coinpalPay) {
          orderData.paymentMethod = "coinpal";

          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (cryptoPay) {
          orderData.paymentMethod = "Coinbase";
          getCoinbaseCommerce();
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          });
        } else if (usdtPay) {
          orderData.paymentMethod = "Usdt TRC20";
          window.location = `/paymentusdt/${user?.user}/${Number(
            fixedPriceBuyNow(totalPrice)
          )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          });
        } else if (neosurfPay) {
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else {
          language === "anglais" && notifyPaymentErrorEnglish();
          language === "francais" && notifyPaymentErrorFrench();
          language === "espagnol" && notifyPaymentErrorSpanish();
        }
      } else if (currency === "gbp") {
        if (visamastercardPay || visamasterPay || credicardPay) {
          orderData.paymentMethod = "Carte bancaire";
          payments = ["card"];
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/create-checkout-session`,
            data: { line_items: orderToPush, devise: currency, pay: payments },
          })
            .then((res) => {
              window.location = res.data.url;
              // console.log(res.data.url);
              // language === "anglais" && notyFysuccessMessageEnglish();
              // language === "francais" && notyFysuccessMessageFrench();
            })
            .then(() => {
              axios({
                method: "post",
                url: `${process.env.REACT_APP_CLIENT_URL}/order`,
                data: orderData,
              })
                .then((res) => {
                  // console.log(res.data);
                  // language === "anglais" && notyFySuccessOrderEnglish();
                  // language === "francais" && notyFySuccessOrderFrench();
                })
                .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
        } else if (cryptoPay) {
          orderData.paymentMethod = "Coinbase";
          getCoinbaseCommerce();
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          });
        } else if (paypalPay) {
          orderData.paymentMethod = "Paypal";
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (creditcardPay) {
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (paysafecardPay) {
          orderData.paymentMethod = "Paysafecard";
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (googlePay) {
          orderData.paymentMethod = "GooglePay";
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (creditcardgooglePay) {
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (coinpalPay) {
          orderData.paymentMethod = "coinpal";

          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (usdtPay) {
          orderData.paymentMethod = "Usdt TRC20";
          window.location = `/paymentusdt/${user?.user}/${Number(
            fixedPriceBuyNow(totalPrice)
          )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          });
        } else if (neosurfPay) {
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else {
          language === "anglais" && notifyPaymentErrorEnglish();
          language === "francais" && notifyPaymentErrorFrench();
          language === "espagnol" && notifyPaymentErrorSpanish();
        }
      } else if (currency === "chf") {
        if (visamastercardPay || visamasterPay || credicardPay) {
          orderData.paymentMethod = "Carte bancaire";
          payments = ["card"];
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/create-checkout-session`,
            data: { line_items: orderToPush, devise: currency, pay: payments },
          })
            .then((res) => {
              window.location = res.data.url;
              // console.log(res.data.url);
              // language === "anglais" && notyFysuccessMessageEnglish();
              // language === "francais" && notyFysuccessMessageFrench();
            })
            .then(() => {
              axios({
                method: "post",
                url: `${process.env.REACT_APP_CLIENT_URL}/order`,
                data: orderData,
              })
                .then((res) => {
                  // console.log(res.data);
                  // language === "anglais" && notyFySuccessOrderEnglish();
                  // language === "francais" && notyFySuccessOrderFrench();
                })
                .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
        } else if (cryptoPay) {
          orderData.paymentMethod = "Coinbase";
          getCoinbaseCommerce();
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          });
        } else if (usdtPay) {
          orderData.paymentMethod = "Usdt TRC20";
          window.location = `/paymentusdt/${user?.user}/${Number(
            fixedPriceBuyNow(totalPrice)
          )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          });
        } else if (coinpalPay) {
          orderData.paymentMethod = "coinpal";

          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (paypalPay) {
          orderData.paymentMethod = "Paypal";
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (creditcardPay) {
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (paysafecardPay) {
          orderData.paymentMethod = "Paysafecard";
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (googlePay) {
          orderData.paymentMethod = "GooglePay";
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (creditcardgooglePay) {
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (neosurfPay) {
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else {
          language === "anglais" && notifyPaymentErrorEnglish();
          language === "francais" && notifyPaymentErrorFrench();
          language === "espagnol" && notifyPaymentErrorSpanish();
        }
      } else if (currency === "mad") {
        if (visamastercardPay || visamasterPay || credicardPay) {
          orderData.paymentMethod = "Carte bancaire";
          payments = ["card"];
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/create-checkout-session`,
            data: { line_items: orderToPush, devise: currency, pay: payments },
          })
            .then((res) => {
              window.location = res.data.url;
              // console.log(res.data.url);
              // language === "anglais" && notyFysuccessMessageEnglish();
              // language === "francais" && notyFysuccessMessageFrench();
            })
            .then(() => {
              axios({
                method: "post",
                url: `${process.env.REACT_APP_CLIENT_URL}/order`,
                data: orderData,
              })
                .then((res) => {
                  // console.log(res.data);
                  // language === "anglais" && notyFySuccessOrderEnglish();
                  // language === "francais" && notyFySuccessOrderFrench();
                })
                .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
        } else if (cryptoPay) {
          orderData.paymentMethod = "Coinbase";
          getCoinbaseCommerce();
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          });
        } else if (usdtPay) {
          orderData.paymentMethod = "Usdt TRC20";
          window.location = `/paymentusdt/${user?.user}/${Number(
            fixedPriceBuyNow(totalPrice)
          )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          });
        } else if (paypalPay) {
          orderData.paymentMethod = "Paypal";
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (creditcardPay) {
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (paysafecardPay) {
          orderData.paymentMethod = "Paysafecard";
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (googlePay) {
          orderData.paymentMethod = "GooglePay";
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (creditcardgooglePay) {
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (neosurfPay) {
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (cihPay) {
          // window.location = `/paymentbtc/${user?.user}/${Number(
          //   fixedPriceBuyNow(totalPrice)
          // )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (baridPay) {
          // window.location = `/paymentbtc/${user?.user}/${Number(
          //   fixedPriceBuyNow(totalPrice)
          // )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (attiPay) {
          // window.location = `/paymentbtc/${user?.user}/${Number(
          //   fixedPriceBuyNow(totalPrice)
          // )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (bmcePay) {
          // window.location = `/paymentbtc/${user?.user}/${Number(
          //   fixedPriceBuyNow(totalPrice)
          // )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (cdmPay) {
          // window.location = `/paymentbtc/${user?.user}/${Number(
          //   fixedPriceBuyNow(totalPrice)
          // )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (wafaPay) {
          // window.location = `/paymentbtc/${user?.user}/${Number(
          //   fixedPriceBuyNow(totalPrice)
          // )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (cashPay) {
          // window.location = `/paymentbtc/${user?.user}/${Number(
          //   fixedPriceBuyNow(totalPrice)
          // )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (binancePay) {
          // window.location = `/paymentbtc/${user?.user}/${Number(
          //   fixedPriceBuyNow(totalPrice)
          // )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (coinpalPay) {
          orderData.paymentMethod = "coinpal";

          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (skrillibenPay) {
          // window.location = `/paymentbtc/${user?.user}/${Number(
          //   fixedPriceBuyNow(totalPrice)
          // )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else if (sepaPay) {
          // window.location = `/paymentbtc/${user?.user}/${Number(
          //   fixedPriceBuyNow(totalPrice)
          // )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else {
          language === "anglais" && notifyPaymentErrorEnglish();
          language === "francais" && notifyPaymentErrorFrench();
          language === "espagnol" && notifyPaymentErrorSpanish();
        }
      } else if (currency === "rub") {
        if (visamastercardPay || visamasterPay || credicardPay) {
          orderData.paymentMethod = "Carte bancaire";
          payments = ["card"];
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/create-checkout-session`,
            data: { line_items: orderToPush, devise: currency, pay: payments },
          })
            .then((res) => {
              window.location = res.data.url;
              // console.log(res.data.url);
              // language === "anglais" && notyFysuccessMessageEnglish();
              // language === "francais" && notyFysuccessMessageFrench();
            })
            .then(() => {
              axios({
                method: "post",
                url: `${process.env.REACT_APP_CLIENT_URL}/order`,
                data: orderData,
              })
                .then((res) => {
                  // console.log(res.data);
                  // language === "anglais" && notyFySuccessOrderEnglish();
                  // language === "francais" && notyFySuccessOrderFrench();
                })
                .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
        } else if (cryptoPay) {
          orderData.paymentMethod = "Coinbase";
          getCoinbaseCommerce();
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          });
        } else if (coinpalPay) {
          orderData.paymentMethod = "coinpal";

          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/coinpal/make-payment`,
            data: {
              currency: "RUB",
              amount: fixedPriceBuyNow(totalPrice),
              email: user?.person?.email,
              description: `${productInfo?.category} - ${productInfo?.server}`,
              orderNum: orderNum,
            },
          }).then((res) => {
            window.location.href = res?.data?.nextStepContent;
          });
        } else if (usdtPay) {
          orderData.paymentMethod = "Usdt TRC20";
          window.location = `/paymentusdt/${user?.user}/${Number(
            fixedPriceBuyNow(totalPrice)
          )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          });
        } else if (neosurfPay) {
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          }).then((res) => {
            alert(
              "Payment methods are not yet available.Go to the caht to discuss and pay your order"
            );
            language === "anglais" && notyFysuccessMessageEnglish();
            language === "espagnol" && notyFysuccessMessageEspagnol();
            language === "francais" && notyFysuccessMessageFrench();
            handleChatClick();
          });
        } else {
          language === "anglais" && notifyPaymentErrorEnglish();
          language === "francais" && notifyPaymentErrorFrench();
          language === "espagnol" && notifyPaymentErrorSpanish();
        }
      } else {
        language === "anglais" && notifyPaymentErrorEnglish();
        language === "francais" && notifyPaymentErrorFrench();
        language === "espagnol" && notifyPaymentErrorSpanish();
      }
    }
  };

  const handleTogglePaymentMethod = (e) => {
    if (e.target.id === "creditcard_pay") {
      setCreditcardPay(true);
      setUsdtPay(false);
      setPaypalPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setNeosurfPay(false);
      setSkrillPay(false);
      setLtcPay(false);
      setBnbPay(false);
      setCdmPay(false);
      setBmcePay(false);
      setAttiPay(false);
      setBaridPay(false);
      setCihPay(false);
      setCashPay(false);
      setWafaPay(false);
      setBinancePay(false);
      setSkrillIbenPay(false);
      setSepaPay(false);
      setCoinpalPay(false);
      setPaysafecardPay(false);
      setGooglePay(false);
      setCreditcardgooglePay(false);
    } else if (e.target.id === "usdt") {
      setUsdtPay(true);
      setCreditcardPay(false);
      setPaypalPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setNeosurfPay(false);
      setSkrillPay(false);
      setLtcPay(false);
      setBnbPay(false);
      setCdmPay(false);
      setBmcePay(false);
      setAttiPay(false);
      setBaridPay(false);
      setCihPay(false);
      setCashPay(false);
      setWafaPay(false);
      setBinancePay(false);
      setSkrillIbenPay(false);
      setSepaPay(false);
      setCoinpalPay(false);
      setPaysafecardPay(false);
      setGooglePay(false);
      setCreditcardgooglePay(false);
    } else if (e.target.id === "ltc") {
      setLtcPay(true);
      setUsdtPay(false);
      setCreditcardPay(false);
      setPaypalPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setNeosurfPay(false);
      setSkrillPay(false);
      setBnbPay(false);
      setCdmPay(false);
      setBmcePay(false);
      setAttiPay(false);
      setBaridPay(false);
      setCihPay(false);
      setCashPay(false);
      setWafaPay(false);
      setBinancePay(false);
      setSkrillIbenPay(false);
      setSepaPay(false);
      setCoinpalPay(false);
      setPaysafecardPay(false);
      setGooglePay(false);
      setCreditcardgooglePay(false);
    } else if (e.target.id === "bnb") {
      setBnbPay(true);
      setLtcPay(false);
      setUsdtPay(false);
      setCreditcardPay(false);
      setPaypalPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setNeosurfPay(false);
      setSkrillPay(false);
      setCdmPay(false);
      setBmcePay(false);
      setAttiPay(false);
      setBaridPay(false);
      setCihPay(false);
      setCashPay(false);
      setWafaPay(false);
      setBinancePay(false);
      setSkrillIbenPay(false);
      setSepaPay(false);
      setCoinpalPay(false);
      setPaysafecardPay(false);
      setGooglePay(false);
      setCreditcardgooglePay(false);
    } else if (e.target.id === "paypal") {
      setPaypalPay(true);
      setCreditcardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setNeosurfPay(false);
      setSkrillPay(false);
      setLtcPay(false);
      setBnbPay(false);
      setCdmPay(false);
      setBmcePay(false);
      setAttiPay(false);
      setBaridPay(false);
      setCihPay(false);
      setCashPay(false);
      setWafaPay(false);
      setBinancePay(false);
      setSkrillIbenPay(false);
      setSepaPay(false);
      setCoinpalPay(false);
      setPaysafecardPay(false);
      setGooglePay(false);
      setCreditcardgooglePay(false);
    } else if (e.target.id === "creditcardgooglepay") {
      setCreditcardgooglePay(true);
      setPaypalPay(false);
      setCreditcardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setNeosurfPay(false);
      setSkrillPay(false);
      setLtcPay(false);
      setBnbPay(false);
      setCdmPay(false);
      setBmcePay(false);
      setAttiPay(false);
      setBaridPay(false);
      setCihPay(false);
      setCashPay(false);
      setWafaPay(false);
      setBinancePay(false);
      setSkrillIbenPay(false);
      setSepaPay(false);
      setCoinpalPay(false);
      setPaysafecardPay(false);
      setGooglePay(false);
    } else if (e.target.id === "skrill") {
      setSkrillPay(true);
      setVisamasterPay(false);
      setPaypalPay(false);
      setCreditcardPay(false);
      setUsdtPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setNeosurfPay(false);
      setLtcPay(false);
      setBnbPay(false);
      setCdmPay(false);
      setBmcePay(false);
      setAttiPay(false);
      setBaridPay(false);
      setCihPay(false);
      setCashPay(false);
      setWafaPay(false);
      setBinancePay(false);
      setSkrillIbenPay(false);
      setSepaPay(false);
      setCoinpalPay(false);
      setPaysafecardPay(false);
      setGooglePay(false);
      setCreditcardgooglePay(false);
    } else if (e.target.id === "visa_master") {
      setVisamasterPay(true);
      setPaypalPay(false);
      setCreditcardPay(false);
      setUsdtPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setNeosurfPay(false);
      setSkrillPay(false);
      setLtcPay(false);
      setBnbPay(false);
      setCdmPay(false);
      setBmcePay(false);
      setAttiPay(false);
      setBaridPay(false);
      setCihPay(false);
      setCashPay(false);
      setWafaPay(false);
      setBinancePay(false);
      setSkrillIbenPay(false);
      setSepaPay(false);
      setCoinpalPay(false);
      setPaysafecardPay(false);
      setGooglePay(false);
      setCreditcardgooglePay(false);
    } else if (e.target.id === "creditcard") {
      setCredicardPay(true);
      setPaypalPay(false);
      setCreditcardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setNeosurfPay(false);
      setSkrillPay(false);
      setLtcPay(false);
      setBnbPay(false);
      setCdmPay(false);
      setBmcePay(false);
      setAttiPay(false);
      setBaridPay(false);
      setCihPay(false);
      setCashPay(false);
      setWafaPay(false);
      setBinancePay(false);
      setSkrillIbenPay(false);
      setSepaPay(false);
      setCoinpalPay(false);
      setPaysafecardPay(false);
      setGooglePay(false);
      setCreditcardgooglePay(false);
    } else if (e.target.id === "ideal") {
      setIdealPay(true);
      setPaypalPay(false);
      setCreditcardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setCryptoPay(false);
      setNeosurfPay(false);
      setSkrillPay(false);
      setLtcPay(false);
      setBnbPay(false);
      setCdmPay(false);
      setBmcePay(false);
      setAttiPay(false);
      setBaridPay(false);
      setCihPay(false);
      setCashPay(false);
      setWafaPay(false);
      setBinancePay(false);
      setSkrillIbenPay(false);
      setSepaPay(false);
      setCoinpalPay(false);
      setPaysafecardPay(false);
      setGooglePay(false);
      setCreditcardgooglePay(false);
    } else if (e.target.id === "crypto") {
      setCryptoPay(true);
      setPaypalPay(false);
      setCreditcardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setNeosurfPay(false);
      setSkrillPay(false);
      setLtcPay(false);
      setBnbPay(false);
      setCdmPay(false);
      setBmcePay(false);
      setAttiPay(false);
      setBaridPay(false);
      setCihPay(false);
      setCashPay(false);
      setWafaPay(false);
      setBinancePay(false);
      setSkrillIbenPay(false);
      setSepaPay(false);
      setCoinpalPay(false);
      setPaysafecardPay(false);
      setGooglePay(false);
      setCreditcardgooglePay(false);
    } else if (e.target.id === "neosurf") {
      setNeosurfPay(true);
      setPaypalPay(false);
      setCreditcardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setSkrillPay(false);
      setLtcPay(false);
      setBnbPay(false);
      setCdmPay(false);
      setBmcePay(false);
      setAttiPay(false);
      setBaridPay(false);
      setCihPay(false);
      setCashPay(false);
      setWafaPay(false);
      setBinancePay(false);
      setSkrillIbenPay(false);
      setSepaPay(false);
      setCoinpalPay(false);
      setPaysafecardPay(false);
      setGooglePay(false);
      setCreditcardgooglePay(false);
    } else if (e.target.id === "coinpal") {
      setCoinpalPay(true);
      setNeosurfPay(false);
      setPaypalPay(false);
      setCreditcardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setSkrillPay(false);
      setLtcPay(false);
      setBnbPay(false);
      setCdmPay(false);
      setBmcePay(false);
      setAttiPay(false);
      setBaridPay(false);
      setCihPay(false);
      setCashPay(false);
      setWafaPay(false);
      setBinancePay(false);
      setSkrillIbenPay(false);
      setSepaPay(false);
      setPaysafecardPay(false);
      setGooglePay(false);
      setCreditcardgooglePay(false);
    } else if (e.target.id === "google_pay") {
      setGooglePay(true);
      setCoinpalPay(false);
      setNeosurfPay(false);
      setPaypalPay(false);
      setCreditcardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setSkrillPay(false);
      setLtcPay(false);
      setBnbPay(false);
      setCdmPay(false);
      setBmcePay(false);
      setAttiPay(false);
      setBaridPay(false);
      setCihPay(false);
      setCashPay(false);
      setWafaPay(false);
      setBinancePay(false);
      setSkrillIbenPay(false);
      setSepaPay(false);
      setPaysafecardPay(false);
      setCreditcardgooglePay(false);
    } else if (e.target.id === "paysafecard") {
      setPaysafecardPay(true);
      setCoinpalPay(false);
      setNeosurfPay(false);
      setPaypalPay(false);
      setCreditcardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setSkrillPay(false);
      setLtcPay(false);
      setBnbPay(false);
      setCdmPay(false);
      setBmcePay(false);
      setAttiPay(false);
      setBaridPay(false);
      setCihPay(false);
      setCashPay(false);
      setWafaPay(false);
      setBinancePay(false);
      setSkrillIbenPay(false);
      setSepaPay(false);
      setGooglePay(false);
      setCreditcardgooglePay(false);
    } else if (e.target.id === "cih") {
      setCihPay(true);
      setBaridPay(false);
      setAttiPay(false);
      setBmcePay(false);
      setCdmPay(false);
      setNeosurfPay(false);
      setPaypalPay(false);
      setCreditcardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setSkrillPay(false);
      setLtcPay(false);
      setBnbPay(false);
      setCashPay(false);
      setWafaPay(false);
      setBinancePay(false);
      setSkrillIbenPay(false);
      setSepaPay(false);
      setCoinpalPay(false);
      setPaysafecardPay(false);
      setGooglePay(false);
      setCreditcardgooglePay(false);
    } else if (e.target.id === "barid") {
      setBaridPay(true);
      setCihPay(false);
      setAttiPay(false);
      setBmcePay(false);
      setCdmPay(false);
      setNeosurfPay(false);
      setPaypalPay(false);
      setCreditcardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setSkrillPay(false);
      setLtcPay(false);
      setBnbPay(false);
      setCashPay(false);
      setWafaPay(false);
      setBinancePay(false);
      setSkrillIbenPay(false);
      setSepaPay(false);
      setCoinpalPay(false);
      setPaysafecardPay(false);
      setGooglePay(false);
      setCreditcardgooglePay(false);
    } else if (e.target.id === "atti") {
      setAttiPay(true);
      setBaridPay(false);
      setCihPay(false);
      setBmcePay(false);
      setCdmPay(false);
      setNeosurfPay(false);
      setPaypalPay(false);
      setCreditcardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setSkrillPay(false);
      setLtcPay(false);
      setBnbPay(false);
      setCashPay(false);
      setWafaPay(false);
      setBinancePay(false);
      setSkrillIbenPay(false);
      setSepaPay(false);
      setCoinpalPay(false);
      setPaysafecardPay(false);
      setGooglePay(false);
      setCreditcardgooglePay(false);
    } else if (e.target.id === "bmce") {
      setBmcePay(true);
      setAttiPay(false);
      setBaridPay(false);
      setCihPay(false);
      setCdmPay(false);
      setNeosurfPay(false);
      setPaypalPay(false);
      setCreditcardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setSkrillPay(false);
      setLtcPay(false);
      setBnbPay(false);
      setCashPay(false);
      setWafaPay(false);
      setBinancePay(false);
      setSkrillIbenPay(false);
      setSepaPay(false);
      setCoinpalPay(false);
      setPaysafecardPay(false);
      setGooglePay(false);
      setCreditcardgooglePay(false);
    } else if (e.target.id === "cdm") {
      setCdmPay(true);
      setBmcePay(false);
      setAttiPay(false);
      setBaridPay(false);
      setCihPay(false);
      setNeosurfPay(false);
      setPaypalPay(false);
      setCreditcardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setSkrillPay(false);
      setLtcPay(false);
      setBnbPay(false);
      setCashPay(false);
      setWafaPay(false);
      setBinancePay(false);
      setSkrillIbenPay(false);
      setSepaPay(false);
      setCoinpalPay(false);
      setPaysafecardPay(false);
      setGooglePay(false);
      setCreditcardgooglePay(false);
    } else if (e.target.id === "wafacash") {
      setWafaPay(true);
      setCashPay(false);
      setCdmPay(false);
      setBmcePay(false);
      setAttiPay(false);
      setBaridPay(false);
      setCihPay(false);
      setNeosurfPay(false);
      setPaypalPay(false);
      setCreditcardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setSkrillPay(false);
      setLtcPay(false);
      setBnbPay(false);
      setBinancePay(false);
      setSkrillIbenPay(false);
      setSepaPay(false);
      setCoinpalPay(false);
      setPaysafecardPay(false);
      setGooglePay(false);
      setCreditcardgooglePay(false);
    } else if (e.target.id === "cashplus") {
      setCashPay(true);
      setWafaPay(false);
      setCdmPay(false);
      setBmcePay(false);
      setAttiPay(false);
      setBaridPay(false);
      setCihPay(false);
      setNeosurfPay(false);
      setPaypalPay(false);
      setCreditcardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setSkrillPay(false);
      setLtcPay(false);
      setBnbPay(false);
      setBinancePay(false);
      setSkrillIbenPay(false);
      setSepaPay(false);
      setCoinpalPay(false);
      setPaysafecardPay(false);
      setGooglePay(false);
      setCreditcardgooglePay(false);
    } else if (e.target.id === "sepa") {
      setSepaPay(true);
      setBinancePay(false);
      setSkrillIbenPay(false);
      setCashPay(false);
      setWafaPay(false);
      setCdmPay(false);
      setBmcePay(false);
      setAttiPay(false);
      setBaridPay(false);
      setCihPay(false);
      setNeosurfPay(false);
      setPaypalPay(false);
      setCreditcardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setSkrillPay(false);
      setLtcPay(false);
      setBnbPay(false);
      setCoinpalPay(false);
      setPaysafecardPay(false);
      setGooglePay(false);
      setCreditcardgooglePay(false);
    } else if (e.target.id === "skrilliben") {
      setSkrillIbenPay(true);
      setSepaPay(false);
      setBinancePay(false);
      setCashPay(false);
      setWafaPay(false);
      setCdmPay(false);
      setBmcePay(false);
      setAttiPay(false);
      setBaridPay(false);
      setCihPay(false);
      setNeosurfPay(false);
      setPaypalPay(false);
      setCreditcardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setSkrillPay(false);
      setLtcPay(false);
      setBnbPay(false);
      setCoinpalPay(false);
      setPaysafecardPay(false);
      setGooglePay(false);
      setCreditcardgooglePay(false);
    } else if (e.target.id === "binance") {
      setBinancePay(true);
      setSkrillIbenPay(false);
      setSepaPay(false);
      setCashPay(false);
      setWafaPay(false);
      setCdmPay(false);
      setBmcePay(false);
      setAttiPay(false);
      setBaridPay(false);
      setCihPay(false);
      setNeosurfPay(false);
      setPaypalPay(false);
      setCreditcardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setSkrillPay(false);
      setLtcPay(false);
      setBnbPay(false);
      setCoinpalPay(false);
      setPaysafecardPay(false);
      setGooglePay(false);
      setCreditcardgooglePay(false);
    } else {
      setNeosurfPay(false);
      setPaypalPay(false);
      setCreditcardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setSkrillPay(false);
      setLtcPay(false);
      setBnbPay(false);
      setCdmPay(false);
      setBmcePay(false);
      setAttiPay(false);
      setBaridPay(false);
      setCihPay(false);
      setCashPay(false);
      setWafaPay(false);
      setBinancePay(false);
      setSkrillIbenPay(false);
      setSepaPay(false);
      setCoinpalPay(false);
      setPaysafecardPay(false);
      setGooglePay(false);
      setCreditcardgooglePay(false);
    }
  };

  const getCoinbaseCommerce = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("X-CC-Api-Key", "1d076333-7bf2-48fe-b1e2-8db2ef5fa3aa");
    let curr = "";
    if (currency === "euro") {
      curr = "eur";
    } else if (currency === "dollar") {
      curr = "usd";
    } else {
      curr = currency;
    }

    // console.log(curr);

    var raw = JSON.stringify({
      name: "Ibendouma",
      description: "Payer avec coinbase",
      pricing_type: "fixed_price",
      local_price: {
        amount: Number(fixedPriceBuyNow(totalPrice)),
        currency: curr,
      },
      metadata: {
        customer_id: user?.person?._id,
        customer_name: user?.person?.email,
      },
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch("https://api.commerce.coinbase.com/charges", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        window.location = result?.data?.hosted_url;
      })
      .catch((error) => console.log("error", error));
  };

  // function createMarkup() {
  //   return {
  //     __html: (
  //       <script
  //         src="https://pay.glocash.com/public/gateway/js/embed.js"
  //         class="gc-embed-button"
  //         title="PAYER MAINTENANT"
  //         d-emkey="VlcDFQFVCg5QW1EG"
  //         d-merchant="MERCH-77 LTD."
  //         d-goodsname="Acheter vos produits dofus, dofus touch et dofus retro"
  //         d-price="12.78"
  //         d-currency="EUR"
  //         d-cc3ds="1"
  //         d-email="tipox1254@gmail.com"
  //         d-suceess="http://localhost:3000/checkout-success"
  //         d-failed="https://example.com/payNotify/failed"
  //         d-pending="https://example.com/payNotify/pending"
  //         d-notify="https://example.com/payNotify/notify"
  //         // d-cc3ds="https://example.com/payNotify/notify"
  //       ></script>
  //     ),
  //   };
  // }

  // function createMarkup() {
  //   return { __html: "First &middot; Second" };
  // }

  // const handleGlocash = async () => {
  //   await axios
  //     .post(" https://sandbox.glocash.com/gateway/payment/index", {
  //       REQ_EMAIL: "payment@ibendouma.com",
  //       REQ_INVOICE: "ORDER9087HBFFT56",
  //       REQ_SIGN:
  //         "ee8f48e8b619960cd59da28719d25b451eb9b2661455412c1dd2d2f335bd0842",
  //       CUS_EMAIL: "tipox1254@gmail.com",
  //       BIL_PRICE: "37.86",
  //       URL_SUCCESS: "https://ibendouma.com//checkout-success",
  //     })
  //     .then(function (response) {
  //       console.log(response.json());
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="payment-page">
      <div className="payment-page-component">
        {!user?.user && (
          <div className="login-or-signin">
            {language === "francais" && (
              <span>Ètape 1 : Connectez-vous ou inscrivez-vous</span>
            )}
            {language === "anglais" && <span>Step 1: Log in or register</span>}
            {language === "espagnol" && (
              <span>Paso 1: Inicie sesión o regístrese</span>
            )}
            <div>
              <button
                className={
                  login ? "login-or-signin-btn1" : "login-or-signin-btn2"
                }
                onClick={handleDisplayLoginOrRegister}
                id="login"
              >
                {language === "francais" && "Connexion"}
                {language === "anglais" && "Sign In"}
                {language === "espagnol" && "registrarse"}
              </button>
              <button
                className={
                  register ? "login-or-signin-btn1" : "login-or-signin-btn2"
                }
                onClick={handleDisplayLoginOrRegister}
                id="register"
              >
                {language === "francais" && "S'inscrire"}
                {language === "anglais" && "Sign Up"}
                {language === "espagnol" && "Inscribirse"}
              </button>
            </div>

            <div className="toggle-signin-signup">
              {login && (
                <PaymentSignin setRegister={setRegister} setLogin={setLogin} />
              )}
              {register && (
                <PaymentSignUp setLogin={setLogin} setRegister={setRegister} />
              )}
            </div>
          </div>
        )}
        <div className="product-information">
          {language === "francais" && user?.user && (
            <h2>Ètape 1: Récapitulatif de la commande</h2>
          )}
          {language === "anglais" && user?.user && (
            <h2>Step 1: Order Summary</h2>
          )}
          {language === "espagnol" && user?.user && (
            <h2>Paso 1: Resumen del pedido</h2>
          )}

          <div>
            <span>
              {" "}
              {language === "francais" && "Categorie"}
              {language === "anglais" && "Category"}
              {language === "espagnol" && "Categoría"}: {productInfo?.category}
            </span>
            <span>
              {" "}
              {language === "francais" && "Serveur"}
              {language === "anglais" && "Server"}
              {language === "espagnol" && "Servidora"}: {productInfo?.server}
            </span>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "5px",
              }}
            >
              <span>
                {" "}
                {language === "francais" && "Prix unitaire"}
                {language === "anglais" && "Unit price"}
                {language === "espagnol" && "Precio unitario"}:
              </span>{" "}
              <span
                style={{
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#ff0000",
                  marginTop: "2px",
                }}
              >
                {productInfo?.price} {currency === "euro" && "€"}
                {currency === "" && "MAD"}
                {currency === "dollar" && "$"}
                {currency === "mad" && "MAD"}
                {currency === "usdt" && "USDT"}
                {currency === "cad" && "CAD"}
                {currency === "chf" && "CHF"}
                {currency === "rub" && "RUB"}
                {currency === "gbp" && "£"}{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="inform-to-delivery">
          {language === "francais" && (
            <h2>Ètape 2 : Information de livraison</h2>
          )}
          {language === "anglais" && <h2>Step 2: Delivery Information</h2>}
          {language === "espagnol" && <h2>Paso 2: Información de entrega</h2>}
          <div>
            <select
              name="qty-choisi"
              id="qty-choisi"
              value={selectedChange}
              onChange={handleChangeValue}
            >
              <option value="1000000">{numberWithCommas(1000)} K</option>
              <option value="2000000">{numberWithCommas(2000)} K</option>
              <option value="3000000">{numberWithCommas(3000)} K</option>
              <option value="4000000">{numberWithCommas(4000)} K</option>
              <option value="5000000">{numberWithCommas(5000)} K</option>
              <option value="6000000">{numberWithCommas(6000)} K</option>
              <option value="7000000">{numberWithCommas(7000)} K</option>
              <option value="8000000">{numberWithCommas(8000)} K</option>
              <option value="9000000">{numberWithCommas(9000)} K</option>
              <option value="10000000">{numberWithCommas(10000)} K</option>
              <option value="15000000">{numberWithCommas(15000)} K</option>
              <option value="20000000">{numberWithCommas(20000)} K</option>
              <option value="30000000">{numberWithCommas(30000)} K</option>
              <option value="40000000">{numberWithCommas(40000)} K</option>
              <option value="50000000">{numberWithCommas(50000)} K</option>
              <option value="100000000">{numberWithCommas(100000)} K</option>
              <option value="200000000">{numberWithCommas(200000)} K</option>
              <option value="300000000">{numberWithCommas(300000)} K</option>
              <option value="400000000">{numberWithCommas(400000)} K</option>
              <option value="500000000">{numberWithCommas(500000)} K</option>
            </select>
            <select name="delivery-method" id="delevery-method">
              {language === "francais" && (
                <option value="Kamas Face à Face">Kamas Face à Face</option>
              )}
              {language === "anglais" && (
                <option value="Kamas face to face">Kamas face to face</option>
              )}
              {language === "espagnol" && (
                <option value="kamas cara a cara">Kamas cara a cara</option>
              )}
            </select>
          </div>
        </div>
        <div className="fraud-alert">
          <span>
            {/* <IoMdNotifications
              style={{
                fontSize: "19px",
              }}
            /> */}
            {language === "francais" && (
              <span className="fraud">
                🔔 Alerte a la prévention des fraudes: Veuillez lire cette{" "}
                <Link
                  to="/faqs"
                  style={{
                    color: "#E53333",
                    fontSize: "14px",
                    marginTop: "1px",
                  }}
                >
                  FAQ
                </Link>{" "}
                avant d'acheter !
              </span>
            )}
            {language === "anglais" && (
              <span className="fraud">
                Fraud Prevention Alert: Please read this{" "}
                {/* <Link
                  to="/faqs"
                  style={{
                    color: "#E53333",
                    fontSize: "15px",
                  }}
                > */}
                FAQ
                {/* </Link>{" "} */}
                before you buy!
              </span>
            )}
            {language === "espagnol" && (
              <span>
                Alerta de fraude: ¡Por favor, lea este{" "}
                <Link
                  to="/faqs"
                  style={{
                    color: "#E53333",
                  }}
                >
                  FAQ
                </Link>{" "}
                antes de comprar!
              </span>
            )}
          </span>
        </div>
        <div className="character">
          <input
            type="text"
            name="character"
            id="character"
            placeholder={
              language === "francais"
                ? "Nom de personnage"
                : language === "espagnol"
                ? "Nombre del personaje"
                : "Character name"
            }
            value={character1}
            onChange={(e) => setCharacter1(e.target.value)}
          />
          <input
            type="text"
            name="character-confirm"
            id="character-confirm"
            placeholder={
              language === "francais"
                ? "Confirmez le nom personnage"
                : language === "espagnol"
                ? "Confirmar nombre de personaje"
                : "Confirm character name"
            }
            value={character2}
            onChange={(e) => setCharacter2(e.target.value)}
          />
        </div>

        <div className="checkout-step3">
          {language === "francais" && (
            <h2
              style={{
                color: "#757575",
              }}
            >
              Étape 3: Méthode de paiement
            </h2>
          )}
          {language === "anglais" && (
            <h2
              style={{
                color: "#757575",
              }}
            >
              Step 3: Payment Method
            </h2>
          )}
          {language === "espagnol" && (
            <h2
              style={{
                color: "#757575",
              }}
            >
              Paso 3: Método de pago
            </h2>
          )}
          {/* <div></div> */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}

          <div className="paymentpage-checkout-methods">
            {ipAddr !== "Morocco" && (
              <div className="bouto-redi">
                <span>
                  {creditcardPay ? (
                    <MdRadioButtonChecked
                      style={{
                        color: "#129af6",
                      }}
                    />
                  ) : (
                    <MdRadioButtonUnchecked
                      name="creditcard_pay"
                      id="creditcard_pay"
                      onClick={handleTogglePaymentMethod}
                    />
                  )}
                </span>

                <img
                  src={creditcard_pay}
                  alt="creditcard_pay"
                  id="creditcard_pay"
                  onClick={handleTogglePaymentMethod}
                  className="creditcard_pay"
                />

                <div className="fee-crypto"></div>
              </div>
            )}
            {ipAddr !== "Morocco" && (
              <div className="bouto-redi">
                <span>
                  {creditcardgooglePay ? (
                    <MdRadioButtonChecked
                      style={{
                        color: "#129af6",
                      }}
                    />
                  ) : (
                    <MdRadioButtonUnchecked
                      name="creditcardgooglepay"
                      id="creditcardgooglepay"
                      onClick={handleTogglePaymentMethod}
                    />
                  )}
                </span>

                <img
                  src={creditcardgooglepay}
                  alt="creditcardgooglepay"
                  id="creditcardgooglepay"
                  onClick={handleTogglePaymentMethod}
                  className="creditcardgooglepay"
                />

                <div className="fee-crypto"></div>
              </div>
            )}
            {ipAddr !== "Morocco" && (
              <div className="bouto-redi">
                <span>
                  {googlePay ? (
                    <MdRadioButtonChecked
                      style={{
                        color: "#129af6",
                      }}
                    />
                  ) : (
                    <MdRadioButtonUnchecked
                      name="google_pay"
                      id="google_pay"
                      onClick={handleTogglePaymentMethod}
                    />
                  )}
                </span>

                <img
                  src={google_pay}
                  alt="google_pay"
                  id="google_pay"
                  onClick={handleTogglePaymentMethod}
                  className="google_pay"
                />

                <div className="fee-crypto"></div>
              </div>
            )}
            {ipAddr !== "Morocco" && (
              <div className="bouto-redi">
                <span>
                  {paypalPay ? (
                    <MdRadioButtonChecked
                      style={{
                        color: "#129af6",
                      }}
                    />
                  ) : (
                    <MdRadioButtonUnchecked
                      name="paypal"
                      id="paypal"
                      onClick={handleTogglePaymentMethod}
                    />
                  )}
                </span>

                <img
                  src={paypals}
                  alt="paypal"
                  id="paypal"
                  onClick={handleTogglePaymentMethod}
                  className="paypals"
                />

                <span>3% frais</span>
              </div>
            )}
            {ipAddr !== "Morocco" && (
              <div className="bouto-redi">
                <span>
                  {paysafecardPay ? (
                    <MdRadioButtonChecked
                      style={{
                        color: "#129af6",
                      }}
                    />
                  ) : (
                    <MdRadioButtonUnchecked
                      name="paysafecard"
                      id="paysafecard"
                      onClick={handleTogglePaymentMethod}
                    />
                  )}
                </span>

                <img
                  src={paysafecard}
                  alt="paysafecard"
                  id="paysafecard"
                  onClick={handleTogglePaymentMethod}
                  className="paysafe"
                />

                <span>7% frais</span>
              </div>
            )}
            {ipAddr !== "Morocco" && (
              <div className="bouto-redi">
                <span>
                  {coinpalPay ? (
                    <MdRadioButtonChecked
                      style={{
                        color: "#129af6",
                      }}
                    />
                  ) : (
                    <MdRadioButtonUnchecked
                      name="coinpal"
                      id="coinpal"
                      onClick={handleTogglePaymentMethod}
                    />
                  )}
                </span>

                <img
                  src={coinpal}
                  alt="coinpal"
                  id="coinpal"
                  onClick={handleTogglePaymentMethod}
                  className="coinpal"
                />

                {/* <span>7% frais</span> */}
              </div>
            )}
            {ipAddr !== "Morocco" && (
              <div className="bouto-redi">
                <span>
                  {neosurfPay ? (
                    <MdRadioButtonChecked
                      style={{
                        color: "#129af6",
                      }}
                    />
                  ) : (
                    <MdRadioButtonUnchecked
                      name="neosurf"
                      id="neosurf"
                      onClick={handleTogglePaymentMethod}
                    />
                  )}
                </span>

                <img
                  src={neosurf}
                  alt="neosurf"
                  neosurf
                  id="neosurf"
                  onClick={handleTogglePaymentMethod}
                  className="neosurf"
                />

                <span>7% frais</span>
              </div>
            )}
            {ipAddr !== "Morocco" && (
              <div className="bouto-redi">
                <span>
                  {cryptoPay ? (
                    <MdRadioButtonChecked
                      style={{
                        color: "#129af6",
                      }}
                    />
                  ) : (
                    <MdRadioButtonUnchecked
                      name="crypto"
                      id="crypto"
                      onClick={handleTogglePaymentMethod}
                    />
                  )}
                </span>

                <img
                  src={crypto}
                  alt="crypto"
                  id="crypto"
                  onClick={handleTogglePaymentMethod}
                  className="cryptos"
                />

                <div className="fee-crypto"></div>
              </div>
            )}
            {ipAddr !== "Morocco" && (
              <div className="bouto-redi">
                <span>
                  {usdtPay ? (
                    <MdRadioButtonChecked
                      style={{
                        color: "#129af6",
                      }}
                    />
                  ) : (
                    <MdRadioButtonUnchecked
                      name="usdt"
                      id="usdt"
                      onClick={handleTogglePaymentMethod}
                    />
                  )}
                </span>

                <img
                  src={usdt}
                  alt="usdt"
                  id="usdt"
                  onClick={handleTogglePaymentMethod}
                  className="usdtpay"
                />

                <span id="usdt" onClick={handleTogglePaymentMethod}>
                  USDT(TRC20)
                </span>
              </div>
            )}
            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            {/* <div>
            
            {/* Maroc Bank Transfert */}
            {ipAddr === "Morocco" && (
              <div className="bouto-redi">
                <span>
                  {cihPay ? (
                    <MdRadioButtonChecked
                      style={{
                        color: "#129af6",
                      }}
                    />
                  ) : (
                    <MdRadioButtonUnchecked
                      name="cih"
                      id="cih"
                      onClick={handleTogglePaymentMethod}
                      // style={{
                      //   color: "black",
                      // }}
                    />
                  )}
                </span>

                <img
                  src={cih}
                  alt="cih"
                  id="cih"
                  onClick={handleTogglePaymentMethod}
                  className="cih"
                />

                <div className="fee-crypto">
                  {/* <span className="fee-trc-percent">1%</span>
                <span className="fee-trc-fee">
                  {language === "anglais" && "Fee"}
                  {language === "francais" && "Frais"}
                  {language === "espagnol" && "Tarifa"}
                </span> */}
                </div>
              </div>
            )}
            {ipAddr === "Morocco" && (
              <div className="bouto-redi">
                <span>
                  {baridPay ? (
                    <MdRadioButtonChecked
                      style={{
                        color: "#129af6",
                      }}
                    />
                  ) : (
                    <MdRadioButtonUnchecked
                      name="barid"
                      id="barid"
                      onClick={handleTogglePaymentMethod}
                      // style={{
                      //   color: "black",
                      // }}
                    />
                  )}
                </span>

                <img
                  src={barid}
                  alt="barid"
                  id="barid"
                  onClick={handleTogglePaymentMethod}
                  className="barid"
                />

                <div className="fee-crypto">
                  {/* <span className="fee-trc-percent">1%</span>
                <span className="fee-trc-fee">
                  {language === "anglais" && "Fee"}
                  {language === "francais" && "Frais"}
                  {language === "espagnol" && "Tarifa"}
                </span> */}
                </div>
              </div>
            )}
            {ipAddr === "Morocco" && (
              <div className="bouto-redi">
                <span>
                  {attiPay ? (
                    <MdRadioButtonChecked
                      style={{
                        color: "#129af6",
                      }}
                    />
                  ) : (
                    <MdRadioButtonUnchecked
                      name="atti"
                      id="atti"
                      onClick={handleTogglePaymentMethod}
                      // style={{
                      //   color: "black",
                      // }}
                    />
                  )}
                </span>

                <img
                  src={atti}
                  alt="atti"
                  id="atti"
                  onClick={handleTogglePaymentMethod}
                  className="atti"
                />

                <div className="fee-crypto">
                  {/* <span className="fee-trc-percent">1%</span>
                <span className="fee-trc-fee">
                  {language === "anglais" && "Fee"}
                  {language === "francais" && "Frais"}
                  {language === "espagnol" && "Tarifa"}
                </span> */}
                </div>
              </div>
            )}
            {ipAddr === "Morocco" && (
              <div className="bouto-redi">
                <span>
                  {bmcePay ? (
                    <MdRadioButtonChecked
                      style={{
                        color: "#129af6",
                      }}
                    />
                  ) : (
                    <MdRadioButtonUnchecked
                      name="bmce"
                      id="bmce"
                      onClick={handleTogglePaymentMethod}
                      // style={{
                      //   color: "black",
                      // }}
                    />
                  )}
                </span>

                <img
                  src={wu}
                  alt="bmce"
                  id="bmce"
                  onClick={handleTogglePaymentMethod}
                  className="bmce"
                />

                <div className="fee-crypto">
                  {/* <span className="fee-trc-percent">1%</span>
                <span className="fee-trc-fee">
                  {language === "anglais" && "Fee"}
                  {language === "francais" && "Frais"}
                  {language === "espagnol" && "Tarifa"}
                </span> */}
                </div>
              </div>
            )}
            {ipAddr === "Morocco" && (
              <div className="bouto-redi">
                <span>
                  {cdmPay ? (
                    <MdRadioButtonChecked
                      style={{
                        color: "#129af6",
                      }}
                    />
                  ) : (
                    <MdRadioButtonUnchecked
                      name="cdm"
                      id="cdm"
                      onClick={handleTogglePaymentMethod}
                      // style={{
                      //   color: "black",
                      // }}
                    />
                  )}
                </span>

                <img
                  src={cdm}
                  alt="cdm"
                  id="cdm"
                  onClick={handleTogglePaymentMethod}
                  className="cdm"
                />

                <div className="fee-crypto">
                  {/* <span className="fee-trc-percent">1%</span>
                <span className="fee-trc-fee">
                  {language === "anglais" && "Fee"}
                  {language === "francais" && "Frais"}
                  {language === "espagnol" && "Tarifa"}
                </span> */}
                </div>
              </div>
            )}
            {ipAddr === "Morocco" && (
              <div className="bouto-redi">
                <span>
                  {wafaPay ? (
                    <MdRadioButtonChecked
                      style={{
                        color: "#129af6",
                      }}
                    />
                  ) : (
                    <MdRadioButtonUnchecked
                      name="wafacash"
                      id="wafacash"
                      onClick={handleTogglePaymentMethod}
                      // style={{
                      //   color: "black",
                      // }}
                    />
                  )}
                </span>

                <img
                  src={wafacash}
                  alt="wafacash"
                  id="wafacash"
                  onClick={handleTogglePaymentMethod}
                  className="wafacash"
                />

                <div className="fee-crypto">
                  {/* <span className="fee-trc-percent">1%</span>
                <span className="fee-trc-fee">
                  {language === "anglais" && "Fee"}
                  {language === "francais" && "Frais"}
                  {language === "espagnol" && "Tarifa"}
                </span> */}
                </div>
              </div>
            )}
            {ipAddr === "Morocco" && (
              <div className="bouto-redi">
                <span>
                  {cashPay ? (
                    <MdRadioButtonChecked
                      style={{
                        color: "#129af6",
                      }}
                    />
                  ) : (
                    <MdRadioButtonUnchecked
                      name="cashplus"
                      id="cashplus"
                      onClick={handleTogglePaymentMethod}
                      // style={{
                      //   color: "black",
                      // }}
                    />
                  )}
                </span>

                <img
                  src={cashplus}
                  alt="cashplus"
                  id="cashplus"
                  onClick={handleTogglePaymentMethod}
                  className="cashplus"
                />

                <div className="fee-crypto">
                  {/* <span className="fee-trc-percent">1%</span>
                <span className="fee-trc-fee">
                  {language === "anglais" && "Fee"}
                  {language === "francais" && "Frais"}
                  {language === "espagnol" && "Tarifa"}
                </span> */}
                </div>
              </div>
            )}
            {/*  COINPAL  */}
            {ipAddr !== "Morocco" &&
              // <div className="bouto-redi">
              //   <span>
              //     {coinpalPay ? (
              //       <MdRadioButtonChecked
              //         style={{
              //           color: "#129af6",
              //         }}
              //       />
              //     ) : (
              //       <MdRadioButtonUnchecked
              //         name="coinpal"
              //         id="coinpal"
              //         onClick={handleTogglePaymentMethod}
              //       />
              //     )}
              //   </span>
              //   <img
              //     src={coinpal}
              //     alt="coinpal"
              //     id="coinpal"
              //     onClick={handleTogglePaymentMethod}
              //     className="coinpal"
              //   />
              //   <div className="fee-crypto fee-marg">
              //     <div className="fee-crypto_new_design">
              //       <span
              //         className="percent"
              //         style={{ color: "#8ea3af", fontSize: "15px" }}
              //       >
              //         0.5%
              //       </span>
              //       <span
              //         className="percent_text"
              //         style={{ color: "#8ea3af", fontSize: "15px" }}
              //       >
              //         {language === "anglais" && "Fee"}
              //         {language === "francais" && "Frais"}
              //         {language === "espagnol" && "Tarifa"}
              //       </span>
              //       {/* <span
              //         className="percent_logo"
              //         style={{ color: "#8ea3af", fontSize: "15px" }}
              //       >
              //         <MdRadioButtonUnchecked />
              //       </span> */}
              //     </div>
              //   </div>
              // </div>
              ""}
            {/*  COINPAL     */}
            {/* {ipAddr !== "Morocco" && (
              <div className="bouto-redi">
                <span
                  style={{
                    marginTop: "-25px",
                  }}
                >
                  {sepaPay ? (
                    <MdRadioButtonChecked
                      style={{
                        color: "#129af6",
                        marginTop: "-25px",
                      }}
                    />
                  ) : (
                    <MdRadioButtonUnchecked
                      name="sepa"
                      id="sepa"
                      onClick={handleTogglePaymentMethod}
                      // style={{
                      //   color: "black",
                      // }}
                    />
                  )}
                </span>

                <img
                  src={sepalogo}
                  alt="sepa"
                  id="sepa"
                  onClick={handleTogglePaymentMethod}
                  className="separ"
                />

                <div
                  className="fee-crypto"
                  style={{
                    marginTop: "-25px",
                  }}
                >
                  {/* <span className="fee-trc-fee">
                    {language === "anglais" && "No Fee"}
                    {language === "francais" && " Sans Frais"}
                    {language === "espagnol" && "Sin Cargo"}
                  </span> */}
            {/* <div className="fee-crypto_new_design_no">
                    <span
                      className="percent_no"
                      style={{ color: "#8ea3af", fontSize: "15px" }}
                    >
                      Sans
                    </span>
                    <span
                      className="percent_text"
                      style={{ color: "#8ea3af", fontSize: "15px" }}
                    >
                      {language === "anglais" && "Fee"}
                      {language === "francais" && "Frais"}
                      {language === "espagnol" && "Tarifa"}
                    </span>
                    {/* <span
                      className="percent_logo"
                      style={{ color: "#8ea3af", fontSize: "15px" }}
                    >
                      <MdRadioButtonUnchecked />
                    </span> */}
            {/* </div>
                </div> */}
            {/* </div> */}
            {/* )} */} */
            {/*      PAYPAL     */}
            {/* {ipAddr !== "Morocco" && (
              <div className="paypal-pay">
                <PayPalPayment
                  totalPrice={totalPrice}
                  curval={curVal}
                  paypalOrder={paypalOrder}
                />
                <div className="paypal-btn-abs">
                  <span
                    className="paypal-btn-abs1"
                    style={{ color: "#8ea3af", fontSize: "15px" }}
                  >
                    0.5%
                  </span>
                  <span
                    className="paypal-btn-abs2"
                    style={{ color: "#8ea3af", fontSize: "15px" }}
                  >
                    {language === "anglais" && "Fee"}
                    {language === "francais" && "Frais"}
                    {language === "espagnol" && "Tarifa"}
                  </span>
                  <span
                    className="percent_logo"
                    style={{ color: "#8ea3af", fontSize: "15px" }}
                  >
                    <MdRadioButtonUnchecked />
                  </span>
                </div>
              </div>
            )} */}
            {/*      PAYPAL       */}
            {/* {ipAddr !== "Morocco" && (
              <div className="bouto-redi">
                <span
                // style={{
                //   marginTop: "-25px",
                // }}
                >
                  {binancePay ? (
                    <MdRadioButtonChecked
                      style={{
                        color: "#129af6",
                      }}
                    />
                  ) : (
                    <MdRadioButtonUnchecked
                      name="binance"
                      id="binance"
                      onClick={handleTogglePaymentMethod}
                      // style={{
                      //   color: "black",
                      // }}
                    />
                  )}
                </span>

                <img
                  src={binancePayLogo}
                  alt="binance"
                  id="binance"
                  onClick={handleTogglePaymentMethod}
                  className="binancer"
                />

                <div
                  className="fee-crypto"
                  style={{
                    marginRight: "100px",
                  }}
                >
                  {/* <span className="fee-trc-fee">
                    {language === "anglais" && "No Fee"}
                    {language === "francais" && " Sans Frais"}
                    {language === "espagnol" && "Sin Cargo"}
                  </span> */}
            {/* <div className="fee-crypto_new_design_no">
                    <span
                      className="percent_no"
                      style={{ color: "#8ea3af", fontSize: "15px" }}
                    >
                      Sans
                    </span>
                    <span
                      className="percent_text"
                      style={{ color: "#8ea3af", fontSize: "15px" }}
                    >
                      {language === "anglais" && "Fee"}
                      {language === "francais" && "Frais"}
                      {language === "espagnol" && "Tarifa"}
                    </span>
                    <span
                      className="percent_logo"
                      style={{ color: "#8ea3af", fontSize: "15px" }}
                    >
                      <MdRadioButtonUnchecked />
                    </span>
                  </div>
                </div>
              </div> */}
            {/* )} */} */
            {/* <div>
              <h1>My Component</h1>
              
              
            </div> */}
            {/* I use Glo Cash API Payment */}
            {/* <div
              dangerouslySetInnerHTML={createMarkup()}
              style={{
                background: "blue",
                height: "50px",
                width: "100px",
              }}
            /> */}
            {/* <div>
              <span>
                {neosurfPay ? (
                  <MdRadioButtonChecked
                    style={{
                      color: "#129af6",
                    }}
                  />
                ) : (
                  <MdRadioButtonUnchecked name="neosurf" id="neosurf" />
                )}
              </span>
              <img
                src={btc}
                alt="neosurf"
                id="neosurf"
                onClick={handleTogglePaymentMethod}
                className="btc-pay"
              />
              <span>BTC(TRC20)</span>
            </div> */}
          </div>
        </div>
        <div className="checkout-step4">
          {language === "francais" && (
            <h2
              style={{
                color: "#757575",
              }}
            >
              Laisser un commentaire
            </h2>
          )}
          {language === "anglais" && (
            <h2
              style={{
                color: "#757575",
              }}
            >
              Leave a review
            </h2>
          )}
          {language === "espagnol" && (
            <h2
              style={{
                color: "#757575",
              }}
            >
              Dejar un comentario
            </h2>
          )}
          <div className="comment-container">
            <textarea
              className="text-comment"
              placeholder={
                language === "anglais"
                  ? "Add comments regarding this order"
                  : "Ajouter des commentaires concernant cette commande"
              }
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button className="text-comment-btn" onClick={handleConfirmComment}>
              {language === "anglais" && "Confirm"}

              {language === "francais" && "Confirmer"}

              {language === "espagnol" && "Confirmar"}
            </button>
          </div>
        </div>
      </div>
      <div
        className="payment-page-checkout"
        style={{
          marginTop: `${screenSize >= 859 ? isScrolled : 0}px`,
        }}
      >
        <div className="page-checkout-cart">
          {language === "francais" && (
            <span className="page-checkout-textname">Total</span>
          )}
          {language === "anglais" && (
            <span className="page-checkout-textname">Total</span>
          )}
          {language === "espagnol" && (
            <span className="page-checkout-textname">Total</span>
          )}

          <span className="checkout-price">
            {fixedPriceBuyNow(totalPrice)} {currency === "euro" && "€"}
            {currency === "" && "MAD"}
            {currency === "dollar" && "$"}
            {currency === "mad" && "MAD"}
            {currency === "usdt" && "USDT"}
            {currency === "cad" && "CAD"}
            {currency === "chf" && "CHF"}
            {currency === "rub" && "RUB"}
            {currency === "gbp" && "£"}{" "}
          </span>
        </div>
        <div className="page-checkout-cart">
          {language === "francais" && (
            <span className="page-checkout-textname">Coupon</span>
          )}
          {language === "anglais" && (
            <span className="page-checkout-textname">Coupon</span>
          )}
          {language === "espagnol" && (
            <span className="page-checkout-textname">Cupón</span>
          )}
          <span className="checkout-number">
            -0.00 {currency === "euro" && "€"}
            {currency === "" && "MAD"}
            {currency === "dollar" && "$"}
            {currency === "mad" && "MAD"}
            {currency === "usdt" && "USDT"}
            {currency === "cad" && "CAD"}
            {currency === "chf" && "CHF"}
            {currency === "rub" && "RUB"}
            {currency === "gbp" && "£"}{" "}
          </span>
        </div>
        <div className="page-checkout-cart">
          {language === "francais" && (
            <span className="page-checkout-textname">
              Commission de transaction
            </span>
          )}
          {language === "anglais" && (
            <span className="page-checkout-textname">Transaction fee</span>
          )}
          {language === "espagnol" && (
            <span className="page-checkout-textname">
              Tarifa de transacción
            </span>
          )}

          <span className="checkout-number">
            + 0 {currency === "euro" && "€"}
            {currency === "" && "MAD"}
            {currency === "dollar" && "$"}
            {currency === "mad" && "MAD"}
            {currency === "usdt" && "USDT"}
            {currency === "cad" && "CAD"}
            {currency === "chf" && "CHF"}
            {currency === "rub" && "RUB"}
            {currency === "gbp" && "£"}{" "}
          </span>
        </div>
        <div className="page-checkout-cart">
          {language === "francais" && (
            <span className="page-checkout-textname">
              Commission de payment
            </span>
          )}
          {language === "anglais" && (
            <span className="page-checkout-textname">Payment fee</span>
          )}
          {language === "espagnol" && (
            <span className="page-checkout-textname">Cuota de pago</span>
          )}

          <span className="checkout-number">
            +{" "}
            {usdtPay
              ? `${currency === "mad" ? 11.15 : currencyValue / currencyValue}`
              : "0"}{" "}
            {currency === "euro" && "€"}
            {currency === "" && "MAD"}
            {currency === "dollar" && "$"}
            {currency === "mad" && "MAD"}
            {currency === "usdt" && "USDT"}
            {currency === "cad" && "CAD"}
            {currency === "chf" && "CHF"}
            {currency === "rub" && "RUB"}
            {currency === "gbp" && "£"}{" "}
          </span>
        </div>
        <div className="checkout-checkbox-terms">
          <input
            type="checkbox"
            name=""
            id="payCheckPayment"
            style={{
              cursor: "pointer",
            }}
          />

          {language === "francais" && (
            <span>
              J'ai lu et accepté la{" "}
              <Link to="/privacy-policy" className="link-checkout">
                {" "}
                Politique De Confidentialité
              </Link>{" "}
              <Link to="/term-and-conditions" className="link-checkout">
                {" "}
                et les Termes et Conditions
              </Link>{" "}
            </span>
          )}
          {language === "anglais" && (
            <span>
              I have read and accept the{" "}
              <Link to="/privacy-policy" className="link-checkout">
                {" "}
                Privacy policy
              </Link>{" "}
              <Link to="/term-and-conditions" className="link-checkout">
                {" "}
                and the Terms and Conditions
              </Link>{" "}
            </span>
          )}
          {language === "espagnol" && (
            <span>
              He leído y acepto la{" "}
              <Link to="/privacy-policy" className="link-checkout">
                {" "}
                Política de privacidad
              </Link>{" "}
              <Link to="/term-and-conditions" className="link-checkout">
                {" "}
                y los Términos y Condiciones
              </Link>{" "}
            </span>
          )}
        </div>
        <div
          className="button-to-checkout-pay"
          onClick={handleAddOrdersPayment}
        >
          <button className="checkout-btn">
            <span className="checkout-icon">
              <MdLockOutline />
            </span>
            <span className="checkout-pay-mtn">
              {language === "francais" && "Payer"}
              {language === "anglais" && "Pay"}
              {language === "espagnol" && "Pagar"}{" "}
            </span>
          </button>
        </div>
       
        <div className="checkout-security">
          <div>
            <a href="https://hubsecurity.com/" target="__blank">
              <img src={image1} alt="dss security" />
            </a>
            <a href="https://fr.trustpilot.com/" target="__blank">
              <img src={image2} alt="Trustpilot" />
            </a>
            <a href="https://us.norton.com/" target="__blank">
              <img src={image3} alt="shopping guarantee" />
            </a>
          </div>

          {language === "francais" && (
            <p>
              Nous utilisons la dernière technologie PCI DSS pour chiffrer
              toutes vos données personnelles. Ceci permet une transmission
              sécurisée et empêche l'accès à vos données par des tiers.
            </p>
          )}
          {language === "anglais" && (
            <p>
              We use the latest PCI DSS technology to encrypt all your personal
              data. This allows secure transmission and prevents access to your
              data by third parties.
            </p>
          )}
          {language === "espagnol" && (
            <p>
              Utilizamos la última tecnología PCI DSS para cifrar todos tus
              datos personales Esto permite una transmisión segura y impide el
              acceso a sus datos por parte de terceros.
            </p>
          )}
        </div>
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

export default PaymentPage;
