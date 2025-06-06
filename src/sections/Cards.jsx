"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

const CardGrid = () => {
  return (
    <div className="container py-5">
      <div className="d-flex flex-wrap justify-content-center gap-4">
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
          { img: "/img/nodejs.png", title: "Node.js conecta tudo no backend, criando APIs velozes e escaláveis." },
        ].map((card, index) => (
          <div
            key={index}
            className="card col-card p-3 text-center"
            style={{ width: "300px", flex: "1 1 280px", maxWidth: "100%" }}
          >
            <Image
              src={card.img}
              alt={card.title}
              width={100}
              height={100}
              className="img-fluid mx-auto mb-3"
            />
            <h4 className="h5 text-white">{card.title} </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
