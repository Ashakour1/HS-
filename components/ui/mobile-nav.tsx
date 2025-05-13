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
    href: "https://www.waze.com/",
    icon: FaWhatsapp,
    external: true,
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 py-2 md:hidden">
      <div className="flex gap-2 px-1 items-center justify-between">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return item.external ? (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-[70px] bg-[#00A651] text-white flex flex-col items-center justify-center text-xs"
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="font-bold">{item.name}</span>
            </Link>
          ) : (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "w-full h-[70px] flex flex-col items-center justify-center text-white text-center text-xs transition-colors",
                isActive ? "bg-[#00A651]" : "bg-[#0E74FC] hover:bg-[#00A651]"
              )}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="font-bold">{item.name}</span>            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
