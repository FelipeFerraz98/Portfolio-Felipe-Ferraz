import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: #3a3a3a;
  color: #ffffff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

export const NavContainer = styled.div`
  align-items: right;
`

export const Text = styled.p`
  font-family: 'Montserrat';
  text-align: left;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  position: relative; /* Adiciona position relativa para alocar submenu */

  &:hover {
    color: #007BFF;
    transition: color 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
  cursor: pointer;
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    text-align: center;
  }

  ul li {
    margin-right: 20px;
    position: relative; /* Permite que o submenu seja posicionado relativo ao item de menu */
  }

  ul li:last-child {
    margin-right: 3em;
  }

  @media (max-width: 768px) {
    display: ${props => (props.isMobileMenuOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    background-color: #3a3a3a;
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  font-size: 30px;
  cursor: pointer;
  z-index: 1000; /* Certifique-se de que o botão está acima de outros elementos */

  @media (max-width: 768px) {
    margin-right: 1.5em;
    display: block;
  }
`;

export const MobileNav = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  background-color: #3a3a3a;
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul li {
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

// Estilo para o menu de idiomas
export const LanguageMenu = styled.div`
  position: absolute;
  top: 100%; /* Coloca o submenu logo abaixo do texto "language" */
  left: 50%; /* Ajusta para começar alinhado ao centro do texto de idioma */
  transform: translateX(-50%); /* Centraliza o submenu em relação ao texto "language" */
  background-color: #3a3a3a;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 10;
  padding: 10px 0; /* Adiciona um espaçamento vertical */
  padding-right: 3em;

  /* Certifique-se de que o submenu fique alinhado com o texto de idioma */
  li {
    width: max-content;
  }

`;

// Estilo para cada opção de idioma
export const LanguageOption = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #fff;

  img {
    width: 25px;
    height: 25px; /
    object-fit: cover; 
    border-radius: 50%;
    margin-right: 10px;
  }

  &:hover {
    background-color: #007BFF;
  }
`;
