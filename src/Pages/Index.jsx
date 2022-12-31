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
        <div className='xl:h-[110vh] lg:h-[60vh] md:h-[75vh] h-auto flex mb-[5%] md:mb-[3%] xl:mb-[5%] 3xl:mb-[10%]'>
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
        <div className={`${indexStyles.aboutContainer} flex flex-col lg:flex-row h-[80vh] lg:h-[50vh]  xl:h-[100vh]  4xl:h-[80vh] justify-between md:pr-2 lg:pr-0`}>
            <div className='w-full lg:w-[60%] h-full flex items-center '>
                <div className='  w-[95%] h-[75%] relative'>
                    <img src={vector} className= {`${indexStyles.vector} w-[100%] h-full `} />
                    <img src={hand} className={`${indexStyles.img} absolute bottom-0 right-0 w-[83%] border-[3px] border-[#04E761] rounded-xl h-[85%]`}/>  
                </div>  
            </div>


            <div className='xl:w-[39%] lg:w-[45%] lg:h-full xl:h-full flex items-center mb-[8%] lg:mb-0 lg:py-[3%] xl:py-0  '>
                <div className={`${indexStyles.aboutVadoc}  lg:h-[50%] xl:w-[30.5vw] xl:h-[45%] flex flex-col justify-between lg:pr-4 xl:pr-0 px-[20%] lg:px-0 `}>
                    <h2 className=' md:text-start font-openSans text-[24px] md:text-[36px] leading-[49px] md:leading-[55px] 3xl:text-[42px] 4xl:text-[48px] 3xl:leading-[55px] 4xl:leading-[60px]  font-[800] underline underline-offset-[30%] decoration-[#04E761] decoration-[2px] '>About Vatdoc</h2>
                    <p className='font-openSans text-[12px] md:text-[16px] font-[300] leading-[22px] 3xl:text-[28px] 4xl:text-[32px] 3xl:leading-[30px] 4xl:leading-[45px] h-[55%] '>EDMS™ is a document archiving system to be used for storing scanned document and help to track retention policies defined around each documents. Throughout the application, certain features and elements are used. Understanding these features and elements will help you use the software more effectively.</p>
                    <Link className='text-[#04E761] text-[16px] md:text-[18px] font-[600] 3xl:text-[24px] 4xl:text-[28px] 3xl:leading-[26px] 4xl:leading-[30px] leading-[22px] '>Read more</Link>
                </div>  
            </div>
        </div>

        {/* advantages */}
        <div className='flex flex-col-reverse lg:flex-row lg:h-[35vh] xl:h-[70vh] '>
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
            <div className='w-full h-[40vh] lg:h-auto lg:w-[60%]' id='desc'></div>
        </div>

       
        {/* comment */}
        <div  className={`h-[40vh] md:h-[30vh] xl:h-[60vh] flex  w-full items-center justify-center mx-auto ${indexStyles.comment} `}>
        <div className={`h-[40vh] md:h-[30vh] xl:h-[60vh] flex w-full items-center justify-center mx-auto ${indexStyles.commentOverlay} `}>
           <div className='flex flex-col lg:w-[55%] h-[80%] md:h-[60%] xl:h-[80%] xl:w-[65%] justify-between '>
                <div>
                    <img src={vector5} className='2xl:w-[7%]' />
                </div>
                <div className='h-[70%] md:h-[80%] flex flex-col justify-between mx-auto'>
                    <p className='mt-[1%] px-2 self-center italic text-[16px] xl:w-[90%] xl:h-[80%] md:text-[20px] font-[400] md:leading-[27px] xl:leading-[40px] font-openSans 2xl:text-[28px] 2xl:leading-[56px] 3xl:text-[33px] 3xl:leading-[60px] 4xl:text-[43px] 4xl:leading-[80px] 5xl:text-[48px] 5xl:leading-[90px]'>
                        With VatDoc we have been able to manage all our workflow with regards to <br /> documents, most especially the archiving of documents that could <br /> ordinarily be lost if paper-archived. 
                    </p>
                    <p className='text-[#1FBE54] mt-[3%] text-center font-openSans font-[700] text-[20px] leading-[27px] 2xl:text-[28px] 2xl:leading-[56px] 3xl:text-[26px] 3xl:leading-[60px] 4xl:text-[36px] 4xl:leading-[70px] xl:h-[20%]  5xl:text-[40px] 5xl:leading-[80px]'>- Sunny Ikegbulam </p>
                </div>
           </div>
           <div>
           </div>
        </div>
        </div>

        {/* blog */}
        <div className=' flex flex-col items-center justify-around mt-8'>
            <div className='flex flex-col items-center justify-center '>
                <h3 className='text-[20px] font-[700] font-OpenSans leading-[30px]'>Blog</h3>
                <h2 className='text-[28px] md:text-[36px] font-[700] font-OpenSans leading-[50px]'>Get to know <span className='text-[#1FBE54]'>our news</span> </h2>
            </div>
            <div className='flex flex-col md:flex-row justify-around mx-auto px-[5%] mt-[5%] mb-[5%]'>
                {
                    blogs.map(blog=>{
                        return <BlogCard {...blog}/>
                    })
                }
            </div>
        </div>

        {/* Patner */}
        <div className='bg-[#C4F4D7] h-[20vh] xl:h-[30vh] relative flex items-center justify-center '>
            <div className='h-[50%] w-[95%] md:w-[70%] xl:w-[40%] 2xl:w-[50%]  flex flex-col lg:flex-row items-center justify-around'>
                 <h1 className='text-[#142C14] w-[70%] text-[16px] md:text-[24px] font-openSans font-semibold 2xl:text-[30px] 3xl:text-[40px] 4xl:text-[50px]'>Want to become our partner?</h1>
                 <button className='bg-[#04E761] w-[25%] text-white py-[2%] text-[14px] md:text-[16px] 2xl:text-[20px] font-openSans rounded-[5px] 3xl:text-[24px] 4xl:text-[28px]'>Contact Us</button>
            </div>
            <img src={conEllipse}  className='absolute top-0 -z-10 left-[10%]'/>
            <img src={conEllipse} className='absolute top-0 -z-10 right-[10%]' />
            <img src={conEllipse2} className='absolute bottom-0 -z-10 right-[10%]' />
            <img src={conEllipse2} className='absolute bottom-0 -z-10 right-[50%]' />
        </div>
    </div>
  )
}

export default Index