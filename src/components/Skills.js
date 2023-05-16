import React, { useState } from 'react';
import 'aos/dist/aos.css';


import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';



import htmlImg from "../imagens/icons/skillsimg/icons8-html-50.png"
import BootsImg from "../imagens/icons/skillsimg/icons8-bootstrap-50.png"
import CssImg from "../imagens/icons/skillsimg/icons8-css-50.png"
import GitImg from "../imagens/icons/skillsimg/icons8-git-50.png"
import GitHImg from "../imagens/icons/skillsimg/icons8-github-50.png"
import JsImg from "../imagens/icons/skillsimg/icons8-javascript-50.png"
import MysqlImg from "../imagens/icons/skillsimg/icons8-mysql-50.png"
import ReactImg from "../imagens/icons/skillsimg/icons8-nativo-de-reagir-50.png"
import SassImg from "../imagens/icons/skillsimg/icons8-sass-50.png"





const Skills = () => {

  const [popoverHeader, setPopoverHeader] = useState("")
  const [popoverBody, setPopoverBody] = useState("")

  const changeNumberPopover = (number) => {

    changePopover(number);

  }

  const changePopover = (number) => {


    switch (number) {
      case 1:
        setPopoverHeader("HTML")
        setPopoverBody("HyperText Markup Language é a linguagem de marcação padrão para a criação de páginas web. É a base estrutural de qualquer site na Internet e é interpretado pelos navegadores para renderizar e exibir conteúdo na web.")
        break;
      case 2:
        setPopoverHeader("CSS")
        setPopoverBody("Cascading Style Sheets é uma linguagem de estilo utilizada para definir a apresentação e o layout de documentos HTML (ou XML). Ela permite controlar o aspecto visual de uma página web, incluindo cores, fontes, espaçamento, posicionamento de elementos e efeitos visuais.")
        break;
      case 3:
        setPopoverHeader("JavaScript")
        setPopoverBody("JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.")
        break;
      case 4:
        setPopoverHeader("React")
        setPopoverBody("React é uma biblioteca JavaScript de código aberto e amplamente utilizada para a criação de interfaces de usuário interativas e responsivas.")
        break;
      case 5:
        setPopoverHeader("Git")
        setPopoverBody("Git é um sistema de controle de versão distribuído amplamente utilizado no desenvolvimento de software.")
        break;
      case 6:
        setPopoverHeader("GitHub")
        setPopoverBody("O GitHub é uma plataforma baseada na web que utiliza o sistema de controle de versão Git para hospedar, colaborar e gerenciar projetos de software.")
        break;
      case 7:
        setPopoverHeader("MySQL")
        setPopoverBody("MySQL é um sistema de gerenciamento de banco de dados relacional (RDBMS) amplamente utilizado, que fornece uma maneira eficiente e confiável de armazenar, gerenciar e recuperar dados.")
        break;
      case 8:
        setPopoverHeader("Bootstrap")
        setPopoverBody("Bootstrap é um framework front-end popular e de código aberto que oferece um conjunto abrangente de componentes, estilos e ferramentas para o desenvolvimento de interfaces web responsivas e esteticamente agradáveis.")
        break;
      case 9:
        setPopoverHeader("Sass")
        setPopoverBody("Syntactically Awesome Stylesheets é uma linguagem de extensão para folhas de estilo CSS. Ela acrescenta recursos poderosos ao CSS tradicional, tornando o processo de estilização mais eficiente, modular e fácil de manter.")
        break;

      default:
        setPopoverHeader("");
        setPopoverBody("");
        break;

    }
  }

  const popovers = (

    <Popover id="Popover">
      <Popover.Header as="h3">{popoverHeader}</Popover.Header>
      <Popover.Body>
        {popoverBody}
      </Popover.Body>
    </Popover>

  )

  return (
    <>

      <div className="Skills-Container">
        <h1>Skills</h1>
        <div className="Skills-Imagens">
          <div className="row">

            {/*Animações de scroll dos icons */}
            <div
              className="mb-1 col"
              data-aos="fade-left"
              data-aos-offset="70"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600">

              <div>
                <OverlayTrigger trigger="hover" placement="auto" overlay={popovers}>
                  <button onMouseEnter={() => changeNumberPopover(1)}>
                    <img src={htmlImg} alt="">
                    </img>
                  </button>
                </OverlayTrigger>
              </div>

            </div>

            <div
              className="mb-1 col"
              data-aos="fade-left"
              data-aos-offset="70"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600">
              <div>
                <OverlayTrigger trigger="hover" placement="auto" overlay={popovers}>
                  <button onMouseEnter={() => changeNumberPopover(2)}>
                    <img src={CssImg} alt="">
                    </img>
                  </button>
                </OverlayTrigger> </div>
            </div>

            <div
              className="mb-1 col"
              data-aos="fade-left"
              data-aos-offset="70"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600">
              <div>
                <OverlayTrigger trigger="hover" placement="auto" overlay={popovers}>
                  <button onMouseEnter={() => changeNumberPopover(3)}>
                    <img src={JsImg} alt="">
                    </img>
                  </button>
                </OverlayTrigger>
              </div>
            </div>

            <div
              className="mb-1 col"
              data-aos="fade-left"
              data-aos-offset="70"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600">
              <div>
                <OverlayTrigger trigger="hover" placement="auto" overlay={popovers}>
                  <button onMouseEnter={() => changeNumberPopover(4)}>
                    <img src={ReactImg} alt="">
                    </img></button>
                </OverlayTrigger>
              </div>
            </div>

            <div
              className="mb-1 col"
              data-aos="fade-left"
              data-aos-offset="70"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600">
              <div>
                <OverlayTrigger trigger="hover" placement="auto" overlay={popovers}>
                  <button onMouseEnter={() => changeNumberPopover(5)}>
                    <img src={GitImg} alt="">
                    </img>
                  </button>
                </OverlayTrigger>
              </div>
            </div>

            <div
              className="mb-1 col"
              data-aos="fade-left"
              data-aos-offset="70"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600">
              <div>
                <OverlayTrigger trigger="hover" placement="auto" overlay={popovers}>
                  <button onMouseEnter={() => changeNumberPopover(6)}>
                    <img src={GitHImg} alt="">
                    </img>
                  </button>
                </OverlayTrigger>
              </div>
            </div>

            <div
              className="mb-1 col"
              data-aos="fade-left"
              data-aos-offset="70"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600">
              <div>
                <OverlayTrigger trigger="hover" placement="auto" overlay={popovers}>
                  <button onMouseEnter={() => changeNumberPopover(7)}>
                    <img src={MysqlImg} alt="">
                    </img>
                  </button>
                </OverlayTrigger>
              </div>
            </div>

            <div
              className="mb-1 col"
              data-aos="fade-left"
              data-aos-offset="70"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600">
              <div>
                <OverlayTrigger trigger="hover" placement="auto" overlay={popovers}>
                  <button onMouseEnter={() => changeNumberPopover(8)}>
                    <img src={BootsImg} alt="">
                    </img>
                  </button>
                </OverlayTrigger>
              </div>
            </div>

            <div
              className="mb-1 col"
              data-aos="fade-left"
              data-aos-offset="70"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600">
              <div>
                <OverlayTrigger trigger="hover" placement="auto" overlay={popovers}>
                  <button onMouseEnter={() => changeNumberPopover(9)}>
                    <img src={SassImg} alt="">

                    </img>
                  </button>
                </OverlayTrigger>
              </div>
            </div>




          </div>
        </div >
      </div >

    </>
  )

}
export default Skills