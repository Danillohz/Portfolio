import Menu from "./Menu";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";
import { useContext } from "react";
import { SecondsContext } from "./Time";



//chama todas classes em um único corpo
const BodyAll = (props) => {

    const seconds = useContext(SecondsContext);

    console.log(seconds)
    //Recebe o param do Header(true or false)
    const changeTheme = props.changeTheme;

    return (
        <>
            
            
            <div id="simple-list-item-1" className="Body-All">
                <Menu></Menu>
                <div className={changeTheme ? 'Home-start-LightTheme' : 'Home-start-DarkTheme'}>

                    <div className="Container-My-Img">
                        <div className="mt-3 My-Img"></div>
                    </div>

                    <div className="textEu"></div>

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