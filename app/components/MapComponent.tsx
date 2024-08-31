"use client";
import Link from "next/link";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section>
      <h2 className="text-5xl font-extrabold text-center mt-10 uppercase">
        Locations
      </h2>
      <h1 className="uppercase text-lg font-extrabold text-center mt-5 mb-20">
        Our locations across the globe
      </h1>
      <div className="space-y-12">
        {/* Location Block */}
        <section className="flex flex-col md:flex-row items-start gap-8 p-8 border-b border-gray-300">
          {/* Google Map Embed */}
          <Link
            href="https://maps.app.goo.gl/vExxQ4PdM8Att75y8?g_st=iw"
            className="w-full md:w-1/2 h-64 md:h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.0285504473477!2d55.3083503!3d25.269624999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434985847faf%3A0x7fc15291be7973c1!2sAl%20Sanabil%20Building!5e0!3m2!1sen!2s!4v1724796229341!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </Link>

          {/* Contact Information */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <h3 className="text-2xl font-bold"> United Auto</h3>
            <p className="text-lg">
              <FaLocationPin className="inline text-red-600" /> 303 al sanabil -
              Naif - Dubai - United Arab Emirates
            </p>
            <p className="text-lg">
              <FaEnvelope className="inline text-red-600" />{" "}
              <Link href="mailto:info@unitedautointl.com">
                info@unitedautointl.com
              </Link>
            </p>
            <p className="text-lg">
              <FaPhoneAlt className="inline text-red-600" /> +971558981016
            </p>
            <p className="text-lg">
              <span className="font-extrabold">Monday - Friday:</span> 8:30 AM -
              5:30 PM
            </p>
            <p className="text-lg">
              <span className="font-extrabold">Saturday:</span> 8:00 AM - 5:00
              PM
            </p>
            <p className="text-lg">
              <span className="font-extrabold">Sunday:</span> closed
            </p>
            {/* Buttons */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Link
                href="#"
                className="bg-primary text-white py-3 px-4 rounded text-center"
              >
                View Details
              </Link>
              <Link
                href="#"
                className="bg-primary text-white py-3 px-4 rounded text-center"
              >
                Visit Website
              </Link>
              <Link
                href="#"
                className="bg-primary text-white py-3 px-4 rounded text-center"
              >
                Book a Service
              </Link>
              <Link
                href="#"
                className="bg-primary text-white py-3 px-4 rounded text-center"
              >
                Search Stock
              </Link>
            </div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row items-start gap-8 p-8 border-b border-gray-300">
          {/* Google Map Embed */}
          <Link
            href="https://google.com/maps/dir//GG37%2B925+Jamia+Masjid+Al-Qasim+(%D8%AC%D8%A7%D9%85%D8%B9%DB%81+%D9%85%D8%B3%D8%AC%D8%AF+%D8%A7%D9%84%D9%82%D8%A7%D8%B3%D9%85),+Pakka+Garha+Ghumman,+Sialkot,+Punjab%E2%80%AD%E2%80%AD/@32.5031886,74.510914,17.4z/data=!4m8!4m7!1m0!1m5!1m1!1s0x391eebb9cfb6e385:0xbe7516e9c3216b70!2m2!1d74.5125769!2d32.5033359?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
            className="w-full md:w-1/2 h-64 md:h-96 overflow-hidden "
          >
            <img src="/maps/pakistan.png" alt="pakistan address" width="100%" />
          </Link>

          {/* Contact Information */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <h3 className="text-2xl font-bold"> United Auto</h3>
            <p className="text-lg">
              <FaLocationPin className="inline text-red-600" /> Near Al-Qasim
              Jamia Masjid, Shop #2, Capital Road, Jinnah Town
            </p>
            <p className="text-lg">
              <FaEnvelope className="inline text-red-600" />{" "}
              <Link href="mailto:info@unitedautointl.com">
                info@unitedautointl.com
              </Link>
            </p>
            <p className="text-lg">
              <FaPhoneAlt className="inline text-red-600" /> +92 328 5852875
            </p>
            <p className="text-lg">
              <span className="font-extrabold">Monday - Friday:</span> 8:30 AM -
              5:30 PM
            </p>
            <p className="text-lg">
              <span className="font-extrabold">Saturday:</span> 8:00 AM - 5:00
              PM
            </p>
            <p className="text-lg">
              <span className="font-extrabold">Sunday:</span> closed
            </p>
            {/* Buttons */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Link
                href="#"
                className="bg-primary text-white py-3 px-4 rounded text-center"
              >
                View Details
              </Link>
              <Link
                href="#"
                className="bg-primary text-white py-3 px-4 rounded text-center"
              >
                Visit Website
              </Link>
              <Link
                href="#"
                className="bg-primary text-white py-3 px-4 rounded text-center"
              >
                Book a Service
              </Link>
              <Link
                href="#"
                className="bg-primary text-white py-3 px-4 rounded text-center"
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
