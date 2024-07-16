import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { Card, Container, Image, TextContent, CardBox, Title, WelcomeBox } from './styles';

import USA from '../../assets/Languages/USA.jpg'
import Brazil from '../../assets/Languages/Brazil.jpg'

const StarterPage = () => {
  const { changeLanguage } = useLanguage();
  const navigate = useNavigate();

  const handleLanguageSelect = (lng) => {
    changeLanguage(lng);
    navigate(`/${lng}/home`);
  };

  return (
  <Container>
    <WelcomeBox>
      <Title>Welcome</Title>
      <TextContent>Select your language</TextContent>
    </WelcomeBox>
    <CardBox>
      <Card onClick={() => handleLanguageSelect('en')}>
        <Image src={USA} />
        <TextContent>English - USA</TextContent>
      </Card>
      <Card onClick={() => handleLanguageSelect('pt')}>
        <Image src={Brazil} />
        <TextContent>Portuguese - BR</TextContent>
      </Card>
    </CardBox>
  </Container>
  );
};

export { StarterPage };
