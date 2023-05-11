import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import htmlImg from "../imagens/icons/skillsimg/icons8-html-50.png"
import BootsImg from "../imagens/icons/skillsimg/icons8-bootstrap-50.png"
import CssImg from "../imagens/icons/skillsimg/icons8-css-50.png"
import GitImg from "../imagens/icons/skillsimg/icons8-git-50.png"
import GitHImg from "../imagens/icons/skillsimg/icons8-github-50.png"
import JsImg from "../imagens/icons/skillsimg/icons8-javascript-50.png"
import MysqlImg from "../imagens/icons/skillsimg/icons8-mysql-50.png"
import ReactImg from "../imagens/icons/skillsimg/icons8-nativo-de-reagir-50.png"
import SassImg from "../imagens/icons/skillsimg/icons8-sass-50.png"



class Skills extends Component {

  //componente que faz as animações funcionarem
  componentDidMount() {
    AOS.init();
  }



  render() {
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

                <div> <img src={htmlImg} alt=""></img> </div>
              </div>

              <div
                className="mb-1 col"
                data-aos="fade-left"
                data-aos-offset="70"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600">
                <div> <img src={CssImg} alt=""></img> </div>
              </div>

              <div
              className="mb-1 col"
                data-aos="fade-left"
                data-aos-offset="70"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600">
                <div> <img src={JsImg} alt=""></img> </div>
              </div>

              <div
              className="mb-1 col"
                data-aos="fade-left"
                data-aos-offset="70"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600">
                <div> <img src={ReactImg} alt=""></img> </div>
              </div>

              <div
              className="mb-1 col"
                data-aos="fade-left"
                data-aos-offset="70"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600">
                <div> <img src={GitImg} alt=""></img> </div>
              </div>

              <div
              className="mb-1 col"
                data-aos="fade-left"
                data-aos-offset="70"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600">
                <div> <img src={GitHImg} alt=""></img> </div>
              </div>

              <div
              className="mb-1 col"
                data-aos="fade-left"
                data-aos-offset="70"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600">
                <div> <img src={MysqlImg} alt=""></img> </div>
              </div>

              <div
              className="mb-1 col"
                data-aos="fade-left"
                data-aos-offset="70"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600">
                <div> <img src={BootsImg} alt=""></img> </div>
              </div>

              <div
              className="mb-1 col"
                data-aos="fade-left"
                data-aos-offset="70"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600">
                <div> <img src={SassImg} alt=""></img> </div>
              </div>




            </div>
          </div >
        </div >

      </>
    )
  }
}
export default Skills