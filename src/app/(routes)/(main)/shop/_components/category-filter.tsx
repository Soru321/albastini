"use client";

import { useSearchParams } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

import RadioGroup from '@/components/ui/other/radio-group';
import { getCategories } from '@/data/get-categories';

export default function CategoryFilter() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [value, setValue] = useState(category);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <RadioGroup
      items={getCategories}
      selectedItemValue={value}
      handleChange={handleChange}
    />
  );
}
