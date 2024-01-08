import bcrypt from "bcrypt";
const saltRounds = 10;


export const hashPassword = async(password:string)=>{
    try {
        const hash = await bcrypt.hash(password, saltRounds);
        
        return hash
        
    } catch (e) {
        console.log('bcrypt error');
        return false
        
    }

}

export const checkPassword = async(password:any, hash:string)=>{
    try {
        return await bcrypt.compare(password, hash)
    } catch (e) {
        return false
    }
}

