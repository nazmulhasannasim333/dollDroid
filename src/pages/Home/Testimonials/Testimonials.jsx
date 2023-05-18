import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';


const testimonials = [
    {
      name: 'Md Nasim Hosen',
      passion: 'Web Developer',
      image: 'https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1600',
      text:
        'onsectetur adipiscing elit. Vivamus vel fringilla velit, non convallis nisi. Aliquam erat volutpat. Sed vestibulum ipsum non sapien maximus, in mattis est scelerisque.',
    },
    {
      name: 'Md Shuvo Islam',
      passion: 'Graphic Designer',
      image: 'https://images.pexels.com/photos/3780030/pexels-photo-3780030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text:
        'Phasellus vulputate, velit eu pretium iaculis, libero turpis semper sapien, eget lacinia elit nisi vel massa. Etiam ut dolor . Sed vestibulum ipsum non sapien maximus, in mattis est scelerisque.',
    },
    {
      name: 'Md Nahid Khan',
      passion: 'Video Editor',
      image: 'https://images.pexels.com/photos/16669334/pexels-photo-16669334.jpeg?auto=compress&cs=tinysrgb&w=1600',
      text:
        'Phasellus vulputate, velit eu pretium iaculis, libero turpis semper sapien, eget lacinia elit nisi vel massa. Etiam ut dolor ante. Aliquam erat volutpat. Sed vestibulum ipsum non sapien maximus, in mattis est scelerisque.',
    },
    // add more testimonials as needed
  ];

const Testimonials = () => {

  useEffect(() =>{
    AOS.init();
  },[])
    return (
        <>
        <div className="line w-full h-[1px] absolute left-0 opacity-20 md-[6px] bg-[#6b6b6b]"></div> 
        <div style={{backgroundColor: "rgb(15 23 42/var(--tw-bg-opacity))"}} className="bg-purple-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-indigo-500 font-semibold tracking-wide uppercase">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              What our customers are saying
            </p>
          </div>
  
          <div className="mt-14 ">
            <div className="max-w-5xl mx-auto space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                  key={index}
                  className="bg-slate-700 overflow-hidden shadow rounded-lg divide-y divide-gray-200"
                >
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-12 w-12 rounded-full"
                          src={testimonial.image}
                          alt={`${testimonial.name} profile`}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-medium text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-400">{testimonial.passion}</div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="relative text-lg leading-7 font-medium text-slate-100">
                        <span className="absolute top-0 left-0 -mt-3 -ml-3 h-8 w-8 text-gray-400" />
                        <span className="relative">{testimonial.text}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        </>
       
    );
};

export default Testimonials;