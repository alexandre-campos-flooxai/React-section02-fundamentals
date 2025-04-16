import React from "react";
import IndiretaFilho from "./IndiretaFilho";
// eslint-disable-next-line
export default (props) => {
  // nome, idade, nerd
  function forneceInformacoes(nome, idade, nerd) {
    console.log(nome, idade, nerd);
  }
  return (
    <div>
      pai
      <IndiretaFilho quandoClicar={forneceInformacoes}></IndiretaFilho>
    </div>
  );
};
