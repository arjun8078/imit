import event1 from '../assets/Images/Mask group (3).png'
import event2 from '../assets/Images/Mask group (4).png'
import event3 from '../assets/Images/Mask group (5).png'

const Event = () => {
  return (
    <section className="px-8 py-12 bg-gray-50">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Events</h2>
    
    {/* Events Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Event 1 */}
      <div className="flex flex-col items-center">
        <img src={event1} alt="Event 1" className="w-full h-full object-cover rounded-lg shadow-lg" />
        <p className="text-gray-600 mt-2">Lorem Ipsum is simply dummy text of the printing</p>
      </div>

      {/* Event 2 */}
      <div className="flex flex-col items-center">
        <img src={event2} alt="Event 2" className="w-full h-full object-cover rounded-lg shadow-lg" />
        <p className="text-gray-600 mt-2">Lorem Ipsum is simply dummy text of the printing</p>
      </div>

      {/* Event 3 */}
      <div className="flex flex-col items-center">
        <img src={event3} alt="Event 3" className="w-full h-full object-cover rounded-lg shadow-lg" />
        <p className="text-gray-600 mt-2">Lorem Ipsum is simply dummy text of the printing</p>
      </div>
    </div>
  </section>
  )
}

export default Event