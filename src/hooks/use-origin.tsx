import { useEffect, useState } from "react";

/**
 * Custom React hook to safely access the window.location.origin
 * @returns {string} The origin of the current page, or an empty string if not available
 */
export const useOrigin = () => {
  const [mounted, setMounted] = useState(false);
  const origin = typeof window !== "undefined" && window.location.origin ? window.location.origin : "";

  /**
   * Sets the mounted state to true after the component mounts
   * @returns {void} No return value
   */
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return "";
  }

  return origin;
};