import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from '../types/navigation';

interface DropdownMenuProps {
  items: NavItem[];
  isMobile?: boolean;
  isSubmenu?: boolean;
  closeMenu?: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ 
  items, 
  isMobile = false,
  isSubmenu = false,
  closeMenu = () => {}
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuPosition, setMenuPosition] = useState<'left' | 'right'>('left');

  useEffect(() => {
    const updateMenuPosition = () => {
      if (menuRef.current && !isSubmenu) {
        const rect = menuRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const spaceOnRight = viewportWidth - rect.left;
        const menuWidth = 200; // min-w-[200px]

        if (spaceOnRight < menuWidth) {
          setMenuPosition('right');
        } else {
          setMenuPosition('left');
        }
      }
    };

    updateMenuPosition();
    window.addEventListener('resize', updateMenuPosition);
    return () => window.removeEventListener('resize', updateMenuPosition);
  }, [isSubmenu]);

  if (isMobile) {
    return (
      <div className="pl-4 mt-2 space-y-2">
        {items.map((item, index) => (
          <div key={index}>
            {item.path ? (
              <Link 
                to={item.path} 
                className="block py-2 text-gray-700 hover:text-primary"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ) : (
              <div className="py-2 font-medium text-gray-800">
                {item.label}
                {item.children && (
                  <span className="ml-1">&#9662;</span>
                )}
              </div>
            )}
            
            {item.children && (
              <DropdownMenu 
                items={item.children} 
                isMobile={true} 
                isSubmenu={true}
                closeMenu={closeMenu}
              />
            )}
          </div>
        ))}
      </div>
    );
  }
  
  return (
    <div 
      ref={menuRef}
      className={`
        absolute bg-white rounded-md shadow-lg overflow-visible
        min-w-[200px]
        transition-all duration-200 ease-in-out
        ${isSubmenu 
          ? 'left-full top-0' 
          : menuPosition === 'left' 
            ? 'left-0 top-full' 
            : 'right-0 top-full'
        }
        opacity-0 invisible scale-95 origin-top-${menuPosition}
        group-hover:opacity-100 group-hover:visible group-hover:scale-100
        pointer-events-none group-hover:pointer-events-auto
        z-[100]
      `}
    >
      <div className="py-1">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="relative group/submenu"
          >
            {item.path ? (
              <Link 
                to={item.path} 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ) : (
              <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary cursor-pointer">
                {item.label}
                {item.children && (
                  <span className="ml-2 transition-transform duration-200 group-hover/submenu:rotate-90">&#9656;</span>
                )}
              </div>
            )}
            
            {item.children && (
              <div 
                className={`
                  absolute left-full top-0 
                  bg-white rounded-md shadow-lg
                  min-w-[200px]
                  z-[200]
                  opacity-0 invisible scale-95 origin-top-left
                  group-hover/submenu:opacity-100 group-hover/submenu:visible group-hover/submenu:scale-100
                  transition-all duration-200 ease-in-out
                  pointer-events-none group-hover/submenu:pointer-events-auto
                  ${menuPosition === 'right' ? '-translate-x-full' : ''}
                `}
              >
                <div className="py-1">
                  {item.children.map((subItem, subIndex) => (
                    <Link 
                      key={subIndex}
                      to={subItem.path || '#'} 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                      onClick={closeMenu}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;