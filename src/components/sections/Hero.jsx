import '../../styles/styles.css';

import {
  useEffect,
  useState,
} from 'react';

import facebook from '@/assets/icons/facebook.svg';
import instagram from '@/assets/icons/instagram.svg';
import linkedin from '@/assets/icons/linkedin-in.svg';
import tiktok from '@/assets/icons/tiktok.svg';
import twitter from '@/assets/icons/x-twitter.svg';
import youtube from '@/assets/icons/youtube.svg';
import heroBg from '@/assets/images/hero.png';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="hero hero-parallax"
      style={{
        backgroundImage: `
          linear-gradient(180deg, rgba(0,0,0,0) 70%, #000 100%),
          url(${heroBg})
        `,
        backgroundPositionY: `${scrollY * 0.25}px`,
      }}
    >
      <div className="hero-container">
        <div
          className="hero-content"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <h1 className="hero-animate hero-title">
            Hechas para durar,
            <br />
            Diseñadas para disfrutarse
          </h1>

          <p className="hero-animate hero-text">
            Eleva tu espacio con una experiencia de confort, ergonomía y diseño.
            Asesoría para hogar y proyectos, con respaldo de nuestra fábrica y
            cobertura nacional.
          </p>

          <button className="hero-animate hero-cta">
            Contáctanos ahora
          </button>
        </div>

        <div
          className="hero-bottom hero-animate hero-footer"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        >
          <div className="hero-socials">
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={twitter} alt="X" />
            <img src={youtube} alt="YouTube" />
            <img src={tiktok} alt="TikTok" />
            <img src={linkedin} alt="LinkedIn" />
          </div>

          <div className="hero-more">
            <span>Conoce más de nuestras tinas</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M11.7086 7.29609C12.0992 7.68672 12.0992 8.32109 11.7086 8.71172L5.70859 14.7117C5.31797 15.1023 4.68359 15.1023 4.29297 14.7117C3.90234 14.3211 3.90234 13.6867 4.29297 13.2961L9.58672 8.00234L4.29609 2.70859C3.90547 2.31797 3.90547 1.68359 4.29609 1.29297C4.68672 0.902344 5.32109 0.902344 5.71172 1.29297L11.7117 7.29297L11.7086 7.29609Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
