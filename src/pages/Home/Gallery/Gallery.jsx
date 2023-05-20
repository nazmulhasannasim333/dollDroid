import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
const Gallery = () => {
  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1194025/pexels-photo-1194025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Image 1',
      title: 'Sunset on the beach',
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Image 2',
      title: 'Mountain landscape',
    },
    {
        id: 6,
        src: 'https://images.pexels.com/photos/6274714/pexels-photo-6274714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Image 4',
        title: 'Nature landscape',
      },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/3274626/pexels-photo-3274626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Image 3',
      title: 'City skyline at night',
    },
    
    {
      id: 7,
      src: 'https://images.pexels.com/photos/14646244/pexels-photo-14646244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Image 4',
      title: 'Nature landscape',
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1333304/pexels-photo-1333304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Image 5',
      title: 'Sunrise over the mountains',
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/7943932/pexels-photo-7943932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Image 6',
      title: 'Garden landscape',
    },
    {
        id: 4,
        src: 'https://images.pexels.com/photos/1340373/pexels-photo-1340373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Image 4',
        title: 'Nature landscape',
      },
      {
        id: 5,
        src: 'https://images.pexels.com/photos/5624397/pexels-photo-5624397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Image 4',
        title: 'Doll landscape',
      },
     
  ];
  useEffect(() =>{
    AOS.init();
  },[])

  return (
    <div  className="bg-[#0d1422fd] py-20 ">
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-white ">Toys Gallery</h2>
      <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <div
          data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"
            key={image.id}
            className="relative overflow-hidden rounded-lg shadow-lg"
            
          >
            <img
              className="w-full h-96 object-cover"
              src={image.src}
              alt={image.alt}
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-90 transition-opacity duration-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">{image.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default Gallery;