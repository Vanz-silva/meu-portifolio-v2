"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

const CardGrid = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center g-4">
        {[
          {
            img: "/img/next1.png",
            title:
              "Next.js turbina o React com performance, SEO e carregamento inteligente de páginas.",
          },
          {
            img: "/img/atomo.png",
            title:
              "React dá vida às interfaces com interações rápidas e experiências dinâmicas.",
          },
          {
            img: "/img/nodejs.png",
            title:
              "Node.js conecta tudo no backend, criando APIs velozes e escaláveis.",
          },
          {
            img: "/img/iconJs.png",
            title:
              "JavaScript transforma interfaces em experiências interativas, dinâmicas e responsivas.",
          },
          {
            img: "/img/iconPython.png",
            title:
              "Python simplifica o desenvolvimento com código claro, poderoso e altamente produtivo para diversas aplicações",
          },
          {
            img: "/img/iconPhp.png",
            title:
              "PHP sustenta aplicações web dinâmicas, conectando lógica de servidor, dados e performance com eficiência.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="col-12 col-md-4 d-flex justify-content-center"
          >
            <div
              className="card col-card p-3 text-center d-flex flex-colunm gap-4"
              style={{ maxWidth: "100%" }}
            >
              <Image
                src={card.img}
                alt={card.title}
                width={100}
                height={100}
                className="img-fluid mx-auto"
              />
              <div>
                <h4 className="h5 text-white txt-card-s">{card.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
