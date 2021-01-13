import react from "react";

export default (props) => {
  const isPar = props.numero % 2 === 0;
  // caso isPar for verdadeiro ( ? ) escrever par, se não ( : ) impar
  return <div>{isPar ? <span>Par</span> : <span>Impar</span>}</div>;
};
