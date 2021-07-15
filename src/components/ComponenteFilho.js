import React from 'react';

// import { Container } from './styles';

function ComponenteFilho(props) {
  const handleClick = () => {
    props.setEstadoPai('clicou')
  }

  return (
    <div>
      <h1>Botão localizado no componente pai {props.estadoFilho}</h1>
      <button onClick={handleClick}>Clique aqui para alterar o componente pai</button>
    </div>
  );
}

export default ComponenteFilho;