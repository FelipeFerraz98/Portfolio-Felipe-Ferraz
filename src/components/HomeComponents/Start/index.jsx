import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Title, TextContent, ButtonBox, TextEmphasis, ImageWrapper, MainBox, TextBox, MainBoxWrapper, MouseWheelBox } from './styles';
import { Button } from '../../Button';
import { MouseWheel } from '../../MouseWheel';
import logoimg from '../../../assets/logo.png';

const Start = () => {
  const { t } = useTranslation();

  const handleClickAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } // Redireciona para about
  };

  const handleClickContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } // Redireciona para about
  };

  return (
    <>
      <Container>
        <MainBoxWrapper>
          <MainBox>
            <TextBox>
              <Title>
                {t('home.title')} <br />
                <TextEmphasis>{t('home.name')}</TextEmphasis>
              </Title>
              <TextContent>
                {t('home.profession')} <br />
              </TextContent>
              <ButtonBox>
                <Button title={t('home.contactButton')} onClick={handleClickContact}/>
              </ButtonBox>
            </TextBox>
            <ImageWrapper src={logoimg} />
          </MainBox>
        </MainBoxWrapper>
        <MouseWheelBox>
          <MouseWheel onClick={handleClickAbout} />
        </MouseWheelBox>
      </Container>
    </>
  );
}

export { Start };
