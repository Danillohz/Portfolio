import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Header = () => {

    const [show, setShow] = useState(false);


    return (
        <div className="Header-Of-Site">
            <div className="Button-Menu-Container">
                <button className="Button-Menu"><span className="material-symbols-outlined">
                    menu
                </span></button>
            </div>
            <h1 className="position-absolute top-0 start-50 translate-middle-x">Portifolio</h1>
            <div className="position-absolute top-0 end-0 Dark-Or-Light-Button-Container">
                <button className="Dark-Or-Light-Button" onClick={() => setShow(!show)}>
                    <CSSTransition in={show} timeout={500} classNames={"themechange"}>
                    <div className="Boll-Dark-Light"></div>
                    </CSSTransition>
                </button>
            </div>
        </div>
    )
}
export default Header;