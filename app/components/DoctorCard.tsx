import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface DoctorCardProps {
  id: string
  name: string
  specialty: string
  image: string
  experience?: number
  languages?: string[]
  consultationFee?: number
}

export function DoctorCard({ id, name, specialty, image, experience, languages, consultationFee }: DoctorCardProps) {
  return (
    <Card key={id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white p-0">
                  <CardContent className="p-0 overflow-hidden">
                    {/* Doctor Image */}
                    <div className="relative h-64 bg-gray-200 overflow-hidden">
                      <Image
                        src={image || "/dr.jpg"}
                        alt={name}
                        fill
                        className="object-cover  group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                      
                      {/* Experience Badge */}
                      {experience && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-[#00A651] text-white px-3 py-1">
                            {experience} Years
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Doctor Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#00A651] transition-colors duration-300">
                        {name}
                      </h3>
                      <p className="text-[#00A651] font-medium mb-3">
                        {specialty}
                      </p>
                      
                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {languages && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>{languages.length} Languages</span>
                          </div>
                        )}
                        {consultationFee && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>${consultationFee}</span>
                          </div>
                        )}
                      </div>

                      {/* Book Appointment Button */}
                      <Link href="/appointment">
                        <Button className="w-full bg-[#00A651] hover:bg-[#008f45] text-white">
                          Book Appointment
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
  )
}
