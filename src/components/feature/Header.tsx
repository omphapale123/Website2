
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../base/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Technology', href: '/technology' },
    { name: 'Pilot Program', href: '/pilot' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-accent/20 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
              <img 
                src="https://static.readdy.ai/image/3d57a04e89a19f07dff1eb2283051a78/e6ca406b546d401d19570da8f5f5f82c.png" 
                alt="OffshoreBrücke Logo" 
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <span className="text-lg sm:text-2xl font-bold text-primary font-pacifico">OffshoreBrücke</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-textDark hover:text-primary transition-colors duration-300 font-medium cursor-pointer">
              Home
            </a>
            <a href="/about" className="text-textDark hover:text-primary transition-colors duration-300 font-medium cursor-pointer">
              About
            </a>
            <a href="/technology" className="text-textDark hover:text-primary transition-colors duration-300 font-medium cursor-pointer">
              Technology
            </a>
            <a href="/pilot" className="text-textDark hover:text-primary transition-colors duration-300 font-medium cursor-pointer">
              Pilot Program
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="/pilot"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Join Pilot Program
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-textDark hover:text-primary transition-colors duration-300 cursor-pointer"
            aria-label="Toggle menu"
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl sm:text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-accent/20 bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-3">
              <a href="/" className="text-textDark hover:text-primary transition-colors duration-300 font-medium py-2 px-2 cursor-pointer">
                Home
              </a>
              <a href="/about" className="text-textDark hover:text-primary transition-colors duration-300 font-medium py-2 px-2 cursor-pointer">
                About
              </a>
              <a href="/technology" className="text-textDark hover:text-primary transition-colors duration-300 font-medium py-2 px-2 cursor-pointer">
                Technology
              </a>
              <a href="/pilot" className="text-textDark hover:text-primary transition-colors duration-300 font-medium py-2 px-2 cursor-pointer">
                Pilot Program
              </a>
              <div className="pt-2">
                <a
                  href="/pilot"
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  Join Pilot Program
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
