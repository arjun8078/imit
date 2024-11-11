import footerimage from '../assets/Images/Group 114.png';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adds a smooth scroll effect
    });
  };
  return (
    <footer className="px-8 py-12 bg-[#C08C5D] text-white">
      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img src={footerimage} alt="Logo" className="w-24 mb-4" />
        </div>

        {/* Connect Section */}
        <div className="text-center md:text-center flex flex-col items-center">
          <h2 className="text-2xl font-semibold">Let's Connect!</h2>
          <p className="text-sm mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <form className="flex items-center mt-4 space-x-2">
            <input
              type="email"
              placeholder="Type your email..."
              className="p-2 rounded-l-full w-full max-w-sm text-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-[#C08C5D] px-4 py-2 font-semibold rounded-r-full"
            >
              Send
            </button>
          </form>
        </div>

        {/* Scroll-Up Button */}
        <div className="flex justify-center md:justify-end items-center w-full md:w-auto">
          <button className="bg-white text-[#C08C5D] p-4 rounded-full"   onClick={scrollToTop}  >
            <FaArrowUp size={20} />
          </button>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-center md:text-left">
        <p className="text-gray-700">Captcharts © 2023 Powered by <span className="text-white">Imit</span></p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#terms" className="hover:text-gray-300">Terms</a>
          <a href="#privacy" className="hover:text-gray-300">Privacy</a>
          <a href="#support" className="hover:text-gray-300">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
