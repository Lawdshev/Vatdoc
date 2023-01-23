import React from 'react';
import img from '../../assets/people-carrying-something.png';
import indexStyles from '../../styles/index.module.css'

function AboutUs() {
  return (
    <div className={`flex flex-col mt-[20%] mb-[10%] lg:mb-[5%] xl:mt-[20%] xl:mb-[10vh] justify-between h-[650px] md:h-[700px] lg:h-[600px] xl:h-[100vh] lg:flex-row xl:pr-8 ${indexStyles.AboutUsDiv}`}>
        <div className='relative  md:right-[15vh] lg:w-[40%] xl:w-[50%] h-[45%] xl:h-[90%] md:h-[40%] xl:mt-[5%] lg:mt-[10%]'>
            <div className='bg-[#C4F4D7] right-[2vh] lg:-right-[13vh] xl:-right-[15vh] xl:-top-[3vh] absolute h-[256px] w-[240px] xl:w-[40%] xl:h-[40%] 2xl:w-[40%] 2xl:h-[40%] rounded-tr-[10px] rounded-br-[10px]'></div>
            <img src={img} className='absolute bg-white w-4/5 top-[4vh] lg:top-[3vh] xl:top-[4vh] lg:left-[15vh] xl:left-[20vh] right-[5vh] md:w-[400px] lg:w-[350px] xl:w-[85%] x'/>
        </div>
        <div className='flex flex-col md:px-8 px-4 h-[60%] md:h-[48%] lg:w-[60%] xl:w-[50%] lg:h-[70%] xl:h-[70%] 3xl:h-[60%] landscape:h-[30%]'>
          <div className='flex flex-col'>
            <h3 className='font-bold font-openSans text-[#142C14] text-[16px] md:text-[24px] lg:text-[28px] self-center leading-[24px] md:leading-[32px] mt-[3%] 2xl:text-[38px] 2xl:leading-[150%] 4xl:text-[46px]'>ABOUT US</h3>
            <h1 className='text-[#142C14] font-bold font-openSans text-[24px] md:text-[38px] xl:text-[40px] leading-[30px] md:leading-[40px] xl:leading-[54px] mt-[3%] md:mt-[1%] text-center lg:text-start 2xl:text-[50px] 2xl:leading-[160%] 3xl:tex'>Overview Of Our <span className='text-[#1FBE54]'> Product </span></h1>
          </div>
          <p className='text-[15px] md:text-[18px] lg:text-[20px] md:leading-[27px] font-openSans font-normal leading-[21px] 2xl:text-[28px] 2xl:leading-[160%] 3xl:text-[34px] 4xl:text-[38px]  mt-[5%]'>EDMS™ is a document archiving system to be used for storing scanned document and help to track retention policies defined around each documents. Throughout the application, certain features and elements are used. Understanding these features and elements will help you use the software more effectively.</p> 
          <p className='text-[15px] md:text-[18px] lg:text-[20px] md:leading-[27px] font-openSans font-normal leading-[21px] 2xl:text-[28px] 2xl:leading-[150%] 3xl:text-[34px] 4xl:text-[38px] mt-[5%]'>VatDoc is a software program that manages the creation, storage and control of documents electronically. The primary function of our EDMS helps small, medium or large organization to manage electronic information within their workflow.</p>
        </div>
    </div> 
  )
}
export default AboutUs;