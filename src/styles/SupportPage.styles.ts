import styled from 'styled-components';

export const SupportContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
`;

export const SupportHero = styled.section`
  background: linear-gradient(135deg, #0a2540 0%, #1e3a5f 100%);
  padding: 8rem 2rem 6rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(0, 102, 204, 0.15) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 4rem;
  }

  @media (max-width: 425px) {
    padding: 5rem 1.25rem 3rem;
  }
`;

export const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }

  @media (max-width: 425px) {
    font-size: 1.85rem;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 425px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

export const ContactInfo = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 2.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 2rem;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 425px) {
    padding: 1.75rem;
    gap: 1rem;
  }
`;

export const PhoneIcon = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #0066cc, #3388dd);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 32px;
    height: 32px;
    color: white;
  }

  @media (max-width: 425px) {
    width: 56px;
    height: 56px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const PhoneNumber = styled.a`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;

  &:hover {
    color: #3388dd;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 425px) {
    font-size: 1.5rem;
  }
`;

export const AvailabilityText = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const ActionButton = styled.button`
  background: white;
  color: #0066cc;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    background: #f8f9fa;
  }

  @media (max-width: 425px) {
    width: 100%;
    justify-content: center;
    padding: 0.875rem 1.5rem;
  }
`;

export const HelpSection = styled.section`
  padding: 6rem 2rem;
  background: #f8f9fa;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 425px) {
    padding: 3rem 1.25rem;
  }
`;

export const HelpTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: #0a2540;
  font-weight: 700;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 425px) {
    font-size: 1.65rem;
    margin-bottom: 2.5rem;
  }
`;

export const HelpGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 425px) {
    gap: 1.25rem;
  }
`;

export const HelpCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 102, 204, 0.12);
    border-color: rgba(0, 102, 204, 0.2);
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 425px) {
    padding: 1.75rem;
  }
`;

export const HelpIcon = styled.div`
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #0066cc, #3388dd);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  svg {
    width: 28px;
    height: 28px;
    color: white;
  }

  @media (max-width: 425px) {
    width: 48px;
    height: 48px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const HelpCardTitle = styled.h3`
  font-size: 1.3rem;
  color: #0a2540;
  margin-bottom: 0.75rem;
  font-weight: 600;

  @media (max-width: 425px) {
    font-size: 1.15rem;
  }
`;

export const HelpCardDescription = styled.p`
  color: #5a6c7d;
  line-height: 1.6;
  font-size: 0.95rem;

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
`;
