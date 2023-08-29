import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdLockOutline } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import image1 from "../assets/checkout/image-1-checkout.jpg";
import image2 from "../assets/checkout/image-2-checkout.jpg";
import image3 from "../assets/checkout/image-3-checkout.jpg";

import barid from "../assets/payment-checkout/barid_bank.png";
import cih from "../assets/payment-checkout/cih_bank.png";
import atti from "../assets/payment-checkout/atti_bank.png";
import bmce from "../assets/payment-checkout/bmce_bank.png";
import wu from "../assets/payment-checkout/wu.png";
import cdm from "../assets/payment-checkout/cdm_bank.png";
import cashplus from "../assets/payment-checkout/cashplus.png";
import wafacash from "../assets/payment-checkout/wafacash.png";

import creditcard_pay from "../assets/newpay/creditcard_pay.webp";
import creditcardgooglepay from "../assets/newpay/creditcardgooglepay.webp";
import google_pay from "../assets/newpay/google_pay.webp";
import paypals from "../assets/newpay/paypals.webp";
import paysafecard from "../assets/newpay/paysafecard.webp";
import neosurf from "../assets/newpay/neosurf.webp";
import crypto from "../assets/newpay/crypto.webp";
import usdt from "../assets/newpay/usdt.webp";
import coinpal from "../assets/newpay/coinpal.png";

// import sepa from "../assets/payment-checkout/sepa.png";
// import skrilliben from "../assets/payment-checkout/skrilliben.png";
// import binance from "../assets/payment-checkout/binance.png";
// import sepalogo from "../assets/payment-checkout/sepalogo.jpg";
// import skrillmoney from "../assets/payment-checkout/skill-money.png";
// import binancePayLogo from "../assets/payment-checkout/binance-pay-crypto.jpg";

import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

import { useSelector, useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import noverif from "../assets/payment-checkout/noverif.png";
import bank from "../assets/payment-checkout/bank.png";

import {
  deleteProductToCart,
  inialiseTheCart,
  addToCharacterList,
} from "../features/cartSlices";

import { useEffect } from "react";
import axios from "axios";
import { addNewOrderId } from "../features/orderIdSlice";

const Cart = () => {
  const cart = useSelector((state) => state?.cart);
  const { user } = useSelector((state) => state.user);
  const [data, setData] = useState(cart?.products);
  const [pay, setPay] = useState(
    cart?.totalPrice + (3.5 * cart?.totalPrice) / 100
  );

  const { ipAddr } = useSelector((state) => state.ipAddr);

  // const [ipAddr, setIpAddr] = useState("France");

  function handleChatClick() {
    void window.Tawk_API.toggle();
  }

  const { currency } = useSelector((state) => state.currency);

  const [qtyOrder, setQtyOrder] = useState(cart?.quantity);

  const [qtyChange, setQtyChange] = useState(0);

  const [firstCharacter, setFirstCharacter] = useState("");
  const [confirmCharacter, setConfirmCharacter] = useState("");

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

  const notifyfirstCharacterRefFrench = () =>
    toast.error("Le nom du personnage ne doit pas être vide");

  const notifyfirstCharacterRefEnglish = () =>
    toast.error("Character name must not be empty");

  const notifyconfirmCharacterRefFrench = () =>
    toast.error("Les noms de personnages ne correspondent pas");

  const notifyconfirmCharacterRefEnglish = () =>
    toast.error("Character names don't match");

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
        let orderNum = orderNumGenerated();
        const orderData = {
          userId: user?.user,
          detailUser: user?.person,
          orderNum: orderNum,
          products: cart?.products,
          address: "",
          status: "En attente",
          totalPrice: pay.toFixed(2),
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
          } else if (paypalPay) {
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
          } else if (coinpalPay) {
            orderData.paymentMethod = "coinpal";
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
          } else if (creditcardPay) {
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
          } else if (paysafecardPay) {
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
          } else if (googlePay) {
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
          } else if (creditcardgooglePay) {
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
          } else if (paypalPay) {
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
          } else if (coinpalPay) {
            orderData.paymentMethod = "coinpal";
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
          } else if (cryptoPay) {
            orderData.paymentMethod = "Coinbase";
            getCoinbaseCommerce();
            axios({
              method: "post",
              url: `${process.env.REACT_APP_CLIENT_URL}/order`,
              data: orderData,
            });
          } else if (creditcardPay) {
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
          } else if (paysafecardPay) {
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
          } else if (googlePay) {
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
          } else if (creditcardgooglePay) {
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
          } else if (paypalPay) {
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
          } else if (coinpalPay) {
            orderData.paymentMethod = "coinpal";
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
          } else if (creditcardPay) {
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
          } else if (paysafecardPay) {
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
          } else if (googlePay) {
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
          } else if (creditcardgooglePay) {
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
          } else if (paypalPay) {
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
          } else if (coinpalPay) {
            orderData.paymentMethod = "coinpal";
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
          } else if (creditcardPay) {
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
          } else if (paysafecardPay) {
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
          } else if (googlePay) {
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
          } else if (creditcardgooglePay) {
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
          } else if (paypalPay) {
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
          } else if (coinpalPay) {
            orderData.paymentMethod = "coinpal";
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
          } else if (creditcardPay) {
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
          } else if (paysafecardPay) {
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
          } else if (googlePay) {
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
          } else if (creditcardgooglePay) {
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
          } else if (paypalPay) {
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
          } else if (coinpalPay) {
            orderData.paymentMethod = "coinpal";
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
          } else if (creditcardPay) {
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
          } else if (paysafecardPay) {
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
          } else if (googlePay) {
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
          } else if (creditcardgooglePay) {
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
          } else if (paypalPay) {
            let productId = "";
            const handlePayment = async () => {
              try {
                const response = await axios.post(
                  `${process.env.REACT_APP_CLIENT_URL}/paypal/create-paypal-order`,
                  {
                    currency_code: "RUB",
                    value: fixedPrice(cart?.totalPrice),
                  }
                );

                dispatch(
                  addNewOrderId({
                    id: response.data.id,
                    page: "cart",
                    productId: response.data.id,
                  })
                );
                orderData.orderIdPaid = response.data.id;
                axios({
                  method: "post",
                  url: `${process.env.REACT_APP_CLIENT_URL}/order`,
                  data: orderData,
                }).then((res) => {
                  productId = res.data._id;
                  // alert(
                  //   "Payment methods are not yet available.Go to the chat to discuss and pay your order"
                  // );
                  // language === "anglais" && notyFysuccessMessageEnglish();
                  // language === "espagnol" && notyFysuccessMessageEspagnol();
                  // language === "francais" && notyFysuccessMessageFrench();
                  // handleChatClick();
                });

                const { href } = response.data.links[1];

                // Redirection vers la page de paiement PayPal
                // window.open(href, "_blank");
                // // console.log(response.data);
                window.location.href = href;
              } catch (error) {
                console.error(
                  "Erreur lors de la création de la commande PayPal :",
                  error
                );
              }
            };

            handlePayment();
            // window.location = `/paymentbtc/${user?.user}/${Number(
            //   fixedPriceBuyNow(totalPrice)
            // )}`;
            // axios({
            //   method: "post",
            //   url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            //   data: orderData,
            // }).then((res) => {
            //   alert(
            //     "Payment methods are not yet available.Go to the chat to discuss and pay your order"
            //   );
            //   language === "anglais" && notyFysuccessMessageEnglish();
            //   language === "espagnol" && notyFysuccessMessageEspagnol();
            //   language === "francais" && notyFysuccessMessageFrench();
            //   handleChatClick();
            // });
          } else if (coinpalPay) {
            orderData.paymentMethod = "coinpal";
            axios({
              method: "post",
              url: `${process.env.REACT_APP_CLIENT_URL}/coinpal/make-payment`,
              data: {
                currency: "RUB",
                amount: fixedPrice(cart?.totalPrice),
                email: user?.person?.email,
                description: "Dofus",
                orderNum: orderNum,
              },
            }).then((res) => {
              window.location.href = res?.data?.nextStepContent;
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
              pay.toFixed(2)
            )}`;
            axios({
              method: "post",
              url: `${process.env.REACT_APP_CLIENT_URL}/order`,
              data: orderData,
            });
          } else if (creditcardPay) {
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
          } else if (paysafecardPay) {
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
          } else if (googlePay) {
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
          } else if (creditcardgooglePay) {
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
      let orderNum = orderNumGenerated();
      const orderData = {
        userId: user?.user,
        detailUser: user?.person,
        orderNum: orderNum,
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

      //
      //
      //
      //
      //
      //

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
        } else if (creditcardPay) {
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
        } else if (paysafecardPay) {
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
        } else if (googlePay) {
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
        } else if (creditcardgooglePay) {
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
        } else if (paypalPay) {
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
        } else if (coinpalPay) {
          orderData.paymentMethod = "coinpal";
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
        } else if (paypalPay) {
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
        } else if (coinpalPay) {
          orderData.paymentMethod = "coinpal";
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
        } else if (creditcardPay) {
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
        } else if (paysafecardPay) {
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
        } else if (googlePay) {
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
        } else if (creditcardgooglePay) {
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
        } else if (coinpalPay) {
          orderData.paymentMethod = "coinpal";
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
        } else if (creditcardPay) {
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
        } else if (paysafecardPay) {
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
        } else if (googlePay) {
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
        } else if (creditcardgooglePay) {
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
        } else if (paypalPay) {
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
        } else if (coinpalPay) {
          orderData.paymentMethod = "coinpal";
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
        } else if (creditcardPay) {
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
        } else if (paysafecardPay) {
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
        } else if (googlePay) {
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
        } else if (creditcardgooglePay) {
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
        } else if (paypalPay) {
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
        } else if (coinpalPay) {
          orderData.paymentMethod = "coinpal";
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
        } else if (creditcardPay) {
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
        } else if (paysafecardPay) {
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
        } else if (googlePay) {
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
        } else if (creditcardgooglePay) {
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
        } else if (paypalPay) {
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
        } else if (coinpalPay) {
          orderData.paymentMethod = "coinpal";
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
        } else if (creditcardPay) {
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
        } else if (paysafecardPay) {
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
        } else if (googlePay) {
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
        } else if (creditcardgooglePay) {
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

        // else {
        //   language === "anglais" && notifyPaymentErrorEnglish();
        //   language === "francais" && notifyPaymentErrorFrench();
        //   language === "espagnol" && notifyPaymentErrorSpanish();
        // }
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
        } else if (paypalPay) {
          let productId = "";
          const handlePayment = async () => {
            try {
              const response = await axios.post(
                `${process.env.REACT_APP_CLIENT_URL}/paypal/create-paypal-order`,
                {
                  currency_code: "RUB",
                  value: fixedPrice(cart?.totalPrice),
                }
              );

              dispatch(
                addNewOrderId({
                  id: response.data.id,
                  page: "cart",
                  productId: response.data.id,
                })
              );
              orderData.orderIdPaid = response.data.id;
              axios({
                method: "post",
                url: `${process.env.REACT_APP_CLIENT_URL}/order`,
                data: orderData,
              }).then((res) => {
                productId = res.data._id;
                // alert(
                //   "Payment methods are not yet available.Go to the chat to discuss and pay your order"
                // );
                // language === "anglais" && notyFysuccessMessageEnglish();
                // language === "espagnol" && notyFysuccessMessageEspagnol();
                // language === "francais" && notyFysuccessMessageFrench();
                // handleChatClick();
              });

              const { href } = response.data.links[1];

              // Redirection vers la page de paiement PayPal
              // window.open(href, "_blank");
              // // console.log(response.data);
              window.location.href = href;
            } catch (error) {
              console.error(
                "Erreur lors de la création de la commande PayPal :",
                error
              );
            }
          };

          handlePayment();
          // window.location = `/paymentbtc/${user?.user}/${Number(
          //   fixedPriceBuyNow(totalPrice)
          // )}`;
          // axios({
          //   method: "post",
          //   url: `${process.env.REACT_APP_CLIENT_URL}/order`,
          //   data: orderData,
          // }).then((res) => {
          //   alert(
          //     "Payment methods are not yet available.Go to the chat to discuss and pay your order"
          //   );
          //   language === "anglais" && notyFysuccessMessageEnglish();
          //   language === "espagnol" && notyFysuccessMessageEspagnol();
          //   language === "francais" && notyFysuccessMessageFrench();
          //   handleChatClick();
          // });
        } else if (coinpalPay) {
          orderData.paymentMethod = "coinpal";
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/coinpal/make-payment`,
            data: {
              currency: "RUB",
              amount: fixedPrice(cart?.totalPrice),
              email: user?.person?.email,
              description: "Dofus",
              orderNum: orderNum,
            },
          }).then((res) => {
            window.location.href = res?.data?.nextStepContent;
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
        } else if (cryptoPay) {
          orderData.paymentMethod = "Coinbase";
          getCoinbaseCommerce();
          axios({
            method: "post",
            url: `${process.env.REACT_APP_CLIENT_URL}/order`,
            data: orderData,
          });
        } else if (creditcardPay) {
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
        } else if (paysafecardPay) {
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
        } else if (googlePay) {
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
        } else if (creditcardgooglePay) {
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
              - 0.00 {currency === "euro" && "€"}
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
                <span className="checkout-pay-mtn">Payer</span>
              )}
              {language === "anglais" && (
                <span className="checkout-pay-mtn">Pay</span>
              )}
              {language === "espagnol" && (
                <span className="checkout-pay-mtn">Pagar</span>
              )}
            </button>
          </div>

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

        {/* Maroc Bank Transfert */}

        {ipAddr === "Morocco" && (
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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

        {/* {ipAddr !== "Morocco" && (
          <div>
            <span
              style={{
                marginTop: "-25px",
              }}
            >
              {skrillibenPay ? (
                <MdRadioButtonChecked
                  style={{
                    color: "#129af6",
                    marginTop: "-25px",
                  }}
                />
              ) : (
                <MdRadioButtonUnchecked
                  name="skrilliben"
                  id="skrilliben"
                  onClick={handleTogglePaymentMethod}
                  // style={{
                  //   color: "black",
                  // }}
                />
              )}
            </span>

            <img
              src={skrillmoney}
              alt="skrilliben"
              id="skrilliben"
              onClick={handleTogglePaymentMethod}
              className="skrilliben"
            />

            <div
              className="fee-crypto"
              style={{
                marginTop: "-25px",
              }}
            >
              <span className="fee-trc-fee">
                {language === "anglais" && "No Fee"}
                {language === "francais" && " Sans Frais"}
                {language === "espagnol" && "Sin Cargo"}
              </span>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Cart;
