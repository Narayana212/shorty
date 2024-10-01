import { cn } from "@/lib/utils";
import React from "react";

/**
 * A wrapper component that provides a maximum width container for its children
 * @param {object} props - The component props
 * @param {string} [props.className] - Additional CSS classes to apply to the wrapper
 * @param {React.ReactNode} props.children - The content to be wrapped
 * @returns {JSX.Element} A div element with max-width and centered content
 */
export default function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
}