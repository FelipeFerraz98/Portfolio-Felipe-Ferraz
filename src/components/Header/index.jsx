import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  HeaderWrapper,
  Nav,
  Logo,
  Text,
  HamburgerMenu,
  MobileNav,
  LanguageMenu,
  LanguageOption
} from './styles';
import logoimg from '../../assets/logo.png';

import { useTranslation } from 'react-i18next';

// Importação de bandeiras
import brFlag from '../../assets/Languages/Brazil.jpg';
import usFlag from '../../assets/Languages/USA.jpg';

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams(); // Obtém o idioma da URL atual
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const handleClickHome = () => {
    navigate(`/${lang}/home`); // Redireciona para /:lang/home

    window.scrollTo({ top: 0, behavior: 'smooth' }); //Garante começar no topo de home
    
    setIsMobileMenuOpen(false);
  };

  const handleClickAbout = () => {
    handleClickHome()
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } // Redireciona para about
    setIsMobileMenuOpen(false);
  };

  const handleClickContact = () => {
    handleClickHome()
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } // Redireciona para contact
    setIsMobileMenuOpen(false);
  };


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const handleChangeLanguage = (newLang) => {
    if (newLang !== lang) {
      navigate(`/${newLang}/home`); // Redireciona para o idioma selecionado
      i18n.changeLanguage(newLang); // Atualiza o idioma do i18n
    }
    setIsLanguageMenuOpen(false); // Fecha o submenu após a troca de idioma
  };

  return (
    <HeaderWrapper>
      <Logo src={logoimg} alt="Logo da Empresa" onClick={handleClickHome} />
      <HamburgerMenu onClick={toggleMobileMenu}>
        &#9776; {/* Código do menu hambúrguer */}
      </HamburgerMenu>
      <Nav isMobileMenuOpen={isMobileMenuOpen}>
        <ul>
          <li><Text onClick={handleClickHome}>{t('header.home')}</Text></li>
          <li><Text onClick={handleClickAbout}>{t('header.about')}</Text></li>
          <li><Text onClick={handleClickContact}>{t('header.contact')}</Text></li>
          <li>
            <Text onClick={toggleLanguageMenu}>
              {t('header.language')}
            </Text>
            {isLanguageMenuOpen && (
              <LanguageMenu>
                <LanguageOption onClick={() => handleChangeLanguage('pt')}>
                  <img src={brFlag} alt="Bandeira do Brasil" /> <Text>Português</Text>
                </LanguageOption>
                <LanguageOption onClick={() => handleChangeLanguage('en')}>
                  <img src={usFlag} alt="Bandeira dos EUA" /> <Text>English</Text>
                </LanguageOption>
              </LanguageMenu>
            )}
          </li>
        </ul>
      </Nav>
      {isMobileMenuOpen && (
        <MobileNav>
          <ul>
            <li><Text onClick={handleClickHome}>{t('header.home')}</Text></li>
            <li><Text onClick={handleClickAbout}>{t('header.about')}</Text></li>
            <li><Text onClick={handleClickContact}>{t('header.contact')}</Text></li>
          </ul>
        </MobileNav>
      )}
    </HeaderWrapper>
  );
}

export { Header };
