import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

const PaiementSuccess = () => {
  const { cart } = useSelector((state) => state?.cart);
  const productInfo = useSelector((state) => state.productsinfo);
  const { language } = useSelector((state) => state.language);
  const [statusPayment, setStatusPayment] = useState(null);
  const { orderId, page, productId } = useSelector((state) => state.orderId);
  const [paymentInfo, setPaymentInfo] = useState(null);
  // console.log("orderId", orderId, "page", page);
  // console.log(productInfo);
  // console.log(cart);
  // console.log(productId);

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

  notyFysuccessMessageEnglish();

  useEffect(() => {
    const fetchCaptureData = async () => {
      try {
        await axios
          .post(
            `${process.env.REACT_APP_CLIENT_URL}/paypal/capture-paypal-order`,
            {
              orderID: orderId,
            }
          )
          .then((response) => {
            setStatusPayment(response.data);
            if (response.data.status === "COMPLETED") {
              axios({
                method: "post",
                url: `${process.env.REACT_APP_CLIENT_URL}/order/paid`,
                data: {
                  paid: "Payé",
                  orderId: orderId,
                },
              });
            }

            axios({
              method: "post",
              url: `${process.env.REACT_APP_CLIENT_URL}/paypal/get-paypal-order-details`,
              data: {
                orderID: orderId,
              },
            })
              .then((res) => {
                setPaymentInfo(res?.data);
                let infos = res?.data;
                axios({
                  method: "post",
                  url: `${process.env.REACT_APP_CLIENT_URL}/order/updatepayment`,
                  data: {
                    orderID: orderId,
                    infoObjetctPay: infos,
                  },
                });
              })
              .catch((err) => console.log(err));
          });
      } catch (error) {
        console.error(error);
      }
    };

    fetchCaptureData();
  }, []);

  return (
    <div className="paymentsuccess">
      <div>
        {language === "anglais" && "STATUS OF YOUR PAYPAL PAYMENT"}
        {language === "francais" && "STATUT DE VOTRE PAIEMENT PAYPAL"}
        {language === "espagnol" && "ESTADO DE SU PAGO PAYPAL"}
      </div>
      <div>
        {statusPayment?.status === "COMPLETED" ? (
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
        ) : (
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
        )}
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

export default PaiementSuccess;
