"use client";
import Link from "next/link";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";

const ContactSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <SectionHeading
        title="Make a Visit"
        subtitle="Global Presence - Reach Us Anywhere"
      />

      <div className="space-y-12 container mx-auto px-6">
        {/* Pakistan Location Block */}
        <section className="flex flex-col md:flex-row items-start gap-8 p-8 border-b border-gray-200 bg-white shadow-lg rounded-lg transition-transform hover:shadow-xl hover:scale-105">
          {/* Google Map Embed */}
          <Link
            href="https://google.com/maps/dir//GG37%2B925+Jamia+Masjid+Al-Qasim+(%D8%AC%D8%A7%D9%85%D8%B9%DB%81+%D9%85%D8%B3%D8%AC%D8%AF+%D8%A7%D9%84%D9%82%D8%A7%D8%B3%D9%85),+Pakka+Garha+Ghumman,+Sialkot,+Punjab%E2%80%AD%E2%80%AD/@32.5031886,74.510914,17.4z/data=!4m8!4m7!1m0!1m5!1m1!1s0x391eebb9cfb6e385:0xbe7516e9c3216b70!2m2!1d74.5125769!2d32.5033359?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
            className="w-full md:w-1/2 h-64 md:h-96 overflow-hidden rounded-lg shadow-md"
          >
            <img
              src="/maps/pakistan.jpg"
              alt="pakistan address"
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Contact Information */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h3 className="text-3xl font-extrabold text-textPrimary">
              United Auto - Pakistan
            </h3>
            <p className="text-lg">
              <FaLocationPin className="inline text-textSecondary" /> Near
              Al-Qasim Jamia Masjid, Shop #2, Capital Road, Jinnah Town
            </p>
            <p className="text-lg">
              <FaEnvelope className="inline text-textSecondary" />{" "}
              <Link
                href="mailto:info@unitedautointl.com"
                className="hover:underline"
              >
                info@unitedautointl.com
              </Link>
            </p>
            <p className="text-lg">
              <FaPhoneAlt className="inline text-textSecondary" /> +92 328
              5852875
            </p>
            <p className="text-lg font-bold">
              Monday - Friday:{" "}
              <span className="font-normal">8:30 AM - 5:30 PM</span>
            </p>
            <p className="text-lg font-bold">
              Saturday: <span className="font-normal">8:00 AM - 5:00 PM</span>
            </p>
            <p className="text-lg font-bold">
              Sunday: <span className="font-normal">Closed</span>
            </p>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Link
                href="#"
                className="bg-primary hover:bg-secondary text-white hover:text-textPrimary py-3 px-4 rounded text-center transition-all duration-300"
              >
                View Details
              </Link>
              <Link
                href="#"
                className="bg-primary hover:bg-secondary text-white hover:text-textPrimary py-3 px-4 rounded text-center transition-all duration-300"
              >
                Visit Website
              </Link>
              <Link
                href="#"
                className="bg-primary hover:bg-secondary text-white hover:text-textPrimary py-3 px-4 rounded text-center transition-all duration-300"
              >
                Book a Service
              </Link>
              <Link
                href="#"
                className="bg-primary hover:bg-secondary text-white hover:text-textPrimary py-3 px-4 rounded text-center transition-all duration-300"
              >
                Search Stock
              </Link>
            </div>
          </div>
        </section>

        {/* Dubai Location Block */}
        <section className="flex flex-col md:flex-row items-start gap-8 p-8 border-b border-gray-200 bg-white shadow-lg rounded-lg transition-transform hover:shadow-xl hover:scale-105">
          {/* Google Map Embed */}
          <Link
            href="https://maps.app.goo.gl/vExxQ4PdM8Att75y8?g_st=iw"
            className="w-full md:w-1/2 h-64 md:h-96 overflow-hidden rounded-lg shadow-md"
          >
            <img
              src="/maps/dubai.jpg"
              alt="Dubai address"
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Contact Information */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h3 className="text-3xl font-extrabold text-textPrimary">
              United Auto - Dubai
            </h3>
            <p className="text-lg">
              <FaLocationPin className="inline text-textSecondary" /> 303 al
              sanabil - Naif - Dubai - United Arab Emirates
            </p>
            <p className="text-lg">
              <FaEnvelope className="inline text-textSecondary" />{" "}
              <Link
                href="mailto:info@unitedautointl.com"
                className="hover:underline"
              >
                info@unitedautointl.com
              </Link>
            </p>
            <p className="text-lg">
              <FaPhoneAlt className="inline text-textSecondary" /> +971558981016
            </p>
            <p className="text-lg font-bold">
              Monday - Friday:{" "}
              <span className="font-normal">8:30 AM - 5:30 PM</span>
            </p>
            <p className="text-lg font-bold">
              Saturday: <span className="font-normal">8:00 AM - 5:00 PM</span>
            </p>
            <p className="text-lg font-bold">
              Sunday: <span className="font-normal">Closed</span>
            </p>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Link
                href="#"
                className="bg-primary hover:bg-secondary text-white hover:text-textPrimary py-3 px-4 rounded text-center transition-all duration-300"
              >
                View Details
              </Link>
              <Link
                href="#"
                className="bg-primary hover:bg-secondary text-white hover:text-textPrimary py-3 px-4 rounded text-center transition-all duration-300"
              >
                Visit Website
              </Link>
              <Link
                href="#"
                className="bg-primary hover:bg-secondary text-white hover:text-textPrimary py-3 px-4 rounded text-center transition-all duration-300"
              >
                Book a Service
              </Link>
              <Link
                href="#"
                className="bg-primary hover:bg-secondary text-white hover:text-textPrimary py-3 px-4 rounded text-center transition-all duration-300"
              >
                Search Stock
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactSection;
