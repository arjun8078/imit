

const Quote = () => {
  return (
    <section className="flex flex-col md:flex-row bg-white px-8 py-12 md:space-x-8">
      {/* Left Side Text Block */}
      <div className="w-full md:w-1/2 p-8 text-[#CF796C]">
      <h2 className="text-6xl  leading-tight">
        Lorem Ipsum is simply  dummy text of the printing
      </h2>
   
    </div>

      {/* Right Side Quote Block */}
      <div className="w-full md:w-1/2 p-8 text-gray-700">
      <div className="flex items-start">
        <span className="text-3xl text-gray-300 pr-2">“</span>
        <p className="leading-relaxed text-gray-600">
          Hey there! I m Megha Mohan, a 16-year-old UAE-based enthusiast with a passion for Photography and Astrophysics. Whether I m diving into the world of photography or exploring the latest news on Dark Matter, you can bet Im always up for an adventure.
          <br /><br />
          On this webpage, Im laying down my thoughts, experiences, and maybe a sprinkle of my experience in photography. When Im not lost in the virtual world or buried in my favorite books, you can catch me hanging out with my camera and telescope, tackling the latest challenges, and trying my hands at Astrophotography.
          <br /><br />
          So, buckle up, join me on this digital escapade, and lets navigate the world of photography.
        </p>
        <span className="text-3xl text-gray-300 pl-2">”</span>
      </div>
      <p className="text-[#CF796C] font-semibold text-lg mt-4 text-center">
        MEGHA MOHAN
      </p>
    </div>
    </section>
  )
}

export default Quote