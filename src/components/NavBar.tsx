"use client";
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

function NavBar() {
  const { cartItems } = useCart();
  return (
    <header className="border-b border-palette-lighter sticky top-0 z-20 bg-white">
      <nav className="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
        <Link href="/" passHref>
          <div className=" cursor-pointer">
            <h1 className="flex no-underline">
              <span className="text-xl font-primary font-bold tracking-tight pt-1">
                Instant Store
              </span>
            </h1>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            href="/cart"
            passHref
          >
            <div className=" relative" aria-label="cart">
                <ShoppingBag size={24} />
            </div>
          </Link>
          <div className="relative">
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
          </div>
        </div>
      </nav>
    </header >
  )
}

export default NavBar