import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SlCalender } from 'react-icons/sl';


const blogs=[
    {
        image: "/src/assets/about-us.jpg",
        calendar: "September 18, 2023",
        title: "Do you have a job that the average person doesn even know exits?",
        descriptions: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, aliquam! Magni, dolorum.",
        btn: "Read More"
    },
    {
        image: "/src/assets/about-us.jpg",
        calendar: "September 18, 2023",
        title: "Do you have a job that the average person doesn even know exits?",
        descriptions: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, aliquam! Magni, dolorum.",
        btn: "Read More"
    },
    {
        image: "/src/assets/about-us.jpg",
        calendar: "September 18, 2023",
        title: "Do you have a job that the average person doesn even know exits?",
        descriptions: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, aliquam! Magni, dolorum.",
        btn: "Read More"
    },
    {
        image: "/src/assets/about-us.jpg",
        calendar: "September 18, 2023",
        title: "Do you have a job that the average person doesn even know exits?",
        descriptions: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, aliquam! Magni, dolorum.",
        btn: "Read More"
    },
    {
        image: "/src/assets/about-us.jpg",
        calendar: "September 18, 2023",
        title: "Do you have a job that the average person doesn even know exits?",
        descriptions: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, aliquam! Magni, dolorum.",
        btn: "Read More"
    },
]

const Blogs = () => {
    return (
        <div className='container mx-auto py-12 px-6 md:px-0'>
            <div className='text-center space-y-3 mb-8'>
                <h1 className='text-2xl font-bold'>Our Latest Blog</h1>
                <p className='text-gray-500 max-w-xl mx-auto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
            </div>
            {/* swiper use */}

            <Swiper modules={[Navigation,Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000 }} 
            breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
            >
                {
                    blogs.map((blog, index)=>
                        <SwiperSlide key={index}>
                            <div className="card mb-1 md:mb-8 lg:mb-2 w-full shadow-sm">
                <figure>
                  <img
                    src={blog.image}
                    alt="Work" />
                </figure>
                <div className="card-body">
                    <strong className='flex items-center gap-2'><SlCalender />{blog.calendar}</strong>
                  <h2 className="card-title">{blog.title}</h2>
                  <p>{blog.descriptions}</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">{blog.btn}</button>
                  </div>
                </div>
              </div>
                        </SwiperSlide>
                    )
                }

            </Swiper>
        </div>
    );
};

export default Blogs;