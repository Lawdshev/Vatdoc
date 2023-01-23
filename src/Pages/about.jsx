import React from 'react';
import AboutUs from '../Components/AboutUs/AboutUs';
import AboutHero from '../Components/AboutHero/AboutHero';
import conEllipse from '../assets/conn ellipse.png';
import conEllipse2 from '../assets/conn Ellipse 2.png'

function About() {
  return (
    <div>
        <AboutHero/>
        <AboutUs/>
        {/* connect */}
        <div className='bg-[#C4F4D7] h-[30vh] lg:h-[20vh] xl:h-[25vh] relative flex items-center '>
            <div className='lg:ml-[33%] h-[50%] w-full lg:w-[70%] xl:w-[50%] flex flex-col lg:flex-row items-center justify-around lg:justify-start text-center lg:text-start'>
                 <h1 className='text-[#142C14] text-[16px] md:text-[24px] w-[55%] font-openSans font-semibold leading-[33px] 2xl:text-[28px] 3xl:text-[32px] 4xl:text-[36px] z-10'>Connect With us. We are ready to partner with you</h1>
                 <button className='bg-[#04E761] w-[25%] text-white py-[2%] text-[14px] md:text-[16px] 2xl:text-[20px] font-openSans rounded-[5px] 3xl:text-[24px] 4xl:text-[28px] hover:bg-[#1FBE54] z-20 '>Contact Us</button>
            </div>
            <img src={conEllipse}  className='absolute top-0 left-[10%] '/>
            <img src={conEllipse} className='absolute top-0 right-[32%]' />
            <img src={conEllipse2} className='absolute bottom-0 right-[10%]' />
            <img src={conEllipse2} className='absolute bottom-0 right-[50%]' />
        </div>
    </div>
  )
}

export default About