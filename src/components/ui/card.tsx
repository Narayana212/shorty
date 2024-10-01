import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
/**
 * A React component that renders a styled div element with customizable properties.
 * @param {Object} props - The props object containing component properties.
 * @param {string} [props.className] - Additional CSS classes to apply to the div.
 * @param {React.Ref} ref - A ref object to access the underlying div element.
 * @returns {React.ReactElement} A div element with applied styles and properties.
 */
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
/**
 * A React component that renders a styled div element with flexbox properties
 * @param {Object} props - The component props
 * @param {string} [props.className] - Additional CSS class names to apply to the div
 * @param {React.Ref} ref - Ref object to be forwarded to the div element
 * @returns {React.ReactElement} A div element with applied styles and props
 */
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
/**
 * A React component that renders an h3 element with customizable styling
 * @param {object} props - The props object
 * @param {string} [props.className] - Additional CSS classes to apply to the h3 element
 * @param {React.Ref} ref - Ref object to be forwarded to the h3 element
 * @returns {React.ReactElement} An h3 element with applied styles and props
 */
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
/**
 * A React component that renders a paragraph element with customizable styling.
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.className] - Additional CSS class names to apply to the paragraph.
 * @param {React.Ref} ref - A ref object to attach to the paragraph element.
 * @returns {React.ReactElement} A styled paragraph element.
 */
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  /**
   * Creates a div element with specific styling and passes along props
   * @param {Object} props - The component props
   * @param {string} props.className - Additional CSS classes to apply to the div
   * @param {React.Ref} ref - React ref object to be attached to the div
   * @returns {JSX.Element} A styled div element with passed props and ref
   */
  />
/**
 * A functional React component that renders a div element with specific styling and forwarded ref.
 * @param {Object} props - The component props
 * @param {string} [props.className] - Additional CSS class names to be applied to the div
 * @param {React.Ref} ref - Ref object to be forwarded to the div element
 * @returns {React.Element} A styled div element with forwarded ref and merged props
 */
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
