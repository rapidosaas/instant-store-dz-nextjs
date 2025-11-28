import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import Price from '@/components/Price'
import React from 'react';

interface Product {
  handle: string;
  title: string;
  description: string;
  price: number;
  imageAltText: string;
  imageSrc: StaticImageData;
}

interface ProductCardProps {
  readonly product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const handle = product.handle
  const title = product.title
  const description = product.description
  const price = product.price
  const imageAltText = product.imageAltText
  const imageSrc = product.imageSrc

  return (
    <Link
      href={`/${handle}`}
      passHref
    >
      <div className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter">
        <div className="overflow-hidden h-72 border-b-2 border-palette-lighter relative">
          <Image
            src={imageSrc}
            alt={imageAltText}
            width={1000}
            height={1000}
            className="transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
        <div className="h-48 relative">
          <div className="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
            {title}
          </div>
          <div className="text-lg text-gray-600 p-4 font-primary font-light">
            {description}
          </div>
          <div
            className="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter 
            rounded-tl-sm triangle"
          >
            <Price
              num={price}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard