import Menu from "./Menu";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";

import React, { useContext, useState, useEffect } from "react";
import { Transition } from "react-transition-group";
import { SecondsContext } from "./Time";

import Myimg from "../imagens/Phototer.jpg"
import InitialTexts from "./InitialTexts";



//chama todas classes em um único corpo
const BodyAll = (props) => {

    const [showAnimPhoto, setShowAnimPhoto] = useState(false)
    const nodeRef = React.useRef(null)
    const duration = 100;

    console.log(showAnimPhoto)

    //Animação do barra do foto perfil
    const defaulStyle = {
        margin: '6px 50% 0px 50%',
        transform: "translate(-50%)",
        transition: `margin ${duration * 10}ms  ease-in-out, transform ${duration * 15}ms`
    }
    const transitionStyles = {
        entering: { margin: "6px 50% 0px 50%", transform: "translate(-50%)" },
        entered: { margin: "6px 0px 0px 6px", transform: "translate(0%)" },



    }

    const seconds = useContext(SecondsContext);

    console.log(seconds)
    //Recebe o param do Header(true or false)
    const changeTheme = props.changeTheme;

    const biggerThen = seconds === 1;

    //Começa a animação da foto
    useEffect(() => {

        if (biggerThen) {
            setShowAnimPhoto(true)
        }

    }, [biggerThen]);

    return (
        <>


            <div id="simple-list-item-1" className="Body-All">
                <Menu></Menu>
                <div className={changeTheme ? 'Home-start-LightTheme' : 'Home-start-DarkTheme'}>

                    <div className="Container-My-Img">


                        <Transition in={showAnimPhoto === true} timeout={0} nodeRef={nodeRef} >
                            {(state) => (
                                <div ref={nodeRef}
                                    style={{ ...defaulStyle, ...transitionStyles[state] }}
                                    className="My-Img">
                                    <img className="img-fluid" src={Myimg} alt=""></img>
                                </div>
                            )}
                        </Transition>


                        <div className={changeTheme ? "Container-Texts-LightTheme" :"Container-Texts-DarkTheme"}>
                            <InitialTexts changeTheme={changeTheme}></InitialTexts>
                        </div>
                    </div>

                </div>

                <div id="simple-list-item-2" className="Container-Projects ">

                    <Projects></Projects>

                </div>
                <div id="simple-list-item-3" className="SkillsAndContact-Container row mt-3">
                    <div className="col">
                        <Contact></Contact>
                    </div>
                    <div className="col">
                        <Skills></Skills>
                    </div>

                </div>

            </div>
            <footer>

            </footer>

        </>
    )
}
export default BodyAll;