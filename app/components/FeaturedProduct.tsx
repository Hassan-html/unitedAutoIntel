"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import NoSSRWrapper from "@/utils/NoSSRWrapper";
import { Modal, Button } from "flowbite-react";

// Define interfaces for the product data
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

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <NoSSRWrapper>
      <motion.section
        id="featured-products"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto py-16"
      >
        <h2 className="text-5xl font-extrabold text-center mt-10 uppercase text-primary">
          Explore Some Of Our Quality Parts
        </h2>
        <h1 className="uppercase text-lg font-extrabold text-center mt-5 mb-20 text-primary">
          Browse From Our Collection
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {currentProducts.map((product: Product) => (
            <motion.div
              key={product.id}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openModal(product)} // Open modal with product details
            >
              <img
                src={product.thumbnail}
                alt={product.subtitle}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {product.subtitle}
                </h3>
                <p className="text-gray-600 mb-4">{product.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <nav className="inline-flex">
            {Array.from({
              length: Math.ceil(products.length / productsPerPage),
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
    </NoSSRWrapper>
  );
};

export default FeaturedProducts;
