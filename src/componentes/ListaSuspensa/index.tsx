import React from "react";
import "./ListaSuspensa.css";

interface ListaSuspensaProps {
  aoAlterado: (valor: string) => void;
  label: string;
  valor: string;
  obrigatorio: boolean;
  itens: string[];
}

const ListaSuspensa = (props: ListaSuspensaProps) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.aoAlterado(evento.target.value)}
        value={props.valor}
        required={props.obrigatorio}
      >
        <option value=""></option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
