

const FeaturedProductsSection: React.FC = () => {
  // Dummy data for featured products (replace with your actual data)
  const featuredProducts = [
    { id: 1, name: 'Product 1', price: 19.99, imageUrl: 'https://placekitten.com/300/200' },
    { id: 2, name: 'Product 2', price: 29.99, imageUrl: 'https://placekitten.com/300/201' },
    { id: 3, name: 'Product 3', price: 39.99, imageUrl: 'https://placekitten.com/300/20' },
  ];

  return (
    <section className="bg-fuchsia-100 py-[5vmin] px-[3vmin]">
      <div className="container mx-auto text-center">
        <h2 className="text-[5vmin] lg:text-[5.4vmin] font-bold mb-[4vmin]">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white p-[3vmin] rounded-md shadow-md">
              <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-[3vmin]" />
              <h3 className="text-[3.5vmin] font-semibold mb-[2vmin]">{product.name}</h3>
              <p className="text-gray-600 text-[3.4vmin]">${product.price.toFixed(2)}</p>

              <div className="flex justify-between">
              <button
                className="bg-fuchsia-500 text-white py-[2vmin] sm:py-[1.5vmin] px-[4vmin] sm:px-[3vmin] rounded-full mt-[2vmin] hover:bg-fuchsia-600 focus:outline-none focus:shadow-outline text-[3vmin] sm:text-[2.5vmin]"
              >
                Add To Cart
              </button>
              <button
                className="text-fuchsia-500 bg-zinc-100 py-[2vmin] sm:py-[1.5vmin] px-[4vmin] sm:px-[3vmin] rounded-full mt-[2vmin] hover:bg-fuchsia-200 focus:outline-none focus:shadow-outline text-[3vmin] sm:text-[2.5vmin]"
              >
                More Details
              </button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
