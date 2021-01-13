import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/basicos/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import ListaAlunos from "./components/basicos/repeticao/ListaAlunos"
import "./App.css";


export default () => (
  <div className="App">
    <h1>Fundamentos de React</h1>
    <div className="Cards">
    <Card titulo="#06 - Repeticao" color="#FA6900">
        <ListaAlunos></ListaAlunos>
      </Card>
      <Card titulo="#05 - Componente com filhos" color="#DC2742">
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Pedro"/>
          <FamiliaMembro nome="Ana"/>
          <FamiliaMembro nome="Gustavo"/>
        </Familia>
      </Card>
      <Card titulo="#04 - Desafio aleatório" color="#FA6900">
        <Aleatorio min={1} max={60} />
      </Card>
      <Card titulo="#03 - Fragmento" color="#E94C6F ">
        <Fragmento />
      </Card>
      <Card titulo="#02 - Com parâmetro" color="#E8B71A">
        <ComParametro
          titulo="Situação do aluno"
          aluno="Rafael"
          nota={9.3}
          color="#00C8F8"
        />
      </Card>
      <Card titulo="#01 - Primeiro componente" color=" #D96459 ">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
