import Price from '@/components/Price'

interface ProductInfoProps {
  readonly title: string;
  readonly description: string;
  readonly price: number;
}

function ProductInfo({ title, description, price }: ProductInfoProps) {
  return (
    <div className=" font-primary">
      <h1 className="leading-relaxed font-extrabold text-3xl text-zinc-500 py-2 sm:py-4">
        {title}
      </h1>
      <p className="font-medium text-lg text-zinc-500">
        {description}
      </p>
      <div className="text-xl text-zinc-500 font-medium py-4 px-1">
        <Price
          num={price}
        />
      </div>
    </div>
  )
}

export default ProductInfo