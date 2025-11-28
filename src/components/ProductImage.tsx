import Image, { StaticImageData } from 'next/image'

function ProductImage({ imageSrc }: { readonly imageSrc: StaticImageData }) {
  return (
    <div className="w-full md:w-1/2 max-w-md border border-palette-lighter bg-white rounded shadow-lg">
      <div className="overflow-hidden relative h-full">
        <Image
          src={imageSrc}
          width={1000}
          height={1000}
          alt="product-image"
          className="transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
    </div>
  )
}

export default ProductImage