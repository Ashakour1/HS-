"use client";

import { Calendar, Package, User2 } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  {
    name: "Appointment",
    href: "/appointment",
    icon: Calendar,
  },
  {
    name: "Doctors",
    href: "/doctors",
    icon: User2,
  },
  {
    name: "Packages",
    href: "/packages",
    icon: Package,
  },
  {
    name: "Whatsapp",
    href: "https://wa.me/your-number",
    icon: FaWhatsapp,
    external: true,
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden h-[70px]">
      <div className="flex justify-around items-center h-full">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          const baseClasses =
            "w-full h-full flex flex-col items-center justify-center text-xs font-bold transition-colors duration-300";
          const activeClasses = "bg-[#00A651] text-white";
          const inactiveClasses =
            "bg-[#0E74FC] text-white hover:bg-[#00A651] border border-white";

          return item.external ? (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${baseClasses} ${activeClasses}`}
              aria-label={item.name}
            >
              <Icon className="w-6 h-6 mb-1" />
              {item.name}
            </a>
          ) : (
            <Link
              key={item.name}
              href={item.href}
              className={cn(baseClasses, isActive ? activeClasses : inactiveClasses)}
              aria-label={item.name}
            >
              <Icon className="w-6 h-6 mb-1" />
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
