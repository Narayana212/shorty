'use server'
import { db } from "@/lib/db";




export async function deleteUrl(id: string) {
   
    await db.links.delete({
        where: {
            id
        },
    })


}