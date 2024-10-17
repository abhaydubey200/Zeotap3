import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RuleEngine from './pages/RuleEngine';
import WeatherMonitor from './pages/WeatherMonitor';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/rule-engine" element={<RuleEngine />} />
                <Route path="/weather-monitor" element={<WeatherMonitor />} />
            </Routes>
        </Router>
    );
}

export default App;
