/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import DiretaFilho from "./DiretaFilho";

export default (props) => {
  return (
    <div>
      <DiretaFilho texto="filho 1" numero={20} bool={true} />
    </div>
  );
};
