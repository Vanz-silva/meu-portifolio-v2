"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
const ResponsiveGrid = () => {
  return (
    <div className="container text-center card-grid">
      <div className="row">
        <div className="col-12 col-sm-4 col-md-4 col-card h-100">
          <div className="d-flex justify-content-center align-items-center h-100 text-white">
            <Image
              src="/img/cerebro.png"
              alt="img cerebro"
              width={100}
              height={100}
              className="img-fluid cerebro-img m-3"
            />
          </div>
          <h2>Estrategia para seu negocio com inteligencia</h2>
        </div>
        <div className="col-12 col-sm-4 col-md-4 col-card h-100">
          <div className="d-flex justify-content-center align-items-center h-100 text-white">
            <Image
              src="/img/cerebro.png"
              alt="img cerebro"
              width={100}
              height={100}
              className="img-fluid cerebro-img m-3"
            />
          </div>
          <h2>Estrategia para seu negocio com inteligencia</h2>
        </div>
        <div className="col-12 col-sm-4 col-md-4 col-card h-100">
          <div className="d-flex justify-content-center align-items-center h-100 text-white">
            <Image
              src="/img/cerebro.png"
              alt="img cerebro"
              width={100}
              height={100}
              className="img-fluid cerebro-img m-3"
            />
          </div>
          <h2>Estrategia para seu negocio com inteligencia</h2>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveGrid;
