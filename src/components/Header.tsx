import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-[#ffffff] border-b border-[#f5f5f5] shadow-md">
      <div className="container mx-auto px-6 md:px-12">
        <nav className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <a
              href="https://kuechenstudio-bergheim.at"
              className="h-10 sm:h-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/me_logo_black.png"
                alt="ME Logo"
                className="h-full w-auto"
              />
            </a>
            <a href="/" className="h-6 sm:h-7">
              <img
                src="/images/rossin.png"
                alt="Rossin Logo"
                className="h-full w-auto"
              />
            </a>
            {/* Removed the second logo/link here as it seems it was specific to Küchenstudio Bergheim */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <ul className="naviInner-nav flex items-center gap-10">
              <li>
                <a
                  href="#produkte"
                  className="nav-link"
                >
                  Produkte
                </a>
              </li>
              <li>
                <a
                  href="#ueber-rossin"
                  className="nav-link"
                >
                  Über Uns
                </a>
              </li>
              <li>
                <a
                  href="/#referenzen"
                  className="nav-link"
                >
                  Referenzen
                </a>
              </li>
              <li>
                <a href="/#beratung" className="nav-link">
                    Jetzt Beratung anfordern
                </a>
              </li>
            </ul>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-[##222222] focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white text-[#222222] border-t border-gray-100 shadow-md mobile">
            <div className="flex flex-col items-start gap-4 py-6 pl-6">
              <a
                href="/#produkte"
                className="transition-all text-lg"
                onClick={toggleMobileMenu}
              >
                Produkte
              </a>
              <a
                href="/#ueber-rossin"
                className="transition-all text-lg"
                onClick={toggleMobileMenu}
              >
                Über Uns
              </a>
              <a
                href="/#referenzen"
                className="transition-all text-lg"
                onClick={toggleMobileMenu}
              >
                Referenzen
              </a>
              <a href="/#beratung" className="transition-all text-lg">
                Jetzt Beratung anfordern
            </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
