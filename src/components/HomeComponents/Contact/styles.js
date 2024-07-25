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
  
  @media screen and (max-width: 768px) {
    max-width: 90%;
    margin-top: 80px;
  }
`;


export const CardBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Card = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    background-color: #2a2a2a;
    margin: 2em;
    padding: 1em 3em;
    border-radius: .5em;
    align-items: center;
    text-align: center;
`;


export const Image = styled.img`
    width: 20px;
    margin: 1em;
`

export const TextContent = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #fff;
    
    &:hover {
    color: #007BFF;
    transition: color 0.5s ease-in-out;
  }
`;

export const Title = styled.h2` 
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

export const Stroke = styled.div`
  width: 5em;
  border-bottom: 5px solid #007BFF;
  border-radius: 3em;
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

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  max-width: 80%;

  img {
    cursor: pointer;
    width: 30px;
    border-bottom: 5px solid transparent; /* Define o border-bottom inicial como transparente */
    padding-bottom: 4px;

    &:hover {
      border-bottom-color: #007BFF; /* Apenas muda a cor do border-bottom */
      transition: border-bottom-color 0.5s ease-in-out; /* Animação para a mudança de cor do border-bottom */
    }
  }
`;


