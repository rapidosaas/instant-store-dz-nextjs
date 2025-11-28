import { StaticImageData } from 'next/image';

export type Product = {
    id: number;
    handle: string;
    title: string;
    description: string;
    price: number;
    imageSrc: StaticImageData;
    imageAltText: string;
  };