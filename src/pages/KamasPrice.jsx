import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import axios from "axios";

import Loader from "../components/Loader";

const KamasPrice = () => {
  const { language } = useSelector((state) => state.language);
  const [servers, setServers] = useState([]);
  const [eurorate, setEuroRate] = useState(1);
  const [usdtra, setUsdtRa] = useState(1);
  const [serverLoading, setServerLoading] = useState(true);

  useEffect(() => {
    const getServers = async () => {
      await axios
        .get(`${process.env.REACT_APP_CLIENT_URL}/server`)
        .then((res) => {
          setServers(res.data);
          setServerLoading(false);
        });
    };
    getServers();
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_CLIENT_URL}/euro`,
    })
      .then((res) => setEuroRate(res?.data[0]?.euro))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_CLIENT_URL}/usdt`,
    })
      .then((res) => setUsdtRa(res?.data[0]?.usdt))
      .catch((error) => console.log(error));
  }, []);

  return serverLoading ? (
    <Loader />
  ) : (
    <div className="kamasprice">
      <table className="table">
        <thead>
          <tr>
            <th className="table__column">
              {language === "anglais" && "Server"}
              {language === "francais" && "Serveur"}
              {language === "espagnol" && "Servidor"}
            </th>
            <th className="table__column">
              {language === "anglais" && "Price"}
              {language === "francais" && "Prix"}
              {language === "espagnol" && "Precio"}
            </th>
            <th className="table__column">USDT</th>
            <th className="table__column">Paypal</th>
            <th className="table__column">Skrill</th>
            <th className="table__column">Payeer</th>
            {/* <th className="table__column">Sepa</th> */}
            {/* <th className="table__column">Status</th> */}
          </tr>
        </thead>
        <tbody>
          {/* Dofus Kamas */}
          <tr className="dofus-empty">
            <td></td>
            <td></td>
            <td></td>
            <td className="dofus-text-empty">Dofus Kamas</td>
            <td></td>
            <td></td>
            {/* <td></td> */}
          </tr>
          {servers
            ?.filter((item) => item.serverCategory === "dofus-kamas")
            ?.map((item) => (
              <tr key={item._id}>
                <td>{item.serverName}</td>
                <td>
                  {item.serverPrice}
                  <span className="currency-color">Dhs/M</span>
                </td>
                <td>
                  {(item.serverPrice / usdtra).toFixed(2)}
                  <span className="currency-color"> Usdt/M</span>
                </td>
                <td>
                  {(item.serverPrice / eurorate).toFixed(2)}
                  <span className="currency-color"> €/M</span>
                </td>
                <td>
                  {(item.serverPrice / eurorate).toFixed(2)}
                  <span className="currency-color">€/M</span>
                </td>
                {/* <td>
                  {(item.serverPrice / eurorate).toFixed(2)}
                  <span className="currency-color">€/M</span>
                </td> */}
                <td>
                  {(item.serverPrice / eurorate).toFixed(2)}
                  <span className="currency-color">€/M</span>
                </td>

                {/* <td
                className={
                  item.serverStatus === "Disponible"
                    ? "success"
                    : item.serverStatus === "Stock complet"
                    ? "no-success"
                    : "quickly"
                }
              >
                {item.serverStatus === "Disponible" && "Clic to sell"}
                {item.serverStatus === "Vendre rapidement" && "Sell quickly"}
                {item.serverStatus === "Stock complet" && "Full Stock"}
              </td> */}
              </tr>
            ))}

          {/* Dofus Retro */}

          <tr className="dofus-empty">
            <td></td>
            <td></td>
            <td></td>
            <td className="dofus-text-empty">Dofus Retro</td>
            <td></td>
            <td></td>
            {/* <td></td> */}
          </tr>
          {servers
            ?.filter((item) => item.serverCategory === "dofus-retro")
            ?.map((item) => (
              <tr key={item._id}>
                <td>{item.serverName}</td>
                <td>
                  {item.serverPrice}
                  <span className="currency-color">Dhs/M</span>
                </td>
                <td>
                  {(item.serverPrice / usdtra).toFixed(2)}
                  <span className="currency-color"> Usdt/M</span>
                </td>
                <td>
                  {(item.serverPrice / eurorate).toFixed(2)}
                  <span className="currency-color"> €/M</span>
                </td>
                <td>
                  {(item.serverPrice / eurorate).toFixed(2)}
                  <span className="currency-color">€/M</span>
                </td>
                {/* <td>
                  {(item.serverPrice / eurorate).toFixed(2)}
                  <span className="currency-color">€/M</span>
                </td> */}
                <td>
                  {(item.serverPrice / eurorate).toFixed(2)}
                  <span className="currency-color">€/M</span>
                </td>

                {/* <td
                className={
                  item.serverStatus === "Disponible"
                    ? "success"
                    : item.serverStatus === "Stock complet"
                    ? "no-success"
                    : "quickly"
                }
              >
                {item.serverStatus === "Disponible" && "Clic to sell"}
                {item.serverStatus === "Vendre rapidement" && "Sell quickly"}
                {item.serverStatus === "Stock complet" && "Full Stock"}
              </td> */}
              </tr>
            ))}

          {/* Dofus Touch */}

          <tr className="dofus-empty">
            <td></td>
            <td></td>
            <td></td>
            <td className="dofus-text-empty">Dofus Touch</td>
            <td></td>
            <td></td>
            {/* <td></td> */}
          </tr>

          {servers
            ?.filter((item) => item.serverCategory === "dofus-touch")
            ?.map((item) => (
              <tr key={item._id}>
                <td>{item.serverName}</td>
                <td>
                  {item.serverPrice}
                  <span className="currency-color">Dhs/M</span>
                </td>
                <td>
                  {(item.serverPrice / usdtra).toFixed(2)}
                  <span className="currency-color"> Usdt/M</span>
                </td>
                <td>
                  {(item.serverPrice / eurorate).toFixed(2)}
                  <span className="currency-color"> €/M</span>
                </td>
                <td>
                  {(item.serverPrice / eurorate).toFixed(2)}
                  <span className="currency-color">€/M</span>
                </td>
                {/* <td>
                  {(item.serverPrice / eurorate).toFixed(2)}
                  <span className="currency-color">€/M</span>
                </td> */}
                <td>
                  {(item.serverPrice / eurorate).toFixed(2)}
                  <span className="currency-color">€/M</span>
                </td>

                {/* <td
                className={
                  item.serverStatus === "Disponible"
                    ? "success"
                    : item.serverStatus === "Stock complet"
                    ? "no-success"
                    : "quickly"
                }
              >
                {item.serverStatus === "Disponible" && "Clic to sell"}
                {item.serverStatus === "Vendre rapidement" && "Sell quickly"}
                {item.serverStatus === "Stock complet" && "Full Stock"}
              </td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default KamasPrice;
