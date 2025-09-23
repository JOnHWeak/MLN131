import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AppProvider } from './contexts/AppContext';
import ProgressBar from './components/Layout/ProgressBar';
import LearningNav from './components/Layout/LearningNav';
import SearchBox from './components/Interactive/SearchBox';
import Home from './pages/Home';
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
import './styles/globals.css';

function App() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <ThemeProvider>
      <AppProvider>
        <Router>
          <div className="min-h-screen hide-sidebars">
            <ProgressBar />

            <LearningNav />

            <main className="min-h-screen pt-2 md:ml-64">
              <Routes>
                <Route path="/" element={<Home />} />
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
              </Routes>
            </main>


            {/* Search Modal */}
            {showSearch && (
              <SearchBox onClose={() => setShowSearch(false)} />
            )}
          </div>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
