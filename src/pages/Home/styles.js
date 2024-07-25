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

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%; /* Certifica-se de que o TextBox use a largura total */
  height: 40vh;

    ${({ inView }) => inView && css`
    opacity: 1;
    transform: translateY(0);
    ${fadeAnimation};
  `};
  @media screen and (max-width: 768px) {
    max-width: 90%;
    margin-top: 80px;
  }

`;

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  margin-bottom: 10px;
  line-height: 65px;
  color: #fff;
  text-align: center; /* Centraliza o texto horizontalmente */

  @media screen and (max-width: 768px) {
    font-size: 48px;
    width: 90%;
    margin: 0 auto;
  }
`;

export const Stroke = styled.div`
  width: 52em;
  border-bottom: 5px solid #007BFF;
  border-radius: 3em;
`;
