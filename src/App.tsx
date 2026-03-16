import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AudioProvider } from './components/AudioProvider';
import { ThemeProvider } from './components/ThemeProvider';
import { Layout } from './components/Layout';

// Pages
import { Home } from './pages/Home';
import { Journey } from './pages/Journey';
import { Wisdom } from './pages/Wisdom';
import { DocumentaryPage } from './pages/DocumentaryPage';
import { TalkToSteve } from './pages/TalkToSteve';
import { MilestoneDetail } from './pages/MilestoneDetail';

/**
 * Main Application Component
 * Implements multi-page routing while preserving the existing design system.
 */
export default function App() {
  return (
    <ThemeProvider>
      <AudioProvider>
        <Router>
          <Layout>
            <Routes>
              {/* Home Page: Intact with all sections */}
              <Route path="/" element={<Home />} />
              
              {/* Dedicated Pages */}
              <Route path="/journey" element={<Journey />} />
              <Route path="/journey/:year" element={<MilestoneDetail />} />
              <Route path="/wisdom" element={<Wisdom />} />
              <Route path="/documentary" element={<DocumentaryPage />} />
              <Route path="/talk-to-steve" element={<TalkToSteve />} />
            </Routes>
          </Layout>
        </Router>
      </AudioProvider>
    </ThemeProvider>
  );
}
