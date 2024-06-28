const AboutMe = (props) => {

    //Recebe o param do Header(true or false)
    const changeTheme = props.changeTheme;
    return (
        <>
            <div className={changeTheme ? "Container-Texts-LightTheme" : "Container-Texts-DarkTheme"}>
                <h1>Sobre mim</h1>
                <p>Sou um desenvolvedor full stack, atualmente cursando Análise e Desenvolvimento de Sistemas, com uma paixão por criar soluções tecnológicas inovadoras. Tenho habilidades no front-end, back-end e mobile, o que me permite atuar em todas as camadas de uma aplicação.

                    Sou proativo, dedicado e sempre em busca de novos desafios. Minha capacidade de me relacionar bem com os membros da equipe promove um ambiente colaborativo e harmonioso, facilitando a comunicação e a execução eficiente dos projetos.

                    Estou comprometido em transformar ideias em realidade, combinando minha experiência técnica com uma abordagem criativa e orientada a resultados.</p>
            </div>
        </>
    )
}
export default AboutMe;
