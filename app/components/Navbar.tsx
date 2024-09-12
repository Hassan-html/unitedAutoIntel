"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaSearch,
  FaPhone,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { fetchCompanyDetails } from "@/utils/information";
import "./Nav.css";

// Type declarations for the component state and props
interface companyDetails {
  logo: string;
}

interface SearchItem {
  code: string;
  name: string;
}

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<SearchItem[]>([]); // State for search results
  const [companyDetails, setCompanyDetails] = useState<companyDetails>({
    logo: "",
  });
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // State for mobile menu

  // Sample items to search
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

  // Fetch company details (e.g., logo)
  const companyDetailFetch = async () => {
    const details = await fetchCompanyDetails();
    setCompanyDetails(details);
  };

  useEffect(() => {
    companyDetailFetch();
  }, []);

  // Handle search query and filter results
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
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

  // Toggle menu state for mobile view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 z-10 w-full p-4 bg-white shadow-md transition-all duration-500">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo (Round Image) */}
        <div className="flex items-center w-[60%]">
          {companyDetails?.logo && (
            <div className="logo  overflow-hidden w-16 h-16 border">
              <img
                src={companyDetails.logo}
                alt="logo"
                className="object-cover w-full h-full"
              />
            </div>
          )}

          {/* Search Bar */}
          <div className="ml-4 flex items-center border border-gray-300 rounded-md overflow-hidden h-[40px] w-full">
            <input
              className="bg-transparent outline-none border-none w-full px-4 py-2 text-sm"
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
            />
            <button className="h-full px-4 bg-red-600 text-white text-lg flex justify-center items-center">
              <FaSearch />
            </button>
          </div>

          {/* Dropdown for Search Results */}
          {filteredItems.length > 0 && (
            <div className="absolute bg-white top-[100%] shadow-lg rounded-lg mt-4 w-full left-0 text-sm text-black p-4 z-50">
              <ul>
                {filteredItems.map((item, index) => (
                  <li
                    key={index}
                    className="py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    <span className="font-bold">{item.code}:</span> {item.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl text-red-600">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Contact Information */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="mr-2 text-red-600" />
            <Link
              href="mailto:info@unitedautointl.com"
              className="text-sm lg:text-base"
            >
              info@unitedautointl.com
            </Link>
          </div>
          <div className="flex items-center text-gray-600">
            <FaPhone className="mr-2 text-red-600" />
            <Link href="tel:+971558981016" className="text-sm lg:text-base">
              +971 558 981 016
            </Link>
          </div>

          {/* Red Button on the right */}
          <button className="bg-red-600 text-white py-2 px-6 rounded-full transition-transform transform hover:scale-105">
            Get Quote
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      <nav
        className={`lg:flex justify-center gap-6 mt-4 lg:static absolute bg-white w-full left-0 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-[200%]"
        } lg:translate-x-0`}
      >
        {/* Main Nav Links */}
        <Link href="/home" className="nav-link">
          HOME
        </Link>

        {/* FIND AUTO PARTS Dropdown */}
        <div className="relative group">
          <span className="nav-link">FIND AUTO PARTS</span>
          <div className="dropdown-content">
            <ul>
              <li className="dropdown-item">Pistons</li>
              <li className="dropdown-item">Camshaft</li>
              <li className="dropdown-item">Crankshaft</li>
              <li className="dropdown-item">Valves</li>
            </ul>
          </div>
        </div>

        {/* BRANDS Dropdown */}
        <div className="relative group">
          <span className="nav-link">BRANDS</span>
          <div className="dropdown-content">
            <ul>
              <li className="dropdown-item">Brand 1</li>
              <li className="dropdown-item">Brand 2</li>
              <li className="dropdown-item">Brand 3</li>
            </ul>
          </div>
        </div>

        <Link href="/contact" className="nav-link">
          CONTACT
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
