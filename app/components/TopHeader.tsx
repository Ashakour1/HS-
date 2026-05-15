import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const TopHeader = () => {
  return (
    <div className="hidden bg-[#16204F] text-white md:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-2 md:px-8">
        {/* Left: contact + hours */}
        <ul className="flex items-center divide-x divide-white/10 text-[13px] text-blue-100/90">
          <li className="flex items-center gap-2 pr-5">
            <MapPin className="h-3.5 w-3.5 text-blue-200/80" />
            <span>Howlwadaag Road, Mogadishu</span>
          </li>
          <li className="flex items-center gap-2 px-5">
            <Clock className="h-3.5 w-3.5 text-blue-200/80" />
            <span>Open 24/7 · Sat – Fri</span>
          </li>
          <li className="flex items-center gap-2 pl-5">
            <Mail className="h-3.5 w-3.5 text-blue-200/80" />
            <Link
              href="mailto:info@hospital.so"
              className="transition-colors hover:text-white"
            >
              info@hospitaluniso.so
            </Link>
          </li>
        </ul>

        {/* Right: call + socials */}
        <div className="flex items-center gap-5">
          <Link
            href="tel:+252618332419"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-white hover:text-[#0902AF]"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>+252 61 833 2419</span>
          </Link>

          <div className="flex items-center gap-1">
            <Link
              href="https://www.facebook.com/hospitaluniso"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-md p-1.5 text-blue-200/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.instagram.com/hospital_uniso/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-md p-1.5 text-blue-200/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link
              href="https://wa.me/252618332419"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="rounded-md p-1.5 text-blue-200/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
