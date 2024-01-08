'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import middleware from "@/lib/middleware";
import Avvvatars from 'avvvatars-react';
import { useAppDispatch,useAppSelector } from "@/store/hooks";
import { userDetails } from "@/store/slice/userDetailsSlice";



function CreateUserBtn() {

  const dispatch = useAppDispatch()
  const user = useAppSelector(state=>state.user.value)
  
  const [avatarSize,setAvatarSize] = useState(1);

  useEffect(() => {
    setAvatarSize(window.innerHeight > window.innerWidth?window.innerWidth/20:window.innerHeight/20);
    
    const token = localStorage.getItem('token');



    const getDetails = async (token: string) => {
      const checkAuth = await middleware(token)
      
      if(checkAuth){


        dispatch(userDetails({id: checkAuth.id, name: checkAuth.name, email:checkAuth.email, seller: checkAuth.seller}))
      }


    }
    if (token != null) {
      getDetails(token)

    }
  }, [])


  return user?.name !== '' ? (
    <Link href='/profilepage'><Avvvatars value={user?.name} size={avatarSize}/></Link>
  ) : (
    <Link href="/createuser"
      className="bg-fuchsia-500 text-white text-[2.5vmin] px-[1.3vmin] py-[0.5vmin] rounded font-semibold hover:bg-fuchsia-600"
    >
      SignIN
    </Link>
  )
}

export default CreateUserBtn
