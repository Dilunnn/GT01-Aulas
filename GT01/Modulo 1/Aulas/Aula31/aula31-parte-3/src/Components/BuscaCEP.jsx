import { useEffect } from "react";
import { useState } from "react";

const BuscaCEP = () => {
  let [cep, setcep] = useState("");
  let [clicou, setclicou] = useState(0)
  let [endereco, setendereco] = useState('')

  useEffect(() => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((resposta) => resposta.json())
      .then((resposta) => {
        console.log(resposta);
        setendereco(resposta)
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, [clicou]);

  return (
    <div>
      
        <label htmlFor="cep">Digite seu CEP:</label>
        <input
          onChange={(e) => setcep(e.target.value)}
          maxLength={8}
          type="text"
          name="cep"
          id="cep"
        />{" "}
        <br />
        <button onClick={() => setclicou(clicou + 1)} >Enviar</button> <br />
      
      <h2>Cep digitado: {endereco.cep}</h2>
      <h2>DDD do cep: {endereco.ddd}</h2>
      <h2>logradouro: {endereco.logradouro}</h2>
      <h2>Estado: {endereco.uf}</h2>
    </div>
  );
};

export default BuscaCEP;
