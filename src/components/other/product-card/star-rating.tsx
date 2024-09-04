"use client";

import { FaRegStar, FaStar } from 'react-icons/fa';
import { Rating } from 'react-simple-star-rating';

interface StarRatingProps {
  value: number;
}

export default function StarRating({ value }: StarRatingProps) {
  return (
    <div
      style={{
        direction: "ltr",
        touchAction: "none",
      }}
      className="react-simple-star-rating"
    >
      <Rating
        initialValue={value}
        readonly
        emptyIcon={<FaRegStar size={24} />}
        fillIcon={<FaStar size={24} />}
        fillColor="hsl(var(--primary))"
      />
    </div>
  );
}
