import "./App.css";
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmentos from "./components/basicos/Fragmentos";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./condicional/ParOuImpar";
import UsuarioInfo from "./condicional/UsuarioInfo";
import DiretaPai from "./comunicacao/DiretaPai";
import IndiretaPai from "./comunicacao/IndiretaPai";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="#09 - Comunicação Indireta" color="#8bad39">
          <IndiretaPai />
        </Card>

        <Card titulo="#09 - Comunicação direta" color="#59323c">
          <DiretaPai />
        </Card>

        <Card titulo="#08 - Par ou Impar" color="#982395">
          <ParOuImpar numero={21}/>
          <UsuarioInfo usuario={{nome: 'Felipe'}}/>
        </Card>

        <Card titulo="#07 - Desafio repetição" color="#FF432E">
          <TabelaProdutos />
        </Card>

        <Card titulo="#06 - Repetição de alunos" color="#FF4C65">
          <ListaAlunos />
        </Card>

        <Card titulo="#05 - Componente com filhos" color="#00C8FC">
          <Familia sobrenome="Panizio">
            <FamiliaMembro nome="Felipe" />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Lari" />
          </Familia>
        </Card>

        <Card titulo="#04 - desafio aleatorio" color="#FA6900">
          <Aleatorio max={1000} min={0} />
        </Card>

        <Card titulo="#03 - Fragmentos" color="#E94C6F">
          <Fragmentos />
        </Card>

        <Card titulo="#02 - Com Parametros" color="#E8B71A">
          <ComParametro
            titulo="Situação do aluno"
            aluno="Felipe Panizio: "
            nota={9.4}
          />
        </Card>

        <Card titulo="#01 - Primeiro Componente" color="#588C73">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
};
