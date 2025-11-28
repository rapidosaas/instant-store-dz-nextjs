import React, { useState } from 'react';
import Checkout from '@/components/Checkout';
import slickpayLogo from '@/assets/slick-pay-logo.png'; // Update the path to your logo

const PaymentOptions: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <>
    <h1 className="text-2xl font-bold mb-4">Payment Options</h1>
    <div className="flex flex-row justify-center items-center gap-3 mb-5">
      <Checkout
        logo={slickpayLogo}
        text="Slick-Pay"
        onClick={() => handleSelect('Slick-Pay')}
        selected={selectedOption === 'Slick-Pay'}  
      />
    </div>
    </>
  );
};

export default PaymentOptions;