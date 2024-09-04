import { Collection as CollectionType } from '@/data/get-collections';

import Collection from './collection';

interface CollectionsProps {
  collections: CollectionType[];
}

export default function Collections({ collections }: CollectionsProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {collections.map((collection) => (
        <Collection
          key={`collection-${collection.id}`}
          id={collection.id}
          title={collection.title}
          description={collection.description}
          image={collection.image}
        />
      ))}
    </div>
  );
}
