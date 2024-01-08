'use client'
import Link from "next/link";
import { useState } from "react";


function CreateUser() {

    const [seller, setSeller] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const [confPass, setConfPass] = useState("")
    const [msg,setMsg] = useState("")
    const [err,setErr] = useState(true)

    const handleSubmit = async(e:React.FormEvent<HTMLElement>)=>{
        e.preventDefault();

        if(password !== confPass){
            setMsg("Enter Password carefuly!");
            setErr(true)
            return 
        }
        try {
            const res = await fetch('/api/createuser',{
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({name, email, password, seller})
            });
            
            res.status === 201 ? setErr(false):setErr(true)
            const data = await res.json();
            setMsg(data.message)
            
            setName('')
            setEmail('')
            setPass('')
            setConfPass('')
        } catch (e) {
            setErr(true);
            setMsg("Internal Server Error!")
        }
        
    }


  return (
    <form className='w-fit m-auto shadow rounded my-[4vmin] p-[4vmin] flex flex-col text-[3.5vmin] space-y-[2vmin]' onSubmit={handleSubmit}>

      <p className='text-[4vmin] font-semibold'>Create User</p>

      <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name' required className='outline-none border px-[1.5vmin] py-[0.5vmin]'/>

      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='fake@gmail.com' required className='outline-none border px-[1.5vmin] py-[0.5vmin]'/>
      
      <input value={password} onChange={(e)=>setPass(e.target.value)} type="password" placeholder='Password' required className='outline-none border px-[1.5vmin] py-[0.5vmin]'/>

      <input value={confPass} onChange={(e)=>setConfPass(e.target.value)} type="password" placeholder='Confirm-Password' required className='outline-none border px-[1.5vmin] py-[0.5vmin]'/>

    <p className={`text-[2.5vmin] text-center break-words ${err ? 'text-red-500':'text-green-500'} font-semibold`}>{msg}</p>

    <div className="flex flex-col">
        <button type='submit' className="bg-fuchsia-600 text-white py-[0.5vmin] hover:bg-fuchsia-700" onClick={()=>setSeller(false)}>
            Create User
        </button>

        <p className="text-center">or</p>

        <button type='submit' className="bg-zinc-200 py-[0.5vmin] hover:bg-zinc-300" onClick={()=>setSeller(true)}>
            Create as Seller
        </button>
        </div>

        <Link href="/login" className="text-blue-800 text-[3vmin] underline text-center hover:text-fuchsia-700">Login from existing account</Link>
    </form>
  )
}

export default CreateUser
