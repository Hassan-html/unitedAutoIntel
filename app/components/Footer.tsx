"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";
import NoSSRWrapper from "@/utils/NoSSRWrapper";

const Footer = () => {
  return (
    <NoSSRWrapper>
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white text-gray-900 py-16 relative"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 relative z-10">
          {/* Company Information */}
          <div className="space-y-4">
            <h1 className="text-red-600 text-4xl uppercase font-bold">
              United Autos
            </h1>
            <p className="text-sm leading-relaxed">
              SHED -12 365-AL QUOZ IND. SECOND Premise
              <br />
              Number: 365099406, PO Box: 24651, Dubai, UAE
            </p>
            <p className="text-sm">
              Phone:{" "}
              <a href="tel:+97143397110" className="underline">
                +971 4339 7110
              </a>
            </p>
            <button className="bg-primary text-white py-2 px-4 rounded mt-4">
              Amazon Store
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Genuine Auto Parts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Aftermarket Auto Parts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Car Care & Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Buy Cars
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Auto Parts Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Auto Parts</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary">
                  BMW
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Audi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Porsche
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Mercedes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Volkswagen
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Toyota
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Nissan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Mazda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Honda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Mitsubishi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Ford
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Chevrolet
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Jeep
                </a>
              </li>
            </ul>
          </div>

          {/* Work Hours */}
          <div className="lg:col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Work Hours</h3>
            <p className="text-sm leading-relaxed">
              8:30 AM - 7 PM, Monday - Saturday
              <br />
              Our Support and Sales team is available during office hours to
              answer your queries.
            </p>
            <button className="bg-primary text-white py-2 px-4 rounded mt-4">
              Get Your Auto Parts
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-12 pt-6 text-center text-sm relative z-10">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-700">
              &copy; {new Date().getFullYear()} Noorfhan. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary">
                Contact Us
              </a>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="p-2 bg-primary text-white rounded-full hover:bg-accent transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 bg-primary text-white rounded-full hover:bg-accent transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-2 bg-primary text-white rounded-full hover:bg-accent transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-2 bg-primary text-white rounded-full hover:bg-accent transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </motion.footer>
    </NoSSRWrapper>
  );
};

export default Footer;
