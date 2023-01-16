import React, { useState, useEffect } from "react";
import DofusKamas from "../components/DofusKamas";
import DofusRetro from "../components/DofusRetro";
import DofusTouch from "../components/DofusTouch";
import { useSelector } from "react-redux";

const BuyKamas = () => {
  const { servers } = useSelector((state) => state.servers);
  const [kamas, setKamas] = useState([]);
  const [retro, setRetro] = useState([]);
  const [touch, setTouch] = useState([]);

  const [valueExchange, setValueExchange] = useState(1);

  const { currency } = useSelector((state) => state.currency);

  const { language } = useSelector((state) => state.language);

  useEffect(() => {
    setKamas(
      servers.filter((server) => server.serverCategory === "dofus-kamas")
    );

    setRetro(
      servers.filter((server) => server.serverCategory === "dofus-retro")
    );

    setTouch(
      servers.filter((server) => server.serverCategory === "dofus-touch")
    );
  }, [servers]);

  useEffect(() => {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: "https://currency-exchange.p.rapidapi.com/exchange",
      params: { from: "MAD", to: currency, q: "1.0" },
      headers: {
        "X-RapidAPI-Key": "454ccbe31bmsh7828de4155ab93ap195ad7jsn32ad77105be5",
        "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setValueExchange(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [currency]);

  return (
    <div className="buykamas">
      {language === "francais" && (
        <div className="buykamas-description">
          Vous voulez acheter dofus kamas, Dofus touch ou dofus retro. Nous vous
          assurons les meilleurs prix sur le marché et avec une rapidité de
          livraison incomparable.
        </div>
      )}
      {language === "anglais" && (
        <div className="buykamas-description">
          You want to buy dofus kamas, Dofus touch or dofus retro. We you ensure
          the best prices on the market and with a speed of incomparable
          delivery.
        </div>
      )}
      {language === "espagnol" && (
        <div className="buykamas-description">
          Quieres comprar dofus kamas, dofus touch o dofus retro. Nosotros tu
          asegurar los mejores precios del mercado y con una rapidez de entrega
          incomparable.
        </div>
      )}
      <DofusKamas kamas={kamas} valueExchange={valueExchange} currency={currency} />
      <DofusTouch touch={touch} valueExchange={valueExchange} currency={currency}/>
      <DofusRetro retro={retro} valueExchange={valueExchange} currency={currency}/>
    </div>
  );
};

export default BuyKamas;
