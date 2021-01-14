import React , {useState} from "react";
import IndiretaFilho from "./IndiretaFilho";
// o usestate cria estato 
// essa função vai retornar um array com 2 posições 
//primeira:valor 
//segunda:função para alterar o valor
export default (props) => {
    const [a,b]=[1,2] 
    const [nome,setNome]=useState('?')
    const [idade,setIdade]=useState(0)
    const [nerd,setNerd]=useState(false)
       
    function fornecerInformacoes(nome,idade,nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }
  return (
    
     
    <div>
      <div>
          <span> {nome} </span>
          <span><strong> {idade} </strong></span>
          <span> {nerd ? 'Verdadeiro' : 'Falso'} </span>
      </div>
      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  );
  }
