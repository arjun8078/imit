import image from '../assets/Images/Mask group.jpg'

const About = () => {
  return (
   <>
  <section className="p-8 bg-white flex justify-center">
      
        <div className="max-w-4xl w-full space-y-8">
         
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-800">About</h2>
            <div className="bg-[#CF796C] px-4 py-1 inline-block">
              <h3 className="text-2xl font-semibold text-white">Captcharts</h3>
            </div>
          </div>


          <p className="text-gray-600 leading-relaxed">
            Welcome to the world of limitless creativity and boundless possibilities! Imagine a photography camp where the shutter captures not just moments, but the spirit of determination and resilience. We re thrilled to present a unique experience tailored for students with determination, where the focus is not just on framing a shot, but on framing a brighter future.
            In the heart of this camp, we celebrate the power of visual storytelling as a means of empowerment. Our goal is to provide a supportive and inclusive environment for young photographers who navigate the world with determination. Through the lens of a camera, we embark on a journey that transcends barriers and amplifies the voices that often go unheard.
          </p>

       
          <div className="flex justify-center">
            <img
              src={image}
              alt="About Captcharts"
              className="w-full max-w-4xl rounded shadow-lg"
            />
          </div>

          {/* Second Paragraph */}
          <p className="text-gray-600 leading-relaxed">
            This camp isn’t just about technical skills. It’s about unlocking individual potential, fostering self-expression, and building a community where everyone’s unique perspective is not only welcomed but celebrated.
            This isn’t just a photography camp; it’s a kaleidoscope of inspiration, where each participant adds their own vibrant hue to the canvas of creativity. So, whether you’re a novice or a seasoned photographer, come join us in capturing the extraordinary essence of determination through the lens of your camera. Let’s embark on a journey where every snapshot is a testament to the willful spirit within us all.
          </p>
        </div>
      </section>
   </>
  )
}

export default About