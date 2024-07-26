import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Container, Card, TextContent, Image, CardBox, Title, Stroke, MainBox, TextBox, SocialIcons } from './styles';
import email from '../../../assets/ContactIcons/email.svg'
import phone from '../../../assets/ContactIcons/telephone.svg'
import location from '../../../assets/ContactIcons/location.svg'
import whatsapp from '../../../assets/ContactIcons/whatsapp.svg'
import linkedin from '../../../assets/ContactIcons/linkedin.svg'
import instagram from '../../../assets/ContactIcons/instagram.png'
import youtube from '../../../assets/ContactIcons/youtube.svg'

import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const handleClickOpenPhone = () => {
        window.open('tel:5511975522976', '_blank', 'noopener,noreferrer');
      }

    const handleClickOpenWhatsApp = () => {
        window.open('https://wa.me/5511975522976', '_blank', 'noopener,noreferrer');
    }

    const handleClickOpenLinkedIn = () => {
        window.open('https://www.linkedin.com/in/felipe-ferraz-4b0145247/', '_blank', 'noopener,noreferrer');
    }

    const handleClickOpenLocation = () => {
        window.open('https://maps.app.goo.gl/LkhWpb9x7BECf23VA', '_blank', 'noopener,noreferrer');
    }

    const handleClickOpenEmail = () => {
        window.open('mailto:felipeferraz1398@gmail.com', '_blank', 'noopener,noreferrer');
    }

    const handleClickOpenInstagram = () => {
        window.open('https://www.instagram.com/ferrazdevelopment/', '_blank', 'noopener,noreferrer');
    }

    const handleClickOpenYouTube = () => {
        window.open('https://www.youtube.com/@FerrazDevelopment', '_blank', 'noopener,noreferrer');
    }

    return (
        <Container ref={ref} inView={inView} id='contact'>
            <MainBox>
                <TextBox>
                    <Title>{t('contact.title')}</Title>
                    <Stroke />
                </TextBox>
                <CardBox>
                        <Card onClick={handleClickOpenEmail}>
                            <Image src={email}/>
                            <TextContent>felipeferraz1398@gmail.com</TextContent>
                        </Card>
                        <Card onClick={handleClickOpenPhone}>
                            <Image src={phone}/>
                            <TextContent>+55 (11) 975522976</TextContent>
                        </Card>
                        <Card onClick={handleClickOpenLocation}>
                            <Image src={location}/>
                            <TextContent>Campo Limpo Paulista, SP - Brasil</TextContent>
                        </Card>
                </CardBox>
            </MainBox>
            <SocialIcons>
                
                <Image src={whatsapp} onClick={handleClickOpenWhatsApp}/>
                <Image src={linkedin} onClick={handleClickOpenLinkedIn}/>
                <Image src={instagram} onClick={handleClickOpenInstagram}/>
                <Image src={youtube} onClick={handleClickOpenYouTube}/>
            </SocialIcons>
        </Container>
    );
};

export { Contact };
