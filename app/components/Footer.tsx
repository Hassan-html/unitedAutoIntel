"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 text-white p-16 relative"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 relative z-10">
          {/* Company Information */}
          <div className="space-y-4">
            <h1 className=" text-4xl uppercase font-bold text-white">
              United Auto
            </h1>
            <h2 className=" text-xl uppercase font-bold text-white">
              Pakistan
            </h2>
            <p className="text-sm leading-relaxed text-gray-300">
              Near Al-Qasim Jamia Masjid, Shop #2, Capital Road, Jinnah Town
              <br />
              <span className="font-bold text-white">Number:</span> +92 328
              5852875
            </p>

            <h2 className="text-white text-xl uppercase font-bold">Dubai</h2>
            <p className="text-sm leading-relaxed text-gray-300">
              303 al sanabil - Naif - Dubai - United Arab Emirates
              <br />
              <span className="font-bold text-white">Number</span>: +971 558 981
              016
            </p>
            <button className="bg-secondary text-white py-2 px-4 rounded mt-4 hover:bg-highlight transition-all">
              Get Quote
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary-light text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-light text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-light text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-light text-white">
                  Genuine Auto Parts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-light text-white">
                  Aftermarket Auto Parts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-light text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-light text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-light text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Auto Parts Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Auto Parts
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary-light text-white">
                  Toyota
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-light text-white">
                  Nissan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-light text-white">
                  Mazda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-light text-white">
                  Honda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-light text-white">
                  Mitsubishi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-light text-white">
                  Ford
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-light text-white">
                  Chevrolet
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-light text-white">
                  Lexus
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-light text-white">
                  MG
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-light text-white">
                  Hyundai
                </a>
              </li>
            </ul>
          </div>

          {/* Work Hours */}
          <div className="lg:col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Work Hours
            </h3>
            <p className="text-lg text-gray-300">
              <span className="font-extrabold text-white">
                Monday - Friday:
              </span>{" "}
              8:30 AM - 5:30 PM
            </p>
            <p className="text-lg text-gray-300">
              <span className="font-extrabold text-white">Saturday:</span> 8:00
              AM - 5:00 PM
            </p>
            <p className="text-lg text-gray-300">
              <span className="font-extrabold text-white">Sunday:</span> Closed
            </p>
            <p className="text-sm leading-relaxed text-gray-400 mt-4">
              Our Support and Sales team is available during office hours to
              answer your queries.
            </p>
            <button className="bg-secondary text-white py-2 px-4 rounded mt-4 hover:bg-highlight transition-all">
              Get Your Auto Parts
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm relative z-10">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} United Auto. All rights
              reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary-light text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-light text-white">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-light text-white">
                Contact Us
              </a>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://www.facebook.com/share/Q8p9zYjhhvogF8gZ/?mibextid=LQQJ4d"
                className="p-2 bg-secondary text-white rounded-full hover:bg-highlight transition-all"
              >
                <FaFacebookF />
              </a>
              <a
                href="http://wa.me/971558981016"
                className="p-2 bg-secondary text-white rounded-full hover:bg-highlight transition-all"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/invites/contact/?igsh=st3g7int3a17&utm_content=vl53w82"
                className="p-2 bg-secondary text-white rounded-full hover:bg-highlight transition-all"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
