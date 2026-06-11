import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import { schoolInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Accueil', href: '#home' },
    { label: 'À propos', href: '#about' },
    { label: 'Filières', href: '#filieres' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#003366] to-[#001a33] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#00BFFF] flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{schoolInfo.name}</h3>
                <p className="text-xs text-white/70">Excellence & Innovation</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              {schoolInfo.slogan}
            </p>
            <p className="text-white/70 text-xs">
              Fondé en 2001 à Abidjan, Côte d'Ivoire
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-white/80 hover:text-[#00BFFF] transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] group-hover:w-3 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-[#00BFFF] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{schoolInfo.address}</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-5 h-5 text-[#00BFFF] flex-shrink-0" />
                <div className="text-white/80">
                  <a href={`tel:${schoolInfo.phone}`} className="hover:text-[#00BFFF] transition-colors duration-200 block">
                    {schoolInfo.phone}
                  </a>
                  <a href={`https://wa.me/${schoolInfo.whatsapp.replace(/\s/g, '')}`} className="hover:text-[#00BFFF] transition-colors duration-200 block">
                    WhatsApp: {schoolInfo.whatsapp}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-5 h-5 text-[#00BFFF] flex-shrink-0" />
                <a href={`mailto:${schoolInfo.email}`} className="text-white/80 hover:text-[#00BFFF] transition-colors duration-200">
                  {schoolInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-4">Réseaux Sociaux</h4>
            <p className="text-white/80 text-sm mb-4">
              Suivez-nous pour rester informé de nos actualités et événements.
            </p>
            <div className="flex gap-3">
              <a
                href={schoolInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00BFFF] flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={schoolInfo.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00BFFF] flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={schoolInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00BFFF] flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={schoolInfo.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00BFFF] flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              © {currentYear} {schoolInfo.name} - {schoolInfo.fullName}. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-[#00BFFF] transition-colors duration-200">
                Mentions légales
              </a>
              <a href="#" className="text-white/70 hover:text-[#00BFFF] transition-colors duration-200">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;