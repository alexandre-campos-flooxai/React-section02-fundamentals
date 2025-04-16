import React from "react";

import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro"

export default () => {
    return(
        <div id="app">
            <h1>Fundamentos React</h1>
            <Aleatorio min={1} max={60}/>
            <Fragmento/>
            <ComParametro 
                title="Situacao do aluno" 
                aluno="Pedro Silva" 
                nota={9.3} />
            <Primeiro />
        </div>)
    
};