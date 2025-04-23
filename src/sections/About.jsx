"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "@/components/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./About.module.css";
import Image from "next/image";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicializa AOS com animação de 1s
  }, []);

  return (
    <section id="about">
      <div className="container text-center" id="sessao-sobre-mim">
        <div className="row mb-md-5 mt-5 align-items-center">
          {/* Primeira coluna */}
          <div className="col-md-7 linha-cab" data-aos="fade-right">
            <div id="sobre-mim">
              <h1 className="text-colorido txt-ola">
                Olá, Eu sou a Vanessa Silva
              </h1>
              <div className="p-1">
                <h5>Desenvolvedora Front-End</h5>
              </div>
            </div>
            <Button text="Vamos Conversar" />
          </div>

          {/* Segunda coluna */}
          <div className="col-md-5 pt-3 justify-content-center d-flex box-perfil">
            <div className="circle-wrapper" data-aos="zoom-in-up">
              <div className="circle-border border1"></div>
              <div className="circle-border border2"></div>
              <div className="circle-border border3"></div>
              <div className="circle">
                <img
                  src="/img/cyberVanz.png"
                  width="60%"
                  alt="Descrição da imagem"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-md-5 pb-md-5 mt-md-5 mb-md-5 linha-sobre">
          <div className="box-sobre" data-aos="fade-down">
            <div className="text-sobre d-flex justify-content-center display-4 align-items-center pt-md-5 mt-md-5 mt-sm-3  d-flex text-center justify-content-center flex-column">
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
          <div id="saturno" className="col-4">
            <Image
              src="/img/saturno.png"
              alt="Planeta Saturno"
              width={200}
              height={200}
              className="floating-img planeta-img"
              sizes="100%"
              style={{ width: "80%", height: "auto" }}
            />
          </div>
          <div id="foguete" className="col-4">
            <img
              src="/img/foguet.png"
              width="100%"
              alt="Descrição da imagem"
              className="img-fluid floating-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
