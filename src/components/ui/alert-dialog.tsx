"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
/**
 * Renders an overlay component for an alert dialog using AlertDialogPrimitive.Overlay
 * @param {Object} props - The props object
 * @param {string} [props.className] - Additional CSS class names to apply to the overlay
 * @param {React.Ref} ref - React ref object for the overlay element
 * @returns {JSX.Element} The rendered AlertDialogPrimitive.Overlay component
 */
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
/**
 * Creates an AlertDialog component with a portal, overlay, and content.
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.className] - Additional CSS class names for the content.
 * @param {React.Ref} ref - The ref object for the AlertDialogPrimitive.Content.
 * @returns {React.ReactElement} The rendered AlertDialog component.
 */
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

/**
 * Renders the header component for an alert dialog.
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.className] - Additional CSS class names to apply to the component.
 * @param {...React.HTMLAttributes<HTMLDivElement>} [props] - Any other props to pass to the underlying div element.
 * @returns {JSX.Element} A div element styled as an alert dialog header.
 */
const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

/**
 * Renders the footer of an alert dialog component
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the component, including className and any other HTML div attributes
 * @returns {JSX.Element} A div element with flexbox styling for layout
 */
const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
/**
 * A React component that renders an AlertDialog title using Radix UI's AlertDialogPrimitive.
 * @param {Object} props - The props object.
 * @param {string} [props.className] - Additional CSS class names to apply to the title.
 * @param {React.Ref} ref - A ref to be forwarded to the underlying title element.
 * @returns {React.ReactElement} A styled AlertDialog title component.
 */
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
/**
 * A functional component that renders an AlertDialog description using Radix UI Primitive.
 * @param {object} props - The props object.
 * @param {string} [props.className] - Additional CSS class names to apply to the description.
 * @param {React.Ref} ref - A ref object to attach to the description element.
 * @returns {React.ReactElement} A React element representing the AlertDialog description.
 */
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
/**
 * Creates an action button for an alert dialog using AlertDialogPrimitive.Action
 * @param {Object} props - The props object
 * @param {string} [props.className] - Additional CSS class names for styling
 * @param {React.Ref} ref - Ref object for the button
 * @returns {JSX.Element} A styled action button for the alert dialog
 */
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  /**
   * A React component that renders a Cancel button for an AlertDialog using RadixUI Primitive.
   * @param {Object} props - The props object containing className and other properties.
   * @param {string} [props.className] - Additional CSS class names to apply to the button.
   * @param {React.Ref} ref - A forwarded ref to be applied to the underlying button element.
   * @returns {React.ReactElement} A styled Cancel button component for AlertDialog.
   */
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
