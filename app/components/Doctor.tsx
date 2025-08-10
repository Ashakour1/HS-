import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, View } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define the props interface
interface DoctorProps {
  id: string;
  name: string;
  title: string;
  image: string;
  exp: string;
}

const Doctor = ({ id, name, title, image, exp }: DoctorProps) => {
  return (
    <div
      key={id}
      className="group relative flex flex-col border border-[#00A651] bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="p-4 sm:p-5 flex-1">
        <div className="flex items-center gap-3 mb-3">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-sm">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
              {name}
            </h3>
            <div className="text-xs text-[#00A651] font-medium">{title}</div>
            <div className="text-xs text-gray-500">{exp}+</div>
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="h-8 px-2 text-xs text-blue-600 hover:text-blue-700 bg-blue-50"
          onClick={() => window.location.href = "/appointment"}
        >
          Book Appointment
          <ArrowUpRight className="ml-1 h-3 w-3" />
        </Button>
      </div>
      <div className="h-1 w-full bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
    </div>
  );
};

export default Doctor;
