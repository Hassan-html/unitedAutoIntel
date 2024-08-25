"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";

// Dummy data for search functionality
const searchItems = [
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

// Dummy data for categories and services
const categories = [
  {
    title: "Engine Parts",
    items: ["Pistons", "Camshaft", "Crankshaft", "Valves", "Gaskets"],
  },
  {
    title: "Brakes",
    items: ["Brake Pads", "Discs", "Calipers", "ABS Sensors"],
  },
  { title: "Suspension", items: ["Shocks", "Struts", "Control Arms"] },
];

const services = [
  {
    title: "Maintenance",
    items: ["Oil Change", "Tire Rotation", "Battery Replacement"],
  },
  {
    title: "Repairs",
    items: ["Brake Repair", "Engine Repair", "Transmission Repair"],
  },
];

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState<
    { code: string; name: string }[]
  >([]);

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

  // Animation variants for the dropdown items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <header className="absolute top-0 bg-transparent z-[10] w-full p-[20px] text-white">
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="nav-1 flex items-center justify-between gap-10 text-[15px]"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="logo uppercase"
        >
          United Auto
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="input-Group flex gap-[10px] bg-white rounded-full overflow-hidden w-[40%] text-[15px]"
        >
          <div className="drop-list relative">
            <button className="flex items-center bg-gray-200 text-secondary p-[10px]">
              <FaAngleDown />
              <span>Categories</span>
            </button>
            <div className="menu"></div>
          </div>
          <input
            className="bg-transparent outline-none w-full px-4 text-black"
            type="text"
            placeholder="e.g:'piston'"
            value={searchQuery}
            onChange={handleSearch}
          />
          <button className="btn-search px-[20px] bg-primary text-white">
            <FaSearch />
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Link href="/Contact">Contact</Link>
        </motion.div>
      </motion.nav>

      {/* Search Results Dropdown */}
      {filteredItems.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute bg-white shadow-lg rounded-lg mt-20 w-full right-0  text-[15px] text-black p-4"
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

      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="nav-2 flex justify-center w-fit gap-10 p-[20px] text-[15px] m-auto"
      >
        <Link href="/Home">Home</Link>
        <div className="group ">
          <div className="text flex gap-2 items-center cursor-pointer">
            <FaAngleDown />
            <span>Products</span>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="absolute transform justify-center  transition-all items-start gap-10  h-[0px] bg-white w-full overflow-hidden shadow-lg  flex group-hover:pt-8   group-hover:h-[300px] right-0 text-black"
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-[15px] flex flex-col gap-5"
              >
                <h1 className="text-[20px] font-bold">{category.title}</h1>
                {category.items.map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="group ">
          <div className="text flex gap-2 items-center cursor-pointer">
            <FaAngleDown />
            <span>Services</span>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="absolute transform justify-center  transition-all items-start gap-10  h-[0px] bg-white w-full overflow-hidden shadow-lg  flex group-hover:pt-8   group-hover:h-[300px] right-0 text-black "
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-[15px] flex flex-col gap-5"
              >
                <h1 className="text-[20px] font-bold">{service.title}</h1>
                {service.items.map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <Link href="/Home">About Us</Link>
      </motion.nav>
    </header>
  );
};

export default Navbar;
