import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, My name is <br /> Deepak Yadav. <br />
        and welcome to my Portfolio.
      </SectionTitle>
      <SectionText>
        I am Full Stack Web Developer specializing in projects focused on 
        APIs, JS libraries and responsive and interactive designs with a background in Project Management. 
        Experienced with Github and in writing clean code.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;