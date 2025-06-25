"use client";
import { useEffect, useRef } from "react";
import CardGrid from "@/sections/Cards";

const MatrixSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
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
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

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
        minHeight: "auto",
        overflow: "hidden",
        background: `linear-gradient(
          330deg,
          #00ff00 10%,
          #18ffb7 40%,
          #00e600 40%,
          #009900 70%,
          #003300 90%
        )`,
        display: "flex",
        flexDirection: "column",
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
        <CardGrid />
      </div>
    </section>
  );
};

export default MatrixSection;
