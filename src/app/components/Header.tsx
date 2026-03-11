import { Link, useLocation } from "react-router";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", path: "/" },
    { label: "Sobre", path: "/sobre" },
    { label: "Doações", path: "/doacoes" },
    { label: "Loja", path: "/loja" },
    { label: "Contato", path: "/contato" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-green-600"
          >
            <Heart className="w-8 h-8" fill="currentColor" />
            <span className="text-xl font-semibold">
              Grupo Partilhar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-colors ${
                  location.pathname === item.path
                    ? "text-green-600 font-medium"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Link to="/doacoes">Doar</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 text-sm transition-colors ${
                  location.pathname === item.path
                    ? "text-green-600 font-medium"
                    : "text-gray-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white"
            >
              <Link
                to="/doacoes"
                onClick={() => setIsMenuOpen(false)}
              >
                Doar
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}