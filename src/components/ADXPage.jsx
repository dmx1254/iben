import React, { useState, useEffect } from "react";

import ads from "../assets/ads.txt";

const ADXPage = () => {
  const [adsText, setAdsText] = useState("Salut");

  useEffect(() => {
    fetch(ads)
      .then((r) => r.text())
      .then((text) => {
        setAdsText(text);
      });
  }, []);
  return (
    <div className="adspage">
      <p className="adspage-str">{adsText}</p>
    </div>
  );
};

export default ADXPage;
