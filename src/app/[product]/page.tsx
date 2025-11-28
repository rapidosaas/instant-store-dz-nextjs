import ProductSection from "@/components/ProductSection"
import { products } from "@/lib/products-list"

async function ProductPage({
    params,
  }: Readonly<{
    params: Promise<{ product: string }>
  }>) {

  console.log(params)
  const handle = (await params).product
  const productData = products.find((product) => product.handle === handle)
  console.log(productData)

  return (
    <div className="min-h-screen py-12 sm:pt-20">
      {productData? 
      <ProductSection productData={productData} /> : <h1 className="text-center mt-5">Product not found</h1>}
    </div>
  )
}

export default ProductPage