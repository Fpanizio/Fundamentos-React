/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
  function fornecerInformacoes(nome, idade, nerd) {
    console.log(nome, idade, nerd);
  }
  return (
    <div>
      pai
      <IndiretaFilho quandoClicar={fornecerInformacoes} />
    </div>
  );
};
