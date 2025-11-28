"use client";
import Link from 'next/link';
import CartTable from '@/components/CartTable';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import Checkout from '@/components/Checkout';
import yassirLogo from '@/assets/yassir-logo.png'; // Update the path to your logo
import weeWeeDeliveryLogo from '@/assets/weeweedelivery-logo.png';
import slickpayLogo from '@/assets/slick-pay-logo.png';
import alpayLogo from '@/assets/alpay-logo.png';
import bnaLogo from '@/assets/bna-logo.png';
import cnepLogo from '@/assets/cnep-logo.png';

function CartPage() {
  const { cartItems } = useCart();
  const isCartEmpty = cartItems.length === 0;

  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState<string | null>(null);

  const handleSelectDelivery = (option: string) => {
    setSelectedDeliveryOption(option);
  };

    const [selectedPaymentOption, setSelectedPaymentOption] = useState<string | null>(null);
    const handleSelectPayment = (option: string) => {
      setSelectedPaymentOption(option);
    };

  return (
    <div className="flex flex-col justify-center items-center my-20">
      {isCartEmpty ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <div className="max-w-sm mx-auto space-y-4 px-2">
            <Link href="/" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Continue Shopping
            </Link>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
          <CartTable />
          <h1 className="text-2xl font-bold mb-4">Select your Delivery Options</h1>
          <div className="flex flex-row justify-center items-center gap-3 mb-5">
            <Checkout 
              logo={weeWeeDeliveryLogo}
              text="WeeWee"
              onClick={() => handleSelectDelivery('WeeWee')}
              selected={selectedDeliveryOption === 'WeeWee'}
            />
            <Checkout
              logo={yassirLogo}
              text="Yassir"
              onClick={() => handleSelectDelivery('Yassir')}
              selected={selectedDeliveryOption === 'Yassir'}
            />
          </div>
          <h1 className="text-2xl font-bold mb-4">Select your Payment Options</h1>
          <div className="flex flex-row justify-center items-center gap-3 mb-5">
            <Checkout
              logo={slickpayLogo}
              text="Slick-Pay"
              onClick={() => handleSelectPayment('Slick-Pay')}
              selected={selectedPaymentOption === 'Slick-Pay'}  
            />
            <Checkout
              logo={alpayLogo}
              text="alPay"
              onClick={() => handleSelectPayment('AlPay')}
              selected={selectedPaymentOption === 'AlPay'}
            />
            <Checkout
              logo={bnaLogo}
              text="WimPay"
              onClick={() => handleSelectPayment('WimPay')}
              selected={selectedPaymentOption === 'WimPay'}
            />
            <Checkout
              logo={cnepLogo}
              text="MobiPay"
              onClick={() => handleSelectPayment('MobiPay')}
              selected={selectedPaymentOption === 'MobiPay'}
            />
          </div>
          {(selectedDeliveryOption && selectedPaymentOption) && (
            <div className="max-w-sm mx-auto space-y-4 px-2 mb-5">
              <h2 className="text-xl font-bold mb-2">Fill in your Address Details</h2>
              <input type="text" placeholder="Full Name" className="w-full p-2 border rounded mb-2" />
              <input type="text" placeholder="Phone Number" className="w-full p-2 border rounded mb-2" />
              <input type="text" placeholder="Email" className="w-full p-2 border rounded mb-2" />
              <input type="text" placeholder="Street Address" className="w-full p-2 border rounded mb-2" />
              <input type="text" placeholder="City" className="w-full p-2 border rounded mb-2" />
              <input type="text" placeholder="Wilaya" className="w-full p-2 border rounded mb-2" />
              <input type="text" placeholder="Zip Code" className="w-full p-2 border rounded mb-2" />
            </div>
          )}
          <div className="max-w-sm mx-auto space-y-4 px-2">
            <Link href="#" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;