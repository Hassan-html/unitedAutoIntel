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
    console.log(details);
    console.log(companyDetails);
  };
  useEffect(() => {
    // fetching company details

    companyDetailFetch();
    console.log(companyDetails);

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
  if (companyDetails?.logo.length > 0) {
    return (
      <header
        className={`fixed top-0 z-[10] w-full p-3 bg-white ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto grid grid-cols-2 items-center">
          <div className="justify-self-center col-span-2 flex gap-10 items-center justify-center">
            {/* Logo and Search */}
            <div className="flex items-center gap-4 justify-end">
              <div className="logo uppercase  text-2xl font-bold flex flex-nowrap justify-center items-center">
                <img src={companyDetails.logo} alt="logo" width="100px" />
              </div>
              <div className="input-Group hidden lg:flex items-center bg-white overflow-hidden border border-primary w-[300px]">
                <input
                  className="bg-transparent outline-none border-none w-full px-4 py-2 text-black text-sm"
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearch}
                />
                <button className="btn-search py-2 px-4 bg-red-600 text-white text-sm h-full">
                  SEARCH
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="hidden lg:flex items-center gap-4 justify-center">
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-2 text-red-600" />
                <Link href="mailto:info@unitedautointl.com">
                  info@unitedautointl.com
                </Link>
              </div>
              <div className="flex items-center text-gray-600">
                <FaPhone className="mr-2 text-red-600" />
                <Link href="tel:+971 558 981 016">+971 558 981 016</Link>
              </div>
              <button className="text-white bg-primary py-2 px-4 rounded">
                Get Quote
              </button>
            </div>
          </div>

          {/* Navigation and Mobile Menu Icon */}
          <div className="flex items-center gap-4 lg:col-span-2 justify-end">
            {/* Mobile Menu Icon */}
            <div className="block lg:hidden">
              <button onClick={toggleMenu} className="text-2xl text-primary">
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden  p-5 lg:flex items-center gap-6 justify-center w-full text-sm">
              <Link href="/home" className="text-red-600">
                HOME
              </Link>

              {/* Custom Dropdown for FIND AUTO PARTS */}
              <div className=" group">
                <span className="cursor-pointer flex items-center gap-2">
                  FIND AUTO PARTS <FaAngleDown />
                </span>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute hidden group-hover:flex flex-col bg-white text-black p-8 shadow-lg gap-4 rounded w-full max-h-[500px] overflow-y-auto right-0"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4   ">
                    <div>
                      <h3 className="text-lg font-bold">Genuin Parts</h3>
                      <p className="text-sm">
                        Pistons, Camshaft, Crankshaft...
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">AfterMarket Parts</h3>
                      <p className="text-sm">Brake Pads, Discs, Calipers...</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Rubber</h3>
                      <p className="text-sm">Shocks, Struts, Control Arms...</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Cooling Systems</h3>
                      <p className="text-sm">Radiators, Water Pumps...</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Custom Dropdown for ORDER IN BULK */}

              {/* Custom Dropdown for ACCESSORIES */}
              <div className=" group">
                <span className="cursor-pointer flex items-center gap-2">
                  BRANDS <FaAngleDown />
                </span>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute hidden group-hover:flex flex-col bg-white text-black p-8 shadow-lg gap-4  rounded w-full max-h-[500px] overflow-y-auto  right-0"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4  ">
                    <div>
                      <h3 className="text-lg font-bold">Genuin</h3>
                      <p className="text-sm">
                        Protect your vehicle with our covers...
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">AfterMarket</h3>
                      <p className="text-sm">
                        Durable and stylish floor mats...
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Rubber</h3>
                      <p className="text-sm">
                        Keep your car cool with our sunshades...
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Others</h3>
                      <p className="text-sm">
                        Enhance your driving experience...
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <Link href="/contact">CONTACT</Link>
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 right-0 h-full w-[80%] bg-primary shadow-lg z-[20] text-white p-6 lg:hidden overflow-auto"
          >
            <div
              className="text-[50px] font-bold m-10 p-2 bg-white text-black rounded w-fit cursor-pointer"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <FaTimes />
            </div>

            <nav className="flex flex-col gap-6 overflow-auto">
              <Link href="/home" onClick={toggleMenu}>
                HOME
              </Link>
              <Link href="/parts" onClick={toggleMenu}>
                FIND AUTO PARTS
              </Link>

              <Link href="/accessories" onClick={toggleMenu}>
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
                <li
                  key={index}
                  className="py-2 hover:bg-gray-200 cursor-pointer"
                >
                  <span className="font-bold">{item.code}:</span> {item.name}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </header>
    );
  }
};

export default Navbar;
