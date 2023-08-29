// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import { useSelector } from "react-redux";

// import { useParams } from "react-router-dom";

// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

// import { CopyToClipboard } from "react-copy-to-clipboard";

// import { AiFillCopy } from "react-icons/ai";

// const PaymentEth = () => {
//   const [dataUsdt, setDataUsdt] = useState(null);
//   const [dataQrcode, setDataQrcode] = useState(null);
//   const [copied, setCopied] = useState(false);
//   const [days, setDays] = useState(0);
//   const [hours, setHours] = useState(0);
//   let [compt, setCompt] = useState(5);
//   let [minutes, setMinutes] = useState(compt);
//   const [seconds, setSeconds] = useState(0);
//   const [valueCurrencyConvert, setValueCurrencyConvert] = useState(null);
//   const [loadingQr, setLoadingQr] = useState(true);
//   //   console.log(valueCurrencyConvert);

//   console.log(dataUsdt);

//   const { currency } = useSelector((state) => state.currency);
//   const { language } = useSelector((state) => state.language);

//   let params = useParams();
//   //   console.log(params);
//   const userId = params?.userid;
//   const valuCurren = Number(params?.valuetoconverter);

//   //   console.log(dataUsdt);
//   //   //   console.log(dataQrcode);
//   //   const d = new Date();
//   //   let min = d.getMinutes();
//   //   console.log(min);
//   //   const funcMin = () => {};
//   //   const setFuncMin = () => {
//   //     compt--;
//   //     setMinutes(compt);
//   //     if (compt === 0) {
//   //       setCompt(5);
//   //     }
//   //   };

//   //   setInterval(setFuncMin, 60000);
//   //   clearInterval(setFuncMin, 60000);

//   //   console.log(seconds);

//   useEffect(() => {
//     const getRateCrypto = async () => {
//       if (currency === "euro") {
//         axios({
//           method: "post",
//           url: `${process.env.REACT_APP_CLIENT_URL}/pay-with-crypto/getcurrencyethcrypto`,
//           data: { valuCur: valuCurren, currency: "eur" },
//         }).then((res) => setValueCurrencyConvert(res?.data));
//       } else if (currency === "dollar") {
//         axios({
//           method: "post",
//           url: `${process.env.REACT_APP_CLIENT_URL}/pay-with-crypto/getcurrencyethcrypto`,
//           data: { valuCur: valuCurren, currency: "usd" },
//         }).then((res) => setValueCurrencyConvert(res?.data));
//       } else {
//         axios({
//           method: "post",
//           url: `${process.env.REACT_APP_CLIENT_URL}/pay-with-crypto/getcurrencyethcrypto`,
//           data: { valuCur: valuCurren, currency: currency },
//         }).then((res) => setValueCurrencyConvert(res?.data));
//       }
//     };

//     getRateCrypto();
//   }, [currency, valuCurren]);

//   useEffect(() => {
//     const getUsdtPayment = async () => {
//       await axios
//         .get(`${process.env.REACT_APP_CLIENT_URL}/pay-with-crypto/eth`)
//         .then((res) => setDataUsdt(res.data))
//         .catch((error) => console.log(error));
//     };

//     getUsdtPayment();
//   }, []);

//   useEffect(() => {
//     const getUsdtPaymentQr = async () => {
//       await axios
//         .get(`${process.env.REACT_APP_CLIENT_URL}/pay-with-crypto/ethqrcode`)
//         .then((res) => {
//           setDataQrcode(res.data);
//           setLoadingQr(false);
//         })
//         .catch((error) => console.log(error));
//     };

//     getUsdtPaymentQr();
//   }, []);

//   const handleCopyToClipboad = (text, result) => {
//     setCopied(result);
//   };

//   return (
//     <div className="paymentusdt">
//       <div className="paymentusdt-container">
//         {loadingQr ? (
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <Skeleton height="250px" width="200px" />
//             <Skeleton height="50px" width="100px" />
//           </div>
//         ) : (
//           <div className="usdt-qrcode">
//             <img
//               src={`data:image/png;base64,${dataQrcode?.qr_code}`}
//               alt="Payment QR Code"
//             />

//             <p>Adress</p>
//           </div>
//         )}

//         <div className="paymentusdt-paytrc">
//           <span className="paymentusdt-paytrc-send">
//             {language === "anglais" && "PLEASE SEND"}
//             {language === "francais" && "VEUILLEZ ENVOYER"}
//             {language === "espagnol" && "POR FAVOR ENVIE"}
//           </span>
//           <span className="paymentusdt-paytrc-cur">
//             {valueCurrencyConvert?.value_coin} TRC20_USDT
//           </span>
//           <span className="paymentusdt-paytrc-val">
//             ({valuCurren}
//             {currency === "euro" && "€"}
//             {currency === "" && "€"}
//             {currency === "dollar" && "$"}
//             {currency === "mad" && "MAD"}
//             {currency === "usdt" && "USDT"}
//             {currency === "cad" && "CAD"}
//             {currency === "chf" && "CHF"}
//             {currency === "rub" && "RUB"}
//             {currency === "gbp" && "£"} )
//           </span>
//         </div>
//         <div className="paymentusdt-adjust">
//           <span className="convert-rate">
//             {language === "anglais" &&
//               "The TRC20_USDT conversion rate will be adjusted in"}
//             {language === "francais" &&
//               "Le taux de conversion TRC20_USDT sera ajusté dans"}
//             {language === "espagnol" &&
//               "La tasa de conversión TRC20_USDT se ajustará en"}
//           </span>
//           <span className="min-hou"> {minutes} minutes</span>
//         </div>
//         <div className="adress-to-copy">
//           <div className="copyclip">
//             {/* <input type="text" value="" /> */}
//             <CopyToClipboard
//               text={dataUsdt?.address_in}
//               onCopy={handleCopyToClipboad}
//             >
//               <button className="btn-copyclip-contain">
//                 <span className="copy-sap1">{dataUsdt?.address_in}</span>
//                 <span className="copy-sap2">
//                   <AiFillCopy />
//                 </span>
//               </button>
//             </CopyToClipboard>
//           </div>
//           <span>
//             {copied && (
//               <span
//                 style={{
//                   color: "red",
//                   fontSize: "18px",
//                   marginLeft: "10px",
//                 }}
//               >
//                 Copié
//               </span>
//             )}
//           </span>
//         </div>
//         <div className="paymentusdt-valid">
//           <span>Cette commande sera valable pour</span>
//           <span className="min-hou"> 1h </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentEth;
