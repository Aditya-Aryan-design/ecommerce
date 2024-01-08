'use server'
import usermodel from "@/DB/models/usermodel"
import { varifyTokan } from "./jwt"

export default async (token: string) => {
    try {
        const res = varifyTokan(token)
        
        if (res) {

            const searchDB = await usermodel.findById(res)
            
            if (!searchDB) return false;

            
            return {
                id: searchDB.id,
                name: searchDB.name,
                email: searchDB.email,
                seller: searchDB.seller
            };
        } else return false;
    } catch (e) {
        return false;
    }


}