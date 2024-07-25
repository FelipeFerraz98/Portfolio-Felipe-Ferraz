import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Container, Title, TextContent, TextEmphasis, Stroke, MainBox, TextBox, MainBoxWrapper } from './styles';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Container ref={ref} inView={inView}>
      <MainBoxWrapper>
        <MainBox>
          <TextBox>
            <Title>{t('about.title')}</Title>
            <Stroke />
            <TextContent>
              {t('about.content.intro')}
              <TextEmphasis>{t('about.content.quickLearning')}</TextEmphasis>
              {t('about.content.and')}
              <TextEmphasis>{t('about.content.deepTechnical')}</TextEmphasis>
              {t('about.content.praisedFor')}
              <TextEmphasis>{t('about.content.solvingProblems')}</TextEmphasis>.
              <br /><br />
              {t('about.content.duringInternship')}
              <TextEmphasis>{t('about.content.fastLearning')}</TextEmphasis>,
              <TextEmphasis>{t('about.content.effectiveCommunication')}</TextEmphasis>,
              {t('about.content.and')}
              <TextEmphasis>{t('about.content.dealingWithCustomers')}</TextEmphasis>.
              {t('about.content.versatileProfessional')}
              <TextEmphasis>{t('about.content.committedToExcellence')}</TextEmphasis>
              {t('about.content.andThe')}
              <TextEmphasis>{t('about.content.successOfProjects')}</TextEmphasis>.
            </TextContent>
          </TextBox>
        </MainBox>
      </MainBoxWrapper>
    </Container>
  );
};

export { About };
