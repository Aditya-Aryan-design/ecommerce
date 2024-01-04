import { useEffect } from "react"


function SearchPage({slug}:{slug:any}) {
    

    useEffect(()=>{
        fetch('/api/search',{
            headers: {
                'content-type': 'application/json'
            },
            body: slug
        })
        .then((res)=>res.json())
        .then((val)=>console.log(val))
        .catch(e=>console.log(e))
        
    },[])

  return (
    <div>
      {slug}
    </div>
  )
}

export default SearchPage
