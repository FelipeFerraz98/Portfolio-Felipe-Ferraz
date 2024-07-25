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
    justify-content: space-between; /* Espaça os elementos para que o último fique no final */
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
    max-width: 80%;
    justify-content: center;
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Alinha à esquerda */
    margin-top: 2rem;
    text-align: left;
`;

export const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start; /* Alinha à esquerda */
    justify-content: flex-start; /* Alinha à esquerda */
    margin-top: 1em;
`;

export const Title = styled.h2`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 72px;
    margin-bottom: 10px;
    line-height: 65px;
    animation: ${fadeIn} 2s forwards;
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

export const ImageWrapper = styled.img`
    display: flex;
    align-items: right;
    position: relative;
    border-radius: .5em;
    width: 50%;

    @media screen and (max-width: 768px) {
        width: 50%;
    }
`;

export const MouseWheelBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: auto; /* Empurra o MouseWheelBox para o final */
    padding-bottom: 1rem; /* Adiciona um pouco de espaçamento na parte inferior */
`;
