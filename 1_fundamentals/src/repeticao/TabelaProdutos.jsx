import React from "react";
import produtos from "../data/protutos";
import "./TabelaProdutos.css";
// eslint-disable-next-line
export default (props) => {
  function getLinhas() {
    return produtos.map((produto, i) => {
      return (
        <tr key={produto.id} className={i % 2 == 0 ? "Par" : ""}>
          <td>{produto.id}</td>
          <td>{produto.nome}</td>
          <td>R${produto.preco}</td>
        </tr>
      );
    });
  }
  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>nome</th>
            <th>preco</th>
          </tr>
        </thead>
        <tbody>{getLinhas()}</tbody>
      </table>
    </div>
  );
};
