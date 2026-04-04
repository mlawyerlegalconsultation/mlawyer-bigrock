import React, { useState } from 'react';
import { motion, useScroll } from "motion/react";
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/Logo.png';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import navItems from '../data/menu.json';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCustomerServicesOpen, setIsCustomerServicesOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  const customerServices = [
    { label: 'Family Lawyer', path: '/customer/divorce-lawyer' },
    { label: 'Property Lawyer', path: '/customer/online-legal-consultation' },
    { label: 'Criminal Lawyer', path: '/customer/legal-criminal-lawyer' },
    { label: 'Corporate Lawyer', path: '/customer/best-corporate-lawyers' },
    { label: 'Consumer Rights Lawyer', path: '/customer/consumer-right-lawyer-app' },
    { label: 'Labour Lawyer', path: '/customer/labour-lawyer-advisor' },
  ];

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getPath = (item) => {
    if (item === 'Home') return '/';
    if (item === 'For Customers') return '/customer';
    if (item === 'For Lawyers') return '/lawyer';
    return `/${item.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-primary dark:bg-primary/50 backdrop-blur-xl transition-all duration-300 shadow-sm">
      <div className="container mx-auto px-4 sm:px-10 h-20 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="MLawyer Logo" loading="lazy" className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105" />
          <div className="text-white font-bold text-lg sm:text-xl tracking-wide">MLawyer</div>
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex items-center lg:space-x-5 xl:space-x-8">
            {navItems.map((item) => {
              const path = getPath(item);
              const isCustomerItem = item === 'For Customers';
              const isActive = isCustomerItem ? location.pathname.startsWith('/customer') : location.pathname === path;

              if (isCustomerItem) {
                return (
                  <li key={item} className="relative group">
                    <Link
                      to={path}
                      className={`inline-flex items-center gap-2 font-medium lg:text-xs xl:text-sm transition-all relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-secondary after:transition-all hover:after:w-full hover:text-secondary ${isActive ? 'text-secondary after:w-full' : 'text-white/90 after:w-0'
                        }`}
                    >
                      {item}
                      <FaChevronDown className="text-[10px] opacity-80 transition-transform duration-200 group-hover:rotate-180" />
                    </Link>
                    <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                      <div className="mt-4 w-80 rounded-2xl border border-white/10 bg-primary/95 backdrop-blur-xl shadow-[0_20px_45px_rgba(0,0,0,0.3)] p-2">
                        {customerServices.map((service) => {
                          const isServiceActive = location.pathname === service.path;
                          return (
                            <Link
                              key={service.path}
                              to={service.path}
                              className={`group/service relative block rounded-xl px-4 py-3 text-sm font-medium transition-all ${isServiceActive ? 'text-secondary bg-white/10 shadow-sm' : 'text-white/80 hover:text-white hover:bg-white/5 hover:pl-5'
                                }`}
                            >
                              <span className={`pointer-events-none absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full transition-all ${isServiceActive ? 'bg-secondary opacity-100' : 'bg-secondary opacity-0 group-hover/service:opacity-100'}`} />
                              {service.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item}>
                  <Link
                    to={path}
                    className={`font-medium lg:text-xs xl:text-sm transition-all relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-secondary after:transition-all hover:after:w-full hover:text-secondary ${isActive ? 'text-secondary after:w-full' : 'text-white/90 after:w-0'
                      }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/download" className="hidden sm:block px-6 py-2.5 bg-secondary text-white font-bold rounded-lg cursor-pointer shadow-lg hover:shadow-secondary/20 hover:-translate-y-0.5 transition-all duration-300 text-sm">
            Download App
          </Link>
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white/90 hover:text-secondary focus:outline-none transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <div className={`lg:hidden absolute top-20 left-0 w-full bg-primary border-t border-white/10 shadow-2xl transition-all duration-300 ease-in-out origin-top ${isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 pointer-events-none'}`}>
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
          {navItems.map((item) => {
            const path = getPath(item);
            const isCustomerItem = item === 'For Customers';
            const isActive = isCustomerItem ? location.pathname.startsWith('/customer') : location.pathname === path;

            if (isCustomerItem) {
              return (
                <div key={item} className="border-b border-white/5 pb-2">
                  <div className="flex items-center justify-between">
                    <Link
                      to={path}
                      className={`hover:text-secondary hover:pl-2 font-medium text-lg transition-all ${isActive ? 'text-secondary pl-2' : 'text-white/80'}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                    <button
                      type="button"
                      className="text-white/70 hover:text-secondary transition-colors px-2 py-1"
                      onClick={() => setIsCustomerServicesOpen(!isCustomerServicesOpen)}
                      aria-label="Toggle customer services"
                    >
                      {isCustomerServicesOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                    </button>
                  </div>
                  {isCustomerServicesOpen && (
                    <div className="mt-2 ml-3 rounded-xl border border-white/10 bg-white/5 p-2 space-y-1 shadow-lg backdrop-blur-sm">
                      {customerServices.map((service) => {
                        const isServiceActive = location.pathname === service.path;
                        return (
                          <Link
                            key={service.path}
                            to={service.path}
                            className={`block rounded-lg px-3 py-2 text-sm font-medium transition-all ${isServiceActive ? 'text-secondary bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/5 hover:pl-4'
                              }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {service.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item}
                to={path}
                className={`hover:text-secondary hover:pl-2 font-medium text-lg transition-all border-b border-white/5 pb-2 ${isActive ? 'text-secondary pl-2' : 'text-white/80'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            );
          })}
          <Link to="/download" className="sm:hidden w-full px-6 py-3 bg-secondary text-white font-bold rounded-xl shadow-md hover:bg-secondary/90 transition-all text-center mt-4" onClick={() => setIsMobileMenuOpen(false)}>
            Download App
          </Link>
        </div>
      </div>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          backgroundColor: 'var(--color-secondary)',
        }}
        className="absolute bottom-0 left-0 right-0 h-1 origin-left z-50"
      />
    </header>
  );
};

export default Header;
