import { useEffect, useState } from "react"
import ProductItem from "./ProductItem"


function SearchPage({slug}:{slug:any}) {

  const [searchResults, setSearchResult] = useState([{id:'-1',imageUrl:'',name:'',price:0}])
    

    useEffect(()=>{
        fetch('/api/search',{
            method: 'POST',
            headers:{
              "content-type":"application/json"
            },
            body: JSON.stringify({slug: slug})
        })
        .then((res)=>res.json())
        .then((val)=>setSearchResult(val))
        .catch(e=>console.log(e))
        
    },[])

  return (
    <div className="container mx-auto py-[2vmin]">
    <h2 className="text-[4vmin] font-bold mb-[2vmin]">Search Results</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-[10vmin]">

        {
          
          searchResults.length === 0?<p>Result not found</p>:
          searchResults[0].id === '-1'?<p>Searching...</p>:
          searchResults.map((product) => <ProductItem key={product.id} id={product.id} imageUrl={product.imageUrl} name={product.name} price={product.price}/>)



        }
      </div>
        
      </div>
        )}

export default SearchPage
