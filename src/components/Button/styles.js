import styled from 'styled-components';

export const ButtonContainer = styled.button`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 18px;
  position: relative;
  margin: auto;
  cursor: pointer;
  padding: 1em 2.5em 1em 2.5em;
  border: none;
  border-radius: 0.5em;
  background: #007BFF;
  transition: all 0.1s linear;
  box-shadow: 0 0.4em 1em rgba(0, 0, 0, 0.1);

  &:active {
    transform: scale(0.95);
  }

  span {
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 0.8em 2.2em; /* Ajusta o padding para dispositivos móveis */
    font-size: 14px; /* Ajusta o tamanho da fonte para dispositivos móveis */
  }
`;