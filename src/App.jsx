import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import HackathonRegistration from './components/HackathonRegistration';
import MasterclassRegistration from './components/MasterclassRegistration';
import Background from './components/Background';
import { AnimationProvider } from './context/AnimationContext';
import './App.css';

function App() {
  return (
    <Router>
      <AnimationProvider>
        <div className="app-container">
          <Background />
          {/* We can add a Navbar here later if needed */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register/hackathon" element={<HackathonRegistration />} />
            <Route path="/register/masterclass" element={<MasterclassRegistration />} />
          </Routes>
        </div>
      </AnimationProvider>
    </Router>
  );
}

export default App;
