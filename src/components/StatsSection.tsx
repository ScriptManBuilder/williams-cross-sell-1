import React from 'react';
import {
  StatsContainer,
  StatsContent,
  StatsSectionTitle,
  StatsSectionDescription,
  StatsGrid,
  StatCard,
  StatTitle,
  StatDescription,
  StatValue
} from '../styles/StatsSection.styles';

const StatsSection: React.FC = () => {
  const stats = [
    {
      title: 'Active Members Nationwide',
      description: 'Join a thriving community of smart shoppers who save on everyday purchases',
      value: '250K+',
      background: 'linear-gradient(135deg, #0066cc 0%, #3388dd 100%)'
    },
    {
      title: 'Total Member Savings',
      description: 'Our members have collectively saved millions through exclusive discounts and cashback',
      value: '$89M',
      background: 'linear-gradient(135deg, #3388dd 0%, #0066cc 100%)'
    },
    {
      title: 'Member Satisfaction Rate',
      description: 'Our members love the value they get—see why so many shoppers trust us',
      value: '97%',
      background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)'
    },
    {
      title: 'Average Annual Savings',
      description: 'The typical member saves over a thousand dollars per year through our benefits',
      value: '$1,200',
      background: 'linear-gradient(135deg, #00d4aa 0%, #00bfa5 100%)'
    }
  ];

  return (
    <StatsContainer id="stats">
      <StatsContent>
        <StatsSectionTitle>Trusted by Thousands of Smart Shoppers</StatsSectionTitle>
        <StatsSectionDescription>
          Real savings from real members. See how our loyalty program delivers exceptional value every single day.
        </StatsSectionDescription>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index} $background={stat.background}>
              <StatTitle>{stat.title}</StatTitle>
              <StatDescription>{stat.description}</StatDescription>
              <StatValue>{stat.value}</StatValue>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsContent>
    </StatsContainer>
  );
};

export default StatsSection;
