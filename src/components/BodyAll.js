import Menu from "./Menu";



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
            </div>
        </>
    )
}
export default BodyAll;