import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import slide1 from "../../assets/slide-1.jpg";
import slide2 from "../../assets/slide-2.jpg";
import slide3 from "../../assets/slide-6.jpg";
import slide4 from "../../assets/slide-4.jpg";
import "swiper/css";
import { useState } from "react";
import Loading from "../loading/Loading";
import { Fade } from "react-awesome-reveal";

const Slider = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sliderDetails = [
    {
      image: slide1,
      title: "Find Your Perfect Roommate",
      description:
        "Easily filter roommate listings by city or neighborhood. Find someone living just around the corner.",
    },
    {
      image: slide2,
      title: "Connect and Communicate",
      description:
        "Use our built-in chat system to talk with potential roommates and make informed decisions before moving in.",
    },
    {
      image: slide3,
      title: "Roommates Near Your Location",
      description:
        "Easily filter roommate listings by city or neighborhood. Find someone living just around the corner.",
    },
    {
      image: slide4,
      title: "List Your Room in Minutes",
      description:
        "Got a spare room? Post your listing quickly and find the right roommate—fast, easy, and secure.",
    },
  ];

  return (
    <>
      {isLoading && <Loading />}
      <Swiper
        className="mySwiper h-[70vh] max-h-[620px]"
        modules={[Autoplay]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {sliderDetails?.map((item, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={item.image}
              alt={`Slide ${index + 1}`}
              onLoad={() => setIsLoading(false)}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute flex flex-col items-center justify-center text-center top-0 left-0 bg-[rgba(0,0,0,0.5)] h-full w-full z-10 px-4">
              <Fade cascade damping={0.3} triggerOnce={false}>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-primaryFont">
                  {item.title}
                </h1>
                <p className="text-gray-300 text-lg md:text-xl max-w-3xl">
                  {item.description}
                </p>
              </Fade>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
