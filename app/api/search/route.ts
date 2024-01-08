import { NextResponse } from "next/server"

interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
  }
  
  const productData: Product[] = [
    { id: "1", name: 'Product 1', price: 19.99, imageUrl: 'https://placekitten.com/300/200' },
    { id: "2", name: 'Product 2', price: 29.99, imageUrl: 'https://placekitten.com/300/201' },
    { id: "3", name: 'Product 3', price: 39.99, imageUrl: 'https://placekitten.com/300/202' },
    // Add more products as needed
  ];


export async function GET() {
    return NextResponse.json({hello:'world'})
}

export async function POST(req: Request) {
    await req.json()
    
    return NextResponse.json(productData)
}