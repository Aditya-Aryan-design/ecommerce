import React, { FormEvent } from 'react'
import { useState } from 'react'
import { useAppSelector } from '@/store/hooks'


const UpdatePage = () => {

    const [seller, setSeller] = useState(useAppSelector(state=>state.user.value.seller))
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const [confPass, setConfPass] = useState("")
    const [msg,setMsg] = useState("")
    const [err,setErr] = useState(true)
    const userId = useAppSelector(state=>state.user.value.id)
    


    const handleSubmit=async(e:FormEvent)=>{

        
        
        e.preventDefault()
        
        if(password !== confPass){
            setMsg("Enter Password carefuly!");
            setErr(true)
            return
        }
        try {
            
            const res = await fetch('/api/createuser',{
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({userId, name, email, password, seller})
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

      <p className='text-[4vmin] font-semibold'>Update</p>

      <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='New Name' required className='outline-none border px-[1.5vmin] py-[0.5vmin]'/>

      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='newfake@gmail.com' required className='outline-none border px-[1.5vmin] py-[0.5vmin]'/>
      
      <input value={password} onChange={(e)=>setPass(e.target.value)} type="password" placeholder='New Password' required className='outline-none border px-[1.5vmin] py-[0.5vmin]'/>

      <input value={confPass} onChange={(e)=>setConfPass(e.target.value)} type="password" placeholder='Confirm-Password' required className='outline-none border px-[1.5vmin] py-[0.5vmin]'/>

    <p className={`text-[2.5vmin] text-center break-words ${err ? 'text-red-500':'text-green-500'} font-semibold`}>{msg}</p>

        <button type='submit' className="bg-fuchsia-600 text-white py-[0.5vmin] hover:bg-fuchsia-700">
            Update User
        </button>

    </form>
  )
}

export default UpdatePage
