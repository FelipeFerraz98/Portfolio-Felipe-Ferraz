import React from 'react';

import {FooterContainer,  LeftSection, TopSection, CompanyName, SmallText, CenterSection, ProjectsTitle, 
    RightSection, ContactTitle, ContactList, BottomSection, Copyright, Text } from './styles'


import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    const handleClickOpenLinkedIn = () => {
        window.open('https://www.linkedin.com/in/felipe-ferraz-4b0145247/', '_blank', 'noopener,noreferrer');
    }

    const handleClickOpenEmail = () => {
        window.open('mailto:felipeferraz1398@gmail.com', '_blank', 'noopener,noreferrer');
    }


      const handleClickOpenWhatsApp = () => {
        window.open('https://wa.me/5511975522976', '_blank', 'noopener,noreferrer');
      }

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
                        <li><Text>
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