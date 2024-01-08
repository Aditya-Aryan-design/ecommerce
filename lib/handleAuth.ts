'use server'

import usermodel from "@/DB/models/usermodel";
import { checkPassword } from "./bcrypt";
import { createTokan } from "./jwt";


export default async(prevState:string,formData:FormData)=>{
'use server'
    try {
        const emailToAtuh = formData.get('email')
        const passToAtuh = formData.get('password')

        const user = await usermodel.findOne({email: emailToAtuh})

        if(!user) return ({
            message: 'Incorrect email or password',
            token: false
        })

        if(await checkPassword(passToAtuh, user.password)){
            return ({
                message: 'LoggedIn Successfuly',
                token: createTokan(user.id)
            })
        }
         return ({
            message: 'Incorrect email or password',
            token: false
        })

        
        
        
    } catch (e) {
        return ({
            message: "Internal server error!",
            token: false
        })
        
    }
    
}