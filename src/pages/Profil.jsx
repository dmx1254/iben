import React, { useState, useEffect } from "react";

import FileBase from "react-file-base64";

import profilUser from "../assets/user.png";

import { useSelector, useDispatch } from "react-redux";

import { getAllOrders } from "../features/ordersSlice";

import { Country } from "country-state-city";

import {
  Allorders,
  OrderCanceled,
  OrderPending,
  OrderSuccess,
} from "../components";
import axios from "axios";
import { updateUser } from "../features/userSlice";

const Profil = () => {
  const { language } = useSelector((state) => state.language);
  const [profil, setProfil] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("Marocco");
  const [allOrders, setAllOrders] = useState(true);
  const [orderspending, setOrderspending] = useState(false);
  const [ordersuccess, setOrdersuccess] = useState(false);
  const [orderscanceled, setOrderscanceled] = useState(false);
  // console.log(city, phone, address, country, lastname, firstname);

  const [countryList, setCountryList] = useState(Country.getAllCountries());
  const [updateToggleProfil, setUpdateToggleProfil] = useState(false);

  const dispatch = useDispatch();

  // const orders = useSelector((state) => state.orders);
  const { user } = useSelector((state) => state.user);

  // console.log(user);

  const [productOrder, setProductOrder] = useState([]);

  // console.log(orders);
  const [orderCustomers, setOrderCustomers] = useState([]);
  // console.log(orderCustomers);

  useEffect(() => {
    setOrderCustomers(
      productOrder?.filter((order) => order?.userId === user?.user)
    );
  }, [productOrder, user?.user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const myData = {
      profil,
      lastname,
      firstname,
      phone,
      address,
      country,
      city,
    };
    axios({
      method: "put",
      url: `${process.env.REACT_APP_CLIENT_URL}/users/${user?.user}`,
      data: myData,
    })
      .then((res) => {
        dispatch(updateUser(res.data));
        setProfil("");
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  const handleDisplayOrders = (e) => {
    if (e.target.id === "allOrders") {
      setAllOrders(true);
      setOrderspending(false);
      setOrdersuccess(false);
      setOrderscanceled(false);
    }
    if (e.target.id === "orderspending") {
      setOrderspending(true);
      setAllOrders(false);
      setOrdersuccess(false);
      setOrderscanceled(false);
    } else if (e.target.id === "ordersuccess") {
      setOrdersuccess(true);
      setOrderspending(false);
      setAllOrders(false);
      setOrderscanceled(false);
    } else if (e.target.id === "orderscanceled") {
      setOrderscanceled(true);
      setOrdersuccess(false);
      setOrderspending(false);
      setAllOrders(false);
    } else {
      setAllOrders(true);
      setOrderspending(false);
      setOrdersuccess(false);
      setOrderscanceled(false);
    }
  };

  useEffect(() => {
    const getOrders = async () => {
      await axios
        .get(`${process.env.REACT_APP_CLIENT_URL}/getorder`)
        .then((res) => {
          setProductOrder(res.data);
          dispatch(getAllOrders(res?.data));
        })
        .catch((error) => console.log(error));
    };
    getOrders();
  }, [dispatch]);

  const handleCancelProfil = () => {
    setUpdateToggleProfil(false);
  };

  const handleUpdateBtn = () => {
    setUpdateToggleProfil(true);
  };

  // console.log(user);

  return (
    <div className="profil">
      <div className="profil-info-user">
        <div className="profil-info-first">
          <div>
            <img
              src={user?.person?.profil ? user?.person?.profil : profilUser}
              alt="profile"
            />
          </div>
        </div>
        <div className="profil-info-second">
          <div>
            <label>Prénom</label>
            <label className="label-font">{user?.person?.lastname}</label>
          </div>
          <div>
            <label>Nom</label>
            <label className="label-font">{user?.person?.firstname}</label>
          </div>
          <div>
            <label>Email</label>
            <label className="label-font">{user?.person?.email}</label>
          </div>
          <div>
            <label>Phone</label>
            <label className="label-font">{user?.person?.phone}</label>
          </div>
          <div>
            <label>Pays</label>
            <label className="label-font">{user?.person?.country}</label>
          </div>
          <div>
            <label>Ville</label>
            <label className="label-font">{user?.person?.city}</label>
          </div>
          <div>
            <label>Adresse</label>
            <label className="label-font">{user?.person?.address}</label>
          </div>
        </div>
      </div>
      <div className="update-btn-container">
        <button className="btn-update-profil" onClick={handleUpdateBtn}>
          {language === "francais" && "Mettre à jour votre profil"}
          {language === "anglais" && "update your profile"}
          {language === "espagnol" && "actualizar tu perfil"}
        </button>
      </div>
      {updateToggleProfil && (
        <div className="profil-first">
          <form onSubmit={handleSubmit} className="form-submit">
            <div className="input-filebase">
              <span className="choose-filebase">
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setProfil(base64)}
                />
              </span>

              {profil ? (
                <img src={profil} alt="profil" className="profil-absolute" />
              ) : (
                <img
                  src={user.person.profil ? user.person.profil : profilUser}
                  alt="profil"
                  className="profil-absolute"
                />
              )}
            </div>
            <label htmlFor="lastname">
              {language === "francais" && "Prenom"}
              {language === "anglais" && "First name"}
              {language === "espagnol" && "Nombre de pila"}
            </label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder={
                user.person.lastname ? user.person.lastname : "Votre Prenom"
              }
              id="lastname"
            />
            <label htmlFor="firstname">
              {" "}
              {language === "francais" && "Nom"}
              {language === "anglais" && "Last name"}
              {language === "espagnol" && "Apellido"}
            </label>
            <input
              type="text"
              placeholder={
                user?.person?.firstname ? user?.person?.firstname : "Votre nom"
              }
              id="firstname"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="phone">
              {language === "francais" && "Téléphone mobile"}
              {language === "anglais" && "Mobile phone"}
              {language === "espagnol" && "Teléfono móvil"}
            </label>
            <input
              type="tel"
              placeholder={
                user?.person?.phone
                  ? user?.person?.phone
                  : language === "Anglais"
                  ? "Mobile phone"
                  : language === "espagnol"
                  ? "Teléfono móvil"
                  : "Téléphone"
              }
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="address">
              {language === "francais" && "Adresse"}
              {language === "anglais" && "Address"}
              {language === "espagnol" && "Dirección"}
            </label>
            <input
              type="text"
              placeholder={
                user?.person?.address
                  ? user?.person?.address
                  : language === "Anglais"
                  ? "Your adress"
                  : language === "espagnol"
                  ? "Dirección"
                  : "Votre adresse"
              }
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label htmlFor="country">
              {language === "francais" && "Pays"}
              {language === "anglais" && "Country"}
              {language === "espagnol" && "País"}
            </label>
            <select
              name="country"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="Choisir un pays">Choisir un pays</option>
              {countryList.slice(2).map((singleCountry) => (
                <option value={singleCountry?.name}>
                  {singleCountry?.name}
                </option>
              ))}
            </select>
            <label htmlFor="city">
              {language === "francais" && "Ville"}
              {language === "anglais" && "Town"}
              {language === "espagnol" && "Pueblo"}
            </label>
            <input
              type="text"
              placeholder={
                user?.person?.city
                  ? user?.person?.city
                  : language === "Anglais"
                  ? "City"
                  : language === "espagnol"
                  ? "Pueblo"
                  : "Ville"
              }
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {language === "francais" && (
              <input type="submit" value="Mettre à jour" />
            )}
            {language === "anglais" && <input type="submit" value="Update" />}
            {language === "espagnol" && (
              <input type="submit" value="Actualizar" />
            )}
          </form>
          <div
            className="update-btn-container"
            style={{
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            <button className="btn-update-profil" onClick={handleCancelProfil}>
              {language === "francais" && "Annuler"}
              {language === "anglais" && "Cancel"}
              {language === "espagnol" && "cancelar"}
            </button>
          </div>
        </div>
      )}

      <div className="orders-text-components">
        <ul className="orders-text-components-list">
          <li
            className="all-orders"
            id="allorders"
            onClick={handleDisplayOrders}
          >
            {language === "francais" && "Mes commandes"}
            {language === "anglais" && "My orders"}
            {language === "espagnol" && "Mis ordenes"}
          </li>
          <li
            className="orders-await"
            id="orderspending"
            onClick={handleDisplayOrders}
          >
            {language === "francais" && "Commandes en attentes"}
            {language === "anglais" && "Pending orders"}
            {language === "espagnol" && "Ordenes pendientes"}
          </li>
          <li
            className="orders-success"
            id="ordersuccess"
            onClick={handleDisplayOrders}
          >
            {language === "francais" && "Commande réussies"}
            {language === "anglais" && "Orders successful"}
            {language === "espagnol" && "Pedidos exitosos"}
          </li>
          <li
            className="orders-canceled"
            id="orderscanceled"
            onClick={handleDisplayOrders}
          >
            {language === "francais" && "Commande annulées"}
            {language === "anglais" && "Canceled orders"}
            {language === "espagnol" && "Pedidos cancelados"}
          </li>
        </ul>
      </div>

      <div className="orders-components">
        {allOrders && <Allorders order={orderCustomers} />}
        {orderspending && <OrderPending order={orderCustomers} />}
        {ordersuccess && <OrderSuccess order={orderCustomers} />}
        {orderscanceled && <OrderCanceled order={orderCustomers} />}
      </div>
      <div className="profil-empty">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus animi
        minus fugiat ipsa nostrum nam necessitatibus asperiores fuga debitis
        soluta sunt impedit velit voluptas distinctio, rerum amet dolorem!
        Labore saepe totam non animi voluptatum dolorem qui? Autem repellat
        possimus voluptatem earum ipsum, molestiae deserunt ipsa perferendis cum
        porro, dolorum, est atque. Iusto sapiente assumenda quibusdam harum,
        officiis animi doloremque ipsam dolores! At repudiandae in cupiditate ea
        non laborum provident perspiciatis eligendi aliquid adipisci, nihil
        amet, distinctio aperiam dolorum omnis sunt illum maxime animi
        consectetur aut fugiat incidunt quos suscipit explicabo? Distinctio,
        excepturi? Qui, animi quisquam. Libero dicta inventore cumque magni.
      </div>
    </div>
  );
};

export default Profil;
