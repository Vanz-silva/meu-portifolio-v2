"use client";
import { useEffect, useRef } from "react";
import CardGrid from "@/sections/Cards";

const MatrixSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const binary = "01";
    const fontSize = 16;
    let columns = 0;
    let drops = [];

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.scrollWidth;
        canvas.height = parent.scrollHeight;

        columns = Math.floor(canvas.width / fontSize);
        drops = Array(columns).fill(1);
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const draw = () => {
      if (!ctx) return;
      // cria um leve fade preto pra deixar o rastro da "chuva"
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // agora é uma cor roxa sólida
      ctx.fillStyle = "#7B2FF7";
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
        overflow: "hidden",
        backgroundColor: "#000", // fundo preto fixo sem gradiente
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "monospace",
      }}
    >
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
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          color: "#fff",
        }}
      >
        <CardGrid />
      </div>
    </section>
  );
};

export default MatrixSection;
