"use client";

import { ChangeEvent, useState } from 'react';

import RadioGroup from '@/components/ui/other/radio-group';

export default function PeriodFilter() {
  const [value, setValue] = useState<Value>("today");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as Value);
  };

  return (
    <RadioGroup
      items={getItems()}
      selectedItemValue={value}
      handleChange={handleChange}
    />
  );
}

type Value = "today" | "this-month" | "this-year";

type ItemType = {
  id: string;
  value: Value;
  text: string;
};

function getItems(): ItemType[] {
  return [
    {
      id: "1",
      value: "today",
      text: "Today",
    },
    {
      id: "2",
      value: "this-month",
      text: "This Month",
    },
    {
      id: "3",
      value: "this-year",
      text: "This Year",
    },
  ];
}
