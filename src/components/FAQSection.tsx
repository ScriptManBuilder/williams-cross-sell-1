import React, { useState } from 'react';
import {
  FAQContainer,
  FAQContent,
  FAQTitle,
  FAQDescription,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQIcon
} from '../styles/FAQSection.styles';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I become a VIP member?',
      answer: 'Membership is by application only. Submit your interest through our contact form, and our membership team will reach out within 24 hours to discuss eligibility and membership tiers tailored to your lifestyle preferences.'
    },
    {
      question: 'What exclusive experiences are included?',
      answer: 'Members enjoy VIP access to Michelin-starred dining, luxury hotel suites, first-class travel upgrades, private shopping appointments, exclusive events, premium spa treatments, and personalized concierge services across the globe.'
    },
    {
      question: 'What are the membership tiers?',
      answer: 'We offer Elite, Platinum, and Diamond tiers, each with progressively enhanced benefits. Contact our membership team to explore which tier best suits your lifestyle and discover the exclusive privileges at each level.'
    },
    {
      question: 'Is there a personal concierge included?',
      answer: 'Yes! All members receive 24/7 access to a dedicated lifestyle concierge who handles reservations, travel arrangements, event planning, and any special requests. Diamond members receive a personal account manager.'
    },
    {
      question: 'Can I bring guests to exclusive events?',
      answer: 'Absolutely. Members can bring guests to most events, with allowances varying by membership tier. Diamond members enjoy unlimited guest privileges at select venues and experiences.'
    },
    {
      question: 'Are there international benefits?',
      answer: 'Yes. Our network spans over 100 countries, providing seamless access to luxury experiences worldwide. From Paris to Tokyo, members enjoy VIP treatment wherever they travel.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer id="faq">
      <FAQContent>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        <FAQDescription>
          Learn more about exclusive VIP membership benefits and premium lifestyle services
        </FAQDescription>
        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem key={index} $isOpen={openIndex === index}>
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                {faq.question}
                <FAQIcon $isOpen={openIndex === index}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer $isOpen={openIndex === index}>
                {faq.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQSection;
