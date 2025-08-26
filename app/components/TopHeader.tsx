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
    <header className="hidden md:block bg-gray-900 text-white py-3 shadow-lg border-b border-blue-300/20">
      <div className="flex justify-between items-center max-w-[1400px] mx-auto px-4">
        {/* Left Section: Time, Email, Location */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-white/10 rounded-full">
              <MapPin width={16} className="text-blue-200" />
            </div>
            <span className="text-[14px] font-medium text-blue-100">
              Howlwadaag Road, Mogadishu Banaadir
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-white/10 rounded-full">
              <Clock width={16} className="text-blue-200" />
            </div>
            <span className="text-[14px] font-medium text-blue-100">
              Opening Hours Saturday to Friday 24/7
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-white/10 rounded-full">
              <Mail width={16} className="text-blue-200" />
            </div>
            <span className="text-[14px] font-medium text-blue-100">
              info@hospital.so
            </span>
          </div>
        </div>

        {/* Right Section: Phone Button and Socials */}
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-2 bg-gradient-to-r from-white to-blue-50 text-[#0902AF] px-5 py-2.5 rounded-lg hover:from-blue-50 hover:to-white transition-all duration-300 font-semibold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border border-[#0902AF]/20">
            <Phone width={16} className="text-[#0902AF]" />
            <span>CALL US: 61 8332419</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <Link
              href="https://www.facebook.com/hospitaluniso"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-2 bg-white/10 rounded-full hover:bg-[#0902AF] transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5">
                <FacebookIcon
                  width={18}
                  className="cursor-pointer text-blue-200 group-hover:text-white transition-colors duration-300"
                />
              </div>
            </Link>
            
            <Link
              href="https://www.instagram.com/hospital_uniso/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-2 bg-white/10 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5">
                <InstagramIcon
                  width={18}
                  className="cursor-pointer text-blue-200 group-hover:text-white transition-colors duration-300"
                />
              </div>
            </Link>
            
            <Link
              href="https://wa.me/252618332419"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-2 bg-white/10 rounded-full hover:bg-[#0DA93E] transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5">
                <MessageCircle
                  width={18}
                  className="cursor-pointer text-blue-200 group-hover:text-white transition-colors duration-300"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
