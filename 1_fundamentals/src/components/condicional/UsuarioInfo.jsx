import React from "react";
import If, { Else } from "./If";

// eslint-disable-next-line
export default (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja bem vindo <strong>{usuario.nome}!</strong>
        <Else>
          Seja bem vindo <strong>amigo!</strong>
        </Else>
      </If>
    </div>
  );
};
