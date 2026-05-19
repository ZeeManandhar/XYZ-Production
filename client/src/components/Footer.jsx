import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { footerServices, navLinks } from "../data/siteData.js";
import Logo from "./Logo.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Logo />
          <p>Capturing moments, creating memories that last a lifetime.</p>
          <div className="social-row">
            <span>ig</span>
            <span>fb</span>
            <span>in</span>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>
        <div>
          <h3>Services</h3>
          {footerServices.map((service) => (
            <Link key={service} to="/services">
              {service}
            </Link>
          ))}
        </div>
        <div>
          <h3>Contact Us</h3>
          <p className="footer-line"><MapPin size={16} /> 123 Studio Street, Creative City</p>
          <p className="footer-line"><Phone size={16} /> +91 98765 43210</p>
          <p className="footer-line"><Mail size={16} /> hello@xyzproduction.com</p>
        </div>
        <div>
          <h3>Newsletter</h3>
          <p>Subscribe to get the latest updates and offers.</p>
          <form className="newsletter">
            <input type="email" placeholder="Enter your email" aria-label="Email address" />
            <button aria-label="Subscribe"><Send size={16} /></button>
          </form>
        </div>
      </div>
      <p className="copyright">© 2026 XYZ Production. All Rights Reserved.</p>
    </footer>
  );
}
