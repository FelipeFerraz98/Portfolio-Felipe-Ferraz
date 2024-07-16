import styled, { keyframes } from 'styled-components';

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

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 100px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    animation: ${fadeIn} 1.5s forwards;
    
    @media screen and (max-width: 768px) {
        flex-direction: column; 
        max-width: 90%;
        margin-top: 80px;
    }
`;

export const WelcomeBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 2rem;
`;

export const CardBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
`;

export const Card = styled.div`
    background-color: #2a2a2a;
    margin: 2em;
    padding: 5em;
    border-radius: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 200px;
    cursor: pointer;
    transition: all 0.3s ease-in-out; /* Transição suave para a animação */

    &:hover {
        transform: scale(1.1); /* Aumenta o tamanho em 10% */
        background-color: #007BFF; /* Altera a cor de fundo ao passar o mouse */
    }

    @media screen and (max-width: 768px) {
        width: 100%; /* Em telas menores, ocupa toda a largura disponível */
    }
`;

export const Image = styled.img`
    width: 150px;
    height: 150px; /* Definir a altura igual à largura para garantir que seja uma bolinha perfeita */
    object-fit: cover; /* Manter a proporção da imagem e cobrir a área especificada */
    border-radius: 50%; /* Aplicar o border-radius para criar o formato circular */
`;

export const TextContent = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px; /* Reduzindo o tamanho para melhor visualização no exemplo */
    line-height: 22px; /* Ajustando o line-height conforme necessário */
    margin-top: 10px; /* Espaçamento entre a imagem e o texto */
    width: 100%; /* Garante que o texto ocupe toda a largura do card */

    animation: ${fadeIn} 2.5s forwards;

    color: #fff;

    @media screen and (max-width: 768px) {
        font-size: 16px; /* Ajustando o tamanho do texto para dispositivos menores */
    }
`;

export const Title = styled.h1`
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
        margin-top: 120px;
        text-align: center;
    }
`;