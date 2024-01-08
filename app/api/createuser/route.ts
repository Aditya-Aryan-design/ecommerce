import { NextResponse } from "next/server";
import usermodel from "@/DB/models/usermodel";
import { hashPassword } from "@/lib/bcrypt";




export async function GET() {
    return NextResponse.json({error:"Method not allowed"})
}

export async function POST(req:Request) {
    const {name, email, password, seller} = await req.json();

    if(!name || !email || !password) return NextResponse.json({error: "User not found"},{status:400}) 
    
    const checkAccount = await usermodel.findOne({email: email})
    if(checkAccount) return NextResponse.json({message: "This email ID has already taken!"},{status: 400})

    
    try {
        
        
        const hashedpassword = await hashPassword(password)
        const newUser = new usermodel({
            name,email,seller,password:hashedpassword
        })

        await newUser.save()
        return NextResponse.json({message: "User Saved✓"},{status:201})
    } catch (e) {
        
        return NextResponse.json({message: "Internal server error!"},{status: 500})
    }
    
    
}



export async function PATCH(req: Request) {

    const {userId, name, email, password, seller} = await req.json();
    
    
    
    
    if(!userId) return NextResponse.json({message: "User not found, Login first"},{status:400}) 
    
    const checkAccount = await usermodel.findById(userId)
    if(!checkAccount) return NextResponse.json({message: "User not found, Login first"},{status: 400})
    
    try {
        
        
            const hashedpassword = await hashPassword(password)
            await usermodel.findByIdAndUpdate(userId, {name: name, email: email, password: hashedpassword, seller: seller})
        return NextResponse.json({message: "User Updated✓"},{status:201})
    } catch (e) {
        
        return NextResponse.json({message: "Internal server error!"},{status: 500})
    }
}