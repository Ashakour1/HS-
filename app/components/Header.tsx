"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Calendar, Building2, Users, Heart, Baby, Stethoscope, Pill, Bed, Syringe, Microscope, Ambulance, FlaskConical, UserCheck, Info } from "lucide-react";
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
        { name: "Internal Medicine", href: "/centers/internal-medicine", icon: Heart, description: "Comprehensive internal medicine care" },
        { name: "General Surgery", href: "/centers/general-surgery", icon: Stethoscope, description: "Advanced surgical procedures" },
        { name: "Pediatrics", href: "/centers/pediatrics", icon: Baby, description: "Specialized care for children" },
        { name: "Cardiology", href: "/centers/cardiology", icon: Heart, description: "Heart and cardiovascular health" },
        { name: "Oncology", href: "/centers/oncology", icon: Pill, description: "Cancer treatment and care" },
        { name: "Maternity Services", href: "/centers/maternity", icon: Baby, description: "Maternal and newborn care" },
        { name: "Inpatient Department (IPD)", href: "/centers/inpatient-department", icon: Bed, description: "24/7 inpatient care" },
        { name: "Operation Theater (OT)", href: "/centers/ot", icon: Syringe, description: "State-of-the-art surgical facilities" },
        { name: "Pharmacy Services", href: "/centers/pharmacy", icon: Pill, description: "Pharmaceutical care and consultation" },
        { name: "Day Care Services", href: "/centers/daycare", icon: Building2, description: "Outpatient day care procedures" },
        { name: "Emergency Medicine", href: "/centers/emergency", icon: Ambulance, description: "24/7 emergency medical care" },
        { name: "Laboratory and Diagnostic Services", href: "/centers/diagnostics", icon: FlaskConical, description: "Advanced diagnostic testing" },
        { name: "Obstetrics and Gynecology (OBG)", href: "/centers/obg", icon: Baby, description: "Women's health and pregnancy care" },
      ],
    },
    {
      name: "About Us",
      href: "#",
      dropdown: true,
      items: [
        { name: "Hospital Overview", href: "/corporate/overview", icon: Info, description: "Learn about our hospital" },
        { name: "Management", href: "/corporate/management", icon: UserCheck, description: "Meet our leadership team" },
      ],
    },
    { name: "Appointment", href: "/appointment" },
    { name: "Doctors", href: "/doctors" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <TopHeader />
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 max-w-6xl">
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
                          className="flex items-center text-base font-medium text-heading transition-all duration-300 ease-in-out hover:text-accent focus:outline-none"
                          aria-expanded={activeDropdown === item.name}
                          aria-haspopup="true"
                        >
                          {item.name}
                          <ChevronDown
                            className={`ml-1 h-4 w-4 opacity-70 transition-transform duration-300 ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        {/* Enhanced Dropdown Menu */}
                        {activeDropdown === item.name && (
                          <div className="absolute left-0 top-full mt-3 w-[600px] rounded-xl bg-white py-4 shadow-2xl ring-1 ring-slate-200/50 border border-slate-100">
                            <div className="px-4">
                              {item.name === "Our Centers" ? (
                                <div className="grid grid-cols-2 gap-3">
                                  {item.items?.map((subItem) => {
                                    const IconComponent = subItem.icon;
                                    return (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        className="group/item flex items-start gap-3 px-3 py-2 text-sm text-body transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-accent/5 hover:to-accent/5 hover:text-accent rounded-lg hover:shadow-sm"
                                        onClick={() => setActiveDropdown(null)}
                                      >
                                        <div className="flex-shrink-0 mt-0.5">
                                          <IconComponent className="h-4 w-4 text-accent group-hover/item:text-accent transition-colors duration-200" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className="font-medium text-heading group-hover/item:text-accent transition-colors duration-200 text-xs">
                                            {subItem.name}
                                          </div>
                                          {subItem.description && (
                                            <div className="text-xs text-muted-foreground group-hover/item:text-body mt-0.5 leading-relaxed">
                                              {subItem.description}
                                            </div>
                                          )}
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>
                              ) : (
                                <div className="space-y-1">
                                  {item.items?.map((subItem) => {
                                    const IconComponent = subItem.icon;
                                    return (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        className="group/item flex items-start gap-3 px-4 py-3 text-sm text-body transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-accent/5 hover:to-accent/5 hover:text-accent rounded-lg hover:shadow-sm"
                                        onClick={() => setActiveDropdown(null)}
                                      >
                                        <div className="flex-shrink-0 mt-0.5">
                                          <IconComponent className="h-5 w-5 text-accent group-hover/item:text-accent transition-colors duration-200" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className="font-medium text-heading group-hover/item:text-accent transition-colors duration-200">
                                            {subItem.name}
                                          </div>
                                          {subItem.description && (
                                            <div className="text-xs text-muted-foreground group-hover/item:text-body mt-0.5 leading-relaxed">
                                              {subItem.description}
                                            </div>
                                          )}
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <Link
                          href={item.href}
                          className="text-base font-medium text-heading transition-all duration-300 ease-in-out hover:text-accent"
                        >
                          {item.name}
                        </Link>
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            {/* Book Appointment Button - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                onClick={() => (window.location.href = "/appointment")}
                className="flex items-center space-x-2 bg-gradient-primary hover:bg-gradient-to-r hover:from-[#07018a] hover:to-[#0902AF] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold transform hover:scale-105"
              >
                <Calendar width={20} />
                Book Appointment
              </Button>
            </div>
            {/* Mobile Navigation */}
            <div className="flex items-center gap-4 lg:hidden">
              <Button
                onClick={() => (window.location.href = "/appointment")}
                className="group relative flex items-center space-x-2 bg-gradient-primary text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold transform hover:scale-105"
                asChild
              >
                <Link href="/appointment">
                  <span className="relative z-10 flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    Book Appointment
                  </span>
                </Link>
              </Button>
              <button
                onClick={toggleMenu}
                className="rounded-full bg-slate-100 p-2 text-slate-700 transition-colors duration-300 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
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
          {/* Enhanced Mobile Menu Dropdown */}
          <div
            className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${
              isMenuOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="rounded-xl bg-white p-4 shadow-xl border border-slate-100">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="border-b border-slate-100 last:border-0"
                >
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex w-full items-center justify-between py-3 text-lg font-medium text-heading transition-colors duration-300 hover:text-accent focus:outline-none"
                        aria-expanded={activeDropdown === item.name}
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-5 w-5 opacity-70 transition-transform duration-300 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {/* Enhanced Mobile Dropdown Items */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          activeDropdown === item.name
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="ml-4 space-y-2 border-l-2 border-accent/20 pl-4 pb-3">
                          {item.items?.map((subItem) => {
                            const IconComponent = subItem.icon;
                            return (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="group/item flex items-start gap-3 py-3 px-3 text-base text-body transition-all duration-300 ease-in-out hover:text-accent rounded-lg hover:bg-accent/5"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                <IconComponent className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium text-heading group-hover/item:text-accent">
                                    {subItem.name}
                                  </div>
                                  {subItem.description && (
                                    <div className="text-sm text-muted-foreground mt-1 leading-relaxed">
                                      {subItem.description}
                                    </div>
                                  )}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center py-3 text-lg font-medium text-heading transition-all duration-300 ease-in-out hover:text-accent"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-4 pt-2">
                <Button
                  onClick={() => (window.location.href = "/appointment")}
                  className="w-full bg-gradient-primary hover:bg-gradient-to-r hover:from-[#07018a] hover:to-[#0902AF] text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold transform hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </span>
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