import Price from '@/components/Price'
import { useCart } from '@/context/CartContext'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react';

function CartTable() {
  const { cartItems, setCartItems } = useCart()
  const [subTotal, setSubTotal] = useState(0)

  const setCartSubTotal = (items: { price: number, quantity: number }[]) => {
    return items.reduce((acc: number, item: { price: number, quantity: number }) => {
      return acc + item.price * item.quantity
    }
    , 0);
  }

  const handleQuantityChange = (index: number, value: number) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = value;
    setCartItems(updatedItems);
  };

  useEffect(() => {
    setSubTotal(setCartSubTotal(cartItems));
  }
  , [cartItems, setSubTotal]);

  if (cartItems === undefined) {
    return null
  }

  if (cartItems.length === 0) {
    return null
  }

  return (
    <div className="my-4 sm:my-8 mx-auto w-full flex flex-col items-center">
      <table className="mx-auto">
        <thead>
          <tr className="uppercase text-xs sm:text-sm text-palette-primary border-b border-palette-light">
            <th className="font-primary font-normal px-6 py-4">Product</th>
            <th className="font-primary font-normal px-6 py-4">Quantity</th>
            <th className="font-primary font-normal px-6 py-4 hidden sm:table-cell">Unit Price</th>
            <th className="font-primary font-normal px-6 py-4">Remove</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-palette-lighter">
          {cartItems.map((item, index) => (
            <tr key={index} className="text-sm sm:text-base text-gray-600 text-center">
              <td className="font-primary font-medium px-4 sm:px-6 py-4 flex items-center">
                <div className="pt-1 hover:text-palette-dark">
                  {item.title}
                </div>
              </td>
              <td className="font-primary font-medium px-4 sm:px-6 py-4">
                <input
                  type="number"
                  inputMode="numeric"
                  id="variant-quantity"
                  name="variant-quantity"
                  min="1"
                  step="1"
                  value={String(item.quantity ?? 1)}
                  onChange={(e) => handleQuantityChange(index, Number(e.target.value))}
                  className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
                />
              </td>
              <td className="font-primary text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
                <Price
                  num={item.price}
                />
              </td>
              <td className="font-primary font-medium px-4 sm:px-6 py-4">
                <button
                  aria-label="delete-item"
                  className="text-palette-primary hover:text-palette-dark"
                  onClick={() => {
                    const updatedItems = [...cartItems];
                    updatedItems.splice(index, 1);
                    setCartItems(updatedItems);
                  }}
                >
                    <X size={24} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {subTotal > 0 && (
        <div className="flex items-center justify-center mt-4">
          <div className="font-bold">TOTAL : </div>
          <Price
            num={subTotal}
          />
        </div>
      )}
    </div>
  )
}

export default CartTable