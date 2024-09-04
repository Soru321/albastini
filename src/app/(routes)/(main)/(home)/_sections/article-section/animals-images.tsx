import Image from 'next/image';

import elephantImage from '@/../public/images/elephant.webp';
import giraffeImage from '@/../public/images/giraffe.webp';
import Container from '@/components/ui/other/container';

export default function AnimalsImages() {
  return (
    <Container className="absolute left-1/2 top-0 -z-10 hidden h-0 -translate-x-1/2 md:block">
      <div className="absolute left-1/2 top-1/2 h-20 w-3/4 -translate-x-1/2">
        {/* Giraffe */}
        <Image
          src={giraffeImage}
          alt=""
          width={299 * 0.8}
          height={376 * 0.8}
          className="absolute -left-6 top-1 mr-auto -translate-x-3/4 -translate-y-full"
        />

        {/* Elephant */}
        <Image
          src={elephantImage}
          alt=""
          width={328 * 0.8}
          height={233 * 0.8}
          className="absolute -right-12 top-1 ml-auto -translate-y-full translate-x-1/2"
        />
      </div>
    </Container>
  );
}
