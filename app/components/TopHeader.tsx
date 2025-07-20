import {
  Clock,
  FacebookIcon,
  InstagramIcon,
  Mail,
  MapPinCheckInside,
  MessageCircle,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const TopHeader = () => {
  return (
    <header className="hidden md:block bg-[#2521a0] text-white p-4">
      <div className="flex justify-between items-center max-w-[1400px] mx-auto">
        {/* Left Section: Time, Email, Location */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <MapPin width={20} />
            <span className="text-[15px] font-medium">
              Howlwadaag Road, Mogadishu Banaadir
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock width={20} />
            <span className="text-[15px] font-medium">
              Opening Hours Saturday to Friday 24/7
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail width={20} />
            <span className="text-[15px] font-medium">info@hospital.so</span>
          </div>
        </div>

        {/* Right Section: Phone Button and Socials */}
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition-colors font-semibold text-sm">
            <Phone width={16} />
            <span>CALL US: 61 8332419</span>
          </button>
          <div className="flex items-center space-x-3">
            <Link
              href="https://www.facebook.com/hospitaluniso"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon
                width={18}
                className="cursor-pointer hover:opacity-80"
              />
            </Link>
            <Link
              href="https://www.instagram.com/hospital_uniso/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon
                width={18}
                className="cursor-pointer hover:opacity-80"
              />
            </Link>
            <Link
              href="https://wa.me/252618332419"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle
                width={18}
                className="cursor-pointer hover:opacity-80"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
