import { useCallback } from "react";

// eslint-disable-next-line no-unused-vars
const useScrollToHash = (): ((hash: string) => void) => {
  const scrollToHash = useCallback((hash: string) => {
    const selector = hash.startsWith("#") ? hash : `#${hash}`;
    const element = document.querySelector(selector);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return scrollToHash;
};

export default useScrollToHash;
