import Image from 'next/image';
import Link from 'next/link';
import { FaCartArrowDown } from 'react-icons/fa';

import { Product } from '@/data/get-products';

import AccentGradientButtonOutline from '../../ui/other/accent-gradient-button-outline';
import StarRating from './star-rating';

export default function ProductCard({ title, price, rating, image }: Product) {
  return (
    <div className="space-y-8 overflow-hidden rounded-sm p-3 transition hover:shadow-xl md:hover:scale-105">
      <Link
        href="#"
        className="relative block aspect-4/3 overflow-hidden rounded-sm"
      >
        <Image src={image} alt={title} fill className="object-cover" />
      </Link>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg">{title}</h3>
          <p className="font-semibold">${price}</p>
        </div>
        <StarRating value={rating.value} />
        <div className="flex flex-col items-center gap-2">
          <AccentGradientButtonOutline className="w-full">
            <FaCartArrowDown className="mr-2 size-6" /> Add to Cart
          </AccentGradientButtonOutline>
          <Link
            href="#"
            className="text-sm text-dark transition hover:text-accent hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
