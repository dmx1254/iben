import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import lesdofusImg from "../assets/paysafecard/lesdofus.webp";
import { lesdofus } from "../CONSTANTS/data";
import { useSelector } from "react-redux";

const LesDofus = () => {
  const { currency, currencyValue } = useSelector((state) => state.currency);
  const { language } = useSelector((state) => state.language);
  const [itemSelected, setItemSelected] = useState("");
  const [leDofu, setLeDofu] = useState("");
  const [character, setCharacter] = useState("");
  const [filterItem, setFilterItem] = useState("Draconiros");
  const [filterArrayLesdofus, setFilterArrayLesdofus] = useState(
    lesdofus?.filter((item) => item?.name === filterItem)
  );

  const [priceDofu, setPriceDofu] = useState(
    lesdofus[0]?.dofus?.filter((dofu) => dofu?.server === leDofu)
  );
  const [imgDofToSelect, setImgDofToSelect] = useState(null);

  const [firstDofPrice, setFirstDofPrice] = useState(
    lesdofus[0]?.dofus[0]?.price
  );

//   console.log(priceDofu);
//   console.log(lesdofus);

//   console.log(filterItem);
//   console.log(filterArrayLesdofus[0]);
//   console.log(leDofu);

  const handleSelectServer = (itemName) => {
    setItemSelected(itemName);
    setFilterItem(itemName);
  };

  const handleLesDofusSelected = (dofu) => {
    setLeDofu(dofu);
  };

  const handleResetOptions = () => {
    setItemSelected("");
    setLeDofu("");
  };

  useEffect(() => {
    setFilterArrayLesdofus(
      lesdofus?.filter((item) => item?.name === filterItem)
    );
  }, [filterItem]);

  useEffect(() => {
    setPriceDofu(
      filterArrayLesdofus[0]?.dofus?.filter((dofu) => dofu?.server === leDofu)
    );
    setImgDofToSelect(
      filterArrayLesdofus[0]?.dofus?.filter(
        (dofu) => dofu?.server === leDofu
      )[0]?.image
    );
  }, [leDofu, filterArrayLesdofus]);

  const handleInfo = () =>
    toast.error("La vente d'Item n'est pas disponible pour le moment");

  return (
    <div className="lesdofus">
      <div className="sect1">
        <div className="sec1_desc">
          <h2>
            {language === "francais" && "Acheter des kamas par paysafecard"}
            {language === "anglais" && "Buy kamas by paysafecard"}
            {language === "espagnol" && "Comprar Kamas por Paysafecard"}
          </h2>
          <div className="sec1_imgs">
            {/* <img
              src={logopaysafecard}
              alt="dofus-kamas"
              className="sec1_img2"
            /> */}
            <img
              src={imgDofToSelect ? imgDofToSelect : lesdofusImg}
              alt="logopaysafecard"
              className="sec1_img1"
            />
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
          </div>
        </div>
        <div className="sec1_content">
          <div className="content_paysafe">
            <div className="content_paysafe_top">
              <p>
                {language === "francais" && "Modèle : Dofus"}
                {language === "anglais" && "Model: Dofus"}
                {language === "espagnol" && "Modelo: Dofus"}
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
            <div className="content_paysafe_price">
              <p>
                {priceDofu[0]?.price
                  ? priceDofu[0]?.price
                  : firstDofPrice + ",00"}{" "}
                {currency === "euro"
                  ? "€"
                  : currency === "dollar"
                  ? "$"
                  : currency}
              </p>
            </div>
            {/* <p className="content_paysafe_price">
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
            </p> */}
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
                  {lesdofus?.map((item) => (
                    <span
                      key={item?.id}
                      onClick={() => handleSelectServer(item?.name)}
                      className={
                        item?.name === itemSelected
                          ? "serverselect"
                          : "serverall"
                      }
                    >
                      {item?.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="paysafe_price">
              <p className="paysafe_price_title">
                <span>*</span>
                {language === "francais" && "Les Dofus"}
                {language === "anglais" && "The Dofus"}
                {language === "espagnol" && "Los Dofus"}
              </p>
              <div className="paysafe_price_valus">
                {filterArrayLesdofus[0]?.dofus?.map((dofs) => (
                  <span
                    key={dofs?.id}
                    onClick={() => handleLesDofusSelected(dofs?.server)}
                    className={dofs?.server === leDofu ? "qtyselect" : "qtyall"}
                  >
                    {dofs?.server}
                  </span>
                ))}
              </div>
            </div>
            <div className="paysafe_inp">
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
          {language === "francais" && "Les Dofus"}
          {language === "anglais" && "The Dofus"}
          {language === "espagnol" && "Los Dofus"}
        </p>
        <div className="tab_contain">
          <table>
            <thead
              style={{
                display: "none",
              }}
            >
              <tr>
                <th>
                  {language === "francais" && "Serveur"}
                  {language === "anglais" && "Server"}
                  {language === "espagnol" && "Servidor"}
                </th>
                <th>
                  hjuil
                  {/* {currency === "mad" ? 200 : 10}

                  {currency === "euro"
                    ? "€"
                    : currency === "dollar"
                    ? "$"
                    : currency} */}
                </th>
                <th>
                  hjuil
                  {/* {currency === "mad" ? 250 : 25}
                  {currency === "euro"
                    ? "€"
                    : currency === "dollar"
                    ? "$"
                    : currency} */}
                </th>
                <th>
                  hjuil
                  {/* {currency === "mad" ? 500 : 50}
                  {currency === "euro"
                    ? "€"
                    : currency === "dollar"
                    ? "$"
                    : currency} */}
                </th>
              </tr>
            </thead>
            <tbody>
              {lesdofus[0]?.dofus?.map((dof) => (
                <tr key={dof.id}>
                  <td>{dof?.server} </td>
                  <td>
                    <img src={dof?.image} alt={dof?.server} />
                  </td>
                  <td>{dof?.niveau}</td>
                  {
                    language === "anglais" && <td dangerouslySetInnerHTML={{ __html: dof?.descEn }}></td>
                  }
                  {
                    language === "francais" && <td dangerouslySetInnerHTML={{ __html: dof?.desc }}></td>
                  }
                  {
                    language === "espagnol" && <td dangerouslySetInnerHTML={{ __html: dof?.descEs }}></td>
                  }
                
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

export default LesDofus;
