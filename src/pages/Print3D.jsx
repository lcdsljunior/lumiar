import { useNavigate } from 'react-router-dom';
import './Page.css';

export default function Print3D() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <section className="page-hero">
        <div className="hero-content">
          <h1>Impressão 3D</h1>
          <p className="hero-subtitle">Inovação em cada dimensão</p>
        </div>
      </section>

      <section className="page-content">
        <div className="content-wrapper">
          <div className="info-grid">
            <div className="info-card">
              <h3>Tecnologia Avançada</h3>
              <p>Impressões 3D precisas com equipamentos de alto desempenho.</p>
            </div>
            <div className="info-card">
              <h3>Design Sob Medida</h3>
              <p>Peças com geometria complexa adaptadas ao seu projeto.</p>
            </div>
            <div className="info-card">
              <h3>Entrega Confiável</h3>
              <p>Acabamento final e envio seguro para cada protótipo.</p>
            </div>
          </div>

          <div className="gallery-placeholder">
            <p>Portfólio em construção: exemplos de sucesso em breve.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-wrapper">
          <h2>Transforme suas ideias em realidade</h2>
          <button className="cta-button" onClick={() => navigate('/')}>
            ← Voltar ao Home
          </button>
        </div>
      </section>
    </div>
  );
}