import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/basicos/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import ListaAlunos from "./components/basicos/repeticao/ListaAlunos"
import TabelaProdutos from "./components/basicos/repeticao/TabelaProdutos"
import ParOuImpar from "./components/condicional/ParOuImpar"
import UsuarioInfro from "./components/condicional/UsuarioInfo"
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import Input from "./components/formulario/Input"
import Contador from "./components/contador/Contador"
import Mega from "./components/mega/Mega"
import "./App.css";


export default () => (
  <div className="App">
    <h1>Fundamentos de React</h1>
    <div className="Cards">
      <Card titulo="# 13 = Projeto megassena" color= "#FF2321">
        <Mega></Mega>
      </Card>
      <Card titulo = "# 12 = Projeto contador com classe " color = "#FAC8BF ">
        <Contador numeroInicial={100}></Contador>
      </Card>
      <Card titulo = "# 11 = Componente controlado (input) " color="#FF5108">
        <Input></Input>
      </Card>
      <Card titulo = "# 10 = Comunicação indireta " color= "#FF9700">
      <IndiretaPai></IndiretaPai>
      </Card>
    <Card titulo= "# 09 = Comunicação direta " color ="  #D79C8C ">
         <DiretaPai/>
    </Card>
        <Card titulo="08 = Renderização condicional" color=" #3A0256">
        <ParOuImpar numero ={20}></ParOuImpar>
        <UsuarioInfro usuario={{nome:'Fernando'}}/>
        <UsuarioInfro usuario={{email:'epq@bla'}}/>
        </Card>
    <Card titulo =" 07-repetição " color = "#FFE600">
        <TabelaProdutos></TabelaProdutos>
    </Card>
    <Card titulo="#06 - Repeticao" color=" #9C0F5F ">
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
