"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  Building2,
  Users,
  Heart,
  Baby,
  Stethoscope,
  Pill,
  Bed,
  Syringe,
  Ambulance,
  FlaskConical,
  UserCheck,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import TopHeader from "./TopHeader";

type NavItem = {
  name: string;
  href: string;
  dropdown?: boolean;
  items?: Array<{
    name: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    description?: string;
  }>;
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const desktopNavRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click / Escape / scroll
  useEffect(() => {
    if (!activeDropdown) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopNavRef.current &&
        !desktopNavRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveDropdown(null);
    };
    const handleScroll = () => setActiveDropdown(null);

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeDropdown]);

  // Close everything on route change
  useEffect(() => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  }, [pathname]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleDropdown = (name: string) =>
    setActiveDropdown((current) => (current === name ? null : name));

  const navItems: NavItem[] = [
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
        { name: "Obstetrics and Gynecology (OBG)", href: "/centers/obg", icon: Users, description: "Women's health and pregnancy care" },
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
    { name: "Find a Doctor", href: "/doctors" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <>
      <TopHeader />
      <header
        className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
          scrolled ? "bg-white/90 backdrop-blur-md" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="flex h-16 items-center justify-between md:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center" aria-label="Uniso home">
              <Image
                src="/uniso-logo.png"
                width={56}
                height={56}
                alt="Uniso Logo"
                className="h-11 w-auto md:h-12"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-1" ref={desktopNavRef}>
                {navItems.map((item) => {
                  const active = item.dropdown
                    ? item.items?.some((s) => isActive(s.href))
                    : isActive(item.href);

                  return (
                    <li key={item.name} className="relative">
                      {item.dropdown ? (
                        <button
                          type="button"
                          onClick={() => toggleDropdown(item.name)}
                          aria-expanded={activeDropdown === item.name}
                          aria-haspopup="true"
                          className={`flex items-center gap-1 rounded-full px-3 py-2 text-[14px] font-medium transition-colors ${
                            active
                              ? "text-accent"
                              : "text-heading hover:text-accent"
                          }`}
                        >
                          {item.name}
                          <ChevronDown
                            className={`h-3.5 w-3.5 opacity-70 transition-transform duration-200 ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className={`block rounded-full px-3 py-2 text-[14px] font-medium transition-colors ${
                            active
                              ? "text-accent"
                              : "text-heading hover:text-accent"
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}

                      {/* Active indicator */}
                      {active && (
                        <span className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent" />
                      )}

                      {/* Dropdown */}
                      {item.dropdown && activeDropdown === item.name && (
                        <div
                          role="menu"
                          aria-label={item.name}
                          className={`absolute top-full left-1/2 z-50 -translate-x-1/2 pt-2 ${
                            item.name === "Our Centers"
                              ? "w-[min(560px,calc(100vw-2rem))]"
                              : "w-[300px]"
                          }`}
                        >
                          <div className="dropdown-panel rounded-2xl bg-white p-2 ring-1 ring-slate-100">
                            <div
                              className={
                                item.name === "Our Centers"
                                  ? "grid grid-cols-2 gap-0.5"
                                  : "space-y-0.5"
                              }
                            >
                              {item.items?.map((subItem) => {
                                const Icon = subItem.icon;
                                const itemActive = isActive(subItem.href);
                                return (
                                  <Link
                                    key={subItem.name}
                                    role="menuitem"
                                    href={subItem.href}
                                    className={`group/item flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors ${
                                      itemActive
                                        ? "bg-accent/5"
                                        : "hover:bg-slate-50"
                                    }`}
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <div
                                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                                        itemActive
                                          ? "bg-accent/10 text-accent"
                                          : "bg-slate-50 text-accent group-hover/item:bg-accent/10"
                                      }`}
                                    >
                                      <Icon className="h-4 w-4" />
                                    </div>
                                    <div className="min-w-0">
                                      <div className="text-sm font-medium leading-tight text-heading group-hover/item:text-accent">
                                        {subItem.name}
                                      </div>
                                      {subItem.description && (
                                        <div className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                                          {subItem.description}
                                        </div>
                                      )}
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* CTA — Desktop */}
            <div className="hidden items-center gap-3 lg:flex">
              <Button
                asChild
                className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-none transition-colors hover:bg-accent/90"
              >
                <Link href="/appointment">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book appointment
                </Link>
              </Button>
            </div>

            {/* Mobile right side */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                asChild
                size="sm"
                className="rounded-lg bg-accent px-4 text-xs font-medium text-white shadow-none hover:bg-accent/90"
              >
                <Link href="/appointment">
                  <Calendar className="mr-1.5 h-3.5 w-3.5" />
                  Book
                </Link>
              </Button>
              <button
                type="button"
                onClick={() => setIsMenuOpen((open) => !open)}
                className="rounded-full p-2 text-heading transition-colors hover:bg-slate-100"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}
          aria-hidden={!isMenuOpen}
        >
          <div className="border-t border-slate-100 bg-white">
            <nav className="mx-auto max-w-6xl px-4 py-3 md:px-8">
              <ul className="divide-y divide-slate-100">
                {navItems.map((item) => {
                  const active = item.dropdown
                    ? item.items?.some((s) => isActive(s.href))
                    : isActive(item.href);
                  return (
                    <li key={item.name}>
                      {item.dropdown ? (
                        <>
                          <button
                            type="button"
                            onClick={() => toggleDropdown(item.name)}
                            aria-expanded={activeDropdown === item.name}
                            className={`flex w-full items-center justify-between py-3.5 text-base font-medium transition-colors ${
                              active ? "text-accent" : "text-heading"
                            }`}
                          >
                            {item.name}
                            <ChevronDown
                              className={`h-4 w-4 opacity-70 transition-transform duration-200 ${
                                activeDropdown === item.name ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <div
                            className={`overflow-hidden transition-[max-height] duration-300 ease-out ${
                              activeDropdown === item.name
                                ? "max-h-[800px]"
                                : "max-h-0"
                            }`}
                          >
                            <ul className="space-y-0.5 pb-3 pl-1">
                              {item.items?.map((subItem) => {
                                const Icon = subItem.icon;
                                const subActive = isActive(subItem.href);
                                return (
                                  <li key={subItem.name}>
                                    <Link
                                      href={subItem.href}
                                      onClick={() => setIsMenuOpen(false)}
                                      className={`flex items-start gap-3 rounded-xl px-2.5 py-2.5 ${
                                        subActive
                                          ? "bg-accent/5"
                                          : "hover:bg-slate-50"
                                      }`}
                                    >
                                      <div
                                        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                                          subActive
                                            ? "bg-accent/10 text-accent"
                                            : "bg-slate-50 text-accent"
                                        }`}
                                      >
                                        <Icon className="h-4 w-4" />
                                      </div>
                                      <div className="min-w-0">
                                        <div className="text-sm font-medium text-heading">
                                          {subItem.name}
                                        </div>
                                        {subItem.description && (
                                          <div className="mt-0.5 text-xs text-muted-foreground">
                                            {subItem.description}
                                          </div>
                                        )}
                                      </div>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block py-3.5 text-base font-medium transition-colors ${
                            active ? "text-accent" : "text-heading hover:text-accent"
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>

              <Link
                href="/appointment"
                onClick={() => setIsMenuOpen(false)}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
              >
                <Calendar className="h-4 w-4" />
                Book appointment
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
