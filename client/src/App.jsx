import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, Box } from '@mui/material';
import theme from './theme';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import FeatureCards from './components/FeatureCards';
import ProjectsGrid from './components/ProjectsGrid';
import AboutContent from './components/AboutContent';
import ContactContent from './components/ContactContent';

// Home page component
function Home() {
  return (
    <>
      <HeroSection />
      <FeatureCards />
    </>
  );
}

// Projects page component
function Projects() {
  return <ProjectsGrid />;
}

// About page component
function About() {
  return <AboutContent />;
}

// Contact page component
function Contact() {
  return <ContactContent />;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navigation />
          <Box sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
