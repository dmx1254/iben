import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { inialiseTheCart } from "../features/cartSlices";

import { Link } from "react-router-dom";

import { BsCheckLg } from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckoutSuccess = () => {
  const { language } = useSelector((state) => state.language);

  const dispatch = useDispatch();

  const notyFySuccessOrderFrench = () =>
    toast.success(
      "Votre commande a été créé avec succéss, vous pouvez verifier sur votre profil, mes commandes"
    );
  const notyFySuccessOrderEnglish = () =>
    toast.success(
      "Your order has been created successfully, you can check on your profile, my orders"
    );

  useEffect(() => {
    // inialiseTheCart();
    dispatch(inialiseTheCart());
    language === "anglais" && notyFySuccessOrderEnglish();
    language === "francais" && notyFySuccessOrderFrench();
  }, [dispatch, language]);
  return (
    <div className="checkoutSuccess">
      {language === "anglais" && (
        <div className="checkoutSuccess-container">
          <span className="checkout-icon">
            <BsCheckLg />
          </span>
          <p className="checkout-title">Successful Payment!</p>
          <p className="checkout-desc">
            Thank you for placing your order on ibendouma 🎉
          </p>
          <div className="checkoutSuccess-container-btn">
            {/* <button>No</button> */}
            <button>
              <Link to="/">OK</Link>
            </button>
          </div>
        </div>
      )}

      {language === "espagnol" && (
        <div className="checkoutSuccess-container">
          <span className="checkout-icon">
            <BsCheckLg />
          </span>
          <p className="checkout-title">Pago exitoso!</p>
          <p className="checkout-desc">
            Gracias por hacer tu pedido en ibendouma 🎉
          </p>
          <div className="checkoutSuccess-container-btn">
            {/* <button>No</button> */}
            <button>
              <Link to="/">OK</Link>
            </button>
          </div>
        </div>
      )}

      {language === "francais" && (
        <div className="checkoutSuccess-container">
          <span className="checkout-icon">
            <BsCheckLg />
          </span>
          <p className="checkout-title">Paiement réussi!</p>
          <p className="checkout-desc">
            Merci d'avoir passé votre commande sur ibendouma 🎉
          </p>
          <Link to="/">
            <div className="checkoutSuccess-container-btn">
              {/* <button>No</button> */}
              <button>OK</button>
            </div>
          </Link>
        </div>
      )}

      {/* {language === "anglais" && (
        <h2>Thank you for placing your order on ibendouma 🎉 </h2>
      )} */}
      {/* {language === "francais" &&
        swal({
          title: "Paiement réussi!",
          text: "Merci d'avoir passé votre commande sur ibendouma ! 🎉",
          icon: "success",
          buttons: "OK",
        })} */}
      {/* {language === "francais" && (
        <h2>Merci d'avoir passé votre commande sur ibendouma ! 🎉</h2>
      )}
      {language === "espagnol" && (
        <h2>Gracias por hacer tu pedido en ibendouma ! 🎉 </h2>
      )} */}
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

export default CheckoutSuccess;
