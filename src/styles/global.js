import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  
  body {
    background: #3a3a3a;
    color: #FFFFFF;
  }

  /* Estiliza a largura e a altura da barra de rolagem */
  ::-webkit-scrollbar {
    width: 12px; /* Largura da barra de rolagem vertical */
    height: 12px; /* Altura da barra de rolagem horizontal */
  }

  /* Estiliza o fundo da barra de rolagem */
  ::-webkit-scrollbar-track {
    background: transparent; /* Faz o trilho da barra de rolagem transparente */
  }

  /* Estiliza a parte que o usuário pode arrastar */
  ::-webkit-scrollbar-thumb {
    background-color: #007BFF; /* Cor azul da barra de rolagem */
    border-radius: 10px; /* Arredondamento das bordas da barra */
    border: 3px solid transparent; /* Cria espaçamento ao redor do thumb */
    background-clip: padding-box; /* Ajusta para que o espaçamento não afete o background */
  }

  /* Estiliza a barra de rolagem quando o usuário passa o mouse */
  ::-webkit-scrollbar-thumb:hover {
    background: #0056b3; /* Cor da barra ao passar o mouse (um pouco mais escura) */
  }

  /* Remove as setas da barra de rolagem */
  ::-webkit-scrollbar-button {
    display: none;
    width: 0;
    height: 0;
  }

  /* Firefox */
  body {
    scrollbar-width: thin; /* Define a barra como fina */
    scrollbar-color: #007BFF transparent; /* Cor do thumb azul e trilho transparente */
  }
`;
