import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-xl mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>
                  Hospital UNISO,
                  <br />
                  Holwadaag, Mogadishu, Somalia
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+1 (234) 567-8900</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>info@medicalcenter.com</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link href="#" className="block hover:underline">
                About Us
              </Link>
              <Link href="#" className="block hover:underline">
                Our Services
              </Link>
              <Link href="#" className="block hover:underline">
                Our Doctors
              </Link>
              <Link href="#" className="block hover:underline">
                Latest News
              </Link>
              <Link href="#" className="block hover:underline">
                Contact Us
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-6">Opening Hours</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5" />
                <div>
                  <p>Monday - Friday</p>
                  <p className="text-sm">8:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5" />
                <div>
                  <p>Saturday - Sunday</p>
                  <p className="text-sm">9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-6">Contact Us</h3>
            <p className="mb-4">
              If you have any questions or inquiries, please feel free to reach
              out to us.
            </p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded text-gray-900"
              />
              <Button className="w-full bg-white text-[#00A651] hover:bg-gray-100">
                Contact Us
              </Button>
            </div>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="hover:opacity-80">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center">
          <p>&copy; 2025 hospital UNISO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
