import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, Container, Image, ImagesContainer, MainBox, ImageOverlay, OverlayText, Title, Stroke, TextBox, MainBoxWrapper } from './styles';
import { useTranslation } from 'react-i18next';
import slide1 from '../../../assets/ProjectsImages/ecslogo.png';
import slide2 from '../../../assets/ProjectsImages/FerrazDevelopment.png';
import slide3 from '../../../assets/ProjectsImages/pokedex.png';
import slide4 from '../../../assets/ProjectsImages/GitHub.svg';

const Portfolio = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { t } = useTranslation();

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

    return (
        <Container ref={ref} inView={inView}>
            <MainBoxWrapper id='portfolio'>
                <MainBox>
                    <TextBox>
                        <Title>Portfolio</Title>
                        <Stroke />
                    </TextBox>
                    <ImagesContainer>
                        <Card onClick={handleClickOpenECSProject}>
                            <Image src={slide1}/>
                            <ImageOverlay>
                                <OverlayText>{t('portfolio.first')}</OverlayText>
                            </ImageOverlay>
                        </Card>
                        <Card onClick={handleClickOpenPortfolio}>
                            <Image src={slide2}/>
                            <ImageOverlay>
                                <OverlayText>{t('portfolio.second')}</OverlayText>
                            </ImageOverlay>
                        </Card>
                        <Card onClick={handleClickOpenPokedex}>
                            <Image src={slide3}/>
                            <ImageOverlay>
                                <OverlayText>{t('portfolio.third')}</OverlayText>
                            </ImageOverlay>
                        </Card>
                        <Card onClick={handleClickOpenGitHub}>
                            <Image src={slide4}/>
                            <ImageOverlay>
                                <OverlayText>{t('portfolio.fourth')}</OverlayText>
                            </ImageOverlay>
                        </Card>
                    </ImagesContainer>
                </MainBox>
            </MainBoxWrapper>
        </Container>
    );
};

export { Portfolio };
