"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

```
/**
 * A custom Drawer component that wraps DrawerPrimitive.Root
 * @param {boolean} [shouldScaleBackground=true] - Determines if the background should scale
 * @param {React.ComponentProps<typeof DrawerPrimitive.Root>} props - Additional props to be passed to DrawerPrimitive.Root
 * @returns {JSX.Element} A DrawerPrimitive.Root component with the specified props
 */
```
const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
/**
 * Renders a modal overlay component using DrawerPrimitive.Overlay
 * @param {Object} props - The component props
 * @param {string} [props.className] - Additional CSS class names to apply to the overlay
 * @param {React.Ref} ref - React ref object to be forwarded to the overlay element
 * @returns {React.ReactElement} A DrawerPrimitive.Overlay component with applied styles and props
 */
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
/**
 * Renders a drawer component with a portal, overlay, and content.
 * @param {Object} props - The component props.
 * @param {string} props.className - Additional CSS classes for the drawer content.
 * @param {React.ReactNode} props.children - The child elements to render inside the drawer content.
 * @param {React.Ref} ref - The ref to be forwarded to the drawer content.
 * @returns {React.ReactElement} A React element representing the drawer component.
 */
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

/**
 * A React component that renders a header for a drawer.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the component, including className and any other HTML div attributes.
 * @returns {JSX.Element} A div element styled as a drawer header.
 */
const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
)
DrawerHeader.displayName = "DrawerHeader"

```
/**
 * Renders a footer component for a drawer with customizable content and styling.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the component, including className and any other HTML div attributes.
 * @returns {JSX.Element} A div element styled as a drawer footer with customizable content.
 */
```
const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  ```
  /**
   * A React component that renders a Drawer Title using DrawerPrimitive.Title
   * @param {object} props - The properties passed to the component
   * @param {string} [props.className] - Additional CSS class names to apply to the title
   * @param {React.Ref} ref - A ref to be forwarded to the underlying DrawerPrimitive.Title component
   * @returns {React.ReactElement} A styled DrawerPrimitive.Title component
   */
  ```
  />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
/**
 * A React component that renders a description for a drawer using DrawerPrimitive.Description
 * @param {object} props - The props object
 * @param {string} [props.className] - Additional CSS class names to apply to the component
 * @param {React.Ref} ref - A ref object to attach to the component
 * @returns {React.ReactElement} A DrawerPrimitive.Description component with applied styling and props
 */
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
