import { useNavigate } from 'react-router-dom';
import './Page.css';

export default function Sublimacao() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <section className="page-hero">
        <div className="hero-content">
          <h1>Sublimação</h1>
          <p className="hero-subtitle">Mimos e Personalizados</p>
        </div>
      </section>

      <section className="page-content">
        <div className="content-wrapper">
          <div className="info-grid">
            <div className="info-card">
              <h3>Tecnologia Premium</h3>
              <p>Impressão de sublimação com cores fiéis e acabamento durável.</p>
            </div>
            <div className="info-card">
              <h3>Personalização</h3>
              <p>Produtos customizados para seu evento, marca ou presente.</p>
            </div>
            <div className="info-card">
              <h3>Entrega Segura</h3>
              <p>Controle de qualidade e logística confiável para cada pedido.</p>
            </div>
          </div>

          {/* <div className="gallery-placeholder">
            <p>Portfólio em construção: breve lista de produtos.</p>
          </div>
        </div> */}
        <div className="product-gallery">
            
            {/* Exemplo 1: Caneca */}
            {/* Lembre-se: As imagens devem estar na pasta 'public' do Vite */}
            <div className="gallery-item">
              <img src="./public/1.png" alt="Caneca Lumiar Personalizada" />
              <h4>Etiqueta Escolares</h4>
            </div>

            {/* Exemplo 2: Camisa */}
            <div className="gallery-item">
              <img src="./public/2.png" alt="Camisa com estampa exclusiva" />
              <h4>Kit Completo</h4>
            </div>

            {/* Exemplo 3: Almofada */}
            <div className="gallery-item">
              <img src="./public/3.png" alt="Almofada decorativa Lumiar" />
              <h4>Etiquetas Personalizadas</h4>
            </div>

            {/* Adicione mais itens conforme necessário */}

          </div>
          {/* ------------------------------------------ */}

        </div>
      </section>

      <section className="cta-section">
        <div className="cta-wrapper">
          <h2>Pronto para sua criação?</h2>
          <button className="cta-button" onClick={() => navigate('/')}>
            ← Voltar ao Home
          </button>
        </div>
      </section>
    </div>
  );
}