import { title } from "process";
import Doctor from "./Doctor";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { fetchDoctors, Doctor as DoctorType } from "@/lib/api";

const specialties = [
  "Select Specialties",
  "General Surgery",
  "Gastroenterology",
  "Obstetrics",
  "Cardiology",
  "Pediatrics",
];

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] =
    useState("Select Specialties");
  const [doctors, setDoctors] = useState<DoctorType[]>([]);
  const [displayedDoctors, setDisplayedDoctors] = useState<DoctorType[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch doctors from API
  useEffect(() => {
    const loadDoctors = async () => {
      try {
        setLoading(true);
        const data = await fetchDoctors();
        setDoctors(data);
        setDisplayedDoctors(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch doctors');
        console.error('Error loading doctors:', err);
      } finally {
        setLoading(false);
      }
    };

    loadDoctors();
  }, []);

  // Function to filter doctors based on both specialty and search term
  const filterDoctors = () => {
    let filtered = [...doctors];

    // Filter by specialty if one is selected
    if (selectedSpecialty !== "Select Specialties") {
      filtered = filtered.filter(
        (doctor) => doctor.specialist === selectedSpecialty
      );
    }

    // Filter by search term if one exists
    if (searchTerm.trim()) {
      filtered = filtered.filter((doctor) =>
        doctor.fullname.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setDisplayedDoctors(filtered);
    setIsSearching(false);
  };

  // Handle search button click
  const handleSearch = () => {
    setIsSearching(true);
    filterDoctors();
  };

  // Filter when specialty changes
  useEffect(() => {
    filterDoctors();
  }, [selectedSpecialty, doctors]);

  if (loading) {
    return (
      <div className="bg-[#ecf1f6] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center max-w-7xl mx-auto">
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0DA93E] mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading doctors...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#ecf1f6] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center max-w-7xl mx-auto">
            <div className="text-center py-12">
              <p className="text-red-600 mb-4">Error: {error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="px-4 py-2 bg-[#0DA93E] text-white rounded hover:bg-[#0DA93E]/80"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#ecf1f6] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Our Doctors
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mb-8">
            Our doctors are highly qualified and experienced professionals who
            are dedicated to providing the best care for our patients.
          </p>

          {/* Enhanced Search Section */}
          <div className="w-full max-w-4xl mx-auto mb-12">
            <div className="p-4  flex flex-col md:flex-row gap-4">
              <select
                className="md:w-1/3 p-3 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-[#0DA93E] focus:border-transparent transition-all text-gray-700"
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
              >
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>

              <div className="md:w-2/3 relative">
                <input
                  type="text"
                  placeholder="Type Doctor Name"
                  className="w-full p-3 pr-24 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0DA93E] focus:border-transparent transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-0 top-0 h-full px-6 bg-[#0DA93E] text-white rounded-r-lg hover:bg-[#0DA93E]/80 transition-all duration-200 flex items-center gap-2 font-medium"
                >
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="w-full">
            {displayedDoctors.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No doctors found matching your criteria.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedDoctors.map((doctor) => (
                  <Doctor 
                    key={doctor.id} 
                    id={doctor.id}
                    name={doctor.fullname}
                    title={doctor.specialist}
                    image={doctor.image || "/placeholder.svg"}
                    exp={doctor.experience.toString()}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
