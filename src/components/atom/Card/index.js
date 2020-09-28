import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  const { type, desc, img, className } = props;
  switch (type) {
    case "pilar":
      return (
        <div
          className="card d-flex align-items-center p-3"
          style={{ width: "18rem" }}
        >
          <img src={img} className={`card-img-top ${className}`} alt="..." />
          <div className="card-body border-top mt-3">
            <p className="card-text">{desc}</p>
          </div>
        </div>
      );
    default:
      return <h1>Hello</h1>;
  }
};

Card.propTypes = {
  type: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

export default Card;
