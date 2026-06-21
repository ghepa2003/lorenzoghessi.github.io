import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { House, Robot, PersonArmsSpread } from '@phosphor-icons/react';

export const Navbar = () => {
  const location = useLocation();
  const isLightMode = location.pathname === '/life-and-logbook';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto"
        >
          <NavLink to="/" className={`text-xl font-bold tracking-tighter hover:text-emerald-500 transition-colors ${isLightMode ? 'text-obsidian' : 'text-ivory'}`}>
            LG<span className="text-emerald-500">.</span>
          </NavLink>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`pointer-events-auto rounded-full px-6 py-3 flex items-center gap-8 transition-colors duration-1000 ${isLightMode ? 'glass-panel-light' : 'glass-panel'}`}
        >
          <NavLink 
            to="/" 
            className={({ isActive }) => `flex items-center gap-2 text-sm font-medium transition-colors ${isActive ? 'text-emerald-500' : isLightMode ? 'text-slate-custom hover:text-obsidian' : 'text-slate-custom hover:text-ivory'}`}
          >
            <House weight="duotone" />
            <span className="hidden sm:inline">Home</span>
          </NavLink>
          <NavLink 
            to="/engineering" 
            className={({ isActive }) => `flex items-center gap-2 text-sm font-medium transition-colors ${isActive ? 'text-emerald-500' : isLightMode ? 'text-slate-custom hover:text-obsidian' : 'text-slate-custom hover:text-ivory'}`}
          >
            <Robot weight="duotone" />
            <span className="hidden sm:inline">Engineering</span>
          </NavLink>
          <NavLink 
            to="/life-and-logbook" 
            className={({ isActive }) => `flex items-center gap-2 text-sm font-medium transition-colors ${isActive ? 'text-emerald-500' : isLightMode ? 'text-slate-custom hover:text-obsidian' : 'text-slate-custom hover:text-ivory'}`}
          >
            <PersonArmsSpread weight="duotone" />
            <span className="hidden sm:inline">Life & Logbook</span>
          </NavLink>
        </motion.div>

        <div className="w-8"></div>
      </div>
    </nav>
  );
};
