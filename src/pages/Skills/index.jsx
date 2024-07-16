import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Container, Title, Stroke, MainBox, TextBox, MainBoxWrapper } from './styles';
import { SkillsCards } from '../../components/SkillsCards';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Container ref={ref} inView={inView}>
        <MainBoxWrapper>
        <MainBox>
            <TextBox>
                <Title>{t('about.content.skillsTitle')}</Title>
                <Stroke />
            </TextBox>
            <SkillsCards />
        </MainBox>
        </MainBoxWrapper>
    </Container>
  );
};

export { Skills };
