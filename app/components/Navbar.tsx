"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaAngleDown,
  FaSearch,
  FaBars,
  FaTimes,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { fetchCompanyDetails } from "@/utils/information";

// Type declarations for the component state and props
interface NavbarProps {}

interface SearchItem {
  code: string;
  name: string;
}
interface companyDetails {
  logo: string;
}

const Navbar: React.FC<NavbarProps> = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<SearchItem[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [companyDetails, setCompanyDetails] = useState<companyDetails>({
    logo: "",
  });

  const companyDetailFetch = async () => {
    const details = await fetchCompanyDetails();
    setCompanyDetails(details);
  };

  useEffect(() => {
    companyDetailFetch();

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      const searchItems: SearchItem[] = [
        { code: "P001", name: "Pistons" },
        { code: "C002", name: "Camshaft" },
        { code: "CR003", name: "Crankshaft" },
        { code: "V004", name: "Valves" },
        { code: "G005", name: "Gaskets" },
        { code: "BP006", name: "Brake Pads" },
        { code: "D007", name: "Discs" },
        { code: "C008", name: "Calipers" },
        { code: "ABS009", name: "ABS Sensors" },
        { code: "S010", name: "Shocks" },
      ];

      const results = searchItems.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.code.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(results);
    } else {
      setFilteredItems([]);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 z-[10] w-full p-3 bg-white ${
        isScrolled ? "shadow-lg" : ""
      } transition-shadow`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-6">
          {companyDetails?.logo && (
            <div className="logo">
              <img src={companyDetails.logo} alt="logo" width="100px" />
            </div>
          )}

          {/* Search Bar */}
          <div className="hidden lg:flex items-center border border-gray-300 rounded-md overflow-hidden w-[300px]">
            <input
              className="bg-transparent outline-none border-none w-full px-4 py-2 text-sm"
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
            />
            <button className="py-2 px-4 bg-red-600 text-white text-sm">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/home" className="hover:text-red-600">
            HOME
          </Link>

          {/* FIND AUTO PARTS Dropdown with Nested Submenu */}
          <div className="relative group">
            <span className="cursor-pointer flex items-center gap-2 hover:text-red-600">
              FIND AUTO PARTS
              <motion.div className="group-hover:rotate-180 transition-all">
                <FaAngleDown />
              </motion.div>
            </span>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute hidden group-hover:block bg-white text-black shadow-lg p-4 rounded w-[250px]"
            >
              <ul className="space-y-2 relative">
                <li className="hover:text-red-600 relative group2">
                  Pistons
                  {/* Submenu */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="hidden group2-hover:block absolute top-0 left-[250px] bg-white shadow-lg p-4 w-[200px] rounded"
                  >
                    <ul className="space-y-2">
                      <li>Piston Rings</li>
                      <li>Piston Heads</li>
                      <li>Piston Rods</li>
                    </ul>
                  </motion.div>
                </li>
                <li className="hover:text-red-600">Camshaft</li>
                <li className="hover:text-red-600">Crankshaft</li>
                <li className="hover:text-red-600">Valves</li>
              </ul>
            </motion.div>
          </div>

          {/* BRANDS Dropdown with Nested Submenu */}
          <div className="relative group">
            <span className="cursor-pointer flex items-center gap-2 hover:text-red-600">
              BRANDS
              <motion.div className="group-hover:rotate-180 transition-all">
                <FaAngleDown />
              </motion.div>
            </span>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute hidden group-hover:block bg-white text-black shadow-lg p-4 rounded w-[250px]"
            >
              <ul className="space-y-2 relative">
                <li className="hover:text-red-600 relative group">
                  Brand 1{/* Submenu */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="hidden group-hover:block absolute top-0 left-[250px] bg-white shadow-lg p-4 w-[200px] rounded"
                  >
                    <ul className="space-y-2">
                      <li>Brand 1 - Product A</li>
                      <li>Brand 1 - Product B</li>
                      <li>Brand 1 - Product C</li>
                    </ul>
                  </motion.div>
                </li>
                <li className="hover:text-red-600">Brand 2</li>
                <li className="hover:text-red-600">Brand 3</li>
              </ul>
            </motion.div>
          </div>
          <Link href="/contact" className="hover:text-red-600">
            CONTACT
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl text-red-600">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Contact Information */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="mr-2 text-red-600" />
            <Link href="mailto:info@unitedautointl.com">
              info@unitedautointl.com
            </Link>
          </div>
          <div className="flex items-center text-gray-600">
            <FaPhone className="mr-2 text-red-600" />
            <Link href="tel:+971558981016">+971 558 981 016</Link>
          </div>
          <button className="text-white bg-red-600 py-2 px-4 rounded">
            Get Quote
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-0 right-0 h-full w-[80%] bg-white shadow-lg z-[20] text-black p-6 lg:hidden"
        >
          <div
            className="text-[50px] font-bold m-10 p-2 bg-red-600 text-white rounded w-fit cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaTimes />
          </div>

          <nav className="flex flex-col gap-6">
            <Link href="/home" onClick={toggleMenu}>
              HOME
            </Link>
            <Link href="/parts" onClick={toggleMenu}>
              FIND AUTO PARTS
            </Link>
            <Link href="/brands" onClick={toggleMenu}>
              BRANDS
            </Link>
            <Link href="/contact" onClick={toggleMenu}>
              CONTACT
            </Link>
          </nav>
        </motion.div>
      )}

      {/* Search Results Dropdown */}
      {filteredItems.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute bg-white shadow-lg rounded-lg mt-4 w-full left-0 text-sm text-black p-4"
        >
          <ul>
            {filteredItems.map((item, index) => (
              <li key={index} className="py-2 hover:bg-gray-200 cursor-pointer">
                <span className="font-bold">{item.code}:</span> {item.name}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
