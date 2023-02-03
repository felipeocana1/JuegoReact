import { useState } from "react";
import "./App.css"
import { HeaderGame } from './headerGame';
import { Instrucciones } from "./instrucciones";
import { Juego } from "./juego";

function App() {

  const [estasJugando, setJuegoIniciado] = useState(false);
  const [vida, setVida] = useState(3);
  const [score, setScore] = useState(0);



  const cambiarEstadoJuego= (param)=>{
    setJuegoIniciado(param);
    setVida(3);
    setScore(0);
  }

  const establecerVida = ()=>{
    setVida(vida-1);

  }

  const establecerScore = ()=>{
    setScore(score+1);

  }


  return (
    <div className="App">
      <HeaderGame vidaPar={vida} scorePar={score} juegoTerminado={cambiarEstadoJuego}></HeaderGame>
      {estasJugando?<Juego establecerVida={establecerVida} establecerScore={establecerScore}></Juego>:<Instrucciones juegando={cambiarEstadoJuego}></Instrucciones>}
    </div>
  );
}

export default App;
