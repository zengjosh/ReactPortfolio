import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import NavigationMenu from './NavigationMenu';
import { navigationItems } from '../utils/navigationData';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body scroll
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-0 sm:px-2 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary -ml-4 sm:-ml-2">
          Josh Zeng
        </Link>
        
        <div className="lg:hidden">
          <button 
            onClick={toggleMenu}
            className="p-2 text-gray-600 hover:text-primary transition-colors"
            aria-label="Toggle navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
        
        <div className={`
          lg:block 
          ${isMenuOpen ? 'fixed inset-0 pt-16 bg-white z-40 overflow-y-auto' : 'hidden'}
        `}>
          <NavigationMenu 
            items={navigationItems} 
            isMobile={isMenuOpen} 
            closeMenu={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }} 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;