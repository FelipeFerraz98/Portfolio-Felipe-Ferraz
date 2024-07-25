import styled, { keyframes, css } from 'styled-components';

// Animação de fade-in
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// CSS para animação
const fadeAnimation = css`
  animation: ${fadeIn} 2s forwards;
`;

// Container principal
export const Container = styled.main`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center;
  opacity: 0; 
  transform: translateY(-20px); 

  ${({ inView }) => inView && css`
    opacity: 1;
    transform: translateY(0);
    ${fadeAnimation};
  `};

  margin-bottom: 5em;
  
  @media screen and (max-width: 768px) {
    max-width: 90%;
    margin-top: 80px;
  }
`;

// Caixa principal
export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
`;

export const MainBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  @media screen and (max-width: 768px) {
    max-width: 90%;
    margin-top: 80px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin-top: 2rem;
  padding-left: 2em; /* Adiciona padding à esquerda */
`;

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  margin-bottom: 10px;
  line-height: 65px;
  color: #fff;
  align-self: flex-start; /* Alinha o título à esquerda */

  @media screen and (max-width: 768px) {
    font-size: 48px;
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }
`;

export const Stroke = styled.div`
  width: 5em;
  border-bottom: 5px solid #007BFF;
  border-radius: 3em;
`;

// Container de imagens
export const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2em;
`;

// Imagem estilizada
export const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%; /* Certifica que a imagem não ultrapasse a altura do card */
  object-fit: cover; /* Garante que a imagem preencha o espaço disponível */
  transition: all 0.3s ease-in-out;
`;

// Sobreposição de imagem
export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

// Texto da sobreposição
export const OverlayText = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  padding: 1em;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
`;

// Cartão de imagem
export const Card = styled.div`
  position: relative;
  background-color: #2a2a2a;
  margin: 1em;
  border-radius: 10px;
  overflow: hidden;
  width: calc(100% / 4 - 2em);
  aspect-ratio: 9/16;
  transition: transform 0.3s ease, background-color 0.3s ease;
  display: flex; /* Adiciona flexbox para centralização */
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */

  &:hover {
    transform: scale(1.05);
    background-color: #333333;
    cursor: pointer;
    
    ${Image} {
      filter: brightness(0.7);
    }

    ${ImageOverlay} {
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    width: calc(100% / 2 - 2em);
  }
  
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
