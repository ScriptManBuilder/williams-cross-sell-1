import React from 'react';
import {
  HeroContainer,
  HeroContent,
  Tagline,
  HeroTitle,
  Highlight,
  HeroDescription,
  CTAButton
} from '../styles/HeroSection.styles';

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <Tagline>Trusted by Leading Brands</Tagline>
        <HeroTitle>
          Recover Failed Payments.
          <Highlight>Rescue Lost Revenue.</Highlight>
        </HeroTitle>
        <HeroDescription>
          Transform declined transactions into recovered revenue with our intelligent payment recovery platform. 
          Using advanced automation, behavioral analytics, and smart retry logic, we help eCommerce businesses 
          reclaim up to 30% of failed payments while maintaining seamless customer experience.
        </HeroDescription>
        <CTAButton>Get Started Today →</CTAButton>
      </HeroContent>
    </HeroContainer>
  );

};

export default HeroSection;
