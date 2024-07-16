import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Title, TextContent, ButtonBox, TextEmphasis, ImageWrapper, MainBox, TextBox, MainBoxWrapper, MouseWheelBox } from './styles';
import { Button } from '../../components/Button';
import { MouseWheel } from '../../components/MouseWheel';
import logoimg from '../../assets/logo.png';

const Home = () => {
  const { t } = useTranslation();

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
                <Button title={t('home.contactButton')} />
              </ButtonBox>
            </TextBox>
            <ImageWrapper src={logoimg} />
          </MainBox>
        </MainBoxWrapper>
        <MouseWheelBox>
          <MouseWheel />
        </MouseWheelBox>
      </Container>
    </>
  );
}

export { Home };
