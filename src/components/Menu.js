import React, { useState } from "react"
import { Transition } from 'react-transition-group'

const Menu = () => {

    const [showMenu, setShowMenu] = useState(false)
    const nodeRef = React.useRef(null)
    const duration = 100;



    //Animação do barra do menu
    const defaulStyle ={
        left:'-40px',
        transition: `left ${duration * 3}ms ease-in-out`
    }
    const transitionStyles ={
        entering: { left: "-40px"},
            entered: { left: "0px"},
            exiting: { left: "0px"},
            exited: { left: "-150px"}
        
    }

    //seta true/false e faz com que apareça a barra do menu
    const clickShowMenu = () => {
        setShowMenu(!showMenu)

    }

    return (
        <>
            <div className="Menu-Button-Container">
                <button className="Menu-Button" onClick={clickShowMenu} ><span className="material-symbols-outlined">
                    {!showMenu ? "Menu" : "chevron_left"}
                </span></button>
            </div>

            <Transition in={showMenu} timeout={0} nodeRef={nodeRef} >

                {(state) => (
                    <div ref={nodeRef}
                        style={{ ...defaulStyle, ...transitionStyles[state] }}
                        className="Menu-Opcoes">
                        
                            <ul className=" Menu-Buttons-Ul">
                                <li><button>About me</button></li>
                                <li><button>Contact</button></li>
                                <li><button>Projects</button></li>
                            </ul>
                        
                    </div>
                )}
            </Transition>
        </>

    )
}
export default Menu