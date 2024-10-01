"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Sparkle } from "lucide-react";
import { useState } from "react";
import { createUrl } from "@/actions/create-title";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function CreateButton() {
  const router = useRouter();

  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  async function createUrlClient() {
    try {

      if(!url || !title){
        return toast.error("Invaild values")
      }
      if(!url.startsWith("https://")){
        return toast.error("Enter a valid and secure URL")


      }
      const promise = () =>
        /**
         /**
          * Asynchronously resolves with an object containing a name after a 1-second delay
          * @param {function} resolve - The resolve function of the Promise
          * @returns {undefined} This function doesn't explicitly return anything, but resolves the Promise after the timeout
          */
         * Creates a Promise that resolves after a 1-second delay with an object containing a name
         * @returns {Promise<Object>} A Promise that resolves to an object with a 'name' property set to "Narayana"
         */
        new Promise((resolve) =>
          setTimeout(() => resolve({ name: "Narayana" }), 1000)
        );
      await createUrl(title, url);

      toast.promise(promise, {
        loading: "Creating...",
        /**
         * Callback function for successful short URL creation
         * @param {Object} data - The response data from the server
         * @returns {string} A success message indicating the short URL was created
         */
        success: (data) => {
          return `Short url created successfully`;
        },
        error: "Something went wrong please try again",
      });

      window.location.href = "/dashboard";
    } catch (err) {
      toast.error("Something went wrong please try again");
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size={"sm"}>Upload new url</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Upload url</AlertDialogTitle>
          <AlertDialogDescription>
            The short url will be genearted after clicking save.
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                /**
                 * Event handler for updating the title state when the input value changes
                 * @param {React.ChangeEvent<HTMLInputElement>} e - The change event object
                 * @returns {void} This function does not return a value
                 */
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  id="title"
                  placeholder="Youtube"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                /**
                 * Updates the URL state when the input value changes
                 * @param {React.ChangeEvent<HTMLInputElement>} e - The change event object
                 * @returns {void} This function doesn't return a value
                 */
                <Label htmlFor="url" className="text-right">
                  Url
                </Label>
                <Input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  id="url"
                  placeholder="www.youtube.com"
                  className="col-span-3"
                />
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <AlertDialogAction asChild>
            <Button
              /**
               * Handles the click event to create a URL client
               * @returns {void} This function doesn't return a value
               */
              onClick={() => {
                createUrlClient();
              }}
            >
              Shorten it !
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
