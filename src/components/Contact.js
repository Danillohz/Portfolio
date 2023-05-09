import InstaIcon from "../imagens/icons/icons8-instagram-50.png"
import LinkeIcon from "../imagens/icons/icons8-linkedin-50.png"
import GitHIcon from "../imagens/icons/icons8-github-50.png"
import EmaiIcon from "../imagens/icons/icons8-nova-mensagem-50.png"
import FaceIcon from "../imagens/icons/icons8-facebook-50.png"

const Contact = () =>{


    return(
        <>
            <div className="Contact-Container">
                <h2>Contact</h2>
                <div className="Contacts-Links">
                    <div className="row">
                        <div className="mb-1 col"><a href="https://github.com/Danillohz"><img src={GitHIcon} alt=""></img></a></div>
                        <div className="mb-1 col"><a href=""><img src={LinkeIcon} alt=""></img></a></div>
                        <div className="mb-1 col"><a href=""><img src={InstaIcon} alt=""></img></a></div>
                        <div className="mb-1 col"><a href=""><img src={FaceIcon} alt=""></img></a></div>
                        <div className="mb-2 col"><a href=""><img src={EmaiIcon} alt=""></img></a></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact