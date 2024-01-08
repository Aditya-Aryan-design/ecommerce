'use client'

import Link from "next/link"
import { useState, FormEvent } from "react";
import { FaSearch,FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import CreateUserBtn from "./CreateUserBtn";



function Header() {
  const [slug, setSlug] = useState('')

  const router = useRouter();

  const handleSubmit=(e:FormEvent)=>{
    e.preventDefault();

    if(slug === '') return

    router.push(`/search/${slug}`)
  }

  const cartItems = useAppSelector(state=>state.product.value)
  return (
    <header className="bg-zinc-800 p-[2vmin] text-[3vmin] flex justify-between items-center space-x-[5vmin] sm:space-x-[10vmin]">
        <h1 className="text-white text-[3.6vmin] font-bold sm:text-[3vmin]"><Link href='/'>Ecommerce</Link></h1>

      <form className="flex-1 bg-white px-[2vmin] rounded-full flex items-center" onSubmit={handleSubmit}>
            <input type="text" className="outline-none flex-1 mx-[0.5vmin]" placeholder="Search..." value={slug} onChange={(e)=>setSlug(e.target.value)}/>

            <button type="submit" className="text-zinc-500">
              <FaSearch />
              </button>
        </form>
        
        <Link href='/cartpage' className="text-white flex">
          {
          cartItems.length > 0 && <div className="text-white text-[2vmin] bg-red-500 rounded-full px-[1vmin] border-[0.2vmin] border-white relative left-[2vmin] top-[1.4vmin]">{cartItems.length}</div>
          }
          <FaShoppingCart />
        </Link>

        <CreateUserBtn />
    </header>
  )
}

export default Header
