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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  opacity: 0; /* Inicia com opacidade zero */
  transform: translateY(-20px); /* Inicia fora da tela */

  ${({ inView }) => inView && css`
    opacity: 1;
    transform: translateY(0);
    ${fadeAnimation};
  `};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 90%;
    margin-top: 80px;
  }
`;

export const Stroke = styled.div`
  width: 5em;
  border-bottom: 5px solid #007BFF;
  border-radius: 3em;
`;

export const Title = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  margin-top: 150px;
  margin-bottom: 10px;
  line-height: 65px;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 48px;
    width: 90%;
    margin: 0 auto;
    margin-top: 120px;
    text-align: center;
  }
`;

export const TextContent = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 30px;
  margin-top: 1em;
  margin-left: 3em;
  width: 1300px;
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
    align-items: center;
    text-align: center;
    max-width: 80%;
    justify-content: center;
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start; 
    text-align: left;
    margin-top: 2rem;
`;