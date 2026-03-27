import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1 onClick={() => navigate('/')}>Lumiar</h1>
          <p className="tagline">Exclusividade & Inovação</p>
        </div>
        
        <nav className="nav-menu">
          <a 
            href="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); navigate('/'); }}
          >
            Home
          </a>
          <a 
            href="/sublimacao" 
            className={`nav-link ${isActive('/sublimacao') ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); navigate('/sublimacao'); }}
          >
            Sublimação
          </a>
          <a 
            href="/3d" 
            className={`nav-link ${isActive('/3d') ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); navigate('/3d'); }}
          >
            Impressão 3D
          </a>
        </nav>
      </div>
    </header>
  );
}
