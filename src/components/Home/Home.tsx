import React from 'react';
import IntroSec from './IntroSec';
import Features from '../Features/Features';
import Project from '../Projects/Project';

const LandingPage: React.FC = () => {
  return (
    <>
      <IntroSec />
      <Features />
      <Project />
    </>
  );
}

export default LandingPage;
