
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white shadow-md py-3" 
        : "bg-transparent backdrop-blur-sm py-5"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <motion.img 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src="/lovable-uploads/aa1a87b3-d719-4400-8024-16b3db4b87df.png" 
              alt="Keukenhelden Logo" 
              className="h-12"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Over Ons', path: '/#company' },
              { label: 'Showroom', path: '/#showroom' },
              { label: 'Contact', path: '/#contact' },
              { label: 'Blog', path: '/blog' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
              >
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => 
                    cn(
                      "text-gray-800 hover:text-black relative font-medium transition-all duration-300",
                      isActive ? "after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-black after:bottom-[-6px] after:left-0" : "",
                      "after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-left after:transition-transform after:duration-300"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? 
              <X className="h-6 w-6" /> : 
              <Menu className="h-6 w-6" />
            }
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 flex flex-col space-y-1 overflow-hidden bg-white"
            >
              {[
                { label: 'Over Ons', path: '/#company' },
                { label: 'Showroom', path: '/#showroom' },
                { label: 'Contact', path: '/#contact' },
                { label: 'Blog', path: '/blog' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * (index + 1) }}
                >
                  <NavLink 
                    to={item.path} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) => 
                      cn(
                        "block px-4 py-3 text-gray-800 hover:bg-gray-100 hover:text-black transition-colors",
                        isActive ? "bg-gray-100 font-medium" : ""
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
