import { ChevronsRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { Article as ArticleType } from '@/data/get-articles';
import { cn } from '@/lib/utils';

export default function Article({
  title,
  description,
  image,
  date,
}: ArticleType) {
  return (
    <div className="space-y-6">
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg">
        <Image
          src={image}
          alt="Collection"
          fill
          className="object-cover transition group-hover:scale-110"
        />
      </div>

      <div className="space-y-2 px-2">
        <h3 className="text-2xl font-medium text-light transition group-hover:text-accent">
          {title}
        </h3>
        <p className="text-sm text-light-2">{date}</p>
        <p className="text-sm text-light-2">{description}</p>
      </div>

      <Link
        href="#"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "h-fit origin-left px-2 py-0 text-accent transition hover:scale-x-105 hover:bg-transparent hover:text-accent",
        )}
      >
        Read more <ChevronsRightIcon />
      </Link>
    </div>
  );
}
