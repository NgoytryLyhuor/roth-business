import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ScrubInvoice } from './pages/ScrubInvoice';
import { SaboSpeiiInvoice } from './pages/SaboSpeiiInvoice';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/scrub" element={<ScrubInvoice />} />
      <Route path="/sabo-speii" element={<SaboSpeiiInvoice />} />
    </Routes>
  );
}

export default App;

