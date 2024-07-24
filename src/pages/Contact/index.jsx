import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Container, Card, TextContent, Image, CardBox, Title, Stroke, MainBox, TextBox, SocialIcons } from './styles';
import email from '../../assets/ContactIcons/email.png'
import phone from '../../assets/ContactIcons/telephone.png'
import location from '../../assets/ContactIcons/location.png'
import whatsapp from '../../assets/ContactIcons/whatsapp.png'
import linkedin from '../../assets/ContactIcons/linkedin.png'
import instagram from '../../assets/ContactIcons/instagram.png'
import youtube from '../../assets/ContactIcons/youtube.png'

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

    return (
        <Container ref={ref} inView={inView}>
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
                <Image src={instagram}/>
                <Image src={youtube}/>
            </SocialIcons>
        </Container>
    );
};

export { Contact };
