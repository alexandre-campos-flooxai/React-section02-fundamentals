import React from "react";

export default (props) => {
  const [a, b] = [1, 2];
  const { c, d } = { c: 12, d: 45 };
  console.log(c, d);

  // const min = props.min ;
  // const max = props.max ;

  const { min, max } = props;
  const aleatorio = parseInt(Math.random() * (max - min) + min);

  return (
    <div>
      <h2>Valor aleatorio</h2>
      <p>
        <strong>Valor minimo:</strong>
        {min}
      </p>
      <p>
        <strong>Valor maximo:</strong>
        {max}
      </p>
      <p>
        <strong>Valor escolhido:</strong>
        {aleatorio}
      </p>
    </div>
  );
};
