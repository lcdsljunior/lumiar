import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Lumiar</h3>
          <p>Transformando ideias em realidade através de tecnologia e criatividade.</p>
        </div>

        <div className="footer-section">
          <h4>Serviços</h4>
          <ul>
            <li><a href="/sublimacao">Sublimação</a></li>
            <li><a href="/3d">Impressão 3D</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contato</h4>
          <p>
            <strong>Email:</strong> contato@lumiar.com.br<br/>
            <strong>Telefone:</strong> (83) 3335-2023
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Lumiar. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
