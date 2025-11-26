import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import StatsSection from './components/StatsSection';
import CTASection from './components/CTASection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Header from './components/Header';
import ChatWidget from './components/ChatWidget';
import SupportPage from './pages/SupportPage';
import DataSubjectRequestPage from './pages/DataSubjectRequestPage';
import ESignaturePage from './pages/ESignaturePage';
import CCPANoticePage from './pages/CCPANoticePage';

const AppContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
`;

const HomePage: React.FC = () => (
  <>
    <Header />
    <HeroSection />
    <FeaturesSection />
    <StatsSection />
    <CTASection />
    <FAQSection />
    <ContactSection />
    <Footer />
  </>
);

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/data-subject-request" element={<DataSubjectRequestPage />} />
        <Route path="/e-signature" element={<ESignaturePage />} />
        <Route path="/ccpa-notice" element={<CCPANoticePage />} />
      </Routes>
      <ChatWidget />
    </AppContainer>
  );
}

export default App;
