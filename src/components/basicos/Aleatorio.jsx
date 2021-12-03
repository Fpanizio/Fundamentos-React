import React from "react";

export default function Aleatorio(props) {
    const aleatorio = parseInt(Math.random() * (props.max - props.min)) + props.min
  return (
    <div>
      <h2>Valor aleatório</h2>
      <p>Valor mínimo: {props.min} </p>
      <p>Valor máximo: {props.max} </p>
      <p>Valor escolhido: {aleatorio} </p>
    </div>
  );
}
