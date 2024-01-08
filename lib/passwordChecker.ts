'use server'

import usermodel from "@/DB/models/usermodel";
import { checkPassword } from "./bcrypt";



export default async(prevState:false, formData:FormData)=>{
'use server'
    try {

        const userId = formData.get('id')
        const password = formData.get('password')
        const user = await usermodel.findById(userId)

        

        if(!user) return {
            message:'Incorrect password!',
            token: false
        }

        if(await checkPassword(password, user.password)){
            return {
                message:'',
                token: true
            }
        }
         return {
            message:'Incorrect password!',
            token: false
        }
        
        
        
    } catch (e) {
        return {
            message:'Incorrect password!',
            token: false
        }
        
    }
    
}