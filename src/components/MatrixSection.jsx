"use client";
import { useEffect, useRef } from "react";

const MatrixSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const binary = "01";
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      // Fundo escuro com leve opacidade para dar efeito de trilha
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Criar gradiente para o texto
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0.1, "#6610f2");
      gradient.addColorStop(0.4, "#18ffb7");
      gradient.addColorStop(0.5, "#23b1d8");
      gradient.addColorStop(0.65, "#ff76d5");
      gradient.addColorStop(0.9, "#6610f2");

      ctx.fillStyle = gradient;
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const text = binary[Math.floor(Math.random() * binary.length)];
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height || Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i]++;
        }
      });
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: `linear-gradient(
          330deg,
          #6610f2 10%,
          #18ffb7 40%,
          #23b1d8 0.5%,
          #ff76d5 65%,
          #6610f2 90%
        )`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "monospace",
      }}
    >
      {/* Canvas da chuva */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Conteúdo por cima */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          color: "#000",
        }}
      >
        <div className="row pt-5 pb-5 d-flex justify-content-between flex-colunm align-items-center">
          <div
            className="col-md-5 col-xs-12 pt-5 box-vamos"
            data-aos="fade-left"
          >
            <h1 id="txt-b-matrix">
              Conheça mais sobre meu trabalho entre em contato! Vamos
              conversar?!
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
          <div className="col-md-7 pt-3 justify-content-center d-flex box-perfil">
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
    </section>
  );
};

export default MatrixSection;
