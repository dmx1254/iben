import React from "react";
import iben from "../assets/ibendouma-logo.png";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome">
      <Link to="/"><img src={iben} alt="ibendouma logo" /></Link>
      <h1 className="text-3xl">ibendouma.com</h1>
    </div>
  );
};

export default Welcome;
