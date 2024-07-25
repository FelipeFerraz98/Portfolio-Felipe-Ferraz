import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeAnimation = css`
  animation: ${fadeIn} 2s forwards;
`;

export const Container = styled.main`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: flex-start;
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

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza os elementos internos */
  text-align: left;
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

export const SubTitle = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 52px;
  margin-bottom: 10px;
  color: #fff;
  white-space: nowrap; /* Impede que o texto quebre */

  @media screen and (max-width: 768px) {
    font-size: 48px;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    white-space: normal; /* Permite quebra de linha em telas pequenas */
  }
`;

export const DetailsTitle = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 42px;
  margin-bottom: 10px;
  color: #fff;
  white-space: nowrap; /* Impede que o texto quebre */

  @media screen and (max-width: 768px) {
    font-size: 48px;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    white-space: normal; /* Permite quebra de linha em telas pequenas */
  }
`;

export const TextContent = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 30px;
  margin-top: 1em;
  width: 1200px;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    width: 90%;
    text-align: center;
    margin: 0 auto;
    white-space: normal; /* Permite quebra de linha em telas pequenas */
  }
`;

export const DetailsBox = styled.div`
  display: flex;
  align-items: flex-start; /* Alinha os itens à esquerda */
  margin-top: 1em;
`;

export const HeightStroke = styled.div`
  position: relative;
  margin: 0;
  width: 5px;
  height: 100%;
  background-color: #007BFF;
  border-radius: 5px;
  margin-left: 1.5em;
`;

export const TextEmphasis = styled.span`
  color: #007BFF;
`;

export const Stroke = styled.div`
  width: 5em;
  border-bottom: 5px solid #007BFF;
  border-radius: 3em;
`;


export const DetailsTextBox = styled.div`
  margin-left: 2em;
`;

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: #007BFF;
  border-radius: 50%;
  margin: 1em;

`;

export const ListItem = styled.li`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 30px;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;


