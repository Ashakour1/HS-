import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface DoctorCardProps {
  name: string
  specialty: string
  image: string
}

export function DoctorCard({ name, specialty, image }: DoctorCardProps) {
  return (
    <Card className="w-full rounded-xl overflow-hidden shadow-sm p-0 border-0">
      <CardContent className="p-0">
        <div className="relative w-full h-64 bg-gray-200">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{specialty}</p>
          <div className="mt-4 h-1.5 w-1/3 bg-blue-600 rounded-full" />
        </div>
      </CardContent>
    </Card>
  )
}
