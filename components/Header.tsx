'use client'

import Link from "next/link"
import { useState, FormEvent } from "react";
import { FaSearch,FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";




function Header() {
  const [slug, setSlug] = useState('')

  const router = useRouter();

  const handleSubmit=(e:FormEvent)=>{
    e.preventDefault();

    if(slug === '') return

    router.push(`/search/${slug}`)
  }
  return (
    <header className="bg-zinc-800 p-[2vmin] text-[3vmin] flex justify-between items-center space-x-[5vmin] sm:space-x-[10vmin]">
        <h1 className="text-white text-[3.6vmin] font-bold sm:text-[3vmin]"><Link href='/'>Ecommerce</Link></h1>

      <form className="flex-1 bg-white px-[2vmin] rounded-full flex items-center" onSubmit={handleSubmit}>
            <input type="text" className="outline-none flex-1 mx-[0.5vmin]" placeholder="Search..." value={slug} onChange={(e)=>setSlug(e.target.value)}/>

            <button type="submit" className="text-zinc-500">
              <FaSearch />
              </button>
        </form>
        
        <button className="text-white">
          <FaShoppingCart />
        </button>
    </header>
  )
}

export default Header
