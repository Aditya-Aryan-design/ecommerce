import ProductItem from "./ProductItem";

const FeaturedProductsSection: React.FC = () => {
  // Dummy data for featured products (replace with your actual data)
  const featuredProducts = [
    { id: '1', name: 'Product 1', price: 19.99, imageUrl: 'https://placekitten.com/300/200' },
    { id: '2', name: 'Product 2', price: 29.99, imageUrl: 'https://placekitten.com/300/201' },
    { id: '3', name: 'Product 3', price: 39.99, imageUrl: 'https://placekitten.com/300/20' },
  ];

  return (
    <section className="bg-fuchsia-100 py-[5vmin] px-[3vmin]">
      <div className="container mx-auto text-center">
        <h2 className="text-[5vmin] lg:text-[5.4vmin] font-bold mb-[4vmin]">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => <ProductItem key={product.id} id={product.id} imageUrl={product.imageUrl} name={product.name} price={product.price}/>)}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
