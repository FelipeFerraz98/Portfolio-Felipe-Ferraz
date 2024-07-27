import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Container, Title, TextContent, Stroke, MainBox, TextBox, MainBoxWrapper, SubTitle, DetailsTitle, DetailsBox, HeightStroke, DetailsTextBox, Circle, ListItem } from './styles';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Função para quebrar a descrição em uma lista
  const renderDescriptionAsList = (description) => {
    return description.split(';').map((item, index) => (
      <ListItem key={index}>{item.trim()}</ListItem>
    ));
  };

  return (
    <Container ref={ref} inView={inView}>
      <MainBoxWrapper id='experience'>
        <MainBox>
          <TextBox>
            <Title>{t('experience.title')}</Title>
            <Stroke />
            <Circle />
            <HeightStroke>
              <DetailsBox>
                <DetailsTextBox>
                  <SubTitle>{t('experience.content.first.title')}</SubTitle>
                  <DetailsTitle>{t('experience.content.first.location')}</DetailsTitle>
                  <TextContent>
                  {renderDescriptionAsList(t('experience.content.first.description'))}
                  </TextContent>
                </DetailsTextBox>
              </DetailsBox>
            </HeightStroke>

            <Circle />
            <HeightStroke>
              <DetailsBox>
                <DetailsTextBox>
                  <SubTitle>{t('experience.content.second.title')}</SubTitle>
                  <DetailsTitle>{t('experience.content.second.location')}</DetailsTitle>
                  <TextContent>
                    {renderDescriptionAsList(t('experience.content.second.description'))}
                  </TextContent>
                </DetailsTextBox>
              </DetailsBox>
            </HeightStroke>
          </TextBox>
        </MainBox>
      </MainBoxWrapper>
    </Container>
  );
};

export { Experience };
