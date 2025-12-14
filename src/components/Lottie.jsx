"use client";

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Lottie = () => {
  return (
    <section className="ps">
      <div className="container pc">
        <div className="row position-relative">
          {/* Coluna Esquerda */}
          <div className="col-md-6 d-flex  flex-column align-items-start position-relative z-2">
            <div className="justify-content-center d-flex flex-column gap-3">
              {/* Hero Section */}
              <div>
                <h4 className="display-4 fs-1 fw-bold">
                  Tecnologia & Inovação no Front-End
                </h4>
              </div>

              {/* Parágrafo Principal */}
              <div>
                <p className="lead fs-6">
                  Vivemos uma era em que a tecnologia deixou de ser apenas uma
                  ferramenta — ela se tornou o palco da transformação. Inovação
                  não é mais um diferencial; é a linguagem do futuro. E no
                  front-end, essa linguagem ganha forma, cor, interação e vida.
                </p>
                <p className="lead fs-6">
                  Negócios que antes operavam em estruturas rígidas agora fluem
                  em ecossistemas inteligentes, onde interfaces conectam ideias,
                  dados e pessoas em tempo real. Startups nascem em nuvens.
                  Produtos digitais ganham vida na ponta dos dedos. O impossível
                  se torna beta.
                </p>
              </div>

              {/* Citação / Destaque */}
              <div className="box-des">
                <h5 className="text-des fst-italic">
                  Interfaces não são apenas visuais — são portais para
                  experiências. E o front-end é onde a inovação encontra o
                  usuário.
                </h5>
              </div>
            </div>
          </div>

          {/* Coluna Direita com Lottie de fundo */}
          <div
            className="col-md-6 position-relative d-flex flex-column align-items-end justify-content-center"
            style={{ minHeight: "400px", overflow: "hidden", left: "14%" }}
          >
            {/* Lottie de background */}
            <Player
              autoplay
              loop
              src="/lotties/nauta.json"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "60%",
                height: "100%",
                zIndex: 0,
                objectFit: "contain",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>

        <div className="row position-relative py-5">
          {/* Coluna com Lottie de fundo */}
          <div
            className="col-md-6 position-relative d-flex flex-column align-items-center justify-content-center"
            style={{ overflow: "hidden" }}
          >
            {/* Lottie de background */}
            <Player
              autoplay
              loop
              src="/lotties/code.json"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "80%",
                height: "100%",
                zIndex: 0,
                objectFit: "contain",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Coluna Direita */}
          <div className="col-md-6 d-flex  flex-column align-items-start position-relative z-2">
            <div className="container py-5">
              {/* Hero Section */}
              <div className=" mb-3">
                <h4 className="display-4 fs-1 fw-bold">
                  Tecnologia & Inovação no Front-End
                </h4>
              </div>

              {/* Parágrafo Principal */}
              <div className="mb-3">
                <p className="lead fs-6">
                  Vivemos uma era em que a tecnologia deixou de ser apenas uma
                  ferramenta — ela se tornou o palco da transformação. Inovação
                  não é mais um diferencial; é a linguagem do futuro. E no
                  front-end, essa linguagem ganha forma, cor, interação e vida.
                </p>
                <p className="lead fs-6">
                  Negócios que antes operavam em estruturas rígidas agora fluem
                  em ecossistemas inteligentes, onde interfaces conectam ideias,
                  dados e pessoas em tempo real. Startups nascem em nuvens.
                  Produtos digitais ganham vida na ponta dos dedos. O impossível
                  se torna beta.
                </p>
              </div>

              {/* Citação / Destaque */}
              <div className="box-des mt-4">
                <h5 className="text-des fst-italic">
                  Interfaces não são apenas visuais — são portais para
                  experiências. E o front-end é onde a inovação encontra o
                  usuário.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lottie;
