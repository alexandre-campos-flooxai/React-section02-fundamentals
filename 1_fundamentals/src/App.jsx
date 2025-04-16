import React from "react";

import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

export default function App(props){
    return(
        <div id="app">
            <Fragmento/>
            <ComParametro 
                title="Situacao do aluno" 
                aluno="Pedro Silva" 
                nota={9.3} />
            <Primeiro />
        </div>
    )
}