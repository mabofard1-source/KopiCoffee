import {
  FiFacebook,
  FiInstagram,
  FiMapPin,
  FiPhone,
  FiPhoneCall,
} from 'react-icons/fi';

import { FaTiktok } from 'react-icons/fa6';

import logo from '../assets/kopi-logo.png';

export default function Footer() {
  return (
    <footer>
      <div className="footer-wave"></div>

      <div className="container footer-grid">
        {/* Brand */}
        <section>
          <div className="logo footer-logo">
            <img
              src={logo}
              alt="Kopi Specialty Coffee"
            />
          </div>

          <p>
            Made for unhurried moments, memorable cups, and good company.
          </p>
        </section>

        {/* Location & Phone */}
        <section>
          <h4>Find us</h4>

          <p>
            <FiMapPin />
            Kafr El-Zayat, El-Gharbia,
            <br />
            El-Geish Street
          </p>

          <p>
  <FiPhone />
  01036202620
  <br />

  <FiPhoneCall />
  0402531615
</p>
        </section>

        {/* Social Media */}
        <section>
          <h4>Follow Kopi</h4>

          <div className="socials">
            <a
              href="https://www.instagram.com/kopicafe.kz"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FiInstagram />
            </a>

            <a
              href="https://tiktok.com/@kopi.coffee.kz"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61585373786339"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FiFacebook />
            </a>
          </div>
        </section>
      </div>

      {/* Copyright */}
      <div className="copyright">
        © {new Date().getFullYear()} Kopi Specialty Coffee · Website
        designed &amp; developed by{' '}
        <strong>Mohamed Abofard</strong> · 01004365028
      </div>
    </footer>
  );
}