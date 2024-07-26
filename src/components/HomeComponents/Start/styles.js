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
    height: 101vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5em;
    animation: ${fadeIn} 1.5s forwards;

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
    flex-direction: row;
    align-items: center;
    text-align: center;
    max-width: 90%; /* Aumenta o tamanho máximo para 90% */
    justify-content: center;

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* Alinha ao centro */
    margin-top: 2rem;
    text-align: center; /* Alinha o texto ao centro */

    @media screen and (max-width: 768px) {
        align-items: center;
        text-align: center;
    }
`;

export const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; /* Alinha ao centro */
    justify-content: center; /* Centraliza os botões */
    margin-top: 1em;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

export const Title = styled.h2`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 80px; /* Aumenta o tamanho da fonte */
    margin-bottom: 10px;
    line-height: 75px; /* Ajusta o line-height para manter proporção */
    animation: ${fadeIn} 2s forwards;
    color: #fff;

    @media screen and (max-width: 768px) {
        font-size: 60px; /* Ajusta o tamanho da fonte para telas menores */
        width: 90%;
        margin: 0 auto;
        text-align: center;
    }
`;

export const TextContent = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 36px; /* Aumenta o tamanho da fonte */
    line-height: 40px; /* Ajusta o line-height para manter proporção */
    width: 700px; /* Aumenta a largura do texto */
    animation: ${fadeIn} 2.5s forwards;
    color: #fff;

    @media screen and (max-width: 768px) {
        font-size: 28px;
        width: 90%;
        text-align: center;
        margin: 0 auto;
    }
`;

export const TextEmphasis = styled.span`
    color: #007BFF;
`;

export const ImageWrapper = styled.img`
    display: flex;
    align-items: center;
    position: relative;
    border-radius: .5em;
    width: 60%; /* Aumenta a largura da imagem */

    @media screen and (max-width: 768px) {
        width: 80%; /* Ajusta a largura para telas menores */
        margin-bottom: 20px;
    }
`;

export const MouseWheelBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: auto;
    padding-bottom: 1rem;
`;