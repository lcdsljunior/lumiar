import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sublimacao from './pages/Sublimacao';
import Print3D from './pages/Print3D';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sublimacao" element={<Sublimacao />} />
            <Route path="/3d" element={<Print3D />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;