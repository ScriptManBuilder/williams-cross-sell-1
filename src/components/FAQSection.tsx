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
      question: 'How does payment recovery work?',
      answer: 'Our system automatically detects failed payments and initiates intelligent retry attempts using optimized timing, payment methods, and messaging. The process is completely automated and requires no manual intervention.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Most clients are live within 24 hours. Our plug-and-play integration works seamlessly with major payment processors including Stripe, PayPal, Authorize.net, and Square. Minimal developer resources required.'
    },
    {
      question: 'What is your typical recovery rate?',
      answer: 'Our clients typically recover 15-30% of failed transactions. The exact rate depends on factors like your industry, average transaction value, and decline reasons. We provide detailed analytics to track your recovery performance.'
    },
    {
      question: 'Is customer data secure?',
      answer: 'Absolutely. We are PCI DSS Level 1 certified and SOC 2 compliant. All payment data is encrypted end-to-end, and we never store sensitive card information. Your customers\' security is our top priority.'
    },
    {
      question: 'What types of payment failures can you recover?',
      answer: 'We handle various decline reasons including insufficient funds, expired cards, incorrect card details, and temporary bank issues. Our intelligent system identifies which failures are recoverable and applies the optimal retry strategy.'
    },
    {
      question: 'How does pricing work?',
      answer: 'We operate on a performance-based model—you only pay when we successfully recover a failed payment. No setup fees, no monthly minimums. Our pricing scales with your success, aligning our interests with yours.'
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
          Everything you need to know about our payment recovery platform
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
