import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data/siteData.js";
import Logo from "./Logo.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <Logo />
      <button className="icon-button menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {navLinks.map((link) => (
          <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
            {link.label}
          </NavLink>
        ))}
        <NavLink className="nav-cta" to="/book" onClick={() => setOpen(false)}>
          Book a Shoot
        </NavLink>
      </nav>
    </header>
  );
}
