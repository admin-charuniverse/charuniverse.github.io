import React from 'react';
import Card from '../atom/Card';
import Webinar from '../../assets/images/webinar.png';
import GlobalEducation from '../../assets/images/global-education.png';
import Medal from '../../assets/images/medal.png';

const TigaPilar = () => {
  return (
    <section id="tiga-pilar" className="bg-light">
      <div className="container mb-5 pb-4">
        <div className="row justify-content-center py-4">
          <h2>Tiga Pilar</h2>
        </div>
        <div className="row justify-content-around">
          <Card type="pilar" desc="Colaborasi yang rasional" icon={Webinar} />
          <Card
            type="pilar"
            desc="Memiliki Wawasan Global"
            icon={GlobalEducation}
          />
          <Card
            type="pilar"
            desc="Belaku seportif dalam menggapai juara"
            icon={Medal}
          />
        </div>
      </div>
    </section>
  );
};

export default TigaPilar;
