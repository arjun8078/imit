import userAvatar from '../../assets/Images/Ellipse 30.png';
import logo from '../../assets/Images/CAPTCHARTS LOGO 2.png';

const Loginnavbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-5 bg-white text-white">
        <a className="flex flex-shrink-0 items-center mr-4" href="/">
          <img
            className="h-12 w-auto"
            src={logo}
            alt="Captcharts"
          />
        </a>

        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-[#E7AD99] px-4 py-2 rounded-full">
            <img
              src={userAvatar} // Correct image path
              alt="User Avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="ml-2 text-white">Asha Sunny</span> {/* Update the name */}
          </div>

          <button
            className="bg-[#E7AD99] hover:bg-red-600 text-white px-6 py-2 rounded-full flex items-center"
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default Loginnavbar;
