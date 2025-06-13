import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from '../types/navigation';
import DropdownMenu from './DropdownMenu';

interface NavigationMenuProps {
  items: NavItem[];
  isMobile?: boolean;
  closeMenu?: () => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ 
  items, 
  isMobile = false,
  closeMenu = () => {}
}) => {
  return (
    <nav className={`${isMobile ? 'p-6' : ''}`}>
      <ul className={`
        flex 
        ${isMobile ? 'flex-col space-y-6' : 'space-x-6'}
      `}>
        {items.map((item, index) => (
          <li key={index} className="relative group">
            {item.path ? (
              <Link 
                to={item.path} 
                className={`
                  text-gray-800 hover:text-primary font-medium transition-colors
                  ${isMobile ? 'block py-3 text-lg' : 'inline-block py-2'}
                `}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ) : (
              <div className={`
                text-gray-800 hover:text-primary font-medium transition-colors
                ${isMobile ? 'py-3 text-lg' : 'py-2 inline-flex items-center'}
                ${item.children ? 'group-hover:text-primary cursor-pointer' : ''}
                relative z-50
              `}>
                {item.label}
                {item.children && !isMobile && (
                  <span className="ml-1 transition-transform duration-200 group-hover:rotate-180">&#9662;</span>
                )}
              </div>
            )}
            
            {item.children && (
              <DropdownMenu 
                items={item.children} 
                isMobile={isMobile} 
                closeMenu={closeMenu}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;