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
  animation: ${fadeIn} 4s forwards;
`;

export const Container = styled.main`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column; 
  justify-content: space-between; 
  align-items: center;

  opacity: 0; /* Inicia com opacidade zero */
  transform: translateY(-20px); /* Inicia fora da tela */

  ${({ inView }) => inView && css`
    opacity: 1;
    transform: translateY(0);
    ${fadeAnimation};
  `};

  margin-bottom: 5em;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
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
    flex-direction: column;
    max-width: 90%;
    margin-top: 80px;
  }
`;

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left; 
  max-width: 80%;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
  text-align: left;
`;

export const Title = styled.h2`  /* Ajuste aqui para que o título seja h2 */
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  margin-bottom: 10px;
  line-height: 65px;
  animation: ${fadeIn} 1.5s forwards;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 48px;
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }
`;

export const TextContent = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 30px;
  width: 620px;
  animation: ${fadeIn} 2.5s forwards;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    width: 90%;
    text-align: center;
    margin: 0 auto;
  }
`;

export const TextEmphasis = styled.span`
  color: #007BFF;
`;

export const Stroke = styled.div`
  width: 5em;
  border-bottom: 5px solid #007BFF;
  border-radius: 3em;
`;

export const CardBox = styled.div`
  @media screen and (max-width: 768px) {
    width: 40%;
    text-align: center;
    margin: 0 auto;
  }
`;
