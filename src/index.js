import "./index.css";
import React from "react";
// serve para renderizar na tela
import ReactDOM from "react-dom";
import App from './App'
//render é um método para renderizar na tela (Prim paramentro: oque vai ser renderizado Seg param:qual elemento será)
// Está renderizando o conteúdo na página oque vai ser renderizado primeiro,depois o elemento onde ele vai ser renderizado
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
                   