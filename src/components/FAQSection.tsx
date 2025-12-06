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
      question: 'How do I join the loyalty program?',
      answer: 'Simply fill out the contact form on this page or call our member services team. We\'ll guide you through the quick enrollment process and activate your account within minutes. You can start enjoying benefits immediately.'
    },
    {
      question: 'What kind of discounts can I expect?',
      answer: 'Members save 10-50% at thousands of partner retailers, restaurants, hotels, and online stores. You\'ll also earn 3-15% cashback on purchases, with exclusive VIP deals added weekly. The average member saves $1,200 annually.'
    },
    {
      question: 'Is there a membership fee?',
      answer: 'We offer flexible membership tiers to fit any budget. Contact us to learn about current promotions and find the plan that works best for you. Most members pay off their membership with their first few purchases.'
    },
    {
      question: 'How do I earn and redeem cashback rewards?',
      answer: 'Earn cashback automatically on every purchase at participating brands. Your rewards accumulate in your account dashboard and can be redeemed for statement credits, gift cards, or transferred to your bank account with no minimum thresholds.'
    },
    {
      question: 'Can I share benefits with my family?',
      answer: 'Yes! Add up to 5 family members to your account at no extra cost. Each member gets their own login and can earn rewards, while you pool benefits together for even bigger savings. Perfect for families who shop together.'
    },
    {
      question: 'Do my rewards expire?',
      answer: 'Your cashback rewards and member status remain active as long as your account is in good standing. Unused rewards never expire, and you can accumulate savings over time. We believe in rewarding loyalty, not punishing it.'
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
          Everything you need to know about membership benefits and rewards
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
