import React from 'react';
import {
  HeroContainer,
  HeroContent,
  Tagline,
  HeroTitle,
  Highlight,
  HeroDescription,
  CTAButtonGroup,
  CTAButtonPrimary,
  CTAButtonSecondary
} from '../styles/HeroSection.styles';

const HeroSection: React.FC = () => {
  const appSubdomain = process.env.REACT_APP_APP_SUBDOMAIN || 'app.williamsrevenuerecovery.com';

  const handleLaunchApp = () => {
    window.open(`https://${appSubdomain}`, '_blank');
  };

  const handleScheduleCall = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <CTAButtonGroup>
          <CTAButtonPrimary onClick={handleLaunchApp}>
            Launch App →
          </CTAButtonPrimary>
          <CTAButtonSecondary onClick={handleScheduleCall}>
            Schedule a Call
          </CTAButtonSecondary>
        </CTAButtonGroup>
      </HeroContent>
    </HeroContainer>
  );

};

export default HeroSection;
