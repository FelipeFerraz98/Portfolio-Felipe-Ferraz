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
  align-items: flex-start;
  flex-grow: 1;

  @media screen and (max-width: 768px) {
    max-width: 90%;
    margin-top: 80px;
  }
`;

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin-top: 2rem;
  padding-left: 2em;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    padding-left: 0;
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
  align-self: flex-start;
  white-space: normal; /* Permite quebra de linha */

  @media screen and (max-width: 768px) {
    font-size: 48px;
    width: 100%;
    text-align: left;
  }
`;

export const SubTitle = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 52px;
  margin-bottom: 10px;
  color: #fff;
  white-space: normal; /* Permite quebra de linha */
  width: 900px;

  @media screen and (max-width: 768px) {
    font-size: 36px;
    width: 100%;
    text-align: left;
  }
`;

export const DetailsTitle = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 42px;
  margin-bottom: 10px;
  color: #fff;
  white-space: normal; /* Permite quebra de linha */

  @media screen and (max-width: 768px) {
    font-size: 32px;
    width: 100%;
    text-align: left;
    margin-left: .5em;
  }
`;

export const TextContent = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  margin-top: 1em;
  width: 100%; /* Ajusta a largura para 100% */
  color: #fff;
  word-break: break-word; /* Permite quebra de palavras longas */
  white-space: normal; /* Permite quebra de linha normal */
  overflow-wrap: break-word; /* Quebra palavras longas */

  @media screen and (max-width: 768px) {
    font-size: 18px;
    text-align: left;
    margin: 0;
    padding-left: 1.5em; 
  }
`;

export const DetailsBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 1em;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-left: 1em;
  }
`;

export const HeightStroke = styled.div`
  position: relative;
  margin: 0;
  width: 5px;
  height: 100%;
  background-color: #007BFF;
  border-radius: 5px;
  margin-left: 1.5em;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: .5em;
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

export const DetailsTextBox = styled.div`
  margin-left: 1em;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    text-align: left;
  }
`;

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: #007BFF;
  border-radius: 50%;
  margin: 1em;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 0;
    margin-top: 1em;
    margin-bottom: 1em;
  }
`;

export const ListItem = styled.li`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: #fff;
  margin: 0;
  padding: 0;
  word-break: break-word; /* Permite quebra de palavras longas */
  white-space: normal; /* Permite quebra de linha normal */
  overflow-wrap: break-word; /* Quebra palavras longas */
  width: 900px;

  @media screen and (max-width: 768px) {
    width: 60vw;
    font-size: 18px;
  }
`;

export const ListItemContent = styled.div`
  width: 100%; /* Ajusta a largura para 100% */
  word-break: break-word; /* Permite quebra de linha das palavras */
  white-space: normal; /* Permite quebra de linha */
  overflow-wrap: break-word; /* Quebra palavras longas */
`;
