import { useEffect } from "react";
import { useState } from "react"

import cvDanillo from "../components/Currículo Danillo Henrique Zezepanski Full Stack.pdf"


const InitialTexts = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvDanillo;
    link.download = 'Currículo Danillo Henrique Zezepanski.pdf';
    link.click();
  };

  //Texto que serão escritos 
  const [welcomeTxt, setWelcomeTxt] = useState("");
  const Text1 = "Seja Bem vindo!";
  const [nameTxt, setNameTxt] = useState("");
  const Text2 = "Eu sou o Danillo Henrique";
  const [developerTxt, setDeveloperTxt] = useState("");
  const Text3 = "Desenvolvedor Front-end";
  //Tempo para eles serem digitados
  const writeDelay = 100;

  useEffect(() => {
    let currentText1 = '';
    let currentText2 = '';
    let currentText3 = '';
    let currentIndex1 = 0;
    let currentIndex2 = 0;
    let currentIndex3 = 0;

    //Escreve o texto de welcome 
    const typingIntervalWelcometxt = setInterval(() => {
      currentText1 += Text1[currentIndex1];
      setWelcomeTxt(currentText1);
      currentIndex1++;

      if (currentIndex1 === Text1.length) {
        clearInterval(typingIntervalWelcometxt);
      }

    }, writeDelay);

    //Escreve o texto com meu nome  
    const typingIntervalNametxt = setInterval(() => {
      currentText2 += Text2[currentIndex2];
      setNameTxt(currentText2);
      currentIndex2++;

      if (currentIndex2 === Text2.length) {
        clearInterval(typingIntervalNametxt);
      }

    }, writeDelay);

    //Escreve o texto que fala sobre minha área 
    const typingIntervalDevelopertxt = setInterval(() => {
      currentText3 += Text3[currentIndex3];
      setDeveloperTxt(currentText3);
      currentIndex3++;

      if (currentIndex3 === Text3.length) {
        clearInterval(typingIntervalDevelopertxt);
      }

    }, writeDelay);

    return () => {
      clearInterval(typingIntervalWelcometxt);
      clearInterval(typingIntervalNametxt);
      clearInterval(typingIntervalDevelopertxt);
    };
  }, []);


  return (
    <>
      <div className="initial-texts-container">
        <div className="Welcome-Text">
          <p>{welcomeTxt}</p>
        </div>
        <div className="Name-Text">
          <p>{nameTxt}</p>
        </div>
        <div className="Developer-Text">
          <p>{developerTxt}</p>
        </div>
        <div className="mt-4 Download-CV">
          <button className="cv" onClick={handleDownload} ><p>Download CV</p></button>

        </div>
      </div>
    </>
  )
}
export default InitialTexts;
