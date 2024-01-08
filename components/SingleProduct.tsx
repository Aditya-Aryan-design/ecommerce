import Image from "next/image"
import AddProductBtn from "./AddProductBtn"

function SingleProduct({id, imageUrl, name, price, description}:{
    id:string,
    imageUrl:string,
    name:string,
    price:number,
    description:string
}) {
  return (
    <div className="container mx-auto md:mt-[5vmin] pb-[5vmin]">
      <div className="flex flex-col md:flex-row items-center">
        <Image src={imageUrl} alt={name} className="w-full md:w-1/2 object-cover mb-[2vmin] md:mb-0" width={500} height={500}/>

        <div className="md:ml-[3vmin] mx-[2vmin]">
          <h2 className="text-[5.5vmin] sm:text-[4vmin] font-bold mb-[1vmin]">{name}</h2>
          <p className="text-gray-600 mb-[2vmin] text-[3vmin]">${price.toFixed(2)}</p>
          <p className="text-gray-800 text-[3.5vmin]">{description}</p>
          
          <AddProductBtn id={id} imageUrl={imageUrl} name={name} price={price}/>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
