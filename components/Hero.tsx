
const HeroSection: React.FC = () => {
  return (
    <section className="bg-fuchsia-700 text-white py-[5vmin]">
      <div className="container mx-auto text-center mt-[3vw]">

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-[2vmin]">Discover Amazing Products</h1>
        <p className="text-[3.5vmin] sm:text-[3vmin] mb-[4vmin]">Shop the latest trends in our Ecommerce App</p>

        <button
          className="bg-white text-fuchsia-700 py-[1vmin] px-[3vmin] rounded-full text-[3vmin] font-semibold hover:bg-zinc-800 hover:text-white hover:border-white border-[0.3vmin] my-[3vw]"
        >
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;