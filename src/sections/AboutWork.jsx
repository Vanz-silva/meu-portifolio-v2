"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "@/components/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./About.module.css";
import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";

const AboutWork = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicializa AOS com animação de 1s
  }, []);

  return (
    <section id="aboutWork" className="position-relative ps">
      <div className="container pc">
        <div className="row linha-sobre">
          <div className="box-sobre" data-aos="fade-down">
            <div className="text-sobre d-flex justify-content-center display-4 align-items-center gap-2  d-flex text-center justify-content-center flex-column">
              <div className="d-flex gap-3">
                <div className={styles.name}>
                  {[
                    { letter: "S", color: "#23b1d8" },
                    { letter: "o", color: "#dc5fe2" },
                    { letter: "b", color: "#b733f9" },
                    { letter: "r", color: "#a0de59" },
                    { letter: "e", color: "#83d1ad" },
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

                <div className={styles.name}>
                  {[
                    { letter: "m", color: "#23b1d8" },
                    { letter: "i", color: "#dc5fe2" },
                    { letter: "m", color: "#b733f9" },
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
              <div className="lotties p-0 m-0">
                <div id="foguete" className="col-4">
                  <Player
                    autoplay
                    loop
                    src="/lotties/astrou.json"
                    className="floating-img planeta-img"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div id="saturno" className="col-4">
                  <Player
                    autoplay
                    loop
                    src="/lotties/planet.json"
                    className="floating-img planeta-img"
                    style={{ width: "50%", height: "auto" }}
                  />
                </div>
              </div>
              <div>
                <h5>
                  Está buscando uma desenvolvedora front-end que transforme suas
                  ideias em experiências digitais incríveis? Eu sou a pessoa
                  certa! Apaixonada por programação há dois anos, tenho
                  expertise em HTML, CSS, JavaScript, React, Next.js, Python,
                  Material UI e Bootstrap. Crio interfaces web que combinam
                  design atraente e funcionalidade. Sempre em busca de inovação
                  e desafios, pensadas para proporcionar a melhor experiência
                  para o usuário. Vamos construir algo juntos?
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWork;
