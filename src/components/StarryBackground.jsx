"use client";
import React, { useEffect, useState } from "react";
import anime from "animejs";

const StarryBackground = () => {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const generateStars = () => {
        return Array.from({ length: 60 }, () => ({
          cx: Math.random() * window.innerWidth,
          cy: Math.random() * window.innerHeight,
          r: Math.random() * 1.2 + 0.6,
        }));
      };

      const generateShootingStars = () => {
        return Array.from({ length: 10 }, () => ({
          left: `${Math.random() * window.innerWidth}px`,
          top: `${Math.random() * window.innerHeight}px`,
        }));
      };

      setStars(generateStars());
      setShootingStars(generateShootingStars());
    }
  }, []);

  useEffect(() => {
    if (stars.length > 0) {
      anime({
        targets: "#sky .star",
        opacity: [
          { duration: 700, value: "0" },
          { duration: 700, value: "1" },
        ],
        easing: "linear",
        loop: true,
        delay: (el, i) => 50 * i,
      });

      anime({
        targets: "#shootingstars .wish",
        easing: "linear",
        loop: true,
        delay: (el, i) => 1000 * i,
        opacity: [{ duration: 700, value: "1" }],
        width: [{ value: "150px" }, { value: "0px" }],
        translateX: 350,
      });
    }
  }, [stars]);

  return (
    <>
      {/* Céu estrelado */}
      {stars.length > 0 && (
        <>
          <svg
            id="sky"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: -1,
            }}
          >
            {stars.map((star, index) => (
              <circle
                key={index}
                cx={star.cx}
                cy={star.cy}
                r={star.r}
                stroke="none"
                fill="white"
                className="star"
              />
            ))}
          </svg>

          <div
            id="shootingstars"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: -1,
            }}
          >
            {shootingStars.map((star, index) => (
              <div
                key={index}
                className="wish"
                style={{ position: "absolute", ...star }}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default StarryBackground;
