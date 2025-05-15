
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

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
      isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 py-4"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/aa1a87b3-d719-4400-8024-16b3db4b87df.png" 
              alt="Keukenhelden Logo" 
              className="h-12"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/#company" 
              className={({ isActive }) => 
                cn("text-gray-800 hover:text-black font-medium",
                  isActive ? "border-b-2 border-black" : "")
              }
            >
              Over Ons
            </NavLink>
            <NavLink 
              to="/#showroom" 
              className={({ isActive }) => 
                cn("text-gray-800 hover:text-black font-medium",
                  isActive ? "border-b-2 border-black" : "")
              }
            >
              Showroom
            </NavLink>
            <NavLink 
              to="/#contact" 
              className={({ isActive }) => 
                cn("text-gray-800 hover:text-black font-medium",
                  isActive ? "border-b-2 border-black" : "")
              }
            >
              Contact
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => 
                cn("text-gray-800 hover:text-black font-medium",
                  isActive ? "border-b-2 border-black" : "")
              }
            >
              Blog
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4 bg-white">
            <NavLink 
              to="/#company" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) => 
                cn("text-gray-800 hover:text-black font-medium px-4 py-2",
                  isActive ? "bg-gray-100" : "")
              }
            >
              Over Ons
            </NavLink>
            <NavLink 
              to="/#showroom" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) => 
                cn("text-gray-800 hover:text-black font-medium px-4 py-2",
                  isActive ? "bg-gray-100" : "")
              }
            >
              Showroom
            </NavLink>
            <NavLink 
              to="/#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) => 
                cn("text-gray-800 hover:text-black font-medium px-4 py-2",
                  isActive ? "bg-gray-100" : "")
              }
            >
              Contact
            </NavLink>
            <NavLink 
              to="/blog" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) => 
                cn("text-gray-800 hover:text-black font-medium px-4 py-2",
                  isActive ? "bg-gray-100" : "")
              }
            >
              Blog
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
