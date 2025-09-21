import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AppProvider } from './contexts/AppContext';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Footer from './components/Layout/Footer';
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
              </Routes>
            </main>

            <Footer />

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
