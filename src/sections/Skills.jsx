"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Importação correta para v11+
import SkillCard from "@/components/SkillCard";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css"; // Estilos do Bootstrap
import styles from "./About.module.css";

const Skills = () => {
  // Array com os caminhos e descrições das logos
  const skillsLogos = [
    { src: "/img/logoHtml.png", alt: "HTML" },
    { src: "/img/logoCss.png", alt: "CSS" },
    { src: "/img/logoJs.png", alt: "JavaScript" },
    { src: "/img/logoReactJs.png", alt: "React" },
    { src: "/img/logoNext.png", alt: "Next.js" },
    { src: "/img/logoMuii.png", alt: "Bootstrap" },
    { src: "/img/logoBoot.png", alt: "Bootstrap" },
    { src: "/img/logoPython.png", alt: "Python" },
    { src: "/img/logoGithub.png", alt: "Git" },
    { src: "/img/logoFigma.png", alt: "Git" },
    { src: "/img/logoSql.png", alt: "Git" },
  ];

  return (
    <section id="skills" className="ps">
      <div className="container text-center logos-tec po">
        <div className="row box-texto-logos text-center">
          <div className=" d-flex justify-content-center display-4 align-items-center mb-5">
            <div className={styles.name}>
              {[
                { letter: "S", color: "#23b1d8" },
                { letter: "k", color: "#dc5fe2" },
                { letter: "i", color: "#b733f9" },
                { letter: "l", color: "#a0de59" },
                { letter: "l", color: "#a0de59" },
                { letter: "s", color: "#83d1ad" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={styles.cosmic}
                  style={{ "--color": item.color }}
                >
                  <span>{item.letter}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-full-width swiper">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView={3}
          spaceBetween={20}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          breakpoints={{
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
          }}
          className="smooth-carousel"
        >
          {skillsLogos.map((logo, index) => (
            <SwiperSlide key={index} className="logo-container">
              <SkillCard src={logo.src} alt={logo.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
