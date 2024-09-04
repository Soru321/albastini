import Image from 'next/image';
import Link from 'next/link';

import { Collection as CollectionType } from '@/data/get-collections';

export default function Collection({
  title,
  description,
  image,
}: CollectionType) {
  return (
    <Link href="#" className="group">
      <div className="space-y-6">
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg">
          <Image
            src={image}
            alt="Collection"
            fill
            className="object-cover transition group-hover:scale-110"
          />
        </div>
        <div className="space-y-2 px-2 text-center">
          <h3 className="text-2xl font-medium text-primary transition group-hover:text-accent">
            {title}
          </h3>
          <p className="text-sm text-dark">{description}</p>
        </div>
      </div>
    </Link>
  );
}
