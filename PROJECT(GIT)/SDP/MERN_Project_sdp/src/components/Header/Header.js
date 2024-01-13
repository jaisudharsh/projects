import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/css'
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'

const Header = () => {
  return (
    <section className='container mx-auto px-8'>
      <Swiper
        slidesPerView={1}
        className='flex flex-row items-center mySwiper w-[1000px]'
        navigation={{
          nextEl: '.button-next-slide',
          prevEl: '.button-prev-slide'
        }}
        pagination={{
          clickable: true
        }}
        loop={true}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <div className='flex justify-between w-full items-center h-full'>
            <div className='w-full'>
              <h2 className='text-2xl'>WELCOME TO BANK OF BHARATH</h2>
              <p>Your trusted partner in financial solutions, delivering excellence one customer at a time.</p>
              <ul className="flex">
                <li className='flex flex-col mr-5'><span>RATE OF INTERST</span>7.5%</li>
                <li className='flex flex-col mr-5'><span>ACCOUNTS</span>SAVINGS,CURRENT,JUMBO KID</li>
                <li className='flex flex-col mr-5'><span>CELEBRATING 10 YEARS OF EXCELLENCE</span></li>
              </ul>
              <button className='bg-[#75A64D] p-2 text-white rounded-md text-sm'>order</button>
            </div>
            <img className='w-[350px] h-auto' src={require('../../assets/images/slider/slider1.webp')} alt="Sliderimg1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>  
          <div className='flex justify-between w-full items-center'>
            <div className='w-full'>
              <h2 className='text-2xl'>TYPES OF CARDS</h2>
              <ul className="flex">
                <li className='flex flex-col mr-5'><span>GOLD</span>Upto 25 benfits offered</li>
                <li className='flex flex-col mr-5'><span>PLATINUM</span>Upto 60 benfits offered</li>
                <li className='flex flex-col mr-5'><span>Credit cards</span>100+ benfits</li>
              </ul>
              <button className='bg-[#75A64D] p-2 text-white rounded-md text-sm'>order</button>
            </div>
            <img className='w-[300px] h-auto' src={require('../../assets/images/slider/slider2.webp')} alt="Sliderimg1" />
          </div>
        </SwiperSlide>

      </Swiper>
        <div className="button-prev-slide w-[50px] h-[50px] absolute top-[25%] left-[70px] z-50 bg-[#F1F4EE] hover:bg-white rounded-full cursor-pointer transition-all">
          <IoIosArrowBack className='left-2/4 top-2/4 absolute translate-y-[-50%] translate-x-[-50%] text-xl' />
        </div>
        <div className="button-next-slide w-[50px] h-[50px] absolute top-[25%] right-[70px] z-50 bg-[#F1F4EE] hover:bg-white rounded-full cursor-pointer transition-all duration-150">
          <IoIosArrowForward className='left-2/4 top-2/4 absolute translate-y-[-50%] translate-x-[-50%] text-xl' />
        </div>
    </section>
  )
}

export default Header