import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { schoolInfo } from '../data/mock';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'À propos', href: '#about' },
    { label: 'Filières', href: '#filieres' },
    { label: 'Administration', href: '#administration' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Galerie', href: '#gallery' },
    { label: 'Équipements', href: '#equipments' },
    { label: 'Statistiques', href: '#statistics' },
    { label: 'Témoignages', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#003366] to-[#00BFFF] flex items-center justify-center text-white font-bold text-xl">
              ISA
            </div>
            <div className="hidden md:block">
              <div className="text-xl font-bold text-[#003366]">{schoolInfo.name}</div>
              <div className="text-xs text-[#00BFFF]">Excellence & Innovation</div>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#00BFFF] hover:bg-[#F5F7FA] rounded-md transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#admissions"
              onClick={(e) => scrollToSection(e, '#admissions')}
              className="px-6 py-2.5 bg-[#00BFFF] text-white font-semibold rounded-lg hover:bg-[#003366] transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              S'inscrire
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-[#F5F7FA] hover:text-[#00BFFF] rounded-md transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#admissions"
              onClick={(e) => scrollToSection(e, '#admissions')}
              className="block px-4 py-3 bg-[#00BFFF] text-white font-semibold text-center rounded-lg hover:bg-[#003366] transition-colors duration-300"
            >
              S'inscrire Maintenant
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;