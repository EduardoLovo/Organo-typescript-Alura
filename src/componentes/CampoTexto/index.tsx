import "./CampoTexto.css";

interface CampoTexoProps {
  aoAlterado: (valor: string) => void;
  label: string;
  valor: string;
  placeholder: string;
  obrigatorio: boolean;
}

const CampoTexto = ({
  aoAlterado,
  valor,
  placeholder,
  obrigatorio,
  label,
}: CampoTexoProps) => {
  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        onChange={aoDigitado}
        value={valor}
        placeholder={placeholder}
        required={obrigatorio}
      />
    </div>
  );
};

export default CampoTexto;
