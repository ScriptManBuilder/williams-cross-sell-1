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
      title: 'Elite Members',
      description: 'Join an exclusive network of distinguished individuals enjoying premium lifestyle benefits',
      value: '50K+',
      background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)'
    },
    {
      title: 'Luxury Partners',
      description: 'Access to the world\'s finest hotels, restaurants, retailers, and exclusive venues',
      value: '2,500+',
      background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)'
    },
    {
      title: 'Member Satisfaction',
      description: 'Our members consistently rate their experience as exceptional and life-changing',
      value: '98%',
      background: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)'
    },
    {
      title: 'Exclusive Experiences',
      description: 'VIP events, private gatherings, and once-in-a-lifetime opportunities each year',
      value: '500+',
      background: 'linear-gradient(135deg, #0066cc 0%, #3b82f6 100%)'
    }
  ];

  return (
    <StatsContainer id="stats">
      <StatsContent>
        <StatsSectionTitle>Where Excellence Meets Exclusivity</StatsSectionTitle>
        <StatsSectionDescription>
          Experience unparalleled luxury and premium lifestyle benefits reserved for our distinguished members.
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
