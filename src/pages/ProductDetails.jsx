import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";

import ProductDescription from "../components/ProductDescription";
import Avis from "../components/Avis";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { carousel, englishText, espagnolText } from "../CONSTANTS/data";

import { addProductsInfo } from "../features/productInfoSlice";
import { Link } from "react-router-dom";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { addProductToCart } from "../features/cartSlices";

import { addCurrencyVal } from "../features/currencyExchange";

import axios from "axios";

import { Helmet } from "react-helmet";

const ProductDetails = () => {
  const [singleProductData, setSingleProductData] = useState({});
  const [engData, setEngData] = useState(englishText);
  const [serverFilteredByCat, setServerFilteredByCat] = useState([]);
  const [espData, setEspData] = useState(espagnolText);
  const [carouselText, setCarouselText] = useState(carousel);
  const [serverFilteredByName, setServerFilterdByName] = useState({});
  const [numberTrim, setNumberTrim] = useState(0);
  const { productId } = useParams();
  const [priceToChange, setPriceToChange] = useState(
    serverFilteredByName[0]?.serverPrice.toFixed(2)
  );
  const [imageDofus, setImageDofus] = useState("");
  const [serverDesc, setServerDes] = useState("");

  // console.log(serverDesc);

  // console.log(numberTrim);

  // console.log(isNaN("34a"));

  const { user } = useSelector((state) => state.user);

  const notyFyAddingProductToCartFrench = () =>
    toast.success("Produit dofus ajouté au panier");

  const notyFyAddingProductToCartEspagnol = () =>
    toast.success("Dofus producto añadido al carrito");

  const notyFyAddingProductToCartEnglish = () =>
    toast.success("Dofus product added to cart");

  const notifyNotSigninFrench = () =>
    toast.error("Veuillez vous connecter d'abord avant de faire une commande");

  const notifyNotSigninEspagnol = () =>
    toast.error("Inicie sesión antes de realizar un pedido.");

  const notifyErrorNumberFrench = () =>
    toast.error("Veuiller saisr une quantité valide");

  const notifyErrorNumberEnglish = () =>
    toast.error("Please enter a valid quantity");

  const notifyNotSigninEnglish = () =>
    toast.error("Please login first before placing an order");

  const notifyValidEnglishPrice = () =>
    toast.error("Please fill in the data correctly before moving on");

  const notifyValidFrenchPrice = () =>
    toast.error(
      "Veuillez remplir correctement les données avant de passer à suivante"
    );

  const [serverSelected, setServerSelected] = useState("");
  const [amount, setAmount] = useState(1000000);
  const [chooseDescReview, setChooseDescReview] = useState(true);
  const [toggleSingleProductData, setToggleSingleProductData] = useState(true);

  const selectQty = useRef();

  const { language } = useSelector((state) => state.language);
  const { servers } = useSelector((state) => state.servers);
  const { currency } = useSelector((state) => state.currency);
  const { currencyValue } = useSelector((state) => state.currency);

  const dispatch = useDispatch();

  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1 $2");
    return x;
  }

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  useEffect(() => {
    if (amount && amount.length >= 7) {
      let amountToJoin = amount.split(" ").join("");
      setAmount(amountToJoin);
      let num = numberWithCommas(amountToJoin);
      setAmount(num);
      // console.log(amount);
    }
  }, [amount]);

  useEffect(() => {
    const fetchProductByCategory = async () => {
      await axios
        .get(
          `${process.env.REACT_APP_CLIENT_URL}/products/category/${productId}`
        )
        .then((res) => {
          setSingleProductData(res?.data[0]);
          setToggleSingleProductData(false);
          setImageDofus(res?.data[0]?.image);
          console.log(res?.data);
        });
    };
    fetchProductByCategory();
  }, [productId]);

  useEffect(() => {
    setServerFilteredByCat(
      servers.filter(
        (server) => server?.serverCategory === singleProductData?.category
      )
    );

    setServerSelected(
      servers.filter(
        (server) => server?.serverCategory === singleProductData?.category
      )[0]?.serverName
    );
  }, [singleProductData.category, servers]);

  useEffect(() => {
    setServerFilterdByName(
      serverFilteredByCat.filter(
        (server) => server.serverName === serverSelected
      )
    );

    setAmount(
      serverFilteredByCat.filter(
        (server) => server.serverName === serverSelected
      )[0]?.serverMinQty
    );

    setPriceToChange(
      serverFilteredByCat.filter(
        (server) => server.serverName === serverSelected
      )[0]?.serverPrice
    );
    setServerDes(
      serverFilteredByCat.filter(
        (server) => server.serverName === serverSelected
      )[0]?.serverName
    );
  }, [serverSelected, serverFilteredByCat]);

  const handleChangeReviews = (e) => {
    if (e.target.id === "btn-singleproduct-reviews") {
      setChooseDescReview(false);
    } else {
      setChooseDescReview(true);
    }
  };

  useEffect(() => {
    let valNum = amount?.toString().split(" ").join("");
    let valToNumber = Number(valNum);
    // setNumberTrim(valNum);
    setNumberTrim(valToNumber);
    // console.log("valToNumber", valToNumber);
  }, [amount]);

  const handleAddProductInfo = () => {
    const data = {
      productId: serverFilteredByName[0]?._id,
      category: singleProductData.category,
      price: (priceToChange / currencyValue).toFixed(2),
      status: serverFilteredByName[0]?.serverStatus,
      server: serverSelected,
      amount: numberTrim ? numberTrim : serverFilteredByName[0]?.serverMinQty,
      qty:
        (numberTrim ? numberTrim : serverFilteredByName[0]?.serverMinQty) /
        1000000,
      character: "",
    };
    dispatch(addProductsInfo(data));
    // window.location = "/paymentpage";
  };

  const handleAddToCart = () => {
    const product = {
      productId: serverFilteredByName[0]?._id,
      category: singleProductData.category,
      server: serverSelected,
      qty: Number(numberTrim),
      amount: Number(numberTrim / 1000000),
      price: Number((priceToChange / currencyValue).toFixed(2)),
      image: imageDofus,
    };
    if (user?.user) {
      if (numberTrim >= serverFilteredByName[0]?.serverMinQty) {
        dispatch(
          addProductToCart({
            product: product,
          })
        );
        language === "anglais" && notyFyAddingProductToCartEnglish();
        language === "francais" && notyFyAddingProductToCartFrench();
        language === "espagnol" && notyFyAddingProductToCartEspagnol();
      } else {
        language === "anglais" && notifyErrorNumberEnglish();
        language === "francais" && notifyErrorNumberFrench();
      }
    } else {
      language === "anglais" && notifyNotSigninEnglish();
      language === "francais" && notifyNotSigninFrench();
      language === "espagnol" && notifyNotSigninEspagnol();
    }
  };

  useEffect(() => {
    // const options = {
    //   method: "GET",
    //   url: "https://currency-exchange.p.rapidapi.com/exchange",
    //   params: { from: "MAD", to: currency, q: "1.0" },
    //   headers: {
    //     "X-RapidAPI-Key": "04f6d53fdcmsh873622ea058d2ffp17df81jsn32e8a6b0499a",
    //     "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    //   },
    // };

    // axios
    //   .request(options)
    //   .then(function (response) {
    //     if (response.data) {
    //       setValueExchange(response.data);
    //     } else {
    //       setValueExchange(1);
    //     }
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
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
    } catch (error) {}
  }, [currency, dispatch]);

  const handleToggleError = () => {
    language === "anglais"
      ? notifyValidEnglishPrice()
      : notifyValidFrenchPrice();
  };

  return (
    <>
      <Container maxWidth="md">
        <Helmet>
          <title>
            Acheter des kamas Dofus, Dofus Touch et Dofus Retro pour votre
            aventure sur Dofus au meilleur prix.
          </title>
        </Helmet>

        <div className="productdetail">
          {language === "anglais" ? (
            <div className="alert">
              {toggleSingleProductData ? (
                <Skeleton height="150px" width="350px" />
              ) : (
                `1M=1,000,000 Kamas. Attention: iBendouma will never ask you to
                return your kamas or items in the game, we will always ask you to
                come to the "Live Chat" to discuss any problem. Never give your
                kamas or items to someone who claims to be iBendouma.`
              )}
            </div>
          ) : language === "espagnol" ? (
            <div className="alert">
              {toggleSingleProductData ? (
                <Skeleton height="150px" width="350px" />
              ) : (
                `1M=1,000,000 Kamas. Atención: iBendouma nunca te pedirá que
                devuelva sus kamas u objetos en el juego, siempre le pediremos
                para venir al "Chat en vivo" para discutir cualquier problema.
                Nunca dar tus kamas u objetos a alguien que dice ser iBendouma.`
              )}
            </div>
          ) : (
            <div className="alert">
              {toggleSingleProductData ? (
                <Skeleton height="150px" width="350px" />
              ) : (
                `${singleProductData.headerDescription}`
              )}
            </div>
          )}
          <div className="separator"></div>
          {language === "anglais" ? (
            <div>
              <div className="dofus-productdetails">
                {toggleSingleProductData ? (
                  <Skeleton height="400px" width="350px" />
                ) : (
                  <img
                    src={singleProductData?.image}
                    alt={singleProductData?.title}
                  />
                )}
                <div className="productdetails-choose">
                  {toggleSingleProductData ? (
                    <Skeleton height="30px" width="200px" />
                  ) : (
                    <h3>{singleProductData?.title}</h3>
                  )}

                  <div className="price">
                    <span className="price-text">Price:</span>
                    {toggleSingleProductData ? (
                      <Skeleton height="30px" width="200px" />
                    ) : (
                      <span className="price-price">
                        {currency === "euro" && "€"}
                        {currency === "" && "€"}
                        {currency === "dollar" && "$"}
                        {currency === "mad" && "MAD"}
                        {currency === "usdt" && "USDT"}
                        {currency === "cad" && "CAD"}
                        {currency === "chf" && "CHF"}
                        {currency === "rub" && "RUB"}
                        {currency === "gbp" && "£"}{" "}
                        {(
                          ((numberTrim / 1000000) * priceToChange) /
                          currencyValue
                        ).toFixed(2)}
                      </span>
                    )}
                  </div>
                  <div className="status">
                    <span>Status: </span>
                    {toggleSingleProductData ? (
                      <Skeleton height="30px" width="200px" />
                    ) : (
                      <span
                        style={{
                          color:
                            serverFilteredByName[0]?.serverStatus ===
                            "disponible"
                              ? "#09b509"
                              : "#0ca7e2",
                          marginLeft: "5px",
                        }}
                      >
                        {serverFilteredByName[0]?.serverStatus ===
                          "disponible" && "Available"}
                        {serverFilteredByName[0]?.serverStatus ===
                          "non disponible" && "Unavailable"}
                      </span>
                    )}
                  </div>
                  <div className="productdetails-choose-serverselect">
                    <label htmlFor="server">Choose the server</label>
                    {toggleSingleProductData ? (
                      <Skeleton height="30px" width="200px" />
                    ) : (
                      <select
                        name="server"
                        id="server"
                        className="select"
                        value={serverSelected}
                        onChange={(e) => setServerSelected(e.target.value)}
                      >
                        <option
                          value="Choose the server"
                          style={{ color: "gray" }}
                        >
                          Choose the server
                        </option>
                        {serverFilteredByCat?.map((server) => (
                          <option value={server?.serverName}>
                            {server?.serverName}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                  <div className="productdetails-choose-qtyselect">
                    <label htmlFor="quantité">Choose quantity</label>
                    {/* <input
                      type="number"
                      name="quantity"
                      id="quantity"
                      ref={selectQty}
                      placeholder="Enter your quantity"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    /> */}
                    {toggleSingleProductData ? (
                      <Skeleton height="30px" width="200px" />
                    ) : (
                      <input
                        type="text"
                        name="quantity"
                        id="quantity"
                        ref={selectQty}
                        placeholder="Enter your quantity"
                        value={amount}
                        onChange={handleAmount}
                      />
                    )}
                  </div>
                  <div className="btn-productdetail">
                    {priceToChange / currencyValue ? (
                      <button
                        className="btn-detail"
                        onClick={handleAddProductInfo}
                      >
                        <Link
                          to="/paymentpage"
                          style={{
                            color: "white",
                          }}
                        >
                          Buy now
                        </Link>
                      </button>
                    ) : (
                      <button
                        className="btn-detail"
                        onClick={handleToggleError}
                      >
                        Buy Now
                      </button>
                    )}
                    <button className="btn-detail" onClick={handleAddToCart}>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          ) : language === "espagnol" ? (
            <div>
              <div className="dofus-productdetails">
                {toggleSingleProductData ? (
                  <Skeleton height="400px" width="350px" />
                ) : (
                  <img
                    src={singleProductData?.image}
                    alt={singleProductData?.title}
                  />
                )}

                <div className="productdetails-choose">
                  {toggleSingleProductData ? (
                    <Skeleton height="30px" width="200px" />
                  ) : (
                    <h3>{singleProductData?.title}</h3>
                  )}

                  <div className="price">
                    <span className="price-text">Precio:</span>
                    {toggleSingleProductData ? (
                      <Skeleton height="30px" width="200px" />
                    ) : (
                      <span className="price-price">
                        {currency === "euro" && "€"}
                        {currency === "" && "€"}
                        {currency === "dollar" && "$"}
                        {currency === "mad" && "MAD"}
                        {currency === "usdt" && "USDT"}
                        {currency === "cad" && "CAD"}
                        {currency === "chf" && "CHF"}
                        {currency === "rub" && "RUB"}
                        {currency === "gbp" && "£"}{" "}
                        {(
                          ((numberTrim / 1000000) * priceToChange) /
                          currencyValue
                        ).toFixed(2)}
                      </span>
                    )}
                  </div>
                  {toggleSingleProductData ? (
                    <Skeleton height="30px" width="200px" />
                  ) : (
                    <div className="status">
                      <span>Estado: </span>
                      <span
                        style={{
                          color:
                            serverFilteredByName[0]?.serverStatus ===
                            "disponible"
                              ? "#09b509"
                              : "#0ca7e2",
                          marginLeft: "5px",
                        }}
                      >
                        {serverFilteredByName[0]?.serverStatus ===
                          "disponible" && "disponibles"}
                        {serverFilteredByName[0]?.serverStatus ===
                          "non disponible" && "no disponible"}
                      </span>
                    </div>
                  )}
                  <div className="productdetails-choose-serverselect">
                    <label htmlFor="server">Elige el servidor</label>
                    {toggleSingleProductData ? (
                      <Skeleton height="30px" width="200px" />
                    ) : (
                      <select
                        name="server"
                        id="server"
                        className="select"
                        value={serverSelected}
                        onChange={(e) => setServerSelected(e.target.value)}
                      >
                        <option value="" style={{ color: "gray" }}>
                          Elige el servidor
                        </option>

                        {serverFilteredByCat?.map((server) => (
                          <option value={server?.serverName}>
                            {server?.serverName}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                  <div className="productdetails-choose-qtyselect">
                    <label htmlFor="quantité">Elige la cantidad</label>
                    {/* <input
                      type="number"
                      name="quantity"
                      id="quantity"
                      ref={selectQty}
                      placeholder="Enter your quantity"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    /> */}
                    {toggleSingleProductData ? (
                      <Skeleton height="30px" width="200px" />
                    ) : (
                      <input
                        type="text"
                        name="quantity"
                        id="quantity"
                        ref={selectQty}
                        placeholder="Ingrese su cantidad"
                        value={amount}
                        onChange={handleAmount}
                      />
                    )}
                    {/* <span className="kicon">
                      <TbLetterK />
                    </span> */}
                  </div>
                  <div className="btn-productdetail">
                    {priceToChange / currencyValue ? (
                      <button
                        className="btn-detail"
                        onClick={handleAddProductInfo}
                      >
                        <Link
                          to="/paymentpage"
                          style={{
                            color: "white",
                          }}
                        >
                          Comprar ahora
                        </Link>
                      </button>
                    ) : (
                      <button className="btn-detail">Comprar ahora</button>
                    )}

                    <button className="btn-detail" onClick={handleAddToCart}>
                      Añadir a la cesta
                    </button>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          ) : (
            <div className="dofus-productdetails">
              {toggleSingleProductData ? (
                <Skeleton height="400px" width="350px" />
              ) : (
                <img
                  src={singleProductData?.image}
                  alt={singleProductData?.title}
                />
              )}

              <div className="productdetails-choose">
                {toggleSingleProductData ? (
                  <Skeleton height="30px" width="200px" />
                ) : (
                  <h3>{singleProductData?.title}</h3>
                )}

                <div className="price">
                  {!amount || amount < serverFilteredByName[0]?.serverMinQty ? (
                    ""
                  ) : (
                    <>
                      <span className="price-text">Prix:</span>
                      {toggleSingleProductData ? (
                        <Skeleton height="30px" width="200px" />
                      ) : (
                        <span className="price-price">
                          {currency === "euro" && "€"}
                          {currency === "" && "€"}
                          {currency === "dollar" && "$"}
                          {currency === "mad" && "MAD"}
                          {currency === "usdt" && "USDT"}
                          {currency === "cad" && "CAD"}
                          {currency === "chf" && "CHF"}
                          {currency === "rub" && "RUB"}
                          {currency === "gbp" && "£"}{" "}
                          {(
                            ((numberTrim / 1000000) * priceToChange) /
                            currencyValue
                          ).toFixed(2)}
                        </span>
                      )}
                    </>
                  )}
                </div>
                {toggleSingleProductData ? (
                  <Skeleton height="30px" width="200px" />
                ) : (
                  <div className="status">
                    <span>Status: </span>
                    <span
                      style={{
                        color:
                          serverFilteredByName[0]?.serverStatus === "disponible"
                            ? "#09b509"
                            : "#0ca7e2",
                        marginLeft: "5px",
                      }}
                    >
                      {serverFilteredByName[0]?.serverStatus === "disponible" &&
                        "Disponible"}
                    </span>
                  </div>
                )}

                <div className="productdetails-choose-serverselect">
                  {toggleSingleProductData ? (
                    <Skeleton height="30px" width="200px" />
                  ) : (
                    <label htmlFor="server">Choisir le serveur</label>
                  )}

                  {toggleSingleProductData ? (
                    <Skeleton height="30px" width="200px" />
                  ) : (
                    <select
                      name="server"
                      id="server"
                      className="select"
                      value={serverSelected}
                      onChange={(e) => setServerSelected(e.target.value)}
                    >
                      <option value="" style={{ color: "gray" }}>
                        Sélectionner un serveur
                      </option>
                      {serverFilteredByCat?.map((server) => (
                        <option value={server?.serverName}>
                          {server?.serverName}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
                <div className="productdetails-choose-qtyselect">
                  {toggleSingleProductData ? (
                    <Skeleton height="30px" width="200px" />
                  ) : (
                    <label htmlFor="quantité">Saisir la quantité</label>
                  )}

                  {/* <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    ref={selectQty}
                    placeholder="Entrez votre quantité"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  /> */}
                  {toggleSingleProductData ? (
                    <Skeleton height="30px" width="200px" />
                  ) : (
                    <input
                      type="text"
                      name="quantity"
                      id="quantity"
                      ref={selectQty}
                      placeholder="Entrez votre quantité"
                      value={amount}
                      onChange={handleAmount}
                    />
                  )}
                </div>
                {toggleSingleProductData ? (
                  <Skeleton height="30px" width="200px" />
                ) : (
                  <div className="btn-productdetail">
                    {priceToChange / currencyValue ? (
                      <Link
                        to={`/dofus/${singleProductData?.category}/${serverSelected}`}
                      >
                        <>
                          <button
                            className="btn-detail"
                            onClick={handleAddProductInfo}
                          >
                            {toggleSingleProductData ? (
                              <Skeleton height="30px" width="200px" />
                            ) : (
                              "Acheter"
                            )}
                          </button>
                        </>
                      </Link>
                    ) : (
                      <button
                        className="btn-detail"
                        onClick={handleToggleError}
                      >
                        {toggleSingleProductData ? (
                          <Skeleton height="30px" width="200px" />
                        ) : (
                          "Acheter"
                        )}
                      </button>
                    )}
                    {toggleSingleProductData ? (
                      <Skeleton height="30px" width="200px" />
                    ) : (
                      <button className="btn-detail" onClick={handleAddToCart}>
                        Ajouter au panier
                      </button>
                    )}
                  </div>
                )}
              </div>
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
          )}
          <div>
            <div></div>
          </div>
          {language === "anglais" ? (
            <div className="button-controller">
              {toggleSingleProductData ? (
                <Skeleton height="30px" width="200px" />
              ) : (
                <button
                  type="button"
                  className={chooseDescReview && "chooseDescReview"}
                  id="btn-singleproduct-desc"
                  onClick={handleChangeReviews}
                >
                  Description
                </button>
              )}
            </div>
          ) : language === "espagnol" ? (
            <div className="button-controller">
              <button
                type="button"
                className={chooseDescReview && "chooseDescReview"}
                id="btn-singleproduct-desc"
                onClick={handleChangeReviews}
              >
                Descripción
              </button>
              {/* <button
                type="button"
                className={chooseDescReview || "chooseDescReview"}
                id="btn-singleproduct-reviews"
                onClick={handleChangeReviews}
              >
                Revisar
              </button> */}
            </div>
          ) : (
            <div className="button-controller">
              <button
                type="button"
                className={chooseDescReview && "chooseDescReview"}
                id="btn-singleproduct-desc"
                onClick={handleChangeReviews}
              >
                Description
              </button>
              {/* <button
                type="button"
                className={chooseDescReview || "chooseDescReview"}
                id="btn-singleproduct-reviews"
                onClick={handleChangeReviews}
              >
                Avis
              </button> */}
            </div>
          )}

          <div>
            {chooseDescReview ? (
              <ProductDescription
                item={singleProductData}
                serverDesc={serverDesc}
              />
            ) : (
              <Avis />
            )}
          </div>
        </div>
      </Container>
      {language === "anglais" ? (
        <div className="carousel-text-slider">
          {engData.map((eng, i) => (
            <div className="carousel-container" key={i}>
              {toggleSingleProductData ? (
                <Skeleton height="30px" width="200px" />
              ) : (
                <span className="carousel-icon">{eng.icon}</span>
              )}
              {toggleSingleProductData ? (
                <Skeleton height="30px" width="200px" />
              ) : (
                <h3 className="carousel-title">{eng.title}</h3>
              )}
              {toggleSingleProductData ? (
                <Skeleton height="400px" width="350px" />
              ) : (
                <p className="carousel-desc">{eng.content}</p>
              )}
            </div>
          ))}
        </div>
      ) : language === "espagnol" ? (
        <div className="carousel-text-slider">
          {espData.map((esp, i) => (
            <div className="carousel-container" key={i}>
              {toggleSingleProductData ? (
                <Skeleton height="30px" width="200px" />
              ) : (
                <span className="carousel-icon">{esp.icon}</span>
              )}
              {toggleSingleProductData ? (
                <Skeleton height="30px" width="200px" />
              ) : (
                <h3 className="carousel-title">{esp.title}</h3>
              )}
              {toggleSingleProductData ? (
                <Skeleton height="400px" width="300px" />
              ) : (
                <p className="carousel-desc">{esp.content}</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="carousel-text-slider">
          {carouselText.map((carousel, i) => (
            <div className="carousel-container" key={i}>
              {toggleSingleProductData ? (
                <Skeleton height="30px" width="200px" />
              ) : (
                <span className="carousel-icon">{carousel.icon}</span>
              )}
              {toggleSingleProductData ? (
                <Skeleton height="30px" width="200px" />
              ) : (
                <h3 className="carousel-title">{carousel.title}</h3>
              )}
              {toggleSingleProductData ? (
                <Skeleton height="400px" width="350px" />
              ) : (
                <p className="carousel-desc">{carousel.content}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductDetails;
