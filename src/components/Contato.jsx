import { Container } from "postcss";
import React from "react";
import Image from "next/image";
const Contato = () => {
  return (
    <div className="container">
      <div className="row pt-5 pb-5 d-flex justify-content-between align-items-center">
        {/* IMAGEM - fica acima no mobile */}
        <div className="col-md-5 col-12 pt-3 justify-content-end d-flex box-perfil order-1 order-md-2">
          <div className="circle-wrapper" data-aos="zoom-in-up">
            <Image
              src="/img/v.png"
              width={0}
              height={0}
              sizes="100%"
              style={{ width: "100%", height: "auto" }}
              alt="Descrição da imagem"
              className="img-fluid floating-img"
            />
          </div>
        </div>

        {/* TEXTO */}
        <div
          className="col-md-7 col-12 pt-5 box-vamos order-2 order-md-1"
          data-aos="fade-left"
        >
          <h1 id="txt-b-matrix">
            Conheça mais sobre
            <br /> meu trabalho entre <br /> em contato!
            <br /> Vamos conversar?!
          </h1>
          <div className="d-flex box-btn-colorido-2 mt-3 w-100">
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
      </div>
    </div>
  );
};

export default Contato;
