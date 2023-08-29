import React, { useState } from "react";
import { useSelector } from "react-redux";
import emptyOrder from "../assets/gif/empty.webp";

const OrderCanceled = ({ order }) => {
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
  const [orderFiltered, setOrderFilter] = useState(
    order.filter((ord) => ord.status === "Annuler")
  );

  return (
    <div className="order-canceled">
      <table>
        <thead>
          {language === "francais" && (
            <tr>
              <th>N° commande</th>
              <th>
                Prix total({currency === "EUR" && "EUR"}
                {currency === "" && "EUR"}
                {currency === "USD" && "$"}
                {currency === "MAD" && "MAD"}
                {currency === "USDT" && "USDT"}
                {currency === "CAD" && "CAD"}
                {currency === "CHF" && "CHF"}
                {currency === "RUB" && "RUB"}
                {currency === "GBP" && "GBP"})
              </th>
              <th>Quantité(M)</th>
              <th>Personnage</th>
              <th>Serveur</th>
              <th>Date de commande</th>
              <th>Status</th>
            </tr>
          )}

          {language === "anglais" && (
            <tr>
              <th>N° order</th>
              <th>
                Total price({currency === "EUR" && "EUR"}
                {currency === "" && "EUR"}
                {currency === "USD" && "$"}
                {currency === "MAD" && "MAD"}
                {currency === "USDT" && "USDT"}
                {currency === "CAD" && "CAD"}
                {currency === "CHF" && "CHF"}
                {currency === "RUB" && "RUB"}
                {currency === "GBP" && "GBP"})
              </th>
              <th>Quantity(M)</th>
              <th>Character</th>
              <th>Server</th>
              <th>Order date</th>
              <th>Status</th>
            </tr>
          )}
          {language === "espagnol" && (
            <tr>
              <th>N° ordenar</th>
              <th>
                Precio total({currency === "EUR" && "EUR"}
                {currency === "" && "EUR"}
                {currency === "USD" && "$"}
                {currency === "MAD" && "MAD"}
                {currency === "USDT" && "USDT"}
                {currency === "CAD" && "CAD"}
                {currency === "CHF" && "CHF"}
                {currency === "RUB" && "RUB"}
                {currency === "GBP" && "GBP"})
              </th>
              <th>Cantidad(M)</th>
              <th>Personaje</th>
              <th>Servidora</th>
              <th>Fecha de orden</th>
              <th>Estado</th>
            </tr>
          )}
        </thead>
        <tbody>
          {order
            .filter((order) => order.status === "Annuler")
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
                  <p className="canceled">
                    {" "}
                    {order?.status === "Annuler" &&
                      language === "francais" &&
                      "Annuler"}
                    {order?.status === "Annuler" &&
                      language === "anglais" &&
                      "Canceled"}
                    {order?.status === "Annuler" &&
                      language === "espagnol" &&
                      "Cancelada"}
                  </p>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderCanceled;
