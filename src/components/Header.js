import React, { useState } from 'react';
import { Transition } from 'react-transition-group'

import BodyAll from './BodyAll';

import imgMoon from '../imagens/Moon.png'
import imgSun from '../imagens/Sun.png'



const duration = 500;
const defaulStyle = {
    transition: `left ${duration}ms, transform ${duration - 100}ms, background-Image ${duration - 300}ms  ease-in-out`,
    transform: 'rotate(0deg)',
    left: "0%",
    backgroundImage: `url(${imgMoon})`,

};

const transitionStyles = {
    entering: { left: "0%", transform: 'rotate(0deg)', backgroundImage: `url(${imgMoon})` },
    entered: { left: "40%", transform: 'rotate(360deg)', backgroundImage: `url(${imgSun})` },
    exiting: { left: "40%", transform: 'rotate(360deg)', backgroundImage: `url(${imgSun})` },
    exited: { left: "0%", transform: 'rotate(0deg)', backgroundImage: `url(${imgMoon})` },
}


const Header = () => {

    const [changeTheme, setChangeTheme] = useState(false);
    const [theme, setTheme] = useState('Dark-Theme')
    const nodeRef = React.useRef(null)

    const clickChangeTheme = () => {
        setChangeTheme(!changeTheme)

        if(changeTheme === false){
            setTheme("Light-Theme")
        }else{
            setTheme("Dark-Theme")
        }
    }


    return (
        <>
            <div className="container-fluid Website-Header">
                
                <h1 className="mt-1  position-absolute top-0 start-50 translate-middle-x">Portifolio</h1>
                <div className="position-absolute top-0 end-0 Dark-Or-Light-Button-Container">
                    <button className="Dark-Or-Light-Button" onClick={clickChangeTheme}>

                        <Transition in={changeTheme} timeout={0} nodeRef={nodeRef}>
                            {(state) => (
                                <div ref={nodeRef}
                                    style={{ ...defaulStyle, ...transitionStyles[state] }}
                                    className="Boll-Dark-Light">
                                </div>
                            )}
                        </Transition>

                    </button>
                </div>
            </div>
            <div className={theme}>
            <BodyAll changeTheme={changeTheme}></BodyAll>
            </div>



        </>
    )
}
export default Header;