
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Transition from "./ui/Transition";

type NavbarProps = {
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Predictions", path: "/predictions" },
    { name: "Tools", path: "/tools" },
    { name: "Community", path: "/community" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-apple",
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm"
          : "py-5 bg-transparent",
        className
      )}
    >
      <div className="page-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-emergence-black">
              EMERGENCE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-emergence-gray-700 hover:text-emergence-blue font-medium transition-all"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/register" 
              className="bg-emergence-blue text-white px-5 py-2 rounded-full font-medium hover:shadow-md hover:bg-emergence-blue/90 transition-all"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-emergence-gray-800 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="transition-all duration-300" />
            ) : (
              <MenuIcon size={24} className="transition-all duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <Transition
          show={isMobileMenuOpen}
          animation="fade"
          className="md:hidden"
        >
          <div className="mt-4 rounded-xl bg-white shadow-lg p-4">
            <div className="flex flex-col space-y-4 py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-emergence-gray-700 hover:text-emergence-blue font-medium py-2 px-3 rounded-lg hover:bg-emergence-gray-100 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/register" 
                className="bg-emergence-blue text-white py-2 px-4 rounded-lg font-medium hover:bg-emergence-blue/90 transition-all text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join Now
              </Link>
            </div>
          </div>
        </Transition>
      </div>
    </nav>
  );
};

export default Navbar;
