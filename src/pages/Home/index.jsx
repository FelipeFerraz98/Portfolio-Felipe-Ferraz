import React from 'react';
import { Start } from '../../components/HomeComponents/Start';
import { About } from '../../components/HomeComponents/About';
import { Skills } from '../../components/HomeComponents/Skills';
import { Portfolio } from '../../components/HomeComponents/Portfolio';
import { Experience } from '../../components/HomeComponents/Experience';
import { Contact } from '../../components/HomeComponents/Contact';
import { Stroke, TextBox, Title } from './styles';

import { useInView } from 'react-intersection-observer';


const Home = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <>
      <Start />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <TextBox ref={ref} inView={inView}>
        <Title>Thanks for Scrolling!</Title>
        <Stroke />
      </TextBox>
    </>
  );
}

export { Home };
