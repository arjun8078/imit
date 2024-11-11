import image from "../assets/Images/Mask group (1).jpg";

const Program = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-stretch p-8 bg-white">
        {/* Left Side: Text Section */}
        <div className="md:w-1/2 p-8 bg-[#D19D75] text-white relative">
          {/* Large Faded Number at the Top */}
          <div className="mb-8">
            <h2 className="text-7xl font-bold text-white opacity-20">01</h2>
          </div>

          {/* Content Section Below "01" */}
          <div className="space-y-4">
            <h3 className="text-5xl font-bold">
              Lorem Ipsum is simply dummy text of the printing
            </h3>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        {/* Right Side: Image Section */}
        <div className="md:w-1/2 relative flex justify-center items-center bg-gray-100">
          {/* Top-Right Text */}
          <h4 className="absolute top-4 right-4 text-gray-800 font-semibold">
            Explore the Program
          </h4>

          <img
            src={image}
            alt="Program Image"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default Program;
