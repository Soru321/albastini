"use client";

import { motion as m } from 'framer-motion';

import { SearchInput } from '@/components/ui/other/search-input';

export default function LightSearchInput() {
  return (
    <m.div style={{ opacity: 0 }} className="nav-item">
      <SearchInput
        placeholder="Search"
        className="h-10 min-w-60 border-light-2 text-light bg-light-gradient-2 placeholder:text-light-2 focus-visible:ring-1 focus-visible:ring-light-2 focus-visible:ring-offset-0"
        iconClassName="text-light-2"
        containerClassName="hidden xl:block"
      />
    </m.div>
  );
}
