import React from 'react';
import Heroe from '../Components/Heroe/Heroe'
import connect from '../assets/Desktop - 7.png'
import BlogCard from '../Components/BlogCard'
import blg1 from '../assets/Component 4.png'
import blg2 from '../assets/Component 9.png'
import blg3 from '../assets/Component 10.png'
import FeaturesCard from '../Components/FeaturesCard'
import account from '../assets/Account.png'
import users from '../assets/Users.png'
import doc from '../assets/Create Document.png'
import dept from '../assets/Department.png';
import vrsn from '../assets/Versions.png';
import sec from '../assets/Security Configuration.png';
import indexStyles from '../styles/index.module.css';
import hand from '../assets/hand-using-computer.png';
import vector from '../assets/Vector6.png'
import { Link } from 'react-router-dom';
import vector5 from '../assets/Vector5.png';
import conEllipse from '../assets/conn ellipse.png';
import conEllipse2 from '../assets/conn Ellipse 2.png'
import CarouselSlide from '../Components/Slider';


const features=[
    {
        icon: account,
        header:'USER CREATION',
        text:'The module provides the portal administrator with the functionality to create a new system user. New users details are inputted in the form provided on the user creation interface.'
    },
    {
        icon: users,
        header:' MANAGE USERS',
        text:  ' Provides the portal administrator with the ability to manage registered users on the system and perform functions such as password reset.'
    },
    {
        icon: doc,
        header: 'DOCUMENT TYPE MANAGEMENT',
        text: 'Provides a common platform for dispersed Organization units and staff to communicate as regards performance management simplifies the process of defining reporting lines.'
    },
    {
        icon: dept,
        header: ' DEPARTMENT MANAGEMENT',
        text:'The module provides the portal administrator with the functionality to create a new system user. New users details are inputted in the form provided on the user creation interface.'
    },
    {
        icon: vrsn,
        header: 'VERSION CONTROL' ,
        text:'Allow users to add documents to the system and designate a document as an official record. It should also automatically assign the correct version designation.'
    },
    {
        icon: sec,
        header: 'SECURITY CONTROL',
        text:'This function controls which users have access to which information. The system allows for creation of several levels of access control and distribution.' 
    },
]

const blogs =[
    {
        img:blg1,
        head:'How VatDoc has created time management and usefulness',
        text:'Vatdoc document system',
    },
    {
        img:blg3,
        head:'How VatDoc has created time management and usefulness',
        text:'Vatdoc document system',
    },
    {
        img:blg2,
        head:'How VatDoc has created time management and usefulness',
        text: 'Vatdoc document system',
    },
]

function Index() {
  return (
    <div  >
        <Heroe/>
        {/* features */}
        <div className={`xl:h-[110vh] lg:h-[700px] md:h-[75vh]  h-auto flex mb-[5%] md:mb-[3%] xl:mb-[5%] 3xl:mb-[10%] ${indexStyles.features}`}>
            <div className='h-[80%] w-[85%] mx-auto mt-[7%] flex flex-col justify-around'>
                <div className='w-full'>
                    <h2 className='font-openSans text-[24px]  md:text-[36px] 3xl:text-[56px] 4xl:text-[74px] 5xl:text-[80px] leading-[49px] w-full md:py-[1%] font-[800] after:w-full underline underline-offset-[40%] decoration-[#04E761]'>Features Of Vatdoc</h2>
                </div>
                <div className='mt-[5%] flex flex-wrap w-full justify-between md:h-[90%] lg:h-[80%]'>
                    {
                          features.map(feature=>{
                            return <FeaturesCard {...feature}/>
                          })
                    }
                </div>
            </div>
        </div>
        
        {/* about */}
        <div className={`${indexStyles.aboutContainer} flex flex-col lg:flex-row h-[80vh] lg:h-[500px]  xl:h-[100vh]  4xl:h-[80vh] justify-between md:pr-2 lg:pr-0`} id='about'>
            <div className={`w-full lg:w-[60%] h-full flex  items-center`}>
                <div className={`w-[95%] h-[75%] relative ${indexStyles.aboutimg}`}>
                    <img src={vector} className= {`${indexStyles.vector} w-[100%] h-full `} />
                    <img src={hand} className={`${indexStyles.img} absolute bottom-0 right-0 w-[83%] border-[3px] border-[#04E761] rounded-xl h-[85%]`}/>  
                </div>  
            </div>
            <div className='xl:w-[39%] lg:w-[45%] lg:h-full xl:h-full flex items-center mb-[8%] lg:mb-0 lg:py-[3%] xl:py-0  '>
                <div className={`${indexStyles.aboutVadoc} lg:h-[50%] xl:w-[30vw] xl:h-[40%]  3xl:h-[55%] flex flex-col justify-between lg:pr-4 xl:pr-0 px-[20%] lg:px-0 `}>
                    <h2 className={` ${indexStyles.about} md:text-start font-openSans text-[24px] md:text-[36px] leading-[49px] md:leading-[55px] font-[800] underline underline-offset-[30%] decoration-[#04E761] decoration-[2px]`}>About Vatdoc</h2>
                    <p className={` ${indexStyles.aboutp} font-openSans text-[12px] md:text-[16px] font-[300] leading-[22px] h-[55%] xl:h-[40%] 2xl:h-[50%]`}>EDMS™ is a document archiving system to be used for storing scanned document and help to track retention policies defined around each documents. Throughout the application, certain features and elements are used. Understanding these features and elements will help you use the software more effectively.</p>
                    <Link to='/about' className={` ${indexStyles.aboutp} text-[#04E761] text-[16px] md:text-[18px] font-[600] leading-[22px]`}>Read more</Link>
                </div> 
            </div>
        </div>

        {/* advantages */}
        <div className={`flex flex-col-reverse lg:flex-row lg:h-[500px] xl:h-[70vh] bg-yellow-500 ${indexStyles.advantages}`}>
            <div className= {`flex h-full py-[5%] ${indexStyles.advantagesContainer}`}>
                <div className='flex flex-col w-[15%] items-center justify-around'>
                    <div className='w-[10px] h-[10px] md:w-[15px] md:h-[15px] bg-black'></div>
                    <div className='w-[10px] h-[10px] md:w-[15px] md:h-[15px] bg-black'></div>
                    <div className='w-[10px] h-[10px] md:w-[15px] md:h-[15px] bg-black'></div>
                    
                </div>
                <div className='flex flex-col  justify-around pr-[1%] '>
                    <p className='font-openSans text-[14px] leading-[18px] md:text-[20px] md:leading-[27px] font-[400] md:mt-[2.5%] mt-[3%] 3xl:text-[26px] 4xl:text-[30px] 3xl:leading-[32px] 4xl:leading-[36px]' > VatDoc allow you to capture and use the metadata <br /> appropriate for your organization.</p>
                    <p className='font-openSans text-[14px] leading-[18px] md:text-[20px] md:leading-[27px] font-[400] md:mt-[2.5%] mt-[3%] 3xl:text-[26px] 4xl:text-[30px] 3xl:leading-[32px] 4xl:leading-[36px]'>Archive all internal and external documents<br /> electronically</p>
                    <p className='font-openSans text-[14px] leading-[18px] md:text-[20px] md:leading-[27px] font-[400] md:mt-[2.5%] mt-[3%] 3xl:text-[26px] 4xl:text-[30px] 3xl:leading-[32px] 4xl:leading-[36px]'>VATDOC delivers a sensible and easy to work solution for teams and organizations… </p>
                </div> 
            </div>
            <div className={`w-full h-[40vh] lg:h-auto lg:w-[60%] ${indexStyles.advPic}`} id='desc'></div>
        </div>

        {/* comment */}
        <div  className={`h-[40vh] md:h-[30vh] border-b-[1.5px] border-b-solid border-b-[#04E761] lg:h-[400px] xl:h-[60vh] flex  w-full items-center justify-center mx-auto ${indexStyles.comment} `}>
        <div className={`h-[40vh] md:h-[30vh] lg:h-[400px] xl:h-[60vh] flex w-full items-center justify-center mx-auto ${indexStyles.commentOverlay}`}>
            <CarouselSlide/>
           <div className='h-full flex justify-around items-center text-[30px] bg-blue-600 '>
                <i className="fa-solid fa-arrow-left-long mr-[20px] text-[#BFBFBF59] cursor-pointer" ></i>
                <i className="fa-solid fa-arrow-right-long ml-[20px] text-[#1FBE54] cursor-pointer"></i>
           </div>
           <div>
           </div>
        </div>
        </div>

        {/* blog */}
        <div className=' flex flex-col items-center justify-around mt-[10vh]'  id='blog'>
            <div className='flex flex-col items-center justify-center '>
                <h3 className='text-[20px] font-[700] font-OpenSans leading-[30px]'>Blog</h3>
                <h2 className='text-[28px] md:text-[36px] font-[700] font-OpenSans leading-[50px]'>Get to know <span className='text-[#1FBE54]'>our news</span> </h2>
            </div>
            <div className='flex flex-col md:flex-row justify-around mx-auto px-[5%] mt-[5%] mb-[5%] landscape:flex-row'>
                {
                    blogs.map(blog=>{
                        return <BlogCard {...blog}/>
                    })
                }
            </div>
        </div>

        {/* Patner */}
        <div className='bg-[#C4F4D7] h-[20vh] lg:h-[100px] xl:h-[30vh] relative flex items-center justify-center landscape:h-[150px] ' >
            {/* <div className='h-[50%] w-[95%] md:w-[50%] bg-green-400 2xl:w-[20vw]  flex flex-col lg:flex-row items-center justify-around  landscape:flex-row landscape:justify-around landscape:w-[60%] lg:landscape:w-[50%] '> */}
            <div className=' h-[50%] w-full lg:w-[60%] xl:w-[40%] flex flex-col lg:flex-row items-center justify-around lg:justify-start text-center lg:ml-[10%]'>
                 <h1 className={` ${indexStyles.patnertext} text-[#142C14] w-[70%] text-[16px] md:text-[24px] font-openSans font-semibold 2xl:text-[30px] z-20 landscape:text-[20px] lg:landscape:text-[25px]`}>Want to become our partner?</h1>
                 <button className='bg-[#04E761] w-[25%] z-[15] md:w-[20%] lg:w-[25%] text-white py-[1%] 3xl:py-[2%] text-[14px] md:text-[16px] 2xl:text-[20px] font-openSans rounded-[5px] 3xl:text-[24px] 4xl:text-[28px] hover:bg-[#1FBE54]'>Contact Us</button>
            </div>
            <img src={conEllipse}  className='absolute top-0 z-10 left-[10%]'/>
            <img src={conEllipse} className='absolute top-0 z-10 right-[25%]' />
            <img src={conEllipse2} className='absolute -bottom-0 z-10 right-[5%]' />
            <img src={conEllipse2} className='absolute bottom-0 z-10 right-[50%]' />
        </div>
    </div>
  )
}

export default Index