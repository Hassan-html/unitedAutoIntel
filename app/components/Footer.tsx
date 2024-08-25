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
        className="bg-primary text-white py-12"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Company Information */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">
              About United Auto Intl
            </h3>
            <p className="text-sm mb-4">
              United Auto Intl is your trusted source for premium auto spare
              parts in Dubai. We provide high-quality parts for all major
              automotive brands with exceptional customer service.
            </p>
            <p className="text-sm">
              Address: Al Quoz, Dubai, UAE
              <br />
              Email: info@unitedautoinl.com
              <br />
              Phone: +971 123 456 789
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-accent">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-accent">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent">
                  Warranty Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-accent">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent">
                  Affiliate Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent">
                  Press & Media
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent">
                  Corporate Responsibility
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <p className="text-sm mb-4">
              Stay connected with us on social media for the latest updates and
              special offers.
            </p>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="p-2 bg-accent rounded-full hover:bg-lightGray transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 bg-accent rounded-full hover:bg-lightGray transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-2 bg-accent rounded-full hover:bg-lightGray transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-2 bg-accent rounded-full hover:bg-lightGray transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to receive exclusive deals and the
              latest news about our products.
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full rounded-l-md text-gray-800"
              />
              <button className="bg-accent p-2 rounded-r-md hover:bg-lightGray transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} United Auto Intl. All rights
            reserved.
          </p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-accent">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent">
              Terms of Service
            </a>
            <a href="#" className="hover:text-accent">
              Contact Us
            </a>
          </div>
        </div>
      </motion.footer>
    </NoSSRWrapper>
  );
};

export default Footer;
