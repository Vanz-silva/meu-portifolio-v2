"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./About.module.css";
import Image from "next/image";

const Projects = () => (
  <section id="projects" className="pt-5 mt-5">
    <div
      className="container d-flex  justify-content-center pb-5"
      data-aos="fade-down"
    >
      <div className="row d-flex">
        <div className=" d-flex justify-content-center display-4 align-items-center">
          <div className={styles.name}>
            {[
              { letter: "P", color: "#23b1d8" },
              { letter: "r", color: "#dc5fe2" },
              { letter: "o", color: "#b733f9" },
              { letter: "j", color: "#a0de59" },
              { letter: "e", color: "#a0de59" },
              { letter: "t", color: "#83d1ad" },
              { letter: "o", color: "#23b1d8" },
              { letter: "s", color: "#dc5fe2" },
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
      <div className=" d-flex justify-content-center" id="nav">
        <Image
          src="/img/et.png"
          alt="Descrição da imagem"
          width={100}
          height={100}
          sizes="100%"
          style={{ width: "100%" }}
          className="img-fluid"
        />
      </div>
    </div>

    <div
      className="container d-flex d-none d-md-block justify-content-center flex-column portifolio-box"
      id="portifolio-desktop"
    >
      <div className="row pt-md-5 mb-md-5 pb-md-5 ">
        <div className="col-md-6 col-sm-12 d-flex texto justify-content-center">
          <div className="txt-magmeta" data-aos="fade-right">
            <h1>
              Apresentando o site da Magmenta: moderno, funcional e estratégico!
            </h1>
            <p>
              Desenvolvido com HTML5, CSS3 e JavaScript, este site empresarial
              foi criado para captar clientes e apresentar os produtos da
              empresa de forma clara e profissional. Com design responsivo,
              adapta-se a qualquer dispositivo, garantindo uma navegação fluida
              e acessível. Funcionalidades interativas e um layout alinhado à
              identidade visual reforçam a credibilidade e posicionam a Magmenta
              como referência no mercado!
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 box-projeto">
          <div
            className="justify-content-end d-flex box-mockup-img"
            data-aos="fade-left"
          >
            <a
              href="https://magmeta.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/img/mockup-celu.svg"
                alt="Descrição da Imagem"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="row pt-md-5 mt-md-5 pb-md-5 mb-dm-5">
        <div className="col-md-7 col-sm-12 box-projeto" data-aos="fade-right">
          <a
            href="https://magmeta.com.br/quem-somos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/mockup-pc3.svg"
              alt="Descrição da Imagem"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
            />
          </a>
        </div>
        <div className="col-md-5 col-sm-12 d-flex texto">
          <div className="txt-magmeta" data-aos="fade-left">
            <h1>
              Apresentando o site da Magmenta: moderno, funcional e estratégico!
            </h1>
            <p>
              Desenvolvido com HTML5, CSS3 e JavaScript, este site empresarial
              foi criado para captar clientes e apresentar os produtos da
              empresa de forma clara e profissional. Com design responsivo,
              adapta-se a qualquer dispositivo, garantindo uma navegação fluida
              e acessível. Funcionalidades interativas e um layout alinhado à
              identidade visual reforçam a credibilidade e posicionam a Magmenta
              como referência no mercado. Um projeto que une tecnologia e
              estratégia para resultados reais!
            </p>
          </div>
        </div>
      </div>

      <div className="row pt-md-5 mb-md-5 pb-md-5 ">
        <div className="col-md-6 col-sm-12 d-flex texto justify-content-center">
          <div className="txt-magmeta" data-aos="fade-right">
            <h1>
              Apresentando o site da Magmenta: moderno, funcional e estratégico!
            </h1>
            <p>
              Desenvolvido com HTML5, CSS3 e JavaScript, este site empresarial
              foi criado para captar clientes e apresentar os produtos da
              empresa de forma clara e profissional. Com design responsivo,
              adapta-se a qualquer dispositivo, garantindo uma navegação fluida
              e acessível. Funcionalidades interativas e um layout alinhado à
              identidade visual reforçam a credibilidade e posicionam a Magmenta
              como referência no mercado!
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 box-projeto">
          <div
            className="justify-content-end d-flex box-mockup-img"
            data-aos="fade-left"
          >
            <Image
              src="/img/mockup-celu.svg"
              alt="Descrição da Imagem"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>

    <div
      className="container d-flex justify-content-center flex-column d-md-none portifolio-box"
      id="portifolio-mobile"
    >
      <div className="row  mb-5 pb-5 ">
        <div className="col-md-6 col-sm-12 d-flex texto justify-content-center">
          <div className="txt-magmeta  text-center" data-aos="fade-down">
            <h2>
              Apresentando o site da Magmenta: moderno, funcional e estratégico!
            </h2>
            <p>
              Desenvolvido com HTML5, CSS3 e JavaScript, este site empresarial
              foi criado para captar clientes e apresentar os produtos da
              empresa de forma clara e profissional. Com design responsivo,
              adapta-se a qualquer dispositivo, garantindo uma navegação fluida
              e acessível. Funcionalidades interativas e um layout alinhado à
              identidade visual reforçam a credibilidade e posicionam a Magmenta
              como referência no mercado!
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 box-projeto">
          <div
            className="justify-content-end d-flex box-mockup-img"
            data-aos="fade-down"
          >
            <Image
              src="/img/mockup-cel-mobile.svg"
              alt="Descrição da Imagem"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <div className="row pt-5  pb-5 mb-dm-5">
        <div className="col-md-5 col-sm-12 d-flex texto">
          <div className="txt-magmeta text-center" data-aos="fade-down">
            <h2>
              Apresentando o site da Magmenta: moderno, funcional e estratégico!
            </h2>
            <p>
              Desenvolvido com HTML5, CSS3 e JavaScript, este site empresarial
              foi criado para captar clientes e apresentar os produtos da
              empresa de forma clara e profissional. Com design responsivo,
              adapta-se a qualquer dispositivo, garantindo uma navegação fluida
              e acessível. Funcionalidades interativas e um layout alinhado à
              identidade visual reforçam a credibilidade e posicionam a Magmenta
              como referência no mercado. Um projeto que une tecnologia e
              estratégia para resultados reais!
            </p>
          </div>
        </div>
        <div className="col-md-7 col-sm-12 box-projeto" data-aos="fade-down">
          <Image
            src="/img/mockup-pc-mobile.svg"
            alt="Descrição da Imagem"
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
