import './TabelaProdutos.css'
import React from "react";

import produtos from "../../data/produtos";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  function getLinhas() {
    return produtos.map((produto) => {
      return (
        <tr>
          <td>{produto.id}</td>
          <td>{produto.nome}</td>
          <td>R$ {produto.valor}</td>
        </tr>
      );
    });
  }

  return (
    <div className="TabelaProdutos">
      <table>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Valor</th>
          </tr>
        <tbody>
          <tr>{getLinhas()}</tr>
        </tbody>
      </table>
    </div>
  );
};
