import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import dofus1 from "../assets/dofus1.png";

const SearchComponent = ({ searchTerm }) => {
  const { products } = useSelector((state) => state.products);
  // console.log(products);
  return (
    <div className="search-component">
      {products
        .filter((product) =>
          product?.category.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((productSearched) => (
          <Link to={`/dofus/${productSearched._id}`}>
            <div className="all_users-mar">
              <div className="allusers_users">
                <img src={dofus1} alt={productSearched.category} />
                <p>{productSearched?.description.substr(0, 150)}...</p>
                <span>{productSearched?.title}</span>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default SearchComponent;
