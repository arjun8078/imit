import logo from '../assets/Images/logo.png'

const Navbar = () => {
  return (
   <>
   <nav className="flex justify-between items-center p-5 bg-gray-900 text-white ">
   <a className="flex flex-shrink-0 items-center mr-4" href="/">
            <img
              className="h-12 w-auto"
              src={logo}
              alt="Captcharts"
            />
          </a>
    <ul className="hidden md:flex space-x-6">
      <li><a href="/" className="hover:text-gray-400">Home</a></li>
      <li><a href="#gallery" className="hover:text-gray-400">Gallery</a></li>
      <button><a href="/login" className="bg-[#CF796C] text-white px-4 py-2 rounded hover:bg-[#b96558] transition-colors duration-300">Login</a></button>
    </ul>
    <button className="block md:hidden text-2xl">☰</button>
  </nav></>
  )
}


export default Navbar