import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: "Andrew Smith",
    role: "One Year With Us",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.",
  },
  {
    name: "Max Makina",
    role: "One Year With Us",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.",
  },
  {
    name: "Makima Smith",
    role: "One Year With Us",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.",
  },
  {
    name: "David Clark",
    role: "Two Years With Us",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    text: "It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.",
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-white">
      {/* Heading */}
      <div className="flex flex-col items-center text-center px-6 md:px-0 mb-12 space-y-3">
        <p className="text-[#613FE5] font-medium uppercase tracking-wide">
          Clients Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-bold max-w-2xl">
          What Our Job Holders Say About Us
        </h2>
        <p className="text-gray-600 max-w-xl">
          There are many variations of passages available, but the majority
          have suffered some form of alteration by injected humour, or look even slightly believable.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="container mx-auto py-16">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-violet-50 rounded-xl p-8 flex flex-col items-center text-center shadow-md relative">
                
                {/* Avatar */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full ring-4 ring-[#613FE5] ring-offset-2 overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Quote Icon */}
                <FaQuoteLeft className="text-3xl text-[#613FE5] mt-16 mb-4" />

                {/* Name & Role */}
                <h3 className="text-lg font-bold mt-2">{t.name}</h3>
                <p className="text-[#613FE5] font-medium">{t.role}</p>

                {/* Testimonial Text */}
                <p className="text-gray-600 mt-3 text-sm">{t.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
