"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "@/components/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./About.module.css";
import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicializa AOS com animação de 1s
  }, []);

  return (
    <section id="about" className="position-relative ps">
      <div className="container pc text-center" id="sessao-sobre-mim">
        <div className="row align-items-center">
          {/* Primeira coluna */}
          <div className="col-md-7  linha-cab" data-aos="fade-right">
            <div id="sobre-mim" className="gap-3 d-flex flex-column">
              <h1 className="text-colorido txt-ola">
                Olá, Eu sou a Vanessa Silva
              </h1>
              <div className="p-1">
                <h5>Desenvolvedora Front-End</h5>
              </div>
              <Button text="Vamos Conversar" />
            </div>
          </div>

          {/* Segunda coluna */}
          <div className="col-md-5 pt-3 justify-content-center d-flex box-perfil">
            <div className="circle-wrapper" data-aos="zoom-in-up">
              <div className="circle-border border1"></div>
              <div className="circle-border border2"></div>
              <div className="circle-border border3"></div>
              <div className="circle">
                <Image
                  sizes="100%"
                  style={{ width: "100%", height: "100%" }}
                  src="/img/cyberVanz.png"
                  width={0}
                  height={0}
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

export default About;
