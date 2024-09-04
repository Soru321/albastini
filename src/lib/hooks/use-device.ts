import { useMediaQuery } from "react-responsive";

export function useDevice() {
  const isXsDevice = useMediaQuery({ query: "(max-width: 639px)" });
  const isSmallDevice = useMediaQuery({ query: "(min-width: 640px)" });
  const isMediumDevice = useMediaQuery({ query: "(min-width: 768px)" });
  const isLargeDevice = useMediaQuery({ query: "(min-width: 1024px)" });
  const isXLargeDevice = useMediaQuery({ query: "(min-width: 1280px)" });
  const isXXLargeDevice = useMediaQuery({ query: "(min-width: 1536px)" });

  return {
    isXsDevice,
    isSmallDevice,
    isMediumDevice,
    isLargeDevice,
    isXLargeDevice,
    isXXLargeDevice,
  };
}
