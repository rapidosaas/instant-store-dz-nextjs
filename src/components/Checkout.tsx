import Image, { StaticImageData } from 'next/image';

interface CheckoutProps {
  logo: StaticImageData;
  text: string;
  onClick: () => void;
  selected: boolean;
}

const Checkout: React.FC<CheckoutProps> = ({ logo, text, onClick, selected }) => {
  return (
    <button
      className={`flex flex-col items-center p-2 rounded-md border ${selected ? 'border-blue-500' : 'border-gray-300'}`}
      onClick={onClick}
    >
      <Image src={logo} alt={`${text} Logo`} width={64} height={64} />
      <span className="ml-2 text-sm font-semibold">{text}</span>
    </button>
  );
};

export default Checkout;