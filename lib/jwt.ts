import jwt from 'jsonwebtoken'
const privatekey = 'mQypr=@iva&+tek_6e*y/'


export function createTokan(id:string){
    return jwt.sign({id},privatekey)
}

export function varifyTokan(tokan:string){
    try {
        const res =  jwt.verify(tokan,privatekey)
        
        if(typeof res !== 'string'){

            return res.id
        }
        return false
        
    } catch (e) {
        return false
    }
}

