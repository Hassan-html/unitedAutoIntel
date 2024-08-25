"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import NoSSRWrapper from "@/utils/NoSSRWrapper";

const FeaturedProducts = ({ products }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // Changed to display 2 rows (4 columns * 2 rows = 8 products per page)

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

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
        <h2 className="text-5xl font-extrabold text-center mt-10 uppercase">
          Auto Parts
        </h2>
        <h1 className="uppercase text-lg font-extrabold text-center mt-5 mb-20 ">
          Browse From Our Collection
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentProducts.map((product: any) => (
            <motion.div
              key={product.id}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={product.thumbnail}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                <p className="text-primary font-bold text-lg">
                  ${product.price}
                </p>
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
    </NoSSRWrapper>
  );
};

export default FeaturedProducts;
