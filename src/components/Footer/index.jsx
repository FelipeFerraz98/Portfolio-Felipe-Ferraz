import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {FooterContainer,  LeftSection, TopSection, CompanyName, SmallText, CenterSection, ProjectsTitle, 
    RightSection, ContactTitle, ContactList, BottomSection, Copyright, Text, ProjectsList } from './styles'


import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { lang } = useParams(); // Obtém o idioma da URL atual

    const handleClickOpenLinkedIn = () => {
        window.open('https://www.linkedin.com/in/felipe-ferraz-4b0145247/', '_blank', 'noopener,noreferrer');
    }

    const handleClickOpenEmail = () => {
        window.open('mailto:felipeferraz1398@gmail.com', '_blank', 'noopener,noreferrer');
    }


      const handleClickOpenWhatsApp = () => {
        window.open('https://wa.me/5511975522976', '_blank', 'noopener,noreferrer');
    }

    const handleClickOpenECSProject = () => {
        window.open('https://ecsmarcenaria.com.br/', '_blank', 'noopener,noreferrer');
    }

    const handleClickOpenPortfolio = () => {
        window.open('https://github.com/FelipeFerraz98/Portfolio-Felipe-Ferraz', '_blank', 'noopener,noreferrer');
    }

    const handleClickOpenPokedex = () => {
        window.open('https://felipeferraz98.github.io/Pokedex-React/#/', '_blank', 'noopener,noreferrer');
    }

    const handleClickOpenGitHub = () => {
        window.open('https://github.com/FelipeFerraz98', '_blank', 'noopener,noreferrer');
    }

    const handleClickOpenInstagram = () => {
        window.open('https://www.instagram.com/ferrazdevelopment/', '_blank', 'noopener,noreferrer');
    }
    
    const handleClickProjects = () => {
        navigate(`/${lang}/projects`); // Redireciona para /:lang/home
    
        window.scrollTo({ top: 0, behavior: 'smooth' }); //Garante começar no topo de projects
      };

    return (<>
        <FooterContainer id='footer'>
            <TopSection>
                <LeftSection>
                    <CompanyName>Ferraz Development</CompanyName>
                    <SmallText>
                    {t('footer.detailscompany.first')} <br />
                    {t('footer.detailscompany.second')} <br />
                    {t('footer.detailscompany.third')} <br />
                    {t('footer.detailscompany.fourth')} <br />
                    </SmallText>
                </LeftSection>
                <CenterSection>
                    <ProjectsTitle>{t('footer.projects.title')}</ProjectsTitle>
                    <ProjectsList>
                        <li><Text onClick={handleClickOpenECSProject}>ECS Marcenaria</Text></li>
                        <li><Text onClick={handleClickOpenPokedex}>Pokedex</Text></li>
                        <li><Text onClick={handleClickOpenPortfolio}>Ferraz Development</Text></li>
                        <li><Text onClick={handleClickOpenGitHub}>GitHub</Text></li>
                        <li><Text onClick={handleClickProjects}>{t('footer.more')}</Text></li>
                    </ProjectsList>
                </CenterSection>
                <RightSection>
                    <ContactTitle>{t('footer.contact')}</ContactTitle>
                    <ContactList>
                        <li><Text onClick={handleClickOpenWhatsApp}>
                                WhatsApp: +55 (11) 97552-2976
                            </Text></li>
                            <li><Text onClick={handleClickOpenEmail}>
                                E-mail: felipeferraz1398@gmail.com
                        </Text></li>
                        <li><Text onClick={handleClickOpenLinkedIn}>
                                LinkedIn: Felipe Ferraz
                        </Text></li>
                        <li><Text onClick={handleClickOpenInstagram}>
                                Instagram: Ferraz Development
                        </Text></li>
                    </ContactList>
                </RightSection>
            </TopSection>
            <BottomSection>
                <Copyright>© Ferraz Development</Copyright>
            </BottomSection>
        </FooterContainer>
    </>
            );
};
    

export { Footer }