import './footer.css';

import footerLogo from '@/assets/images/footer.png';

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">
          <img
            src={footerLogo}
            alt="Hydromagic"
            className="footer-logo"
          />

          <p className="footer-description">
            Creamos experiencias de bienestar a través de nuestros diseños, confort y calidad.
            <br />
            <br />
            Conoce nuestros modelos o solicita una asesoría para tu hogar o proyecto.
          </p>
        </div>

        <div className="footer-column">
          <a href="#" className="footer-link footer-link--active">Inicio</a>
          <a href="#" className="footer-link">Nosotros</a>
          <a href="#" className="footer-link">Servicios</a>
          <a href="#" className="footer-link">Productos</a>
          <a href="#" className="footer-link">Distribuidores</a>
          <a href="#" className="footer-link">Contacto</a>
        </div>

        <div className="footer-column">
          <span className="footer-title">Redes sociales</span>

          <a
            href="https://www.facebook.com/profile.php?id=61581150105522"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Facebook
          </a>

          <a
            href="https://www.instagram.com/hydromagic_mx/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/company/35865072/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
        </div>

        {/* COLUMNA CONTACTO */}
        <div className="footer-column">
          <span className="footer-title">Contáctanos</span>

          <p className="footer-text">
            Autopista México-Cuervanava No. 48
            <br />
            Col. San Pedro Mártir, CP 14650
            <br />
            Ciudad de México
          </p>

          <p className="footer-text">contacto@hydromagic.com.mx</p>

          <p className="footer-text">55 5573 7889</p>
          <p className="footer-text">55 5573 4934</p>
          <p className="footer-text">55 5573 5539</p>
        </div>

      </div>

      {/* DIVISOR */}
      <div className="footer-divider" />

      <div className="footer-bottom">
        <span className="footer-copy">
          Hydromagic © 2026. Todos los derechos reservados.
        </span>

        <div className="footer-legal">
          <a href="#" className="footer-legal-link">
            Términos y condiciones
          </a>

          <span className="footer-legal-divider" />

          <a href="#" className="footer-legal-link">
            Aviso de privacidad
          </a>
        </div>
      </div>

    </footer>
  );
}
