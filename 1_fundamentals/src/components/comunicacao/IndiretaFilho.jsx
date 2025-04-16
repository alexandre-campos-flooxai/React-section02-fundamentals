import React from "react";
// eslint-disable-next-line
export default (props) => {
  const cb = props.quandoClicar;
  const gerarIdade = () => parseInt(Math.random() * 20) + 50;
  const gerarNerd = () => Math.random() > 0.5;
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={function (e) {
          props.quandoClicar("Paulo", 53, true);
        }}
      >
        Fornecer informacao
      </button>
      <button onClick={(_) => cb("Caio", gerarIdade(), gerarNerd())}>
        Fornecer informacao
      </button>
    </div>
  );
};
