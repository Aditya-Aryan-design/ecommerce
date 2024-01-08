import Link from "next/link"
import AddProductBtn from "./AddProductBtn"


function ProductItem({id, imageUrl, name, price}:{id: string, imageUrl: string, name: string, price: number}) {

  


  return (
    
    <div className="bg-white p-[3vmin] rounded-md shadow-md">

    <img src={imageUrl} alt={name} className="w-full h-[40vh] sm:h-[30vh] lg:h-[25vh] object-cover mb-[3vmin]" />
    
    <h3 className="text-[3.5vmin] font-semibold mb-[2vmin]">{name}</h3>
    <p className="text-gray-600 text-[3.4vmin]">${price.toFixed(2)}</p>

    <div className="flex justify-between">
    <AddProductBtn id={id} imageUrl={imageUrl} name={name} price={price}/>

    <Link href={`/singleproduct/${id}`} className="text-fuchsia-500 bg-zinc-100 py-[2vmin] sm:py-[1.5vmin] px-[4vmin] sm:px-[3vmin] rounded-full mt-[2vmin] hover:bg-fuchsia-200 focus:outline-none focus:shadow-outline text-[3vmin] sm:text-[2.5vmin]">
      More Details
      </Link>
    </div>
    
  </div>
  )
}

export default ProductItem
