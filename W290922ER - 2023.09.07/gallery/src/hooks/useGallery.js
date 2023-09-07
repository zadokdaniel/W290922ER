/*
- implement next
- implement prev
- implement end
- implement start
- implement isInfinity

*/

import { useState } from "react";

export const useGallery = ({
  images = [],
  startAt = 0,
  isInfinite = false,
} = {}) => {
  if (startAt < 0 || startAt >= images.length) {
    throw new Error("cannot start out of images scope");
  }

  const [index, setIndex] = useState(startAt);

  const start = () => {
    setIndex(0);
  };

  const next = () => {
    setIndex((index) => {
      if (index < images.length - 1) {
        return index + 1;
      }

      return isInfinite ? 0 : index;
    });
  };

  const previous = () => {
    setIndex((index) => {
      if (index > 0) {
        return index - 1;
      }

      return isInfinite ? images.length - 1 : index;
    });
  };

  const end = () => {
    setIndex(images.length - 1);
  };

  const jumpTo = (index) => {
    if (index < 0 || index >= images.length) {
      throw new Error(`Cannot jump to ${index} out of images length scope`);
    }

    setIndex(index);
  };

  return {
    start,
    next,
    previous,
    end,
    jumpTo,
    image: images[index],
    isLast: images.length - 1 === index,
    isFirst: 0 === index,
    index,
    amount: images.length,
  };
};
