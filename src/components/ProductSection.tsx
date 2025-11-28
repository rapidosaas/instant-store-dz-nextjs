import ProductImage from '@/components/ProductImage'
import ProductDetails from '@/components/ProductDatails'
import { Product } from '@/lib/types/Product'

function ProductSection({ productData }: { readonly productData: Product }) {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
      <ProductImage imageSrc={productData.imageSrc} />
      <ProductDetails productData={productData} />
    </div>
  )
}

export default ProductSection