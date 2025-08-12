import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Calendar,
  Check,
  ChevronRight,
  Clock,
  MoveRight,
  Phone,
  Star,
  Quote,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import News from "./News";
import StatsSection from "./Stats";
import { DoctorsSection } from "./DoctorCom";
import ServiceDetailPage from "./Services";
import CallToAction from "./Cta";
import Testimonials from "./Testimonials";
import DirectorMessage from "./DirectorMessage";

export default function Others() {
  return (
    <main className="min-h-screen">
      {/* Director's Message */}
    <DirectorMessage/>

      {/* Services Grid */}
      <ServiceDetailPage />

      {/* Team Section */}

      <DoctorsSection />

      <CallToAction />
    

<Testimonials/>

      {/* News Section */}
      <News />
    </main>
  );
}
