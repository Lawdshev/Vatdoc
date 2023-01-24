import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import vector5 from '../assets/Vector5.png';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items:1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items:1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
function CarouselSlide  ({slideref}) {
  
  
    return (
        <Carousel 
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={false}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        autoPlay={false}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all "
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", 'desktop']}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px" 
       className=" w-[100%] lg:w-[55%] h-[80%] md:h-[60%] xl:h-[80%] xl:w-[65%] px-[1%]"
       ref={slideref}
       >
           <div className=" h-[100%] w-full" >
                <div>
                    <img src={vector5} className='2xl:w-[7%]'/>
                </div>
                <div className='h-[70%] md:h-[80%] flex flex-col justify-between mx-auto'>
                    <p className=' mt-[1%] px-2 self-center italic text-[16px] md:w-[80%] xl:w-[70%] xl:h-[80%] md:text-[20px] font-[400] md:leading-[27px] xl:leading-[40px] font-openSans 2xl:text-[28px] 2xl:leading-[56px] 3xl:text-[33px] 3xl:leading-[60px] 4xl:text-[43px] 4xl:leading-[80px] 5xl:text-[48px] 5xl:leading-[90px]'>
                        With VatDoc we have been able to manage all our workflow with regards to documents, most especially the archiving of documents that could ordinarily be lost if paper-archived. 
                    </p>
                    <p className='text-[#1FBE54] mt-[8%] text-center font-openSans font-[700] text-[20px] leading-[27px] 2xl:text-[28px] 2xl:leading-[56px] 3xl:text-[26px] 3xl:leading-[60px] 4xl:text-[36px] 4xl:leading-[70px] xl:h-[20%]  5xl:text-[40px] 5xl:leading-[80px]'>- Sunny Ikegbulam </p>
                </div>
           </div>
          
           <div className=" h-[100%] w-full" >
                <div>
                    <img src={vector5} className='2xl:w-[7%]'/>
                </div>
                <div className='h-[70%] md:h-[80%] flex flex-col justify-between mx-auto'>
                    <p className=' mt-[1%] px-2 self-center italic text-[16px] md:w-[80%] xl:w-[70%] xl:h-[80%] md:text-[20px] font-[400] md:leading-[27px] xl:leading-[40px] font-openSans 2xl:text-[28px] 2xl:leading-[56px] 3xl:text-[33px] 3xl:leading-[60px] 4xl:text-[43px] 4xl:leading-[80px] 5xl:text-[48px] 5xl:leading-[90px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, minus reprehenderit? Assumenda doloremque voluptates sequi earum ipsam quis possimus iusto est fugiat, ullam, maxime voluptatem deleniti beatae ratione quidem eveniet?
                    </p>
                    <p className='text-[#1FBE54] mt-[8%] text-center font-openSans font-[700] text-[20px] leading-[27px] 2xl:text-[28px] 2xl:leading-[56px] 3xl:text-[26px] 3xl:leading-[60px] 4xl:text-[36px] 4xl:leading-[70px] xl:h-[20%]  5xl:text-[40px] 5xl:leading-[80px]'>- sheevo lee</p>
                </div>
           </div>

           <div className=" h-[100%] w-full" >
                <div>
                    <img src={vector5} className='2xl:w-[7%]'/>
                </div>
                <div className='h-[70%] md:h-[80%] flex flex-col justify-between mx-auto'>
                    <p className=' mt-[1%] px-2 self-center italic text-[16px] md:w-[80%] xl:w-[70%] xl:h-[80%] md:text-[20px] font-[400] md:leading-[27px] xl:leading-[40px] font-openSans 2xl:text-[28px] 2xl:leading-[56px] 3xl:text-[33px] 3xl:leading-[60px] 4xl:text-[43px] 4xl:leading-[80px] 5xl:text-[48px] 5xl:leading-[90px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, minus reprehenderit? Assumenda doloremque voluptates sequi earum ipsam quis possimus iusto est fugiat, ullam, maxime voluptatem deleniti beatae ratione quidem eveniet?
                    </p>
                    <p className='text-[#1FBE54] mt-[8%] text-center font-openSans font-[700] text-[20px] leading-[27px] 2xl:text-[28px] 2xl:leading-[56px] 3xl:text-[26px] 3xl:leading-[60px] 4xl:text-[36px] 4xl:leading-[70px] xl:h-[20%]  5xl:text-[40px] 5xl:leading-[80px]'>-Rash eleyi</p>
                </div>
           </div>
          
        </Carousel>
    )
}

export default CarouselSlide;