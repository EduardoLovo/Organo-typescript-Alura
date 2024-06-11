import "./CampoTexto.css";

interface CampoTexoProps {
  aoAlterado: (valor: string) => void;
  label: string;
  valor: string;
  placeholder: string;
  obrigatorio?: boolean;
  tipo?: "text" | "password" | "date" | "email" | "number";
}

const CampoTexto = ({
  aoAlterado,
  valor,
  placeholder,
  obrigatorio = false,
  label,
  tipo = "text",
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
        type={tipo}
      />
    </div>
  );
};

export default CampoTexto;
