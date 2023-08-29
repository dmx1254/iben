import React, { useState } from "react";
import { useSelector } from "react-redux";

const OrderPending = ({ order }) => {
  const { language } = useSelector((state) => state.language);

  const { currency } = useSelector((state) => state.currency);

  const convertDate = (date) => {
    const dateConverted = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    return dateConverted;
  };
  const [orderPending, setOrderPending] = useState(
    order.filter((ord) => ord.status === "En attente")
  );
  return (
    <div className="order-pending">
      <table>
        <thead>
          {language === "francais" && (
            <tr>
              <th>N° commande</th>
              <th>Total
                {/* ({currency === "EUR" && "EUR"}
                {currency === "" && "EUR"}
                {currency === "USD" && "$"}
                {currency === "MAD" && "MAD"}
                {currency === "USDT" && "USDT"}
                {currency === "CAD" && "CAD"}
                {currency === "CHF" && "CHF"}
                {currency === "RUB" && "RUB"}
                {currency === "GBP" && "GBP"}) */}
                </th>
              <th>Quantité(M)</th>
              <th>Personnage</th>
              <th>Serveur</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          )}

          {language === "anglais" && (
            <tr>
              <th>N° order</th>
              <th>Total
                {/* ({currency === "EUR" && "EUR"}
                {currency === "" && "EUR"}
                {currency === "USD" && "$"}
                {currency === "MAD" && "MAD"}
                {currency === "USDT" && "USDT"}
                {currency === "CAD" && "CAD"}
                {currency === "CHF" && "CHF"}
                {currency === "RUB" && "RUB"}
                {currency === "GBP" && "GBP"}) */}
                </th>
              <th>Quantity(M)</th>
              <th>Character</th>
              <th>Server</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          )}
          {language === "espagnol" && (
            <tr>
              <th>N° ordenar</th>
              <th>Total
                {/* ({currency === "EUR" && "EUR"}
                {currency === "" && "EUR"}
                {currency === "USD" && "$"}
                {currency === "MAD" && "MAD"}
                {currency === "USDT" && "USDT"}
                {currency === "CAD" && "CAD"}
                {currency === "CHF" && "CHF"}
                {currency === "RUB" && "RUB"}
                {currency === "GBP" && "GBP"}) */}
                </th>
              <th>Cantidad(M)</th>
              <th>Personaje</th>
              <th>Servidora</th>
              <th>Fecha</th>
              <th>Estado</th>
            </tr>
          )}
        </thead>
        <tbody>
          {order
            .filter((order) => order?.status === "En attente")
            .map((order) => (
              <tr key={order._id}>
                <td>{order?.orderNum}</td>
                <td>{order?.totalPrice}</td>
                <td className="amount">
                  {/* {order?.products.reduce((a, b) => a.amount + b.amount, 0)} M */}
                  {order?.products[0].amount}
                </td>
                <td>{order?.products[0].character}</td>
                <td>{order?.products[0].server}</td>
                <td>{convertDate(order?.createdAt)}</td>
                <td>
                  <p className="pending">
                    {" "}
                    {order?.status === "En attente" &&
                      language === "francais" &&
                      "En attente"}
                    {order?.status === "En attente" &&
                      language === "anglais" &&
                      "Pending"}
                    {order?.status === "En attente" &&
                      language === "espagnol" &&
                      "Pendiente"}
                  </p>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* <div className="price-to-pay">
        <span>Total à payer:</span>
        <span className="amount-to-pay">
          {order
            .filter((product) => product?.status === "En attente")
            .reduce((a, b) => a + b.totalPrice, 0)
            .toFixed(2)}{" "}
          MAD
        </span>
      </div> */}
    </div>
  );
};

export default OrderPending;
