import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Andnew Smith",
    duration: "One Year With Us",
    text: "Joining this company was the best career decision I’ve made. The support from my team has been incredible.",
    img: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Max Makina",
    duration: "One Year With Us",
    text: "I truly appreciate the learning opportunities here. Every project challenges me and helps me grow professionally.",
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Makima Smith",
    duration: "One Year With Us",
    text: "The work culture is so positive. I feel motivated and inspired every day to give my best and improve myself.",
    img: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Sophia Turner",
    duration: "Two Years With Us",
    text: "Working with this team has been an incredible experience. The professionalism and dedication they show is unmatched.",
    img: "https://i.pravatar.cc/150?img=56",
  },
  {
    name: "James Carter",
    duration: "Six Months With Us",
    text: "The support and guidance I received here helped me grow both personally and professionally. Highly recommended!",
    img: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Emily Johnson",
    duration: "Three Years With Us",
    text: "I love being part of this community. The work culture is friendly and motivating, which makes every day enjoyable.",
    img: "https://i.pravatar.cc/150?img=48",
  },
  {
    name: "Daniel Lee",
    duration: "One and a Half Years With Us",
    text: "A fantastic place to work with opportunities to learn new things every single day. Great leadership and vision.",
    img: "https://i.pravatar.cc/150?img=33",
  },
  {
    name: "Olivia Martinez",
    duration: "Four Years With Us",
    text: "This organization truly values its people. I feel respected and appreciated, which motivates me to give my best.",
    img: "https://i.pravatar.cc/150?img=67",
  },
];


const Testimonial = () => {
  return (
    <section className="container mx-auto text-center mb-18 py-16 px-6 md:px-0">
      {/* Heading */}
      <h4 className="text-indigo-600 font-medium">Clients Testimonials</h4>
      <h2 className="text-3xl md:text-4xl font-bold my-2">
        What A Job Holder Says About Us
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-12">
        There are many variations of passages of available, but the majority
        have suffered some form, by injected humour, or look even slightly
        believable.
      </p>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev", }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        
      >
        {testimonials.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="bg-violet-50 mb-1 md:mb-8 lg:mb-2 p-6 md:h-[300px] h-[330px] rounded-2xl shadow-md hover:shadow-lg transition text-center">
              <FaQuoteLeft className="text-3xl text-purple-500 mb-4 mx-auto" />
              <p className="text-gray-600 text-sm">{item.text}</p>

              {/* Avatar + Info */}
              <div className="mt-6">
                <div className="w-20 h-20 mx-auto rounded-full ring-3 ring-purple-500 ring-offset-3 overflow-hidden">
                  <img src={item.img} alt={item.name} />
                </div>
                <h3 className="font-semibold mt-3">{item.name}</h3>
                <span className="text-indigo-600 text-sm">{item.duration}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Navigation Buttons */} 
        <div className="swiper-button-prev !bg-purple-100 !text-purple-600 rounded-full !w-12 !h-12 flex items-center justify-center shadow-md"></div> <div className="swiper-button-next !bg-purple-100 !text-purple-600 rounded-full !w-12 !h-12 flex items-center justify-center shadow-md"></div>
      </Swiper>
    </section>
  );
};

export default Testimonial;
