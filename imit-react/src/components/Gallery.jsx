import image1 from '../assets/Images/Mask group (2).jpg'
import image2 from '../assets/Images/Mask group.png'
import image3 from '../assets/Images/Mask group (1).png'
import image4 from '../assets/Images/Mask group (2).png'
import image5 from '../assets/Images/Mask group (2).png'
import image6 from '../assets/Images/Mask group.png'

const Gallery = () => {
  return (
    <section className="px-8 py-12">
      {/* Title and More Link */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Gallery</h2>
          <p className="text-gray-600">Lorem ipsum is simply dummy text of the printing</p>
        </div>
        <a href="#more" className="text-[#CF796C] font-semibold">More</a>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Actual Images */}
        <img src={image1} alt="Gallery 1" className="w-full h-auto object-cover rounded-lg shadow-lg" />
        <img src={image2} alt="Gallery 2" className="w-full h-auto object-cover rounded-lg shadow-lg" />
        <img src={image3} alt="Gallery 3" className="w-full h-auto object-cover rounded-lg shadow-lg" />
        <img src={image4} alt="Gallery 4" className="w-full h-auto object-cover rounded-lg shadow-lg" />
        <img src={image5} alt="Gallery 4" className="w-full h-auto object-cover rounded-lg shadow-lg" />
        <img src={image6} alt="Gallery 4" className="w-full h-auto object-cover rounded-lg shadow-lg" />
    

        {/* Placeholder Boxes
        <div className="w-full h-32 bg-gray-200 rounded-lg" />
        <div className="w-full h-32 bg-gray-200 rounded-lg" />
        <div className="w-full h-32 bg-gray-200 rounded-lg" /> */}
      </div>
    </section>
  )
}

export default Gallery