import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AppProvider } from './contexts/AppContext';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import ProgressBar from './components/Layout/ProgressBar';
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
import './styles/globals.css';

function App() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <ThemeProvider>
      <AppProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <ProgressBar />
            <Header />
            <Sidebar />

            <main className="min-h-screen">
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
                <Route path="/progress" element={<Progress />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/goals" element={<Goals />} />
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
