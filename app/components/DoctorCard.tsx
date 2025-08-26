import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface DoctorCardProps {
  id: string
  name: string
  specialty: string
  image: string
}

export function DoctorCard({ id, name, specialty, image }: DoctorCardProps) {
  return (
    <Link href={`/doctors/${id}`}>
      <Card className="w-full rounded-xl overflow-hidden shadow-sm p-0 border-0 hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
        <CardContent className="p-0 h-full flex flex-col">
          <div className="relative w-full h-80 bg-gray-200 overflow-hidden">
            <Image
              src={image}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="rounded-t-xl group-hover:scale-105 transition-transform duration-300"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
          </div>
          <div className="p-6 group-hover:bg-gray-50 transition-colors duration-300 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#0DA93E] transition-colors duration-300 mb-2">{name}</h3>
              <p className="text-base text-gray-600">{specialty}</p>
            </div>
            <div className="mt-4 h-2 w-1/3 bg-[#0902AF] rounded-full group-hover:w-1/2 transition-all duration-300" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
