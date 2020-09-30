import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { type, desc, icon, imgUrl } = props;
  switch (type) {
  case 'pilar':
    return (
      <div
        className="card align-items-center py-3"
        style={{ width: '18rem' }}
      >
        <img src={icon} className="card-img-top img-icon--pilar" alt="..." />
        <div className="card-body">
          <p className="card-text">{desc}</p>
        </div>
      </div>
    );
  default:
    return (
      <div
        className="card-portofolio"
      >
        <figure> 
          <img src={`http://localhost:3000/${imgUrl}`} className="img-cover" alt="project-1" />
        </figure>
        <div className="row meta-wrapper">
          <div className="col-2">
            <img src={`http://localhost:3000/${imgUrl}`} alt="profile" className="img-profile"/>
          </div>
          <div className="col-10">
            <h6 className="text-title--portofolio">Title My Projeck</h6>
            <span className="font-weight-linght text-gray-600 subtitle--portofolio">
              Wahyu, Sofware Develompent
            </span>
          </div>
        </div>
      </div>
    );
  }
};

Card.propTypes = {
  type: PropTypes.string.isRequired,
  desc: PropTypes.string,
  imgUrl: PropTypes.string,
  icon: PropTypes.object,
};

export default Card;
