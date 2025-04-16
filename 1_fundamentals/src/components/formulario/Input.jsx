import React, { useState } from "react";
// eslint-disable-next-line
export default (props) => {
  const [valor, setValor] = useState("Inicial");
  function quandoMudar(e) {
    setValor(e.target.valor);
    console.log(e.target.value);
  }
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}></div>
      {/*controlado, vincula a um estado para mudar o valor  */}
      <input value={valor} onChange={quandoMudar} />
      {/*apenas leitura */}
      <input value={valor} readOnly />
      {/*nao controlado*/}
      <input value={undefined} />
    </div>
  );
};
