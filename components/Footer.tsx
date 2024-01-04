import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-800 text-white py-[3vmin]">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-[3vmin] mb-[2vmin]">© 2024 Your Ecommerce App. All rights reserved.</p>
        <div className="flex space-x-[2vmin] text-[3.5vmin]">
          <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
          <a href="#" className="hover:text-zinc-400">Terms of Service</a>
          <a href="#" className="hover:text-zinc-400">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;