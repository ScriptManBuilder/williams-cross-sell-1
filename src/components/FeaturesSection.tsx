import React from 'react';
import {
  FeaturesContainer,
  FeaturesContent,
  SectionTitle,
  SectionDescription,
  FeaturesGrid,
  FeatureCard,
  IconWrapper,
  FeatureTitle,
  FeatureDescription
} from '../styles/FeaturesSection.styles';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
        </svg>
      ),
      title: 'Exclusive Member Discounts',
      description: 'Access up to 50% off at thousands of partner retailers, restaurants, and online stores. New deals added weekly to maximize your savings.',
      color: '#0066cc'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
        </svg>
      ),
      title: 'Cashback Rewards',
      description: 'Earn 3-15% cashback on every purchase from participating brands. Stack with existing sales and promotions for maximum value.',
      color: '#3388dd'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: 'VIP Perks',
      description: 'Priority customer service, early access to sales, exclusive member events, and special birthday rewards throughout the year.',
      color: '#00d4aa'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM11 12H9V9h2V7H7v10h4v-2H9v-3h2z"/>
        </svg>
      ),
      title: 'Travel Benefits',
      description: 'Save on hotels, flights, car rentals, and vacation packages. Access exclusive travel deals and earn bonus points on bookings.',
      color: '#ff6b6b'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      title: 'Rewards Dashboard',
      description: 'Track your savings, cashback earnings, and points in one beautiful dashboard. See your total savings grow month over month.',
      color: '#a855f7'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
      title: 'Family Sharing',
      description: 'Share benefits with up to 5 family members. Everyone gets their own account while pooling rewards for bigger savings.',
      color: '#ec4899'
    }
  ];

  return (
    <FeaturesContainer id="features">
      <FeaturesContent>
        <SectionTitle>Member Benefits That Pay For Themselves</SectionTitle>
        <SectionDescription>
          Unlock premium perks, exclusive discounts, and cashback rewards across thousands of brands.
        </SectionDescription>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <IconWrapper $color={feature.color}>
                {feature.icon}
              </IconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesContent>
    </FeaturesContainer>
  );
};

export default FeaturesSection;
