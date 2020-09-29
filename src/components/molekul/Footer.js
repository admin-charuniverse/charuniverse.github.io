import React from 'react';

export const Footer = () => {
  return (
    <footer className="border-top">
      <div className="container">
        <div className="row py-4">
          <div className="col-md-6">
            <h1>Charuniver</h1>
            <p>Perkumpulan Anak Muda Berprestasi</p>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3 pt-3">
            <p className="text-gray-300">charuniver@gmail.com</p>
            <p>Universitas Negeri Medan</p>
          </div>
        </div>
        <div className="row justify-content-center py-3">
          <p>&copy; copyright 2020 Wahyu Nur Fadillah</p>
        </div>
      </div>
    </footer>
  );
};
