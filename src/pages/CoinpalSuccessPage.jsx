import React from "react";

import { useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CoinpalSuccessPage = () => {
  const { language } = useSelector((state) => state.language);

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

  {
    language === "anglais" && notyFysuccessMessageEnglish();
  }
  {
    language === "francais" && notyFysuccessMessageFrench();
  }
  {
    language === "espagnol" && notyFysuccessMessageEspagnol();
  }

  return (
    <div className="paymentsuccess">
      <div>
        {language === "anglais" && "STATUS OF YOUR COINPAL PAYMENT"}
        {language === "francais" && "STATUS DE VOTRE PAIEMENT COINPAL"}
        {language === "espagnol" && "ESTADO DE SU PAGO COINPAL"}
      </div>
      <div>
        <p
          style={{
            fontSize: "30px",
            color: "green",
            fontWeight: 800,
            textTransform: "uppercase",
          }}
        >
          {language === "anglais" && "paid"}
          {language === "francais" && "payé"}
          {language === "espagnol" && "pagado"}
        </p>
      </div>
      {/* <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    background: "rgba(0, 0, 0, 0.5)",
    color: "rgba(255, 255, 255,1)"
  }}>
  Votre paiement sera mises à jour dans 60 secondes ou moins
  </div> */}
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

export default CoinpalSuccessPage;
