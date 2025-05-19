import React from "react";
import { useEffect, useState } from "react";

const Atualizatitulo = () => {
  let [cont, setcont] = useState(0);

  useEffect(() => {
    document.title = `Você Clicou ${cont} Vezes`;
  }, []);

  return <div>
    <p>Contador: {cont}</p>
    <button onClick={() => setcont(cont + 1)}>Aumentar</button>
  </div>;
};

export default Atualizatitulo;
