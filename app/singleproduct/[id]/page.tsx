import SingleProduct from "@/components/SingleProduct"



interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
  }


const productData: Product[] = [
    { id: '1', name: 'Product 1', price: 19.99, imageUrl: 'https://placekitten.com/300/200', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: '2', name: 'Product 2', price: 29.99, imageUrl: 'https://placekitten.com/300/201', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: '3', name: 'Product 3', price: 39.99, imageUrl: 'https://placekitten.com/300/202', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    // Add more products as needed
  ];


function page({params}:{params:{id: string}}) {

    

  // Find the product by ID (assuming the ID is a number)
  const product: Product | undefined = productData.find((p) => p.id === params.id);

  if (!product) {
    // Product not found
    return <p className="text-center text-[3vmin] text-zinc-500">Product not found.</p>;
  }


  return <SingleProduct id={product.id} imageUrl={product.imageUrl} name={product.name} description={product.description} price={product.price}/>
}

export default page
