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
      title: 'Online Transaction Decline Rate',
      description: 'Failed payments cost merchants billions annually—most are recoverable with the right approach',
      value: '15%',
      background: 'linear-gradient(135deg, #0066cc 0%, #3388dd 100%)'
    },
    {
      title: 'Annual Revenue Lost Globally',
      description: 'eCommerce merchants lose nearly half a trillion in recoverable revenue to payment failures',
      value: '$443B',
      background: 'linear-gradient(135deg, #3388dd 0%, #0066cc 100%)'
    },
    {
      title: 'Customer Abandonment Rate',
      description: 'Two-thirds of customers never return after a single payment failure—acting fast is critical',
      value: '68%',
      background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)'
    },
    {
      title: 'Recovery Success Rate',
      description: 'Our intelligent retry system recovers nearly one-third of failed transactions automatically',
      value: '30%',
      background: 'linear-gradient(135deg, #00d4aa 0%, #00bfa5 100%)'
    }
  ];

  return (
    <StatsContainer id="stats">
      <StatsContent>
        <StatsSectionTitle>The Cost of Doing Nothing</StatsSectionTitle>
        <StatsSectionDescription>
          Every declined payment represents lost revenue. See how our recovery platform turns payment failures into business wins.
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
