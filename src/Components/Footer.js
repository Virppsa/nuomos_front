import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer id="kontaktai" className="footer"> {/* Added id here */}
      <div className="footer-content">
        <p>KONTAKTAI:</p>
        <p>Paštas: asta.virpsiene@gmail.com</p>
        <p>Tel:
            <a href="tel:+37065908550" className="footer-link">
             +370 (659) 08 550
            </a>
        </p>
        <p>Adresas: 
          <a href="https://www.google.com/maps/search/?api=1&query=Edvino+kaimo+turizmas" 
             target="_blank" 
             rel="noopener noreferrer"
             className="footer-link">
            Skubėtų kaimas, Vaikų g. 7, Lietuva
          </a></p>
          <div className="social-media">
          <p>PASEKITE MUS INSTAGRAME:</p>
          <a 
            href="https://www.instagram.com/rola_sodybu_kompleksas?igsh=M3YyeHpjb2g0dXlk&utm_source=qr"
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link">
            @rola_sodybu_kompleksas
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
