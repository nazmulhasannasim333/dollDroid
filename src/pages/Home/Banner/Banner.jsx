import { useState } from "react";


const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const slides = [
    {
      image: "https://images.pexels.com/photos/395563/pexels-photo-395563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Bestway Aquarium Pool Play Centre",
      description: "Get ready for summer with the Bestway Aquarium Paddling Pool Play Centre. This kids’ paddling pool ater sprayer and inflatable toys for sunny day play.",
      buttonLabel: "Buy Now",
    },
    {
      image: "https://images.pexels.com/photos/368736/pexels-photo-368736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Inch Verve Trailblaster Pink",
      description: "mountain bikes. The twist grip shifters and rear derailleur fine-tune your gear changes for steep inclines and varied terrain. This 24-inch.",
      buttonLabel: "Buy Now",
    },
    {
      image: "https://images.pexels.com/photos/65451/pexels-photo-65451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "The Legend of Zelda  Kingdom Nintendo Switch",
      description: "enhanced skills to your advantage to fend off the evil forces threatening the kingdom?.",
      buttonLabel: "Buy Now",
    },
  ];

  const handleSlideChange = (index) => {
    setActiveSlide(index + 1);
  };

  return (
    <div  className="relative w-full h-96 lg:h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full ${
            index === activeSlide - 1 ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
        >
          <div className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 w-full p-8 bg-black bg-opacity-60 h-full">
              <div className="max-w-6xl mx-auto lg:mt-56">
              <div className="lg:w-1/2">
              <h2 className="lg:text-6xl text-3xl font-bold text-white">{slide.title}</h2>
              <p className="mt-4 lg:text-xl text-lg text-white">{slide.description}</p>
              <a
                href={slide.buttonUrl}
                className="inline-block px-6 py-3 mt-6 font-semibold text-white bg-indigo-700 rounded-md hover:bg-blue-600"
              >
                {slide.buttonLabel}
              </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50">
        <ul className="flex justify-center">
          {slides.map((slide, index) => (
            <li
              key={index}
              className={`mx-1 h-4 w-4 rounded-full cursor-pointer ${
                index === activeSlide - 1 ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => handleSlideChange(index)}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Banner;