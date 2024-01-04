'use client'
import { useParams } from "next/navigation";
import SearchPage from "@/components/SearchPage";




function page() {
  const params = useParams()
  const slug = params.id
  
  
  return <SearchPage slug={slug}/>
}

export default page
