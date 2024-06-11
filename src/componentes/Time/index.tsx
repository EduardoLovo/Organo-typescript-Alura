import { IColaborador } from "../../compartilahdo/IColaboradores/IColaborador";
import Colaborador from "../Colaborador";
import "./Time.css";

interface TimeProps {
  corPrimaria: string;
  corSecundaria: string;
  nome: string;
  colaboradores: IColaborador[];
}

const Time = (props: TimeProps) => {
  const cssCorPrimaria = { borderColor: props.corPrimaria };
  const cssCorSecundaria = { backgroundColor: props.corSecundaria };
  return (
    props.colaboradores.length > 0 && (
      <section className="time" style={cssCorSecundaria}>
        <h3 style={cssCorPrimaria}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corDeFundo={props.corPrimaria}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
