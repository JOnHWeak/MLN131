import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AppProvider } from './contexts/AppContext';
import ProgressBar from './components/Layout/ProgressBar';
import LearningNav from './components/Layout/LearningNav';
import SearchBox from './components/Interactive/SearchBox';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Introduction from './pages/Introduction';
import MarxLeninView from './pages/MarxLeninView';
import SocialismReligion from './pages/SocialismReligion';
import VietnamPolicy from './pages/VietnamPolicy';
import PracticalApplication from './pages/PracticalApplication';
import Solutions from './pages/Solutions';
import Conclusion from './pages/Conclusion';
import Overview from './pages/Overview';
import Progress from './pages/Progress';
import Stats from './pages/Stats';
import Goals from './pages/Goals';
import Slides from './pages/Slides';
import FinalQuiz from './pages/FinalQuiz';
import ChatWidget from './components/Interactive/ChatWidget';
import './styles/globals.css';

function AppLayout() {
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <div className="min-h-screen hide-sidebars portfolio-bg">
      <ProgressBar />

      {!isLanding && <LearningNav />}

      <main className={`min-h-screen pt-2 ${isLanding ? '' : 'md:ml-64'}`}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/marx-lenin-view" element={<MarxLeninView />} />
          <Route path="/socialism-religion" element={<SocialismReligion />} />
          <Route path="/vietnam-policy" element={<VietnamPolicy />} />
          <Route path="/practical" element={<PracticalApplication />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/conclusion" element={<Conclusion />} />
          <Route path="/overview" element={<Overview />} />
          {/* Removed progress route as progress is implicit via LearningNav */}
          <Route path="/stats" element={<Stats />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/slides" element={<Slides />} />
          <Route path="/final-quiz" element={<FinalQuiz />} />
        </Routes>
      </main>

      {showSearch && (
        <SearchBox onClose={() => setShowSearch(false)} />
      )}

      {/* Persistent Chat */}
      <ChatWidget />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <Router>
          <AppLayout />
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
