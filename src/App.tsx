import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import ContactsPage from './pages/ContactsPage';
import ProjectsPage from './pages/ProjectsPage';
import CosmosWeek1 from './pages/career/CosmosWeek1';
import CosmosWeek2 from './pages/career/CosmosWeek2';
import CosmosWeek3 from './pages/career/CosmosWeek3';
import CosmosWeek4 from './pages/career/CosmosWeek4';
import GuestSpeakers from './pages/career/GuestSpeakers';
import ChessAnalysis from './pages/projects/ChessAnalysis';
import SnakeGame from './pages/projects/SnakeGame';
import LSTMFinancialModel from './pages/projects/LSTMFinancialModel';
import SkyblockItemLogger from './pages/projects/SkyblockItemLogger';
import ValorantLoadoutOptimizer from './pages/projects/ValorantLoadoutOptimizer';
import PolkaDotGame from './pages/projects/PolkaDotGame';
import Neurochess from './pages/projects/Neurochess';
import FocusFlow from './pages/projects/FocusFlow';
import StocAIPage from './pages/projects/StocAI';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/stoc-ai" element={<StocAIPage />} />
          <Route path="/chess-analysis" element={<ChessAnalysis />} />
          <Route path="/snake-game" element={<SnakeGame />} />
          <Route path="/LSTM-financial-model" element={<LSTMFinancialModel />} />
          <Route path="/skyblock-item-logger" element={<SkyblockItemLogger />} />
          <Route path="/valorant-loadout-optimizer" element={<ValorantLoadoutOptimizer />} />
          <Route path="/polka-dot" element={<PolkaDotGame />} />
          <Route path="/neurochess" element={<Neurochess />} />
          <Route path="/focusflow" element={<FocusFlow />} />
          <Route path="/cosmos-week1" element={<CosmosWeek1 />} />
          <Route path="/cosmos-week2" element={<CosmosWeek2 />} />
          <Route path="/cosmos-week3" element={<CosmosWeek3 />} />
          <Route path="/cosmos-week4" element={<CosmosWeek4 />} />
          <Route path="/guest-speakers" element={<GuestSpeakers />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;