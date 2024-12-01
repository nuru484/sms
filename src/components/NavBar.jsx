import React, { useState } from 'react';
import { Menu, Home, Book, UserCheck, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home', icon: <Home strokeWidth={1.5} /> },
    { name: 'About', href: '#about', icon: <Book strokeWidth={1.5} /> },
    {
      name: 'Admissions',
      href: '#admissions',
      icon: <UserCheck strokeWidth={1.5} />,
    },
    {
      name: 'Contact',
      href: '#contact',
      icon: <MessageCircle strokeWidth={1.5} />,
    },
  ];

  return (
    <div className="max-w-lg">
      {/* Mobile Navigation */}
      <nav className="md:hidden font-urbanist fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-xl font-semibold tracking-wide text-gray-900">
            Afatech
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none"
          >
            <Menu
              strokeWidth={1.5}
              className="text-gray-700 hover:text-black transition-colors"
            />
          </button>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 bg-white shadow-lg"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block p-4 border-t border-gray-200 hover:bg-gray-50 transition-colors flex items-center text-gray-700 hover:text-black"
                >
                  {React.cloneElement(item.icon, {
                    className: 'mr-3 text-gray-600',
                    size: 20,
                  })}
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden font-urbanist md:block fixed top-0 left-0 right-0 lg:px-8 bg-white border-b border-gray-200 shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-semibold tracking-wide text-gray-900">
            Afatech International School
          </div>
          <div className="flex space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center text-gray-700 hover:text-black transition-colors group"
              >
                {React.cloneElement(item.icon, {
                  className:
                    'mr-2 text-gray-600 group-hover:text-gray-900 transition-colors',
                  size: 20,
                })}
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
