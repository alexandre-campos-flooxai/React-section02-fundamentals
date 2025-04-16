import React from "react";
import "./App.css";

import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

export default () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="#04 - Desafio aleatorio" color="#FA6900">
          <Aleatorio min={1} max={60} />{" "}
        </Card>
        <Card titulo="#03 - Fragmento" color="#E8B71A">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parametro" color="#E94C6f">
          {" "}
          <ComParametro
            title="Situacao do aluno"
            aluno="Pedro Silva"
            nota={9.3}
          />
        </Card>

        <Card titulo="#01 - Primeiro componente" color="#588C73">
          <Primeiro />
        </Card>
      </div>{" "}
    </div>
  );
};
