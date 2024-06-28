import { useState } from "react"

var ProjectOrderNumber = 1
const Projects = (props) => {

    const [projectStyle, setProjectStyle] = useState("Project1");
    const [projectHref, setProjectHref] = useState("https://danillohz.github.io/react-climate/")
    const [projectName, setProjectName] = useState("Climate")

    //Recebe o parametro do tema do BodyAll (Claro ou Escuro/ True or False)
    const changeTheme = props.changeTheme;

    //Muda para o projeto anterior
    const ChangeProjectLeft = () => {
        if (ProjectOrderNumber === 1) {
            setProjectStyle("Project2")
            setProjectName("Vitual Store")
            setProjectHref("https://danillohz.github.io/virtualstore/")
            ProjectOrderNumber = 2
        }
        else if (ProjectOrderNumber === 2) {
            setProjectStyle("Project1")
            setProjectName("Climate")
            setProjectHref("https://danillohz.github.io/react-climate/")
            ProjectOrderNumber = 1
        }

    }
    //Muda para o proximo projeto
    const ChangeProjectRight = () => {
        if (ProjectOrderNumber === 1) {
            setProjectStyle("Project2")
            setProjectName("Vitual Store")
            setProjectHref("https://danillohz.github.io/virtualstore/")
            ProjectOrderNumber = 2
        }
        else if (ProjectOrderNumber === 2) {
            setProjectStyle("Project1")
            setProjectName("Climate")
            setProjectHref("https://danillohz.github.io/react-climate/")
            ProjectOrderNumber = 1
        }

        console.log(ProjectOrderNumber)
    }

    return (
        <>

            <div className={changeTheme ? "Container-Texts-LightTheme" : "Container-Texts-DarkTheme"}>
                <div className="All-Projects">
                    <h1>Projetos</h1>
                    <a className={projectStyle} href={projectHref}>{projectName}</a>

                    <div className="Buttons-Projects">
                        <button className="Change-Project-Btn" onClick={ChangeProjectLeft}><span className="material-symbols-outlined">
                            arrow_back_ios
                        </span></button>
                        <button className="Change-Project-Btn" onClick={ChangeProjectRight}><span className="material-symbols-outlined">
                            arrow_forward_ios
                        </span></button>

                    </div>
                </div>
            </div>


        </>
    )
}
export default Projects;