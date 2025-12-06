import React from 'react';
import {
  CTAContainer,
  CTAContent,
  CTATitle,
  CTADescription,
  CTASectionButton,
  CTAFeaturesGrid,
  CTAFeatureItem,
  CTAIconWrapper,
  CTAFeatureContent,
  CTAFeatureTitle,
  CTAFeatureDescription
} from '../styles/CTASection.styles';

const CTASection: React.FC = () => {
  const handleGetStarted = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: 'White-Glove Service',
      description: 'Experience personalized attention with dedicated concierge support for all your needs'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z"/>
        </svg>
      ),
      title: 'Exclusive Access',
      description: 'Members-only events, private venues, and experiences unavailable to the public'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      ),
      title: 'Curated Excellence',
      description: 'Every partner and experience is carefully vetted to ensure the highest standards'
    }
  ];

  return (
    <CTAContainer id="how-it-works">
      <CTAContent>
        <CTATitle>Elevate Your Lifestyle Today</CTATitle>
        <CTADescription>
          Apply for exclusive membership and gain access to a world of luxury experiences, premium services, and VIP privileges.
        </CTADescription>
        <CTASectionButton onClick={handleGetStarted}>Request Membership →</CTASectionButton>
        
        <CTAFeaturesGrid>
          {features.map((feature, index) => (
            <CTAFeatureItem key={index}>
              <CTAIconWrapper>
                {feature.icon}
              </CTAIconWrapper>
              <CTAFeatureContent>
                <CTAFeatureTitle>{feature.title}</CTAFeatureTitle>
                <CTAFeatureDescription>{feature.description}</CTAFeatureDescription>
              </CTAFeatureContent>
            </CTAFeatureItem>
          ))}
        </CTAFeaturesGrid>
      </CTAContent>
    </CTAContainer>
  );
};

export default CTASection;
