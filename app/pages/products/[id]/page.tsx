import Products from "@/utils/productData"; // Adjust the import path
import ProductDetail from "@/app/components/ProductDetail"; // Import the client component

export async function generateStaticParams() {
  return Products.map((product) => ({
    id: product.id,
  }));
}

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const product = Products.find((p) => p.id === params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetail product={product} />;
};

export default ProductDetailPage;
