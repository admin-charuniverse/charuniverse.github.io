import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  const { type, desc, img } = props;
  switch (type) {
    case 'pilar':
      return (
        <div className="card" style={{ width: "18rem" }}>
          <img src={img} class="card-img-top" alt="..." />
          <div className="card-body">
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
