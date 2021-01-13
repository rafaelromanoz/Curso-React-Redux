import './TabelaProdutos.css'
import React from "react";
import produtos from "../../../data/produtos";

export default (props) => {
  function getLinhas() {
    return produtos.map((produto) => {
      return (
        <tr key={produto.id}>
          <td>{produto.id}</td>
          <td>{produto.nome}</td>
          <td>RS${produto.preco}</td>
        </tr>
      );
    });
  }

  return (
    <div className="TabelaProdutos">
      <table border="1">
        <tr>
          <thead>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </thead>
          <tbody>{getLinhas()}</tbody>
        </tr>
      </table>
    </div>
  );
};
