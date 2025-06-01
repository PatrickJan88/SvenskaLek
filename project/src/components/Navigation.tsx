import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Search, Languages, Gamepad, Settings as SettingsIcon } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: <Home size={24} />, label: 'Home' },
    { path: '/explore', icon: <Search size={24} />, label: 'Explore' },
    { path: '/translate', icon: <Languages size={24} />, label: 'Translate' },
    { path: '/play', icon: <Gamepad size={24} />, label: 'Play' },
    { path: '/settings', icon: <SettingsIcon size={24} />, label: 'Settings' }
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-neutral-200 shadow-lg z-10">
      <div className="flex justify-around items-center">
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? 'nav-item nav-item-active' : 'nav-item nav-item-inactive'
            }
          >
            {item.icon}
            <span className="mt-1">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navigation