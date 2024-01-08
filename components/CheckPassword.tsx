import passwordChecker from "@/lib/passwordChecker"
import { useAppSelector } from "@/store/hooks"
import { useEffect } from "react"
import { useFormState } from "react-dom"
import { Dispatch,SetStateAction } from "react"

interface IProps{
    setCheck?: Dispatch<SetStateAction<boolean>>
}


function CheckPassword({setCheck}:IProps) {

    const userId = useAppSelector(state=>state.user.value.id)

    const [state, formAction] = useFormState(passwordChecker,false)
    
    useEffect(()=>{
        if(state?.token){
            if(setCheck) setCheck(state?.token)
        }
    },[state])
    


  return (
    <form action={formAction} className='w-fit m-auto shadow rounded mt-[4vmin] p-[4vmin] flex flex-col text-[3.5vmin] space-y-[2vmin]'>

    <p className='text-[4vmin] font-semibold'>Password</p>

    <input type="hidden" value={userId} name="id"/>
    <input type="password" placeholder='Enter Password' required className='outline-none border px-[1.5vmin] py-[0.5vmin]' name='password'/>

    <p className="text-[2.5vmin] text-center break-words text-red-500 font-semibold">{state?.message}</p>

    <button type='submit' className="bg-fuchsia-600 text-white py-[0.5vmin] hover:bg-fuchsia-700">
          Send
      </button>

  </form>
  )
}

export default CheckPassword
