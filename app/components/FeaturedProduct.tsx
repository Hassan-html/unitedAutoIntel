"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Modal, Button } from "flowbite-react";
import SectionHeading from "@/app/components/SectionHeading"; // Include Section Heading Component
import Products from "@/utils/productData"; // Import your product data
import { FaStar, FaCartPlus } from "react-icons/fa";

// Define product interface
interface Product {
  id: string;
  title: string;
  subtitle: string;
  name: string;
  thumbnail: string;
  longDescription: string;
  shortDescription: string;
  category: string;
  price: number;
  featured: boolean;
  images: string[];
}

const FeaturedProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const productsPerPage = 8;

  // Filter products based on search term and category selection
  const filteredProducts = Products.filter((product) => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      product.name.toLowerCase().includes(searchLower) ||
      product.subtitle.toLowerCase().includes(searchLower);
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;

    return matchesSearch && matchesCategory;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  // Convert Set to Array using Array.from() for proper iteration
  const categories = Array.from(
    new Set(["All Categories", ...Products.map((product) => product.category)])
  );

  // Render star ratings dynamically
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <FaStar
          key={i}
          className={`text-yellow-400 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <>
      <motion.section
        id="featured-products"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto py-16"
      >
        {/* Section Heading */}
        <SectionHeading
          title="Explore Some Of Our Quality Parts"
          subtitle="Browse From Our Collection"
        />

        {/* Search and Category Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded w-full md:w-1/2"
          />

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded w-full md:w-1/4"
          >
            {categories.map((category, index) => (
              <option
                key={index}
                value={category === "All Categories" ? "" : category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentProducts.map((product: Product) => (
            <motion.div
              key={product.id}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
              onClick={() => openModal(product)}
            >
              {/* Featured Badge */}
              {product.featured && (
                <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold py-1 px-2 rounded">
                  Featured
                </span>
              )}

              {/* Product Image */}
              <img
                src={product.thumbnail}
                alt={product.subtitle}
                loading="lazy"
                className="w-full h-48 object-cover hover:scale-105 transition-all"
              />

              {/* Product Info */}
              <div className="p-6 flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-1 text-gray-900">
                  {product.subtitle}
                </h3>
                <p className="text-gray-600 mb-2">{product.name}</p>

                {/* Category Label */}
                <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                  {product.category}
                </span>

                {/* Star Ratings */}
                <div className="flex space-x-1 mb-2">{renderStars(4)}</div>

                {/* Add to Cart Button */}
                <div className="flex items-center justify-between">
                  <button className="bg-primary text-white py-2 px-4 rounded w-full flex items-center justify-center gap-2 hover:bg-accent transition">
                    <FaCartPlus />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <nav className="inline-flex">
            {Array.from({
              length: Math.ceil(filteredProducts.length / productsPerPage),
            }).map((_, page) => (
              <button
                key={page + 1}
                onClick={() => paginate(page + 1)}
                className={`px-4 py-2 mx-1 ${
                  currentPage === page + 1
                    ? "bg-primary text-white"
                    : "bg-white text-primary"
                } rounded shadow hover:bg-primary hover:text-white transition`}
              >
                {page + 1}
              </button>
            ))}
          </nav>
        </div>
      </motion.section>

      {/* Modal */}
      {selectedProduct && (
        <Modal show={isModalOpen} onClose={closeModal} size="5xl">
          <Modal.Header>{selectedProduct.title}</Modal.Header>
          <Modal.Body>
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
              <img
                src={selectedProduct.thumbnail}
                alt={selectedProduct.title}
                className="w-full md:w-1/2 h-64 object-cover rounded-md"
              />
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-xl font-semibold text-gray-600">
                  {selectedProduct.subtitle}
                </h3>
                <p className="text-lg text-gray-700">{selectedProduct.name}</p>
                <p className="text-lg font-bold text-primary">
                  ${selectedProduct.price.toFixed(2)}
                </p>
                <div
                  className="text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: selectedProduct.longDescription,
                  }}
                ></div>
                <div className="flex justify-end space-x-4 mt-4">
                  <Button onClick={closeModal} color="success">
                    Quote Now
                  </Button>
                  <Button color="info">
                    <a href="mailto:info@unitedautointl.com">Contact Us</a>
                  </Button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default FeaturedProducts;
