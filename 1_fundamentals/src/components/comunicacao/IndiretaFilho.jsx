import React from "react";
// eslint-disable-next-line
export default (props) => {
  const cb = props.quandoClicar;
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
      <button onClick={(_) => cb("Caio", 33, false)}>
        Fornecer informacao
      </button>
    </div>
  );
};
