"use client";

import Image from "next/image";
import ContactSection from "@/app/components/MapComponent";
import Testimonials from "@/app/components/Testimonials";

const ProductDetail = ({ product }: { product: any }) => {
  return (
    <div className="container mx-auto p-6">
      {/* Top Image (You mentioned you'll handle this part) */}
      <div
        className="w-full h-[700px] bg-gray-200 mb-6 relative"
        style={{
          background: "url(/images/carRed.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left Side: Product Images */}
        <div className="w-full md:w-1/2">
          <div
            className="bg-gray-100 p-4 rounded-lg shadow-md"
            style={{
              background: `url(${product.thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        {/* Right Side: Product Details */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold">{product.title}</h2>
          <h3 className="text-xl font-semibold text-gray-600">
            {product.subtitle}
          </h3>
          <p className="text-lg text-gray-700">{product.shortDescription}</p>

          <div
            className="text-gray-700"
            dangerouslySetInnerHTML={{ __html: product.longDescription }}
          ></div>

          <ul className="mt-4 space-y-2">
            <li className="text-lg font-semibold">
              Category: <span className="text-primary">{product.category}</span>
            </li>
          </ul>
        </div>
      </div>
      <ContactSection />
      <Testimonials />
    </div>
  );
};

export default ProductDetail;
