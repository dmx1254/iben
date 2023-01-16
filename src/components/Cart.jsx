import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdLockOutline } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import image1 from "../assets/checkout/image-1-checkout.jpg";
import image2 from "../assets/checkout/image-2-checkout.jpg";
import image3 from "../assets/checkout/image-3-checkout.jpg";

import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

import { useSelector, useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import creditcard from "../assets/payment-checkout/creditcard.webp";
import crypto from "../assets/payment-checkout/crypto.webp";
import ideal from "../assets/payment-checkout/ideal.webp";
import btc from "../assets/payment-checkout/btc.png";
import eth from "../assets/payment-checkout/eth.png";
import usdt from "../assets/payment-checkout/usdt.webp";
import visa_master from "../assets/payment-checkout/visa_master.webp";
import visa_mastercard from "../assets/payment-checkout/visa_mastercard.webp";
import skrill from "../assets/payment-checkout/skrill.png";
import sofort from "../assets/payment/sofort.jpg";
import giropay from "../assets/giropay.png";
import bank from "../assets/payment-checkout/bank.png";

import {
  deleteProductToCart,
  inialiseTheCart,
  addToCharacterList,
} from "../features/cartSlices";

import ukraine from "../assets/checkout/ukraine.jpg";

import image from "../assets/dofus-kamas.jpg";
import { useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const cart = useSelector((state) => state?.cart);
  const { user } = useSelector((state) => state.user);
  const [data, setData] = useState(cart?.products);
  const [pay, setPay] = useState(
    cart?.totalPrice + (3.5 * cart?.totalPrice) / 100
  );

  console.log(cart);
  console.log(data);

  const { currency } = useSelector((state) => state.currency);

  const [qtyOrder, setQtyOrder] = useState(cart?.quantity);

  const [qtyChange, setQtyChange] = useState(0);

  const [firstCharacter, setFirstCharacter] = useState("");
  const [confirmCharacter, setConfirmCharacter] = useState("");

  const [visamastercardPay, setVisamastercardPay] = useState(false);
  const [usdtPay, setUsdtPay] = useState(false);
  const [paypalPay, setPaypalPay] = useState(false);
  const [visamasterPay, setVisamasterPay] = useState(false);
  const [credicardPay, setCredicardPay] = useState(false);
  const [idealPay, setIdealPay] = useState(false);
  const [cryptoPay, setCryptoPay] = useState(false);
  const [neosurfPay, setNeosurfPay] = useState(false);
  const [skrillPay, setSkrillPay] = useState(false);

  const dispatch = useDispatch();

  const fixedPrice = (val) => {
    let numberToReturn = 0;
    if (val !== "undefinded" && typeof val !== "string" && val !== "") {
      numberToReturn = val.toFixed(2);
    }
    return numberToReturn;
  };

  useEffect(() => {
    let totalToPay = cart?.totalPrice + (3.5 * cart?.totalPrice) / 100;
    setPay(totalToPay);
  }, [cart, qtyChange, data]);

  const feeCommission = (commission) => {
    let feeToPay = 0;
    if (
      commission !== "undefinded" &&
      typeof commission !== "string" &&
      commission !== ""
    ) {
      feeToPay = (commission * 3.5) / 100;
    }
    return feeToPay.toFixed(2);
  };

  useEffect(() => {
    setQtyOrder(cart?.quantity);
  }, [cart]);

  const { language } = useSelector((state) => state.language);

  useEffect(() => {
    setData(cart?.products);
  }, [cart]);

  const handleTogglePaymentMethod = (e) => {
    if (e.target.id === "visa_mastercard") {
      setVisamastercardPay(true);
      setUsdtPay(false);
      setPaypalPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setNeosurfPay(false);
      setSkrillPay(false);
    } else if (e.target.id === "usdt") {
      setUsdtPay(true);
      setVisamastercardPay(false);
      setPaypalPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setNeosurfPay(false);
      setSkrillPay(false);
    } else if (e.target.id === "paypal") {
      setPaypalPay(true);
      setVisamastercardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setNeosurfPay(false);
      setSkrillPay(false);
    } else if (e.target.id === "skrill") {
      setSkrillPay(true);
      setVisamasterPay(false);
      setPaypalPay(false);
      setVisamastercardPay(false);
      setUsdtPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setNeosurfPay(false);
    } else if (e.target.id === "visa_master") {
      setVisamasterPay(true);
      setPaypalPay(false);
      setVisamastercardPay(false);
      setUsdtPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setNeosurfPay(false);
      setSkrillPay(false);
    } else if (e.target.id === "creditcard") {
      setCredicardPay(true);
      setPaypalPay(false);
      setVisamastercardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setNeosurfPay(false);
      setSkrillPay(false);
    } else if (e.target.id === "ideal") {
      setIdealPay(true);
      setPaypalPay(false);
      setVisamastercardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setCryptoPay(false);
      setNeosurfPay(false);
      setSkrillPay(false);
    } else if (e.target.id === "crypto") {
      setCryptoPay(true);
      setPaypalPay(false);
      setVisamastercardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setNeosurfPay(false);
      setSkrillPay(false);
    } else if (e.target.id === "neosurf") {
      setNeosurfPay(true);
      setPaypalPay(false);
      setVisamastercardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setSkrillPay(false);
    } else {
      setNeosurfPay(false);
      setPaypalPay(false);
      setVisamastercardPay(false);
      setUsdtPay(false);
      setVisamasterPay(false);
      setCredicardPay(false);
      setIdealPay(false);
      setCryptoPay(false);
      setSkrillPay(false);
    }
  };

  const notifyfirstCharacterRefFrench = () =>
    toast.error("Le nom du personnage ne doit pas être vide");

  const notifyfirstCharacterRefEnglish = () =>
    toast.error("Character name must not be empty");

  const notifyconfirmCharacterRefFrench = () =>
    toast.error("Les noms de personnages ne correspondent pas");

  const notifyconfirmCharacterRefEnglish = () =>
    toast.error("Character names don't match");

  const notifyCheckFrench = () =>
    toast.error(
      "Veuillez valider les termes et conditions et la politique de confidentialité"
    );

  const notifyCheckEnglish = () =>
    toast.error(
      "Please validate the terms and conditions and the privacy policy"
    );

  const notifyPaymentErrorFrench = () =>
    toast.error("Veuillez choisir une méthode de paiements valide.");

  const notifyPaymentErrorEnglish = () =>
    toast.error("Please choose a valid payment method.");

  const notifyPaymentErrorSpanish = () =>
    toast.error("Elija un método de pago válido.");

  const notifyNotRegisteredFrench = () =>
    toast.error("Veuillez vous connecter d'abord avant de faire une commande");
  const notifyNotRegisteredEnglish = () =>
    toast.error("Please login first before placing an order");

  const notyFySuccessOrderFrench = () =>
    toast.success(
      "Votre commande a été créé avec succéss, vous pouvez verifier sur votre profil, mes commandes"
    );
  const notyFySuccessOrderEnglish = () =>
    toast.success(
      "Your order has been created successfully, you can check on your profile, my orders"
    );

  const notyFySuccessCharacterFrench = () =>
    toast.success("Nom du personnage validé avec succéss");

  const notyFySuccessCharacterEnglish = () =>
    toast.success("Character name successfully validated");

  const orderNumGenerated = () => {
    const generateOrderNum = "0123456789";

    let myCode = "";
    for (let i = 0; i < 6; i++) {
      let code = Math.floor(Math.random() * generateOrderNum.length);
      myCode += generateOrderNum[code];
    }
    return myCode;
  };

  const payCheck = document.getElementById("payCheck");

  const handleAddOrders = () => {
    if (cart.products.length > 1) {
      if (!cart?.products[0]?.character) {
        language === "anglais" && notifyfirstCharacterRefEnglish();
        language === "francais" && notifyfirstCharacterRefFrench();
      } else if (!cart?.products[1]?.character) {
        language === "anglais" && notifyfirstCharacterRefEnglish();
        language === "francais" && notifyfirstCharacterRefFrench();
      } else {
        const orderData = {
          userId: user?.user,
          detailUser: user?.person,
          orderNum: orderNumGenerated(),
          products: cart?.products,
          address: "",
          status: "En attente",
          totalPrice: pay.toFixed(2),
          paymentMethod: "",
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
            orderData.paymentMethod = "Idéal";
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
          } else if (usdtPay) {
            orderData.paymentMethod = "Usdt TRC20";
            window.location = `/paymentusdt/${user?.user}/${Number(
              pay.toFixed(2)
            )}`;
            axios({
              method: "post",
              url: `${process.env.REACT_APP_CLIENT_URL}/order`,
              data: orderData,
            });
          } else if (cryptoPay) {
            orderData.paymentMethod = "Coinbase";
            getCoinbaseCommerce();
            axios({
              method: "post",
              url: `${process.env.REACT_APP_CLIENT_URL}/order`,
              data: orderData,
            });
          } else if (neosurfPay) {
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
          } else if (paypalPay) {
            orderData.paymentMethod = "Giropay";
            payments = ["giropay"];
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
          } else if (usdtPay) {
            orderData.paymentMethod = "Usdt TRC20";
            window.location = `/paymentusdt/${user?.user}/${Number(
              pay.toFixed(2)
            )}`;
            axios({
              method: "post",
              url: `${process.env.REACT_APP_CLIENT_URL}/order`,
              data: orderData,
            });
          } else if (neosurfPay) {
            window.location = `/paymentbtc/${user?.user}/${Number(
              pay.toFixed(2)
            )}`;
            axios({
              method: "post",
              url: `${process.env.REACT_APP_CLIENT_URL}/order`,
              data: orderData,
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
              data: {
                line_items: orderToPush,
                devise: currency,
                pay: payments,
              },
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
              pay.toFixed(2)
            )}`;
            axios({
              method: "post",
              url: `${process.env.REACT_APP_CLIENT_URL}/order`,
              data: orderData,
            });
          } else if (neosurfPay) {
            window.location = `/paymentbtc/${user?.user}/${Number(
              pay.toFixed(2)
            )}`;
            axios({
              method: "post",
              url: `${process.env.REACT_APP_CLIENT_URL}/order`,
              data: orderData,
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
              data: {
                line_items: orderToPush,
                devise: currency,
                pay: payments,
              },
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
              pay.toFixed(2)
            )}`;
            axios({
              method: "post",
              url: `${process.env.REACT_APP_CLIENT_URL}/order`,
              data: orderData,
            });
          } else if (neosurfPay) {
            window.location = `/paymentbtc/${user?.user}/${Number(
              pay.toFixed(2)
            )}`;
            axios({
              method: "post",
              url: `${process.env.REACT_APP_CLIENT_URL}/order`,
              data: orderData,
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
              data: {
                line_items: orderToPush,
                devise: currency,
                pay: payments,
              },
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
              pay.toFixed(2)
            )}`;
            axios({
              method: "post",
              url: `${process.env.REACT_APP_CLIENT_URL}/order`,
              data: orderData,
            });
          } else if (neosurfPay) {
            window.location = `/paymentbtc/${user?.user}/${Number(
              pay.toFixed(2)
            )}`;
            axios({
              method: "post",
              url: `${process.env.REACT_APP_CLIENT_URL}/order`,
              data: orderData,
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
              data: {
                line_items: orderToPush,
                devise: currency,
                pay: payments,
              },
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
              pay.toFixed(2)
            )}`;
            axios({
              method: "post",
              url: `${process.env.REACT_APP_CLIENT_URL}/order`,
              data: orderData,
            });
          } else if (neosurfPay) {
            window.location = `/paymentbtc/${user?.user}/${Number(
              pay.toFixed(2)
            )}`;
            axios({
              method: "post",
              url: `${process.env.REACT_APP_CLIENT_URL}/order`,
              data: orderData,
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
              data: {
                line_items: orderToPush,
                devise: currency,
                pay: payments,
              },
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
              pay.toFixed(2)
            )}`;
            axios({
              method: "post",
              url: `${process.env.REACT_APP_CLIENT_URL}/order`,
              data: orderData,
            });
          } else if (neosurfPay) {
            window.location = `/paymentbtc/${user?.user}/${Number(
              pay.toFixed(2)
            )}`;
            axios({
              method: "post",
              url: `${process.env.REACT_APP_CLIENT_URL}/order`,
              data: orderData,
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

        axios({
          method: "post",
          url: `${process.env.REACT_APP_CLIENT_URL}/order`,
          data: orderData,
        })
          .then((res) => {
            // console.log(res.data);
          })
          .catch((error) => console.log(error));
      }
    } else if (!cart?.products[0]?.character) {
      language === "anglais" && notifyfirstCharacterRefEnglish();
      language === "francais" && notifyfirstCharacterRefFrench();
    } else if (!payCheck.checked) {
      language === "anglais" && notifyCheckEnglish();
      language === "francais" && notifyCheckFrench();
    } else if (qtyOrder < 1) {
      console.log("Vous pouvez pas valider");
    } else if (!user?.user) {
      language === "anglais" && notifyNotRegisteredEnglish();
      language === "francais" && notifyNotRegisteredFrench();
    } else {
      const orderData = {
        userId: user?.user,
        detailUser: user?.person,
        orderNum: orderNumGenerated(),
        products: cart?.products,
        address: "",
        status: "En attente",
        totalPrice: pay.toFixed(2),
        paymentMethod: "",
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
          orderData.paymentMethod = "Idéal";
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
        } else if (usdtPay) {
          orderData.paymentMethod = "Usdt TRC20";
          window.location = `/paymentusdt/${user?.user}/${Number(
            pay.toFixed(2)
          )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          });
        } else if (cryptoPay) {
          orderData.paymentMethod = "Coinbase";
          getCoinbaseCommerce();
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          });
        } else if (neosurfPay) {
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
        } else if (paypalPay) {
          orderData.paymentMethod = "Giropay";
          payments = ["giropay"];
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
        } else if (usdtPay) {
          orderData.paymentMethod = "Usdt TRC20";
          window.location = `/paymentusdt/${user?.user}/${Number(
            pay.toFixed(2)
          )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          });
        } else if (neosurfPay) {
          window.location = `/paymentbtc/${user?.user}/${Number(
            pay.toFixed(2)
          )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
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
            pay.toFixed(2)
          )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          });
        } else if (neosurfPay) {
          window.location = `/paymentbtc/${user?.user}/${Number(
            pay.toFixed(2)
          )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
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
        } else if (usdtPay) {
          orderData.paymentMethod = "Usdt TRC20";
          window.location = `/paymentusdt/${user?.user}/${Number(
            pay.toFixed(2)
          )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          });
        } else if (neosurfPay) {
          window.location = `/paymentbtc/${user?.user}/${Number(
            pay.toFixed(2)
          )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
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
            pay.toFixed(2)
          )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          });
        } else if (neosurfPay) {
          window.location = `/paymentbtc/${user?.user}/${Number(
            pay.toFixed(2)
          )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
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
            pay.toFixed(2)
          )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          });
        } else if (neosurfPay) {
          window.location = `/paymentbtc/${user?.user}/${Number(
            pay.toFixed(2)
          )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
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
        } else if (usdtPay) {
          orderData.paymentMethod = "Usdt TRC20";
          window.location = `/paymentusdt/${user?.user}/${Number(
            pay.toFixed(2)
          )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          });
        } else if (neosurfPay) {
          window.location = `/paymentbtc/${user?.user}/${Number(
            pay.toFixed(2)
          )}`;
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
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

      axios({
        method: "post",
        url: `${process.env.REACT_APP_CLIENT_URL}/order`,
        data: orderData,
      })
        .then((res) => {
          // console.log(res.data);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    (!cart?.products.length || qtyOrder < 0) && dispatch(inialiseTheCart());
  }, [cart?.products.length, dispatch, qtyOrder]);

  const handleFirstCharacterChange = (id, e) => {
    if (e.target.id === id) {
      setFirstCharacter(e.target.value);
    } else {
      setFirstCharacter(null);
    }
  };

  const handleConfirmCharacterChange = (id, e) => {
    if (e.target.id === id) {
      setConfirmCharacter(e.target.value);
    } else {
      setConfirmCharacter(null);
    }
  };

  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1 $2");
    return x;
  }

  // useEffect(() => {}, []);

  // const handleTest = (e) => {
  //   console.log(e?.target?.id);
  // };

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
        amount: Number(pay.toFixed(2)),
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
        // console.log(result?.data?.hosted_url);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="cart-container">
      <div className="cart">
        <div className="cart-products">
          {data.length < 1 ? (
            <div>
              {language === "francais" && " Votre panier est vide veuillez"}
              {language === "anglais" && "Your cart is empty please"}
              {language === "espagnol" && "Su carrito está vacío por favor"}
              <Link to="/">
                {" "}
                {language === "francais" && " Ajouter un produit"}
                {language === "anglais" && "Add a product"}
                {language === "espagnol" && "Añadir un producto"}
              </Link>
            </div>
          ) : (
            data.map((item) => (
              <div key={item?.productId}>
                <div className="cart-products-details">
                  <img
                    src={item?.image}
                    alt={item?.category}
                    className="cart-img"
                  />
                  <div>
                    <span className="cart-category-text">
                      {language === "francais" && "Categorie"}
                      {language === "anglais" && "Category"}
                      {language === "espagnol" && "Categoría"}
                    </span>
                    <span className="cart-category">{item.category}</span>
                  </div>
                  <div>
                    <span className="cart-server-text">
                      {language === "francais" && "Serveur"}
                      {language === "anglais" && "Server"}
                      {language === "espagnol" && "Servidora"}
                    </span>
                    <span className="cart-server">{item.server}</span>
                  </div>
                  <div>
                    <span className="cart-qty-text">
                      {language === "francais" && "Quantité (s)"}
                      {language === "anglais" && "Quantity"}
                      {language === "espagnol" && "Cantidad"}
                    </span>
                    <span className="cart-qty">
                      {numberWithCommas(item.qty)}
                    </span>
                  </div>
                  <div>
                    <span className="cart-price-text">
                      {language === "francais" && "Prix"}
                      {language === "anglais" && "Price"}
                      {language === "espagnol" && "Precio"}
                    </span>
                    <span className="cart-price">
                      {item.price} {currency === "euro" && "€"}
                      {currency === "" && "€"}
                      {currency === "dollar" && "$"}
                      {currency === "mad" && "MAD"}
                      {currency === "usdt" && "USDT"}
                      {currency === "cad" && "CAD"}
                      {currency === "chf" && "CHF"}
                      {currency === "rub" && "RUB"}
                      {currency === "gbp" && "£"}{" "}
                    </span>
                  </div>
                  <div>
                    <span
                      className="delete-cart-product"
                      onClick={() => {
                        if (qtyOrder > 0) {
                          dispatch(
                            deleteProductToCart({
                              id: item.server,
                              amount: item.amount,
                              price: item.price,
                            })
                          );
                        } else {
                          console.log("Error for trying to delete empty cart");
                        }
                      }}
                    >
                      <BsTrash />
                    </span>
                  </div>
                </div>
                <div className="cart-products-update">
                  <div className="cart-products-update-character">
                    <input
                      type="text"
                      name="character1"
                      id={item?.productId}
                      placeholder={
                        language === "francais"
                          ? "Nom de personnage"
                          : language === "espagnol"
                          ? "Nombre del personaje"
                          : "Character name"
                      }
                      value={firstCharacter}
                      // onClick={handleTest}
                      onChange={(e) =>
                        handleFirstCharacterChange(item?.productId, e)
                      }
                    />

                    <input
                      type="text"
                      name="character2"
                      id={item?.productId}
                      placeholder={
                        language === "francais"
                          ? "Confirmez le nom personnage"
                          : language === "espagnol"
                          ? "Confirmar nombre de personaje"
                          : "Confirm character name"
                      }
                      value={confirmCharacter}
                      // onClick={handleTest}
                      onChange={(e) =>
                        handleConfirmCharacterChange(item.productId, e)
                      }
                    />
                  </div>
                  <div>
                    {firstCharacter && firstCharacter === confirmCharacter && (
                      <button
                        className="character-validate"
                        style={{
                          margin: "10px 0px",
                        }}
                        onClick={function () {
                          dispatch(
                            addToCharacterList({
                              id: item.productId,
                              character: firstCharacter,
                            })
                          );

                          language === "anglais" &&
                            notyFySuccessCharacterEnglish();
                          language === "francais" &&
                            notyFySuccessCharacterFrench();
                          // setFirstCharacter("");
                          // setConfirmCharacter("");
                        }}
                      >
                        {language === "francais" && "Valider personnage"}
                        {language === "anglais" && "Validate character"}
                        {language === "espagnol" && "Validar caracter"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
          {data.length < 1 || (
            <div className="empty-cart">
              <button onClick={() => dispatch(inialiseTheCart())}>
                {language === "francais" && "Vider le panier"}
                {language === "anglais" && "Clear cart"}
                {language === "espagnol" && "Vaciar carrito"}
              </button>
            </div>
          )}
        </div>
        <div className="cart-checkout">
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
              {fixedPrice(cart?.totalPrice)} {currency === "euro" && "€"}
              {currency === "" && "€"}
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
              - 0.00 {currency === "euro" && "€"}
              {currency === "" && "€"}
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
              {currency === "" && "€"}
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
                Commission de payment (3.50%)
              </span>
            )}
            {language === "anglais" && (
              <span className="page-checkout-textname">
                Payment fee (3.50%)
              </span>
            )}
            {language === "espagnol" && (
              <span className="page-checkout-textname">
                Cuota de pago (3.50%)
              </span>
            )}
            <span className="checkout-number">
              + {feeCommission(cart?.totalPrice)} {currency === "euro" && "€"}
              {currency === "" && "€"}
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
              id="payCheck"
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
              </span>
            )}
            {language === "anglais" && (
              <span>
                I have read and accept the{" "}
                <Link to="/privacy-policy" className="link-checkout">
                  {" "}
                  Privacy policy
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
              </span>
            )}
          </div>
          <div className="button-to-checkout-pay" onClick={handleAddOrders}>
            <button className="checkout-btn">
              <span className="checkout-icon">
                <MdLockOutline />
              </span>
              {language === "francais" && (
                <span className="checkout-pay-mtn">
                  Payer
                  {/* {currency === "" && "€"}
                  {currency === "dollar" && "$"}
                  {currency === "mad" && "MAD"}
                  {currency === "usdt" && "USDT"}
                  {currency === "cad" && "CAD"}
                  {currency === "chf" && "CHF"}
                  {currency === "rub" && "RUB"}
                  {currency === "gbp" && "£"}{" "} */}
                </span>
              )}
              {language === "anglais" && (
                <span className="checkout-pay-mtn">
                  Pay
                  {/* {currency === "" && "€"}
                  {currency === "dollar" && "$"}
                  {currency === "mad" && "MAD"}
                  {currency === "usdt" && "USDT"}
                  {currency === "cad" && "CAD"}
                  {currency === "chf" && "CHF"}
                  {currency === "rub" && "RUB"}
                  {currency === "gbp" && "£"}{" "} */}
                </span>
              )}
              {language === "espagnol" && (
                <span className="checkout-pay-mtn">
                  Pagar
                  {/* {currency === "" && "€"}
                  {currency === "dollar" && "$"}
                  {currency === "mad" && "MAD"}
                  {currency === "usdt" && "USDT"}
                  {currency === "cad" && "CAD"}
                  {currency === "chf" && "CHF"}
                  {currency === "rub" && "RUB"}
                  {currency === "gbp" && "£"}{" "} */}
                </span>
              )}
            </button>
          </div>
          {/* <div className="ukraine-help">
            <img src={ukraine} alt="crisis-in-ukraine" />
            {language === "francais" && (
              <span className="ukraine-help-text">
                Nous promettons de faire don de 1% du bénéfice de chaque
                commande au CICR pour aider davantage de victimes de la crise
                ukrainienne.
              </span>
            )}
            {language === "anglais" && (
              <span className="ukraine-help-text">
                We promise to donate 1% of each order's profit to the ICRC to
                help more victims of the Ukrainian crisis.
              </span>
            )}
            {language === "espagnol" && (
              <span className="ukraine-help-text">
                Prometemos donar el 1% de las ganancias de cada pedido a la CICR
                para ayudar a más víctimas de la crisis de Ucrania.
              </span>
            )}
          </div>
          <hr className="hr-line" /> */}
          <div className="checkout-security">
            <div>
              <img src={image1} alt="dss security" />
              <img src={image2} alt="Trustpilot" />
              <img src={image3} alt="shopping guarantee" />
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
                We use the latest PCI DSS technology to encrypt all your
                personal data. This allows secure transmission and prevents
                access to your data by third parties.
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
      <div className="cart-payments">
        <div className="cart-payments-methods">
          {language === "francais" && <h2>Étape 3: Façon de paiement</h2>}
          {language === "anglais" && <h2>Step 3: How to Pay</h2>}
          {language === "espagnol" && <h2>Paso 3: Forma de pago</h2>}
        </div>
        {/* <div>
          <span>
            {visamastercardPay ? (
              <MdRadioButtonChecked
                style={{
                  color: "#129af6",
                }}
              />
            ) : (
              <MdRadioButtonUnchecked
                name="visa_mastercard"
                id="visa_mastercard"
                onClick={handleTogglePaymentMethod}
              />
            )}
          </span>
          <img
            src={visa_mastercard}
            alt="visa_mastercard"
            id="visa_mastercard"
            onClick={handleTogglePaymentMethod}
          />
          <span></span>
        </div> */}

        <div>
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
          />
          <span>USDT(TRC20)</span>
        </div>

        {/* {currency === "euro" && ( */}
        {/* <div> */}
        {/* <span>
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
              src={sofort}
              alt="neosurf"
              id="neosurf"
              onClick={handleTogglePaymentMethod}
              // className="btc-pay"
            /> */}
        {/* <span>BTC(TRC20)</span> */}
        {/* </div> */}

        {/* )} */}

        {/* {currency === "euro" && (
          <div>
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
              src={giropay}
              alt="paypal"
              id="paypal"
              onClick={handleTogglePaymentMethod}
              className="giro-pay"
            />

            <span></span>
          </div>
        )} */}

        {/* <div className="skrill-cart-payment">
          <span>
            {skrillPay ? (
              <MdRadioButtonChecked
                style={{
                  color: "#129af6",
                }}
              />
            ) : (
              <MdRadioButtonUnchecked
                name="skrill"
                id="skrill"
                onClick={handleTogglePaymentMethod}
              />
            )}
          </span>
          <img
            src={skrill}
            alt="skrill"
            id="skrill"
            onClick={handleTogglePaymentMethod}
          />

          {language === "francais" && <span>3% de frais</span>}
          {language === "anglais" && <span>3% fee</span>}
          {language === "espagnol" && <span>3% de tarifa</span>}
        </div> */}

        {/* <div>
          <span>
            {visamasterPay ? (
              <MdRadioButtonChecked
                style={{
                  color: "#129af6",
                }}
              />
            ) : (
              <MdRadioButtonUnchecked
                name="visa_master"
                id="visa_master"
                onClick={handleTogglePaymentMethod}
              />
            )}
          </span>
          <img
            src={visa_master}
            alt="visa_master"
            id="visa_master"
            onClick={handleTogglePaymentMethod}
          />
          <span></span>
        </div> */}

        {/* <div>
          <span>
            {credicardPay ? (
              <MdRadioButtonChecked
                style={{
                  color: "#129af6",
                }}
              />
            ) : (
              <MdRadioButtonUnchecked
                name="creditcard"
                id="creditcard"
                onClick={handleTogglePaymentMethod}
              />
            )}
          </span>
          <img
            src={creditcard}
            alt="creditcard"
            id="creditcard"
            onClick={handleTogglePaymentMethod}
          />
          <span></span>
        </div> */}

        {/* <div>
          <span>
            {idealPay ? (
              <MdRadioButtonChecked
                style={{
                  color: "#129af6",
                }}
              />
            ) : (
              <MdRadioButtonUnchecked
                name="ideal"
                id="ideal"
                onClick={handleTogglePaymentMethod}
              />
            )}
          </span>
          <img
            src={ideal}
            alt="ideal"
            id="ideal"
            onClick={handleTogglePaymentMethod}
          />
          <span></span>
        </div> */}

        {currency === "mad" && (
          <div>
            <span>
              {idealPay ? (
                <MdRadioButtonChecked
                  style={{
                    color: "#129af6",
                  }}
                />
              ) : (
                <a href="javascript:void(Tawk_API.toggle())">
                  <MdRadioButtonUnchecked
                    name="bank"
                    id="bank"
                    onClick={handleTogglePaymentMethod}
                    style={{
                      color: "black",
                    }}
                  />
                </a>
              )}
            </span>
            <a href="javascript:void(Tawk_API.toggle())">
              <img
                src={bank}
                alt="bank"
                id="bank"
                onClick={handleTogglePaymentMethod}
              />
            </a>
            <span>
              {language === "francais" && "Virement bancaire"}
              {language === "anglais" && "Bank transfer"}
              {language === "espagnol" && "transferencia bancaria"}
            </span>
          </div>
        )}

        <div>
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
          />
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
