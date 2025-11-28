import ProductCard from '@/components/ProductCard'
import { StaticImageData } from 'next/image';

interface Product {
  handle: string;
  title: string;
  description: string;
  price: number;
  imageAltText: string;
  imageSrc: StaticImageData;
}

interface ProductListingsProps {
  readonly products: Product[];
}

function ProductListings({ products }: ProductListingsProps) {
  return (
    <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      {
        products.map((product) => (
          <ProductCard key={product.handle} product={product} />
        ))
      }
    </div>
  )
}

export default ProductListings