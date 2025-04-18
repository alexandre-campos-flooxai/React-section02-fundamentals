import React from "react";
import "./App.css";

import Mega from "./components/mega/Mega";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParouImpar from "./components/condicional/ParouImpar";
import TabelaProdutos from "./repeticao/TabelaProdutos";
import ListaAlunos from "./repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";
import FamiliaMembro from "./components/basicos/FamiliaMembro";

// eslint-disable-next-line
export default () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="#13 - mega" color="#e7cba4">
          <Mega qtde={8} />
        </Card>

        <Card titulo="#12 - Contador" color="#600205">
          <Contador numeroInicial={10} />
        </Card>

        <Card titulo="#11 - Componente Controlado(Input)" color="#45b728">
          <Input />
        </Card>

        <Card titulo="#10 - Comunicacao Indireta" color="#72a5ae">
          <IndiretaPai />
        </Card>

        <Card titulo="#09 - Comunicacao Direta" color="#003f69">
          <DiretaPai />
        </Card>

        <Card titulo="#08 - Rederizacao" color="#50232e">
          <ParouImpar numero={20}></ParouImpar>
          <UsuarioInfo usuario={{ nome: "Alex" }}></UsuarioInfo>
        </Card>

        <Card titulo="#07 - Tabela de produtos" color="#79451d">
          <TabelaProdutos></TabelaProdutos>
        </Card>

        <Card titulo="#06 - Lista de alunos" color="#FF4C65">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#05 - Componente com filhos" color="#00C8F8">
          <Familia sobrenome="Ferreira">
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gustavo" />
          </Familia>
        </Card>

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
