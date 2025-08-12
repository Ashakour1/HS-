"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Calendar, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopHeader from "./TopHeader";

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
    { name: "Departments", href: "/departments" },
    {
      name: "Our Centers",
      href: "#",
      dropdown: true,
      items: [
        { name: "Internal Medicine", href: "/centers/internal-medicine" },
        { name: "General Surgery", href: "/centers/general-surgery" },
        { name: "Pediatrics", href: "/centers/pediatrics" },
        { name: "Cardiology", href: "/centers/cardiology" },
        { name: "Oncology", href: "/centers/oncology" },
        { name: "Maternity Services", href: "/centers/maternity" },
        {
          name: "Inpatient Department (IPD)",
          href: "/centers/inpatient-department",
        },
        { name: "Operation Theater (OT)", href: "/centers/ot" },
        { name: "Pharmacy Services", href: "/centers/pharmacy" },
        { name: "Day Care Services", href: "/centers/daycare" },
        { name: "Emergency Medicine", href: "/centers/emergency" },
        {
          name: "Laboratory and Diagnostic Services",
          href: "/centers/diagnostics",
        },
        { name: "Obstetrics and Gynecology (OBG)", href: "/centers/obg" },
      ],
    },
    {
      name: "About Us",
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
    <>
      <TopHeader />
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled 
            ? "bg-white/98 backdrop-blur-xl shadow-2xl border-b border-gray-100/50" 
            : "bg-white"
        }`}
      >
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src="/uniso-logo.png"
                  width={65}
                  height={65}
                  alt="Uniso Logo"
                  className="h-16 w-auto transition-all duration-500 hover:scale-110 hover:rotate-2"
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-sky-400/20 to-blue-500/20 rounded-full blur-xl opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
                  Uniso Hospital
                </h1>
                <p className="text-xs text-gray-500 font-medium">Excellence in Healthcare</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:block">
              <ul className="flex items-center space-x-1" ref={dropdownRef}>
                {navItems.map((item) => (
                  <li key={item.name} className="group relative">
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center px-4 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 ease-in-out hover:text-sky-600 focus:outline-none rounded-lg hover:bg-sky-50"
                          aria-expanded={activeDropdown === item.name}
                          aria-haspopup="true"
                        >
                          {item.name}
                          <ChevronDown
                            className={`ml-2 h-4 w-4 opacity-70 transition-transform duration-300 ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {/* Dropdown Menu */}
                        {activeDropdown === item.name && (
                          <div className="absolute left-0 top-full mt-1 w-64 rounded-xl bg-white/95 backdrop-blur-xl py-3 shadow-2xl ring-1 ring-gray-200/50 border border-gray-100/50">
                            <div className="px-2">
                              {item.items?.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-3 py-2.5 text-sm text-gray-700 transition-all duration-300 ease-in-out hover:bg-sky-50 hover:text-sky-600 rounded-lg hover:translate-x-1"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center px-4 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 ease-in-out hover:text-sky-600 rounded-lg hover:bg-sky-50"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Section - Desktop */}
            <div className="hidden xl:flex items-center space-x-4">
              {/* Contact Info */}
              <div className="hidden 2xl:flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-sky-600" />
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-sky-600" />
                  <span>123 Medical Center Dr</span>
                </div>
              </div>
              
              {/* Book Appointment Button */}
              <Button
                onClick={() => (window.location.href = "/appointment")}
                className="group relative flex items-center space-x-3 bg-gradient-to-r from-sky-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:from-sky-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Appointment</span>
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="flex items-center gap-3 xl:hidden">
              <Button
                onClick={() => (window.location.href = "/appointment")}
                className="group relative flex items-center space-x-2 bg-gradient-to-r from-sky-600 to-blue-700 text-white px-4 py-2.5 rounded-xl hover:from-sky-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg"
              >
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Book</span>
              </Button>
              <button
                onClick={toggleMenu}
                className="rounded-xl bg-gray-100 p-2.5 text-gray-700 transition-all duration-300 hover:bg-sky-100 hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out xl:hidden ${
              isMenuOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="rounded-2xl bg-white/95 backdrop-blur-xl p-6 shadow-2xl border border-gray-100/50">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="border-b border-gray-100/50 last:border-0"
                >
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex w-full items-center justify-between py-4 text-base font-semibold text-gray-800 transition-colors duration-300 hover:text-sky-600 focus:outline-none"
                        aria-expanded={activeDropdown === item.name}
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
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          activeDropdown === item.name
                            ? "max-h-80 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="ml-4 space-y-2 border-l-2 border-sky-200 pl-4 pb-4">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block py-2.5 text-sm text-gray-700 transition-all duration-300 ease-in-out hover:text-sky-600 hover:translate-x-1"
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
                      className="flex items-center py-4 text-base font-semibold text-gray-800 transition-all duration-300 ease-in-out hover:text-sky-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="mt-6 pt-4 border-t border-gray-100/50">
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-sky-600" />
                    <span>+1 234 567 890</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-sky-600" />
                    <span>123 Medical Center Dr</span>
                  </div>
                </div>
              </div>

              {/* Mobile Book Appointment Button */}
              <div className="mt-6 pt-4">
                <Button
                  onClick={() => (window.location.href = "/appointment")}
                  className="w-full group relative flex items-center justify-center space-x-3 bg-gradient-to-r from-sky-600 to-blue-700 text-white px-6 py-4 rounded-xl hover:from-sky-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Book Appointment</span>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
