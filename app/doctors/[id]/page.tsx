"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  BookOpen,
  Calendar,
  Clock,
  Heart,
  Mail,
  MapPin,
  Phone,
  Star,
  User,
  ArrowLeft,
  GraduationCap,
  Languages,
  Clock3,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { fetchDoctorById, Doctor } from "@/lib/api";

export default function DoctorDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDoctor = async () => {
      try {
        setLoading(true);
        const data = await fetchDoctorById(params.id as string);
        setDoctor(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch doctor details');
        console.error('Error loading doctor:', err);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      loadDoctor();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00A651] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading doctor details...</p>
        </div>
      </div>
    );
  }

  if (error || !doctor) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error || 'Doctor not found'}</p>
          <Button 
            onClick={() => router.back()} 
            className="bg-[#00A651] hover:bg-[#008f45]"
          >
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Doctors
        </Button>
      </div>

      {/* Doctor Profile Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Hero Section */}
            <div className="relative h-64 md:h-80 bg-gradient-to-r from-blue-600 to-[#00A651]">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    {doctor.fullname}
                  </h1>
                  <p className="text-xl md:text-2xl opacity-90">
                    {doctor.specialist}
                  </p>
                </div>
              </div>
            </div>

            {/* Doctor Info Grid */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Doctor Image and Quick Info */}
                <div className="lg:col-span-1">
                  <div className="sticky top-6">
                    {/* Doctor Image */}
                    <div className="relative w-full h-80 rounded-xl overflow-hidden mb-6">
                      <Image
                        src={doctor.image || "/dr.jpg"}
                        alt={doctor.fullname}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Quick Info Cards */}
                    <div className="space-y-4">
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-[#00A651]/10 rounded-full flex items-center justify-center">
                              <Award className="w-5 h-5 text-[#00A651]" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Experience</p>
                              <p className="font-semibold text-lg">{doctor.experience} Years</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {doctor.consultationFee && (
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-blue-600" />
                              </div>
                              <div>
                                <p className="text-sm text-gray-600">Consultation Fee</p>
                                <p className="font-semibold text-lg">${doctor.consultationFee}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                              <Languages className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Languages</p>
                              <p className="font-semibold text-lg">{doctor.languages.length}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Book Appointment Button */}
                      <Link href="/appointment" className="block">
                        <Button className="w-full bg-[#00A651] hover:bg-[#008f45] text-white py-3 text-lg">
                          Book Appointment
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right Column - All Information Without Tabs */}
                <div className="lg:col-span-2 space-y-8">
                  {/* About Section */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <User className="w-5 h-5 text-[#00A651]" />
                        Biography
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {doctor.bio}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Languages Section */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <Languages className="w-5 h-5 text-[#00A651]" />
                        Languages Spoken
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {doctor.languages.map((language, index) => (
                          <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Qualifications Section */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-[#00A651]" />
                        Qualifications & Certifications
                      </h3>
                      <div className="space-y-3">
                        {doctor.qualifications.map((qualification, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                            <Heart className="w-5 h-5 text-[#00A651] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{qualification}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Schedule Section */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <Clock3 className="w-5 h-5 text-[#00A651]" />
                        Available Hours
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {doctor.availability.map((slot, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-[#00A651] transition-colors"
                          >
                            <Calendar className="w-5 h-5 text-[#00A651]" />
                            <span className="font-medium text-gray-700">{slot}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contact Section */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <Mail className="w-5 h-5 text-[#00A651]" />
                        Contact Information
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <Mail className="w-5 h-5 text-[#00A651]" />
                          <span className="text-gray-700">{doctor.email}</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <Phone className="w-5 h-5 text-[#00A651]" />
                          <span className="text-gray-700">Contact via hospital</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <MapPin className="w-5 h-5 text-[#00A651]" />
                          <span className="text-gray-700">Available at our hospital</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#00A651]/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with {doctor.fullname} and take the first step towards better health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment">
              <Button className="bg-[#00A651] hover:bg-[#008f45] text-white px-8 py-3 text-lg">
                Book Appointment
              </Button>
            </Link>
            <Button variant="outline" onClick={() => router.back()}>
              View Other Doctors
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
