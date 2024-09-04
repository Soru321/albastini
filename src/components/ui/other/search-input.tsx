import { SearchIcon } from 'lucide-react';
import { forwardRef, InputHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

import { Input } from '../input';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
  iconClassName?: string;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ containerClassName, iconClassName, ...props }, ref) => {
    return (
      <div className={cn("relative self-start", containerClassName)}>
        <Input
          {...props}
          type="text"
          ref={ref}
          className={cn("pr-10", props.className)}
        />
        <SearchIcon
          className={cn(
            "absolute right-4 top-1/2 size-5 -translate-y-1/2 text-primary/60",
            iconClassName,
          )}
        />
      </div>
    );
  },
);

SearchInput.displayName = "SearchInput";

export { SearchInput };
