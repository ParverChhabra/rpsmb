"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Facilities', href: '/facilities' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-sm shadow-lg border-b border-gold/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
              <span className="text-primary font-serif font-bold text-xl">R</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-lg font-semibold text-cream leading-tight">
                Radiant Public School
              </h1>
              <p className="text-xs text-gold/80 tracking-wide">
                Excellence in Education
              </p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink 
                  to={link.href} 
                  className="nav-link text-sm font-medium"
                  activeClassName="text-gold after:w-full"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/admissions" className="btn-premium text-sm px-6 py-2">
                Admissions
              </NavLink>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-cream"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-card border-t border-gold/20 shadow-lg">
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.href}
                    className="block px-6 py-3 text-cream hover:bg-muted transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="px-6 py-3">
                <NavLink to="/admissions" className="btn-premium inline-block text-sm px-6 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Admissions
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
