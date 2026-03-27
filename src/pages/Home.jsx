import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* <header className="home-header">
        <h1 className="logo-text">Lumiar</h1>
        <p className="subtitle">Exclusividade que ilumina cada detalhe</p>
      </header> */}

      <div className="cards-container">
        {/* Card Sublimação */}
        <div className="card" onClick={() => navigate('/sublimacao')}>
          <div className="video-wrapper">
            <video src="../public/sublimacao.mp4" autoPlay loop muted playsInline />
          </div>
          <div className="card-content">
            <h2>Sublimação</h2>
            <p>Mimos e Personalizados</p>
          </div>
        </div>

        {/* Card 3D */}
        <div className="card" onClick={() => navigate('/3d')}>
          <div className="video-wrapper">
            <video src="../public/3d.mp4" autoPlay loop muted playsInline />
          </div>
          <div className="card-content">
            <h2>Impressão 3D</h2>
            <p>Inovação em cada dimensão: transformando conceitos em realidade.</p>
          </div>
        </div>
      </div>
    </div>
  );
}