import { Calendar, Package, User2 } from 'lucide-react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const StaticSideIcons = () => {
  return (
    <div className="hidden md:flex fixed right-0 top-1/2 gap-2 -translate-y-1/2 z-50 flex-col">
      {/* Make an Appointment */}
      <Link href="/appointment" className="w-[100px] h-[100px] bg-[#0E74FC] hover:bg-[#00A651] transition-colors flex flex-col items-center justify-center text-white text-center p-2">
        <Calendar className="w-8 h-8 mb-1" />
        <span className="text-xs font-bold">Make an Appointment</span>
      </Link>

      {/* Find a Doctor */}
      <Link href="/doctors" className="w-[100px] h-[100px] bg-[#0E74FC] hover:bg-[#00A651] transition-colors flex flex-col items-center justify-center text-white text-center p-2">
        <User2 className="w-8 h-8 mb-1" />
        <span className="text-xs font-bold">Find a Doctor</span>
      </Link>

      {/* Packages */}
      <Link href="/packages" className="w-[100px] h-[100px] bg-[#0E74FC] hover:bg-[#00A651] transition-colors flex flex-col items-center justify-center text-white text-center p-2">
        <Package className="w-8 h-8 mb-1" />
        <span className="text-xs font-bold">Packages</span>
      </Link>

      {/* Waze */}
      <Link href="https://www.waze.com/" target="_blank" rel="noopener noreferrer" className="w-[100px] h-[100px] bg-[#00A651] hover:bg-[#00A651] transition-colors flex flex-col items-center justify-center text-white text-center p-2">
        <FaWhatsapp className="w-8 h-8 mb-1" />
        <span className="text-xs font-bold">Whatsapp</span>
      </Link>
    </div>
  );
};

export default StaticSideIcons;
