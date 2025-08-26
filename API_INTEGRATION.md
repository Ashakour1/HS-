# API Integration for Doctors

This document explains how the doctors data has been integrated with the backend API.

## API Endpoints

The application now uses the following API endpoints:

- **Get All Doctors**: `GET https://cms-hospitalunisoso-production-3ec8.up.railway.app/api/doctors/`
- **Get Doctor by ID**: `GET https://cms-hospitalunisoso-production-3ec8.up.railway.app/api/doctors/:id`
- **Get Doctors by Specialty**: `GET https://cms-hospitalunisoso-production-3ec8.up.railway.app/api/doctors/specialist/:specialty`

## Data Structure

The API returns doctors with the following structure:

```typescript
interface Doctor {
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
```

## Components Updated

The following components have been updated to use the API:

1. **DoctorCom.tsx** - Homepage doctors section
2. **Doctors.tsx** - Main doctors listing page with search and filtering
3. **DoctorsPage.tsx** - Individual doctor profile page
4. **api.ts** - API service functions

## Features

- **Dynamic Data Loading**: All doctor data is now fetched from the API
- **Loading States**: Proper loading indicators while fetching data
- **Error Handling**: Error states with retry functionality
- **Search & Filtering**: Search by name and filter by specialty
- **Responsive Design**: Maintains the existing UI/UX design

## Usage

The API service functions can be imported and used in any component:

```typescript
import { fetchDoctors, fetchDoctorById, fetchDoctorsBySpecialist } from "@/lib/api";

// Fetch all doctors
const doctors = await fetchDoctors();

// Fetch specific doctor
const doctor = await fetchDoctorById("doctor-id");

// Fetch doctors by specialty
const cardiologists = await fetchDoctorsBySpecialist("Cardiology");
```

## Backend Requirements

Make sure your backend server is running on `https://cms-hospitalunisoso-production-3ec8.up.railway.app` and has the following:

- CORS enabled for frontend requests
- The `/api/doctors/` endpoint implemented
- Proper error handling and response formatting
- Database connection with the Doctor model

## Notes

- The application now shows loading states while fetching data
- Error handling includes retry buttons for failed requests
- All doctor images use fallback to placeholder if not available
- The search and filtering functionality works with the new data structure
