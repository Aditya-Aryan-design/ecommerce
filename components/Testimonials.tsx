

const TestimonialsSection: React.FC = () => {
  // Dummy data for testimonials (replace with your actual data)
  const testimonials = [
    { id: 1, author: 'John Doe', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 2, author: 'Jane Smith', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 3, author: 'Alice Johnson', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  ];

  return (
    <section className="bg-fuchsia-200 py-[5vmin] px-[3vmin]">
      <div className="container mx-auto text-center">
        <h2 className="text-[4vmin] lg:text-4xl font-bold mb-[3vmin]">Customer Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-[2vmin] rounded-md shadow-md flex flex-col justify-between text-[3vmin] sm:text-[2.5vmin]">
              <p className="text-zinc-600">{testimonial.text}</p>
              <p className="font-semibold">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
