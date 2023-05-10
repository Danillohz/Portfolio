import Menu from "./Menu";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";

//chama todas classes em um único corpo
const BodyAll = (props) => {

    //Recebe o param do Header(true or false)
    const changeTheme = props.changeTheme;



    return (
        <>


            <div className="Body-All">
                <Menu></Menu>
                <div className={changeTheme ? 'Home-start-LightTheme' : 'Home-start-DarkTheme'}>
                    <div className="Container-My-Img">
                        <div className="mt-3 My-Img"></div>
                    </div>
                    <div className="textEu"></div>

                </div>
                <div className="Container-Projects">
                    
                        <Projects></Projects>

                </div>
                <div className="SkillsAndContact-Container row mt-3">
                    <div className="col">
                        <Contact></Contact>
                    </div>
                    <div className="col">
                        <Skills></Skills>
                    </div>
                </div>
            </div>

        </>
    )
}
export default BodyAll;