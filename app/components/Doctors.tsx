import { title } from "process";
import Doctor from "./Doctor";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { doctors } from "@/data/doctors";


const specialties = [
  "Select Specialties",
  "General Surgery",
  "Gastroenterology",
  "Obstetrics",
  "Cardiology",
  "Pediatrics"
];

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("Select Specialties");
  const [displayedDoctors, setDisplayedDoctors] = useState(doctors);
  const [isSearching, setIsSearching] = useState(false);

  // Function to filter doctors based on both specialty and search term
  const filterDoctors = () => {
    let filtered = [...doctors];

    // Filter by specialty if one is selected
    if (selectedSpecialty !== "Select Specialties") {
      filtered = filtered.filter(doctor => 
        doctor.specialty === selectedSpecialty
      );
    }

    // Filter by search term if one exists
    if (searchTerm.trim()) {
      filtered = filtered.filter(doctor =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
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
  }, [selectedSpecialty]);

  return (
    <div className="bg-[#e1ebf7] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Doctors</h2>
          <p className="text-gray-600 text-center max-w-2xl mb-8">
            Our doctors are highly qualified and experienced professionals who
            are dedicated to providing the best care for our patients.
          </p>

          {/* Enhanced Search Section */}
          <div className="w-full max-w-4xl mx-auto mb-12">
            <div className="bg-white p-4 rounded-xl shadow-md flex flex-col md:flex-row gap-4">
              <select 
                className="md:w-1/3 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00A651] focus:border-transparent transition-all text-gray-700 bg-gray-50 hover:bg-gray-100"
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
              >
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>{specialty}</option>
                ))}
              </select>
              
              <div className="md:w-2/3 relative">
                <input
                  type="text"
                  placeholder="Type Doctor Name"
                  className="w-full p-3 pr-24 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00A651] focus:border-transparent transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch();
                    }
                  }}
                />
                <button 
                  onClick={handleSearch}
                  className="absolute right-0 top-0 h-full px-6 bg-[#00A651] text-white rounded-r-lg hover:bg-[#00A651] transition-all duration-200 flex items-center gap-2 font-medium"
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
                <p className="text-gray-500 text-lg">No doctors found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedDoctors.map((doctor) => (
                  <Doctor key={doctor.id} {...doctor} />
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
