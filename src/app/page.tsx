import ProductListings from "@/components/ProductListings";
import { products } from "@/lib/products-list";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl">
      <ProductListings products={products} />      
    </div>
  );
}
