// API service for fetching doctors data
const API_BASE_URL = 'https://cms-hospitalunisoso-production-f6e7.up.railway.app/api';

export interface Doctor {
  id: string;
  fullname: string;
  email: string;
  image?: string;
  experience: number;
  specialist: string;
  bio: string;
  qualifications: string[];
  languages: string[];
  consultationFee?: number;
  availability: string[];
  createdAt: string;
  updatedAt: string;
}

export const fetchDoctors = async (): Promise<Doctor[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/doctors`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching doctors:', error);
    throw error;
  }
};

export const fetchDoctorById = async (id: string): Promise<Doctor> => {
  try {
    const response = await fetch(`${API_BASE_URL}/doctors/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching doctor:', error);
    throw error;
  }
};

export const fetchDoctorsBySpecialist = async (specialist: string): Promise<Doctor[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/doctors/specialist/${encodeURIComponent(specialist)}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching doctors by specialist:', error);
    throw error;
  }
};
