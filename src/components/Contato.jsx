import { Container } from "postcss";
import React from "react";

const Contato = () => {
  return (
    <div className="container">
      <div className="row pt-5 pb-5 d-flex justify-content-between  align-items-center">
        <div className="col-md-7 col-xs-12 pt-5 box-vamos" data-aos="fade-left">
          <h1 id="txt-b-matrix">
            Conheça mais sobre meu trabalho entre em contato! Vamos conversar?!
          </h1>
          <div className="d-flex box-btn-colorido-2 mt-3">
            <a
              href={`https://wa.me/5561991937866?text=${encodeURIComponent(
                "Olá, gostaria de saber mais sobre você!"
              )}`}
              className="btn-colorido btn-colorido-2 bt-1"
              target="_blank"
              rel="noopener noreferrer"
              data-content="Vamos conversar"
            >
              <span className="txt-botao-conversar"></span>
            </a>
          </div>
        </div>

        <div className="col-md-5 pt-3 justify-content-end d-flex box-perfil">
          <div className="circle-wrapper" data-aos="zoom-in-up">
            <div className="circle">
              <img
                src="/img/vr.png"
                width="100%"
                alt="Descrição da imagem"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
