import React from "react";
import { useSelector } from "react-redux";

const SingleServiceDetails = ({ service }) => {
  const { language } = useSelector((state) => state.language);
  return (
    <div className="singleservicedetails">
      <div className="icon-circle">
        <i>{service?.cover}</i>
      </div>
      <h3>
        {language === "francais" && service?.titleFr}
        {language === "anglais" && service?.title}
        {language === "espagnol" && service?.titleEs}
      </h3>
      <p>
        {language === "francais" && service?.decsFr}
        {language === "anglais" && service?.decs}
        {language === "espagnol" && service?.decsEs}
      </p>
    </div>
  );
};

export default SingleServiceDetails;
