import ProductCard from '@/components/other/product-card';
import InnerContainer from '@/components/ui/other/inner-container';
import { SearchInput } from '@/components/ui/other/search-input';
import { getProducts } from '@/data/get-products';

import CategoryFilter from './category-filter';

export default function Products() {
  return (
    <InnerContainer>
      <div className="flex flex-wrap justify-between gap-4">
        <CategoryFilter />
        <SearchInput
          type="text"
          placeholder="Search"
          className="w-full sm:min-w-80"
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {getProducts.map((product) => (
          <ProductCard key={`product-card-${product.id}`} {...product} />
        ))}
      </div>
    </InnerContainer>
  );
}
