import React, { useState } from 'react';
import {
  ChatContainer,
  ChatButton,
  ChatWindow,
  ChatHeader,
  ChatTitle,
  ChatSubtitle,
  CloseButton,
  ChatBody,
  ChatForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
  SuccessAlert,
  AlertIcon,
  AlertContent,
  AlertTitle,
  AlertMessage
} from '../styles/ChatWidget.styles';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success message
    setShowSuccess(true);
    
    // Reset form
    (e.target as HTMLFormElement).reset();
    
    // Hide success message and close chat after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 300);
    }, 3000);
  };

  return (
    <ChatContainer>
      {!isOpen && (
        <ChatButton onClick={() => setIsOpen(true)}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        </ChatButton>
      )}

      {isOpen && (
        <ChatWindow>
          <ChatHeader>
            <div>
              <ChatTitle>Chat with us</ChatTitle>
              <ChatSubtitle>We typically reply within minutes</ChatSubtitle>
            </div>
            <CloseButton onClick={() => setIsOpen(false)}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </CloseButton>
          </ChatHeader>

          <ChatBody>
            {showSuccess && (
              <SuccessAlert>
                <AlertIcon>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </AlertIcon>
                <AlertContent>
                  <AlertTitle>Message Sent!</AlertTitle>
                  <AlertMessage>Thank you for contacting us. We'll get back to you shortly.</AlertMessage>
                </AlertContent>
              </SuccessAlert>
            )}
            
            {!showSuccess && (
              <ChatForm onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel>
                  Name <span style={{ color: '#d32f2f' }}>*</span>
                </FormLabel>
                <FormInput type="text" placeholder="Your name" required />
              </FormGroup>

              <FormGroup>
                <FormLabel>
                  Email <span style={{ color: '#d32f2f' }}>*</span>
                </FormLabel>
                <FormInput type="email" placeholder="your.email@example.com" required />
              </FormGroup>

              <FormGroup>
                <FormLabel>Company</FormLabel>
                <FormInput type="text" placeholder="Your company name" />
              </FormGroup>

              <FormGroup>
                <FormLabel>Phone</FormLabel>
                <FormInput type="tel" placeholder="+1 (555) 123-4567" />
              </FormGroup>

              <FormGroup>
                <FormLabel>
                  Message <span style={{ color: '#d32f2f' }}>*</span>
                </FormLabel>
                <FormTextarea 
                  placeholder="How can we help you?" 
                  rows={4}
                  required 
                />
              </FormGroup>

              <SubmitButton type="submit">Send Message</SubmitButton>
            </ChatForm>
            )}
          </ChatBody>
        </ChatWindow>
      )}
    </ChatContainer>
  );
};

export default ChatWidget;
