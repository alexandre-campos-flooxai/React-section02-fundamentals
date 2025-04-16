import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";
// eslint-disable-next-line
export default (props) => {
  const [nome, setNome] = useState("?");
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);

  function forneceInformacoes(nome, idade, nerd) {
    setNome(nome);
    setIdade(idade);
    setNerd(nerd);
  }
  return (
    <div>
      <div>
        <span>{nome}</span>
        <span>{idade}</span>
        <span>{nerd ? "Verdadeirao" : "Falso"}</span>
      </div>
      <IndiretaFilho quandoClicar={forneceInformacoes}></IndiretaFilho>
    </div>
  );
};
