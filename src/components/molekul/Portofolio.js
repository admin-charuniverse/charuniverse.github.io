import React from 'react';
// MY Component
import Card from '../atom/Card';


const Portofolio = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md12">
          <h2>Portofolio</h2>
        </div>
      </div> 
      <div className="row mb-1">
        <div className="col">
          <h5>CP</h5>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-3">
          <Card imgUrl="images/portofolio-1.webp" />
        </div>
        <div className="col-md-3">
          <Card imgUrl="images/portofolio-2.webp" />
        </div>
        <div className="col-md-3">
          <Card imgUrl="images/portofolio-1.webp" />
        </div>
        <div className="col-md-3">
          <Card imgUrl="images/portofolio-2.webp" />
        </div>
      </div>
      <div className="row mb-1">
        <div className="col">
          <h5>Ctf</h5>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-3">
          <Card imgUrl="images/portofolio-2.webp" />
        </div>
        <div className="col-md-3">
          <Card imgUrl="images/portofolio-1.webp" />
        </div>
        <div className="col-md-3">
          <Card imgUrl="images/portofolio-2.webp"/>
        </div>
        <div className="col-md-3">
          <Card imgUrl="images/portofolio-1.webp"/>
        </div>
      </div>
      <div className="row mb-1">
        <div className="col">
          <h5>UX & Sofware Development</h5>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-3">
          <Card imgUrl="images/portofolio-1.webp" />
        </div>
        <div className="col-md-3">
          <Card imgUrl="images/portofolio-2.webp" />
        </div>
        <div className="col-md-3">
          <Card imgUrl="images/portofolio-1.webp" />
        </div>
        <div className="col-md-3">
          <Card imgUrl="images/portofolio-2.webp"/>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
