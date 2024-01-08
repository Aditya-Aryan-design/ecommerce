import React, { useState } from 'react'
import { useAppDispatch } from '@/store/hooks'
import { amountCounter } from '@/store/slice/counterSlice'

function CartBody({imageUrl, name, price}:{imageUrl:string, name:string, price:number}) {

    const [quant, setQuant] = useState(0)
  const dispatch = useAppDispatch()



    const handleQuant = (symb: "+"|"-")=>{
      if(symb === "+"){
        if(quant< 10){
          setQuant(quant+1)
          dispatch(amountCounter(price))
        }
      } else if(symb === "-"){
        if(quant> 0){
          setQuant(quant-1)
          dispatch(amountCounter(-price))
        }
      }
    }

  return (
        <tr className="border-b border-zinc-300 text-center">
          <td className="px-[3vmin] border-r">
            <img src={imageUrl} alt={name} className="w-[10vmin] h-[10vmin] object-cover" />
          </td>
          <td className="px-[3vmin] border-r">{name}</td>
          <td className="px-[3vmin] border-r">${price.toFixed(2)}</td>

          <td className="border-r flex flex-col h-[11vmin]">
            <p className='flex-1'>{quant}</p>
            <div className='w-full flex text-white bg-zinc-400'>
                <button className='font-extrabold flex-1 hover:bg-zinc-500' onClick={()=>handleQuant('+')}>+</button>
                <button className='font-extrabold flex-1 hover:bg-zinc-500' onClick={()=>handleQuant('-')}>–</button>
            </div>
          </td>

          <td className="px-[3vmin]">${(price * quant).toFixed(2)}</td>
        </tr>
  )
}

export default CartBody
