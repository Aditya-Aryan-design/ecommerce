'use client'

import CartBody from "./CartBody";
import { useAppSelector,useAppDispatch } from "@/store/hooks";
import { resetCounter } from "@/store/slice/counterSlice";
import { useEffect } from "react";





const Cart=()=> {

  const total = useAppSelector((state)=>state.total.value);
  const cartItems = useAppSelector((state)=>state.product.value);
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(resetCounter())
  },[])

  return cartItems.length > 0 ?(
    <div className="px-[3vmin] text-[2.8vmin]">
      <p className="text-[3vmin] font-semibold py-[3vmin]">Added Products</p>

      <table className="min-w-full border border-zinc-300">
      <thead>
        <tr className="bg-zinc-300">
          <th className="py-2 px-[3vmin] border-r">Image</th>
          <th className="py-2 px-[3vmin] border-r">Title</th>
          <th className="py-2 px-[3vmin] border-r">Price</th>
          <th className="py-2 px-[3vmin] border-r">Quantity</th>
          <th className="py-2 px-[3vmin]">Total</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => <CartBody key={item.id} imageUrl={item.imageUrl} name={item.name} price={item.price}/>)}
      </tbody>
    </table>

    <p className="text-right font-bold">
      Grand Total ${total.toFixed(2)}
    </p>

    </div>
  ): <p className="text-center text-[3vmin] text-zinc-500 mt-[3vmin]">Cart is Empty!</p>
}

export default Cart
