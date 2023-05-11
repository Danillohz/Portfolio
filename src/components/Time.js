import { useEffect, useState, createContext } from "react";
import Header from "./Header";

const SecondsContext = createContext();

function Time() {
  const [seconds, setSeconds] = useState(0);

  //faz o incremento nos segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    //Serve como uma ponte para outros componentes pergarem o valor dos segundos
    <SecondsContext.Provider value={seconds}>
        <Header></Header>
    </SecondsContext.Provider>
  );
};

export {Time, SecondsContext};