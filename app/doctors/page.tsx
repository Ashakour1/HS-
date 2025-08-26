"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Search,
  Filter,
  MapPin,
  Star,
  Calendar,
  Clock,
  Award,
  Languages,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { fetchDoctors, Doctor } from "@/lib/api";

const specialties = [
  "All Specialties",
  "General Surgery",
  "Internal Medicine",
  "Pediatrics",
  "Cardiology",
  "Orthopedics",
  "Neurology",
  "Dermatology",
  "Oncology",
  "Emergency Medicine",
];

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDoctors = async () => {
      try {
        setLoading(true);
        const data = await fetchDoctors();
        setDoctors(data);
        setFilteredDoctors(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch doctors');
        console.error('Error loading doctors:', err);
      } finally {
        setLoading(false);
      }
    };

    loadDoctors();
  }, []);

  // Debounced search function
  const debouncedSearch = useCallback(
    (() => {
      let timeoutId: NodeJS.Timeout;
      return (search: string, specialty: string) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          let filtered = [...doctors];

          // Filter by specialty
          if (specialty !== "All Specialties") {
            filtered = filtered.filter(doctor => 
              doctor.specialist.toLowerCase() === specialty.toLowerCase()
            );
          }

          // Filter by search term
          if (search.trim()) {
            const searchLower = search.toLowerCase().trim();
            filtered = filtered.filter(doctor =>
              doctor.fullname.toLowerCase().includes(searchLower) ||
              doctor.specialist.toLowerCase().includes(searchLower) ||
              (doctor.bio && doctor.bio.toLowerCase().includes(searchLower))
            );
          }

          setFilteredDoctors(filtered);
        }, 300);
      };
    })(),
    [doctors]
  );

  // Update search when search term or specialty changes
  useEffect(() => {
    debouncedSearch(searchTerm, selectedSpecialty);
  }, [searchTerm, selectedSpecialty, debouncedSearch]);

  // Clear search function
  const clearSearch = () => {
    setSearchTerm("");
    setSelectedSpecialty("All Specialties");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00A651] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading doctors...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-[#00A651] text-white rounded hover:bg-[#008f45]"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[200px] sm:h-[200px] md:h-[150px] lg:h-[150px]">
        <Image
          src="/hero.png"
          alt="Hospital Management"
          fill
          className="object-cover brightness-50"
          priority
        />

        <div className="absolute inset-0 flex items-center justify-start px-6">
          {/* Overlay background box on the left */}
          <div className="px-0 md:px-28 py-2 rounded">
            <h1 className="text-xl sm:text-4xl lg:text-xl font-semibold text-white">
              Our Doctors & Specialists
            </h1>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Find Your Doctor</h2>
              <p className="text-gray-600">Search by name, specialty, or browse our medical professionals</p>
            </div>

            {/* Search and Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Specialty Filter */}
              <div className="relative w-full sm:w-64">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  className="w-full h-12 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A651] focus:border-[#00A651] bg-white transition-all duration-200"
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                >
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Input */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search doctors..."
                  className="w-full h-12 pl-10 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A651] focus:border-[#00A651] bg-white transition-all duration-200"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Active Filters Display */}
            {(searchTerm || selectedSpecialty !== "All Specialties") && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-sm text-gray-600">Active filters:</span>
                  {selectedSpecialty !== "All Specialties" && (
                    <Badge variant="secondary" className="bg-[#00A651]/10 text-[#00A651] border-[#00A651]/20">
                      {selectedSpecialty}
                      <button
                        onClick={() => setSelectedSpecialty("All Specialties")}
                        className="ml-2 hover:text-[#00A651] transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  )}
                  {searchTerm && (
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                      "{searchTerm}"
                      <button
                        onClick={() => setSearchTerm("")}
                        className="ml-2 hover:text-blue-800 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredDoctors.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No doctors found</h3>
              <p className="text-gray-600 mb-6">
                {searchTerm || selectedSpecialty !== "All Specialties" 
                  ? "Try adjusting your search criteria or specialty filter"
                  : "No doctors available at the moment"
                }
              </p>
              {(searchTerm || selectedSpecialty !== "All Specialties") && (
                <Button 
                  onClick={clearSearch}
                  variant="outline"
                >
                  Clear All Filters
                </Button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDoctors.map((doctor) => (
                <Link key={doctor.id} href={`/doctors/${doctor.id}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-white">
                    <CardContent className="p-0 overflow-hidden">
                      {/* Doctor Image */}
                      <div className="relative h-64 bg-gray-200 overflow-hidden">
                        <Image
                          src={doctor.image || "/dr.jpg"}
                          alt={doctor.fullname}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                        
                        {/* Experience Badge */}
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-[#00A651] text-white px-3 py-1">
                            {doctor.experience} Years
                          </Badge>
                        </div>

                        {/* View Profile Button */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button size="sm" className="bg-white text-[#00A651] hover:bg-gray-100">
                            View Profile
                          </Button>
                        </div>
                      </div>

                      {/* Doctor Info */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#00A651] transition-colors duration-300">
                          {doctor.fullname}
                        </h3>
                        <p className="text-[#00A651] font-medium mb-3">
                          {doctor.specialist}
                        </p>
                        
                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Languages className="w-4 h-4 text-[#00A651]" />
                            <span>{doctor.languages.length} Languages</span>
                          </div>
                          {doctor.consultationFee && (
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Award className="w-4 h-4 text-[#00A651]" />
                              <span>${doctor.consultationFee}</span>
                            </div>
                          )}
                        </div>

                        {/* Book Appointment Button */}
                        <Button className="w-full bg-[#00A651] hover:bg-[#008f45] text-white">
                          Book Appointment
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#00A651]/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Can't Find the Right Doctor?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is here to help you find the perfect specialist for your needs. Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-[#00A651] hover:bg-[#008f45] text-white px-8 py-3 text-lg">
                Contact Us
              </Button>
            </Link>
            <Link href="/appointment">
              <Button variant="outline" className="px-8 py-3 text-lg">
                Book General Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
