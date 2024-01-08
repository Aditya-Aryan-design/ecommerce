'use client'
import { useAppDispatch,useAppSelector } from "@/store/hooks"
import { addProduct,removeProduct } from "@/store/slice/addCartSlice"
import { useEffect, useState } from "react";


export default function AddProductBtn({id, imageUrl, name, price}:{id: string, imageUrl: string, name: string, price: number}) {

    const cartProduct = useAppSelector(state=>state.product.value)
    const dispatch = useAppDispatch();
    const [added, setAdded] = useState(false);

    useEffect(()=>{
        for(let i=0; i<cartProduct.length; i++){
            console.log(cartProduct[i].id, id);
            if(cartProduct[i].id === id){
                
                setAdded(true)
            }
        }
    },[])

    const handleClick = (e:"add"|"rem")=>{
        if(e === "add"){
            setAdded(true)
            dispatch(addProduct({id, imageUrl, name, price}))
        } else if(e === "rem") {
            setAdded(false)
            dispatch(removeProduct(id))
        }
    }

  return (
    !added ? <button
      className="bg-fuchsia-500 text-white py-[2vmin] sm:py-[1.5vmin] px-[4vmin] sm:px-[3vmin] rounded-full mt-[2vmin] hover:bg-fuchsia-600 focus:outline-none focus:shadow-outline text-[3vmin] sm:text-[2.5vmin]"

      onClick={()=>handleClick("add")}
    >
      Add To Cart
    </button> : <button
      className="bg-fuchsia-800 text-white py-[2vmin] sm:py-[1.5vmin] px-[4vmin] sm:px-[3vmin] rounded-full mt-[2vmin] hover:bg-fuchsia-500 focus:outline-none focus:shadow-outline text-[3vmin] sm:text-[2.5vmin]"

      onClick={()=>handleClick("rem")}
    >
      Remove To Cart
    </button>
  )
}
