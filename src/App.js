import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Footer, Header, SignIn, SignUp, Cart } from "./components";
import SecurePayment from "./components/SecurePayment";
import HeaderPaymenPage from "./components/stepper/HeaderPaymenPage";
import Welcome from "./components/Welcome";

import { Helmet } from "react-helmet";

// import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

import { useSelector } from "react-redux";
import {
  Home,
  BuyKamas,
  ProductDetails,
  Faqs,
  PrivacyPolicy,
  TermAndConditions,
  KamasPrice,
  Contact,
  PaymentPage,
} from "./pages";
import Profil from "./pages/Profil";
import CheckoutSuccess from "./components/CheckoutSuccess";
import PaymentUsdt from "./pages/PaymentUsdt";
import ResetPassword from "./components/ResetPassword";
// import PaymentBtc from "./pages/PaymentBtc";
// import PaymentEth from "./pages/PaymentEth";
// import PaymentLtc from "./pages/PaymentLtc";
// import PaymentBnb from "./pages/PaymentBnb";
const App = () => {
  const location = useLocation();
  const { user } = useSelector((state) => state.user);
  const [toggleArrowProfile, setToggleArrowProfile] = useState(false);

  const handleToggleArrow = (para) => (e) => {
    if (para === "yes") {
      setToggleArrowProfile(false);
    } else {
      setToggleArrowProfile(true);
    }
  };

  return (
    <div className="app">
      {/* <TawkMessengerReact
        propertId="631bd8cd54f06e12d893cf2a"
        widgetId="1gcicdp9d"
        ref={tawkMessengerRef}
      /> */}
      <div className="navHeadear">
        {location.pathname === "/paymentpage" && <HeaderPaymenPage />}
        {(location.pathname === "/register" ||
          location.pathname === "/login") && <Welcome />}

        {location.pathname === "/register" ||
          location.pathname === "/login" ||
          location.pathname === "/contact" ||
          location.pathname === "/paymentpage" || (
            <Header
              toggleArrowProfile={toggleArrowProfile}
              handleToggleArrow={handleToggleArrow}
            />
          )}

        {/* {location.pathname === "/register" ||
          location.pathname === "/login" ||
          location.pathname === "/partner" ||
          location.pathname === "/paymentpage" || <Navbar />} */}
        <Helmet>
          <title>Ibendouma, buy Dofus Kamas, Dofus Touch and Dofus Retro</title>
          <meta
            name="description"
            content="Ibendouma will prepare you the stock you want as soon as possible and offering you the best price on the market. You can buy your Dofus, Dofus touch and Retro Dofus products from iben douma. The ibendouma team remains at your disposal."
          />
          <meta name="keywords" content="Buy Dofus, Dofus Touch, Dofus Retro" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Helmet>
      </div>
      <div className="main" onClick={handleToggleArrow("yes")}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buykamas" element={<BuyKamas />} />
          <Route path="/dofus/:productId" element={<ProductDetails />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/kamas-price" element={<KamasPrice />} />
          <Route path="/cart" element={user?.user ? <Cart /> : <Home />} />
          <Route path="/dofus/:dofusId/:serverId" element={<PaymentPage />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/checkoutcancel" element={<Cart />} />
          <Route path="/profil" element={<Profil />} />
          {/* <Route path="/pay" element={<Pay />} /> */}
          <Route
            path="/paymentusdt/:userid/:valuetoconverter"
            element={<PaymentUsdt />}
          />
          <Route path="/checkoutcancel" element={<Cart />} />

          {/* <Route
            path="/paymentbtc/:userid/:valuetoconverter"
            element={<PaymentBtc />}
          /> */}

          {/* <Route
            path="/paymenteth/:userid/:valuetoconverter"
            element={<PaymentEth />}
          /> */}
          {/* <Route
            path="/paymentltc/:userid/:valuetoconverter"
            element={<PaymentLtc />}
          /> */}
          {/* <Route
            path="/paymentbnb/:userid/:valuetoconverter"
            element={<PaymentBnb />}
          /> */}

          <Route path="/secure-payment" element={<SecurePayment />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/term-and-conditions" element={<TermAndConditions />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <div className="footer">
        {location.pathname === "/register" ||
          location.pathname === "/partner" ||
          location.pathname === "/login" ||
          location.pathname === "/contact" || <Footer />}
      </div>
    </div>
  );
};

export default App;
