import React from "react";
import imgHero from "../../assets/images/img-jumbotron.jpg";

const Hero = (props) => {
  return (
    <div class="jumbotron">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 d-flex flex-column  justify-content-start align-items-start">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead mb-3">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <a class="btn btn-primary btn-lg mt-3" href="/" role="button">
              Learn more
            </a>
          </div>
          <div className="col-md-6">
            <div className="img-hero">
              <img style={{ width: 500 }} src={imgHero} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
