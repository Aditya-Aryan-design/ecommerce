'use client'
import handleAuth from "@/lib/handleAuth"
import { useEffect } from "react"
import { useFormState } from "react-dom"


interface resState {
  message: string,
  token: boolean|string
}
const initialState:resState = {
  message: '',
  token: false
}




function Login() {

  const [state, formAction] = useFormState(handleAuth, initialState)

  useEffect(()=>{
    if(state?.token){
      localStorage.setItem("token",`${state?.token}`)
      
    }
    
  },[state])
  
  
  return (
    <form action={formAction} className='w-fit m-auto shadow rounded mt-[4vmin] p-[4vmin] flex flex-col text-[3.5vmin] space-y-[2vmin]'>

      <p className='text-[4vmin] font-semibold'>Login</p>

      <input type="email" placeholder='fake@gmail.com' required className='outline-none border px-[1.5vmin] py-[0.5vmin]' name='email'/>

      <input type="password" placeholder='Password' required className='outline-none border px-[1.5vmin] py-[0.5vmin]' name='password'/>

      <p className={`text-[2.5vmin] text-center break-words ${!state?.token ?'text-red-500':'text-green-500'} font-semibold`}>{state?.message}</p>

      <button type='submit' className="bg-fuchsia-600 text-white py-[0.5vmin] hover:bg-fuchsia-700">
            Login
        </button>

    </form>
  )
}

export default Login
