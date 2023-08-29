import React, { useState, useEffect } from "react";
import axios from "axios";
import logopaysafecard from "../assets/paysafecard/paysafecard.png";
import dof from "../assets/paysafecard/dof.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addCurrencyVal } from "../features/currencyExchange";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaysafeCard = () => {
  const dispatch = useDispatch();
  const { servers } = useSelector((state) => state.servers);
  const { currency, currencyValue } = useSelector((state) => state.currency);
  const { language } = useSelector((state) => state.language);
  const [kamasValue, setKamasValue] = useState([
    {
      id: 1245,
      val: currency === "mad" ? 200 : 10,
    },
    {
      id: 1247,
      val: currency === "mad" ? 250 : 50,
    },
    {
      id: 1249,
      val: currency === "mad" ? 500 : 50,
    },
    {
      id: 1251,
      val: currency === "mad" ? 1000 : 100,
    },
  ]);

  const [serverSelected, setServerSelected] = useState("");
  const [qtySelected, setQtySelected] = useState("");
  const [server, setServer] = useState({});
  const [qtyToReceive, setQtyToReceive] = useState("");
  const [letter, setLetter] = useState("M");
  const [character, setCharacter] = useState("");

  const handleInfo = () =>
    toast.error(
      "Le paiement par Paysafecard n'est pas disponible pour le moment"
    );

  const handleSelectServer = (item) => {
    setServerSelected(item?.serverName);
    setServer(item);
  };

  const handleQtySelected = (qty) => {
    setQtySelected(qty);
  };

  const handleResetOptions = () => {
    setServerSelected("");
    setQtySelected("");
    setQtyToReceive("");
  };

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

  useEffect(() => {
    if (qtySelected && serverSelected) {
      Number(qtySelected);
      let convertValue = qtySelected * currencyValue;
      let valueToReceive = (convertValue / server?.serverPrice).toFixed(2);
      Number(valueToReceive);
      setQtyToReceive(valueToReceive);
    }
  }, [qtySelected, serverSelected]);

  const returnValuConvertedDevise = (valueToConvert, serverPrice) => {
    Number(valueToConvert);
    let convertValue = valueToConvert * currencyValue;
    let valueConverted = (convertValue / serverPrice).toFixed(2);
    Number(valueConverted);
    return valueConverted;
  };

  return (
    <div className="paysafecard">
      <div className="sect1">
        <div className="sec1_desc">
          <h2>
            {language === "francais" && "Acheter des kamas par paysafecard"}
            {language === "anglais" && "Buy kamas by paysafecard"}
            {language === "espagnol" && "Comprar Kamas por Paysafecard"}
          </h2>
          <div className="sec1_imgs">
            <img
              src={logopaysafecard}
              alt="dofus-kamas"
              className="sec1_img2"
            />
            <img src={dof} alt="logopaysafecard" className="sec1_img1" />
          </div>
          <div className="sec1_imgs_other">
            <p>
              <span
                style={{
                  color: "#dc2626",
                }}
              >
                {language === "francais" && "Attention"}
                {language === "anglais" && "Attention"}
                {language === "espagnol" && "Atención"}
              </span>{" "}
              :{" "}
              {language === "francais" && (
                <p className="avert">
                  ibendouma ne vous demandera jamais de rendre vos kamas ou
                  objets dofus dans le jeu, nous vous demanderons toujours de
                  venir sur le “Chat en Direct” pour discuter de n’importe quel
                  problème. Ne donnez jamais vos kamas ou objets dofus à
                  quelqu’un qui prétend être ibendouma.
                </p>
              )}
              {language === "anglais" && (
                <p className="avert">
                  ibendouma will never ask you to return your kamas or objects
                  dofus in the game, we will always ask you to come on the “Live
                  Chat” to discuss any problem. Never give your kamas or dofus
                  objects to someone who claims to be ibendouma.
                </p>
              )}
              {language === "espagnol" && (
                <p className="avert">
                  ibendouma nunca le pedirá que devuelva sus Kamas u objetos
                  Dofus en el juego, siempre le pediremos que venga en el "Chat
                  en Vivo" para discutir cualquier problema. Nunca des tus Kamas
                  u objetos Dofus a alguien que dice ser ibendouma.
                </p>
              )}
            </p>
            <p>
              <span
                style={{
                  color: "#dc2626",
                }}
              >
                {language === "francais" && "Attention aux fakes"}
                {language === "anglais" && "Watch out for fakes"}
                {language === "espagnol" && "Cuidado con los Fakes"}
              </span>{" "}
              :{" "}
              {language === "francais" && (
                <p className="avert">
                  des arnaqueurs peuvent utiliser le même pseudo avec une lettre
                  de différence.
                </p>
              )}
              {language === "anglais" && (
                <p className="avert">
                  Scammers can use the same nickname with a difference letter.
                </p>
              )}
              {language === "espagnol" && (
                <p className="avert">
                  Los estafadores pueden usar el mismo alias con una letra de
                  diferencia.
                </p>
              )}
            </p>
          </div>
        </div>
        <div className="sec1_content">
          <div className="content_paysafe">
            <div className="content_paysafe_top">
              <p>
                {language === "francais" && "Modèle : Paysafecard"}
                {language === "anglais" && "Model: Paysafecard"}
                {language === "espagnol" && "Modelo: Paysafecard"}
              </p>
              <p>
                {language === "francais" && "Disponibilité"}
                {language === "anglais" && "Availability"}
                {language === "espagnol" && "Disponibilidad"} :{" "}
                <span
                  style={{
                    color: "#15803d",
                    fontWeight: 500,
                  }}
                >
                  {language === "francais" && "En Stock"}
                  {language === "anglais" && "In Stock"}
                  {language === "espagnol" && "En Stock"}
                </span>
              </p>
            </div>
            <p className="content_paysafe_price">
              {qtySelected
                ? qtySelected + ",00"
                : currency === "mad"
                ? "200.00"
                : "10.00"}
              {currency === "euro"
                ? "€"
                : currency === "dollar"
                ? "$"
                : currency}
            </p>
            <div className="paysafe_serveurs_contain">
              <span className="paysafe_serveurs_opt">
                {language === "francais" && "Options disponibles"}
                {language === "anglais" && "Available options"}
                {language === "espagnol" && "Opciones disponibles"}
              </span>
              <button
                className="paysafe_serveurs_res"
                onClick={handleResetOptions}
              >
                Reset options
              </button>
              <div className="serveurs_pay">
                <p className="serveurs_pay_title">
                  <span>*</span>
                  {language === "francais" && "Serveur"}
                  {language === "anglais" && "Server"}
                  {language === "espagnol" && "Servidor"}
                </p>
                <div className="serveurs_pay_servers">
                  {servers?.map((server) => (
                    <span
                      key={server?._id}
                      onClick={() => handleSelectServer(server)}
                      className={
                        server?.serverName === serverSelected
                          ? "serverselect"
                          : "serverall"
                      }
                    >
                      {server?.serverName}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="paysafe_price">
              <p className="paysafe_price_title">
                <span>*</span>
                {language === "francais" && "Valeurs"}
                {language === "anglais" && "Values"}
                {language === "espagnol" && "Valores"}
              </p>
              <div className="paysafe_price_valus">
                {kamasValue?.map((kams) => (
                  <span
                    key={kams?.id}
                    onClick={() => handleQtySelected(kams?.val)}
                    className={
                      kams?.val === qtySelected ? "qtyselect" : "qtyall"
                    }
                  >
                    {kams?.val}
                    {currency === "euro"
                      ? "€"
                      : currency === "dollar"
                      ? "$"
                      : currency}
                  </span>
                ))}
              </div>
            </div>
            <div className="paysafe_inp">
              <div className="paysafe_inp1">
                <label htmlFor="qty">
                  <span>*</span>
                  {language === "francais" && "Quantité à recevoir"}
                  {language === "anglais" && "Quantity to be received"}
                  {language === "espagnol" && "Cantidad por recibir"}
                </label>
                <input
                  type="text"
                  id="qty"
                  name="qty"
                  placeholder="Quantité à recevoir"
                  value={
                    qtyToReceive
                      ? qtyToReceive + letter
                      : language === "francais"
                      ? "Quantité à recevoir"
                      : language === "anglais"
                      ? "Quantity to be received"
                      : language === "espagnol"
                      ? "Cantidad por recibir"
                      : ""
                  }
                />
              </div>
              <div className="paysafe_inp2">
                <label htmlFor="character">
                  <span>*</span>
                  {language === "francais" && "Nom du personnage"}
                  {language === "anglais" && "Character's name"}
                  {language === "espagnol" && "Nombre del personaje"}
                </label>
                <input
                  type="text"
                  id="character"
                  name="character"
                  placeholder={
                    language === "francais"
                      ? "Nom du personnage"
                      : language === "anglais"
                      ? "Character's name"
                      : language === "espagnol"
                      ? "Nombre del personaje"
                      : ""
                  }
                  value={character}
                  onChange={(e) => setCharacter(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button className="content_button" onClick={handleInfo}>
            {language === "francais" && "Acheter Maintenant"}
            {language === "anglais" && "Buy Now"}
            {language === "espagnol" && "Comprar Ahora"}
          </button>
        </div>
      </div>
      <div className="sect2">
        <p className="tab_title">
          {language === "francais" && "Paysafecard - Quantité de livraison"}
          {language === "anglais" && "Paysafecard - Delivery quantity"}
          {language === "espagnol" && "Paysafecard - Cantidad de entrega"}
        </p>
        <div className="tab_contain">
          <table>
            <thead>
              <tr>
                <th>
                  {language === "francais" && "Serveur"}
                  {language === "anglais" && "Server"}
                  {language === "espagnol" && "Servidor"}
                </th>
                <th>
                  {currency === "mad" ? 200 : 10}

                  {currency === "euro"
                    ? "€"
                    : currency === "dollar"
                    ? "$"
                    : currency}
                </th>
                <th>
                  {currency === "mad" ? 250 : 25}
                  {currency === "euro"
                    ? "€"
                    : currency === "dollar"
                    ? "$"
                    : currency}
                </th>
                <th>
                  {currency === "mad" ? 500 : 50}
                  {currency === "euro"
                    ? "€"
                    : currency === "dollar"
                    ? "$"
                    : currency}
                </th>
                <th>
                  {currency === "mad" ? 1000 : 100}
                  {currency === "euro"
                    ? "€"
                    : currency === "dollar"
                    ? "$"
                    : currency}
                </th>
              </tr>
            </thead>
            <tbody>
              {servers?.map((server) => (
                <tr>
                  <td>{server?.serverName}</td>
                  <td>
                    {returnValuConvertedDevise(
                      currency === "mad" ? 200 : 10,
                      server?.serverPrice
                    )}
                    M
                  </td>
                  <td>
                    {returnValuConvertedDevise(
                      currency === "mad" ? 250 : 25,
                      server?.serverPrice
                    )}
                    M
                  </td>
                  <td>
                    {returnValuConvertedDevise(
                      currency === "mad" ? 500 : 50,
                      server?.serverPrice
                    )}
                    M
                  </td>
                  <td>
                    {returnValuConvertedDevise(
                      currency === "mad" ? 1000 : 100,
                      server?.serverPrice
                    )}
                    M
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="sect3"></div>
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

export default PaysafeCard;
