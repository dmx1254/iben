import React from "react";
import logoSpin from "../assets/loader.gif";
const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-go-gif">
        <img src={logoSpin} alt="goibendouma spinner" />
      </div>
      <div className="loader-logo-wrapper">
        
        <span>Patientez, vous serez vite rediriger vers la page de payment.</span>
      </div>
    </div>
  );
};

export default Loader;
