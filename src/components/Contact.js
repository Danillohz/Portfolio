import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import InstaIcon from "../imagens/icons/icons8-instagram-50.png"
import LinkeIcon from "../imagens/icons/icons8-linkedin-50.png"
import GitHIcon from "../imagens/icons/icons8-github-50.png"
import EmaiIcon from "../imagens/icons/icons8-nova-mensagem-50.png"
import FaceIcon from "../imagens/icons/icons8-facebook-50.png"

class Contact extends Component {

    //componente que faz as animações funcionarem
    componentDidMount() {
        AOS.init();
    }



    render() {
        return (
            <>
                {/*Animações dos icones de contato*/}
                <div className="Contact-Container">
                    <h2>Contact</h2>
                    <div className="Contacts-Links">
                        <div className="row">
                            <div
                                className="mb-1 col"
                                data-aos="fade-right"
                                data-aos-offset="70"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="600">
                                <div><a href="https://github.com/Danillohz" target="_blank" rel="noreferrer"><img src={GitHIcon} alt=""></img></a></div>
                            </div>
                            <div
                                className="mb-1 col"
                                data-aos="fade-right"
                                data-aos-offset="70"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="600">
                                <div><a href="https://www.linkedin.com/in/danillo-henrique-zezepanski-056056239/" target="_blank" rel="noreferrer"><img src={LinkeIcon} alt=""></img></a></div>
                            </div>
                            <div
                                className="mb-1 col"
                                data-aos="fade-right"
                                data-aos-offset="70"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="600">
                                <div><a href="https://www.instagram.com/danillo_hz/" target="_blank" rel="noreferrer"><img src={InstaIcon} alt=""></img></a></div>
                            </div>
                            <div
                                className="mb-1 col"
                                data-aos="fade-right"
                                data-aos-offset="70"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="600">
                                <div><a href="https://www.facebook.com/danny.jjunior.5" target="_blank" rel="noreferrer"><img src={FaceIcon} alt=""></img></a></div>
                            </div>
                            <div
                                className="mb-1 col"
                                data-aos="fade-right"
                                data-aos-offset="70"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="600">
                                <div><a href="mailto:danillohzd.real@gmail.com" rel="noreferrer" ><img src={EmaiIcon} alt=""></img></a></div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Contact