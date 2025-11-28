"use client";
import { createContext, useState, useContext, ReactNode, useMemo } from 'react';

interface CartData {
  title: string;
  description: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartData[];
  addToCart: (product: CartData) => void;
  setCartItems: (items: CartData[]) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartData[]>([]);

  const addToCart = (product: CartData) => {
    setCartItems((prevItems) => {
      const existingProductIndex = prevItems.findIndex(item => item.title === product.title);
      if (existingProductIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingProductIndex].quantity += product.quantity;
        return updatedItems;
      } else {
        return [...prevItems, product];
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = useMemo(() => ({ cartItems, addToCart, setCartItems, clearCart }), [cartItems]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};