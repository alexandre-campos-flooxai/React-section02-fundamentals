import React from "react";
import DiretaFilho from "./DiretaFilho";
// eslint-disable-next-line
export default (props) => {
  return (
    <div>
      <DiretaFilho nome="Alex" idade={20} nerd={true} />
      <DiretaFilho nome="Paulo" idade={18} nerd={false} />
      <DiretaFilho nome="Caio" idade={20} nerd={true} />
    </div>
  );
};
