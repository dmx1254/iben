import React, { useEffect, useState } from "react";
import axios from "axios";

import { useSelector } from "react-redux";

import user from "../assets/user.png";
import { AiTwotoneStar } from "react-icons/ai";

import giphy from "../assets/giphy.gif";

const Avis = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewToggle, setReviewToggle] = useState(true);
  const { language } = useSelector((state) => state.language);

  useEffect(() => {
    const getAllReviews = async () => {
      await axios
        .get(`${process.env.REACT_APP_CLIENT_URL}/users/create-comment`)
        .then((res) => {
          setReviews(res?.data);
          setReviewToggle(false);
        })
        .catch((error) => console.log(error));
    };
    getAllReviews();
  }, []);
  return (
    <div className="avis">
      <h1>
        {language === "anglais" && "Revisar"}
        {language === "francais" && "Avis"}
        {language === "anglais" && "Review"}
      </h1>

      {reviewToggle ? (
        <img src={giphy} alt="loader" className="loader-giphy" />
      ) : (
        reviews
          .filter((review) => review?.isCommentValid === true)
          .map((review) => (
            <div className="reviewmap-container">
              <div className="avis-userContainer">
                <div className="avis-img">
                  <img src={review?.image ? review?.image : user} alt="user" />
                  <div
                    className="avis-userinfo"
                    style={{
                      marginLeft: "5px",
                    }}
                  >
                    <p
                      className="avis-userinfo-last"
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      {review?.commentFirstname} {review?.commentLastname}
                    </p>
                    <p
                      className="avis-userinfo-email"
                      style={{
                        fontSize: "11px",
                        color: "#75758b",
                      }}
                    >
                      {review?.commentEmail}
                    </p>
                  </div>
                </div>
                <div className="avis-rank">
                  <span>
                    <AiTwotoneStar />
                  </span>
                  <span>
                    <AiTwotoneStar />
                  </span>
                  <span>
                    <AiTwotoneStar />
                  </span>
                  <span>
                    <AiTwotoneStar />
                  </span>
                </div>
              </div>
              <div className="avis-comment">
                <p className="avis-comment-container">
                  {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              quas recusandae mollitia omnis ea consectetur, nisi laudantium
              repellat cum sed quos aliquid voluptatibus expedita veniam
              eligendi dolor at sequi voluptates vero earum facere architecto
              aspernatur perspiciatis iure? Voluptatem fugit inventore maxime
              delectus, incidunt repellat quibusdam eligendi error. Consequatur,
              quae iste! */}
                  {review?.comment}
                </p>
              </div>
            </div>
          ))
      )}
    </div>
  );
};

export default Avis;
