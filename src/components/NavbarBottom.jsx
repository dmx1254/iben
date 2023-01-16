import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const NavbarBottom = () => {
  let { language } = useSelector((state) => state.language);

  return language === "anglais" ? (
    <div className="navbar-bottom">
      <span>
        <Link to="/" className="singleLink-bottom">
          Home
        </Link>
      </span>
      <span>
        <Link to="/buykamas" className="singleLink-bottom">
          Buy kamas
        </Link>
      </span>
      {/* <span>
        <Link to="/kamas-price" className="singleLink-bottom">
          Kama prices
        </Link>
      </span> */}
      <span>
        <a
          href="https://go.ibendouma.com"
          target="__blank"
          className="singleLink-bottom"
        >
          Sale
        </a>
      </span>
    </div>
  ) : language === "espagnol" ? (
    <div className="navbar-bottom">
      <span>
        <Link to="/" className="singleLink-bottom">
          Hogar
        </Link>
      </span>
      <span>
        <Link to="/buykamas" className="singleLink-bottom">
          Comprar kamas
        </Link>
      </span>
      {/* <span>
        <Link to="/kamas-price" className="singleLink-bottom">
          Precio Kamas
        </Link>
      </span> */}
      <span>
        <a
          href="https://go.ibendouma.com"
          target="__blank"
          className="singleLink-bottom"
        >
          Rebaja
        </a>
      </span>
    </div>
  ) : (
    <div className="navbar-bottom">
      <span>
        <Link to="/" className="singleLink-bottom">
          Accueil
        </Link>
      </span>
      <span>
        <Link to="/buykamas" className="singleLink-bottom">
          Acheter des kamas
        </Link>
      </span>
      {/* <span>
        <Link to="/kamas-price" className="singleLink-bottom">
          Prix des kamas
        </Link>
      </span> */}
      <span>
        <a
          href="https://go.ibendouma.com"
          target="__blank"
          className="singleLink-bottom"
        >
          Vendre
        </a>
      </span>
    </div>
  );
};

export default NavbarBottom;
