/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
  const isPar = props.numero % 2 === 0;
  return (
    <div>
      <div>
        <p>Número: {props.numero}</p>
      </div>
      {isPar ? <span>par</span> : <span>Impar</span>}
    </div>
  );
};
