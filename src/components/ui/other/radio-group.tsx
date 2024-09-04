import { nanoid } from 'nanoid';
import { ChangeEvent, useRef } from 'react';

import { RadioGroupItem } from '@/lib/types';
import { cn } from '@/lib/utils';

interface RadioGroupProps<T> {
  items: RadioGroupItem<T>[];
  selectedItemValue: T;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function RadioGroup<T>({
  items,
  selectedItemValue,
  handleChange,
  className,
}: RadioGroupProps<T>) {
  const groupName = useRef(`radio-group-${nanoid()}`).current;

  return (
    <div className={cn("flex flex-wrap gap-4", className)}>
      <Item
        key={`radio-item-${groupName}-all`}
        groupName={groupName}
        item={{ id: "all", value: "all", text: "All" }}
        selectedItemValue={selectedItemValue ?? "all"}
        handleChange={handleChange}
      />

      {items.map((item) => (
        <Item
          key={`radio-item-${groupName}-${item.id}`}
          groupName={groupName}
          item={item}
          selectedItemValue={selectedItemValue}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
}

interface ItemProps<T> {
  groupName: string;
  item: RadioGroupItem<T>;
  selectedItemValue: T;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Item<T>({
  groupName,
  item,
  selectedItemValue,
  handleChange,
}: ItemProps<T>) {
  return (
    <div className="select-none overflow-hidden rounded-md border border-primary">
      <input
        type="radio"
        id={`radio-${groupName}-${String(item.id)}`}
        value={String(item.value)}
        name={groupName}
        checked={selectedItemValue === item.value}
        onChange={handleChange}
        className="hidden"
      />
      <label
        htmlFor={`radio-${groupName}-${String(item.id)}`}
        className={cn(
          "flex h-12 items-center justify-center whitespace-nowrap px-6 py-2 text-sm transition hover:cursor-pointer hover:bg-primary hover:text-light",
          selectedItemValue === item.value && "bg-primary text-light",
        )}
      >
        {item.text}
      </label>
    </div>
  );
}
