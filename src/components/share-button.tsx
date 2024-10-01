"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Check, Copy, Globe, Share, Share2 } from "lucide-react";


import {
  PopoverTrigger,
  Popover,
  PopoverContent
} from "@/components/ui/popover"

import { Button } from "@/components/ui/button";
import { useOrigin } from "@/hooks/use-origin";



/**
 * ShareButton component for sharing a URL with a copy functionality
 * @param {Object} props - The component props
 * @param {any} props.id - The ID to be used in the share URL
 * @param {string} props.name - The name to be used in the share URL
 * @returns {JSX.Element} A Popover component containing a share button and URL copy functionality
 */
export const ShareButton = ({id,name}:{id:any,name:string}) => {
    const origin =useOrigin()
 

  const [copied, setCopied] = useState(false);
  const url = `${origin}/share/${id}/${name}`;
  /**
   * Copies the URL to the clipboard and sets a temporary 'copied' state
   * @param {void} - This function doesn't take any parameters
   * @returns {void} This function doesn't return anything
   /**
    * Sets a timeout to reset the 'copied' state to false after 1 second
    * @param {function} callback - The function to be executed after the timeout
    * @param {number} delay - The delay in milliseconds before executing the callback
    * @returns {number} The timeout ID that can be used to clear the timeout
    */
   */
  const onCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button  variant="secondary">
          Share
          
            <Share2
              className=" w-4 h-4 ml-2"
            />
         
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-72" 
        align="end"
        alignOffset={8}
        forceMount
      >
          <div className="space-y-4">
            <div className="flex items-center gap-x-2">
            </div>
            <div className="flex items-center">
              <input 
                className="flex-1 px-2 text-xs border rounded-l-md h-8 bg-muted truncate"
                value={url}
                disabled
              />
              <Button
                onClick={onCopy}
                disabled={copied}
                className="h-8 rounded-l-none"
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          
          </div>
        
      </PopoverContent>
    </Popover>
  )
}