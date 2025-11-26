import React from 'react';
import {
  ContactContainer,
  ContactContent,
  ContactGrid,
  ContactForm,
  ContactInfo,
  ContactTitle,
  ContactDescription,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
  InfoCard,
  InfoTitle,
  InfoDescription,
  InfoLink
} from '../styles/ContactSection.styles';

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  const features = [
    {
      title: 'Automated Recovery',
      description: 'Our AI-powered system automatically recovers failed payments and abandoned carts, saving you time and increasing revenue.'
    },
    {
      title: 'Data-Driven Insights',
      description: 'Get detailed analytics and insights into your payment failures and customer behavior to optimize your checkout process.'
    },
    {
      title: 'Seamless Integration',
      description: 'Easy integration with your existing eCommerce platform. No coding required, just plug and play.'
    }
  ];

  return (
    <ContactContainer id="contact">
      <ContactContent>
        <ContactTitle>Let's recover your lost revenue</ContactTitle>
        <ContactDescription>
          Get in touch to learn how we can help you recover failed payments and increase your revenue.
        </ContactDescription>
        
        <ContactGrid>
          <ContactForm onSubmit={handleSubmit}>
            <h3>Contact Us</h3>
            <p>Fill out the form below to get in touch with us.</p>
            
            <FormGroup>
              <FormLabel>Name</FormLabel>
              <FormInput type="text" placeholder="Your name" required />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormInput type="email" placeholder="your.email@company.com" required />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Message</FormLabel>
              <FormTextarea 
                placeholder="Tell us about your business and payment recovery needs..." 
                rows={5}
                required 
              />
            </FormGroup>
            
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ContactForm>
          
          <ContactInfo>
            {features.map((feature, index) => (
              <InfoCard key={index}>
                <InfoTitle>{feature.title}</InfoTitle>
                <InfoDescription>{feature.description}</InfoDescription>
              </InfoCard>
            ))}
            
            <InfoCard style={{ marginTop: '2rem' }}>
              <InfoDescription>
                Or reach us directly at <span style={{ fontWeight: 600, userSelect: 'none', pointerEvents: 'none' }}>{process.env.REACT_APP_EMAIL_SUPPORT}</span> or call 
                <InfoLink href={`tel:${process.env.REACT_APP_PHONE_NUMBER?.replace(/\s+/g, '')}`}>
                  {process.env.REACT_APP_PHONE_DISPLAY}
                </InfoLink>
              </InfoDescription>
            </InfoCard>
          </ContactInfo>
        </ContactGrid>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactSection;
