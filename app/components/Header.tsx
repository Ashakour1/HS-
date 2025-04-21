"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Services", href: "/services" },
    {
      name: "Center of Excellence",
      href: "#",
      dropdown: true,
      items: [
        { name: "Internal Medicine", href: "/excellence/internal-medicine" },
        { name: "Pediatrician", href: "/excellence/pediatrician" },
        { name: "Surgeon", href: "/excellence/surgeon" },
        { name: "Oncologist", href: "/excellence/oncologist" },
      ],
    },
    {
      name: "Corporate",
      href: "#",
      dropdown: true,
      items: [
        { name: "Hospital Overview", href: "/corporate/overview" },
        { name: "Management", href: "/corporate/management" },
      ],
    },
    { name: "Appointment", href: "/appointment" },
    { name: "Doctors", href: "/doctors" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/uniso-logo.png"
              width={60}
              height={60}
              alt="Uniso Logo"
              className="h-14 w-auto transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-8" ref={dropdownRef}>
              {navItems.map((item) => (
                <li key={item.name} className="group relative">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:text-blue-600"
                      >
                        {item.name}
                        <ChevronDown
                          className={`ml-1 h-4 w-4 opacity-70 transition-transform duration-300 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>

                      {/* Dropdown Menu */}
                      {activeDropdown === item.name && (
                        <div className="absolute left-0 top-full mt-1 w-56 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 transition-all duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-600"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <Link
                        href={item.href}
                        className="text-base font-medium text-gray-800 transition-all duration-300 ease-in-out hover:text-blue-600"
                      >
                        {item.name}
                      </Link>
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Book Appointment Button - Desktop */}
          <div className="hidden lg:block">
            <Button className="group relative overflow-hidden rounded-md bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-2 text-base font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg">
              <span className="relative z-10 flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </span>
              <span className="absolute bottom-0 left-0 h-full w-0 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4 lg:hidden">
            <Button
              className="group relative overflow-hidden rounded-md bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-1 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg"
              asChild
            >
              <Link href="/appointment">
                <span className="relative z-10 flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  Book
                </span>
                <span className="absolute bottom-0 left-0 h-full w-0 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </Button>

            <button
              onClick={toggleMenu}
              className="rounded-full bg-gray-100 p-2 text-gray-700 transition-colors duration-300 hover:bg-gray-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`mt-2 overflow-hidden transition-all duration-300 lg:hidden ${
            isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="rounded-xl bg-white p-4 shadow-lg">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="border-b border-gray-100 last:border-0"
              >
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex w-full items-center justify-between py-3 text-lg font-medium text-gray-800 transition-colors duration-300 hover:text-blue-600"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-5 w-5 opacity-70 transition-transform duration-300 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile Dropdown Items */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeDropdown === item.name
                          ? "max-h-60 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="ml-4 space-y-2 border-l border-gray-100 pl-4 pb-3">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block py-2 text-base text-gray-700 transition-all duration-300 ease-in-out hover:text-blue-600"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center py-3 text-lg font-medium text-gray-800 transition-all duration-300 ease-in-out hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 pt-2">
              <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-base font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
