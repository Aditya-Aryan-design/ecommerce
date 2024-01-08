'use client'
import Avvvatars from "avvvatars-react"
import { useAppSelector } from "@/store/hooks"
import { FiEdit2 } from "react-icons/fi";
import Link from "next/link";
import { useEffect, useState } from "react";


function Profile() {

    const [avatarSize, setAvatarSize] = useState(1)

    useEffect(()=>{
        setAvatarSize(window.innerHeight > window.innerWidth ? window.innerWidth / 7 : window.innerHeight / 7)

    },[])

    const user = useAppSelector(state => state.user.value)


    return user?.name !== '' ? (
        
        <div className="flex px-[10vmin] py-[4vmin] items-center">
            <Avvvatars value={user?.name} size={avatarSize} />
            <div className="mx-[2vmin] text-[3.5vmin]">
                <p className="font-bold text-[4vmin]">{user?.name}</p>
                <p className="text-zinc-500">{user?.email}</p>
            </div>
            <Link href='/updateuser' className="hover:bg-zinc-100 p-[2vmin] rounded-full"><FiEdit2 /></Link>

        </div>
    ) : <p className="text-zinc-500">Login First!</p>
}

export default Profile
