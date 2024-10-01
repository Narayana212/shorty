"use client"
import React from 'react'
import { Button } from './ui/button'
import { Trash } from 'lucide-react'
import { deleteUrl } from '@/actions/delete-url'
import { toast } from 'sonner'


/**
 * Renders a delete button component that removes a URL and redirects to the dashboard
 * @param {Object} props - The component props
 * @param {string} props.id - The unique identifier of the URL to be deleted
 * @returns {JSX.Element} A Button component with delete functionality
 */
export default function DeleteButton({id}:{id:string}) {

```
/**
 * Deletes a URL client asynchronously and handles the aftermath.
 * @param {string} id - The identifier of the URL to be deleted.
 * @returns {Promise<void>} A promise that resolves when the deletion process is complete.
 */
```
async function deleteUrlClient(){
  await deleteUrl(id)
  toast.success("Deleted successfully")
  window.location.href = "/dashboard";

}

  return (
  <Button variant="secondary" onClick={deleteUrlClient} >
    <Trash className='w-4 h-4'/>
  </Button>
  )
}
