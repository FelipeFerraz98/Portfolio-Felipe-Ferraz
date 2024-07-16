import React, { useState } from 'react';
import logoimg from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";

import { HeaderWrapper, Nav, Logo, Text, HamburgerMenu, MobileNav } from './styles';

import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
//   const scrollToElement = () => {
//     const element = document.getElementById('footer');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   }

  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClickProjects = () => {
    navigate('/projects');
    setIsMobileMenuOpen(false);
  };

  const handleClickContact = () => {
    navigate('/contact');
    setIsMobileMenuOpen(false);
  };

  const handleClickHome = () => {
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
          <li><Text onClick={handleClickProjects}>{t('header.about')}</Text></li>
          <li><Text onClick={handleClickContact}>{t('header.contact')}</Text></li>
        </ul>
      </Nav>
      {isMobileMenuOpen && (
        <MobileNav>
          <ul>
            <li><Text onClick={handleClickHome}>{t('header.home')}</Text></li>
            <li><Text onClick={handleClickProjects}>{t('header.about')}</Text></li>
            <li><Text onClick={handleClickContact}>{t('header.contact')}</Text></li>
          </ul>
        </MobileNav>
      )}
    </HeaderWrapper>
  );
}

export { Header };