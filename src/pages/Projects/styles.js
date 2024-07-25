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
    min-height: 101vh;
    margin-top: 6em;
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

export const RepoList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
`;

export const RepoCard = styled.a`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* Centraliza o conteúdo no eixo horizontal */
    width: 250px;
    height: 350px; /* Ajuste a altura do card conforme necessário */
    background-color: #282c34;
    border-radius: 8px;
    color: white;
    text-decoration: none;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }

    h3 {
        margin-bottom: 10px;
        text-align: center;
    }

    p {
        margin-top: 10px;
        color: #c9d1d9;
        text-align: center; /* Centraliza o texto */
    }
`;

export const ErrorText = styled.p`
    color: red;
    font-size: 18px;
`;

export const Image = styled.img`
  width: 90%; /* Ajuste a largura conforme necessário */
  min-height: 20vh;
  max-height: 20vh;
  object-fit: contain; /* Garante que a imagem preencha o espaço disponível sem cortar */
  margin-bottom: 10px; /* Espaçamento inferior */
  transition: all 0.3s ease-in-out;
`;

