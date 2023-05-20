import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const SuccessStory = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="line w-full h-[1px] absolute left-0 opacity-20 md-[6px] bg-[#6b6b6b]"></div>
      <div className="bg-[#0d1422fd] py-20">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-indigo-500 font-semibold tracking-wide uppercase">
              Our Latest News
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Elements of an Effective Success Story
            </p>
          </div>
          <div className="mt-14">
            <div className=" space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
              <div
                className="text-white"
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img
                  className="h-52 w-full rounded-lg mb-5"
                  src="https://i.ibb.co/f17t0fR/image1.jpg"
                  alt=""
                />
                <span className="text-red-400">February 11, 2023</span>
                <p className="text-2xl font-semibold my-3">
                  Race ahead on the 24 Verve Trailblaster Pink Mountain Bike
                </p>
                <span className="text-blue-500">read more {">>"}</span>
              </div>
              <div
                className="text-white"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img
                  className="h-52 w-full rounded-lg mb-5"
                  src="https://i.ibb.co/RBxqzsf/image2.jpg"
                  alt=""
                />
                <span className="text-red-400">March 14, 2023</span>
                <p className="text-2xl font-semibold my-3">
                  The kickstand lets you keep your mountain bike upright
                  wherever you go.
                </p>
                <span className="text-blue-500">read more {">>"}</span>
              </div>
              <div
                className="text-white "
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img
                  className="h-52 w-full rounded-lg mb-5"
                  src="https://i.ibb.co/17QDfN0/image3.jpg"
                  alt=""
                />
                <span className="text-red-400">January 21, 2023</span>
                <p className="text-2xl font-semibold my-3">
                  Tears of the Kingdom, The Legend of Zelda: Breath of the Wild.
                </p>
                <span className="text-blue-500">read more {">>"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStory;
