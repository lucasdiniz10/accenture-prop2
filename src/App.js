import { useState } from "react";
import ComponenteFilho from './components/ComponenteFilho'

import './App.css';

function App() {
  const [estadoPai, setEstadoPai] = useState('nao clicou');
  const [estadoFilho, setEstadoFilho] = useState('nao clicou');
  const handleClick = () => {
    setEstadoFilho('clicou')
  }

  return (
    <div>
      <h1>Botão localizado no componente filho {estadoPai}</h1>
      <button onClick={handleClick}>Clique aqui para alterar o componente filho</button>
      <ComponenteFilho
        setEstadoPai={setEstadoPai}
        estadoFilho={estadoFilho}
      />
    </div>
  );
}

export default App;
