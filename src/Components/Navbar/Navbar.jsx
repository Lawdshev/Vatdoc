import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Vatdoc-5.png'
import '../Navbar/Navbar.css'

function Navbar() {
  const [sidebar,setSidebar] = useState(false);
   
  const toggleNavbar = () => {
    setSidebar(!sidebar)
  }

  return (
    <>
      <div className='bg-black z-[200] md:fixed top-0 left-0 right-0 md:hidden landscape:hidden '>
        <div className='absolute right-5 z-20 block top-4 bar md:hidden' onClick={toggleNavbar}>
            <i className="fa-solid fa-bars text-white text-[20px] " ></i>
        </div>
        <Link to='/' className=' w-[20%] h-[50%] md:absolute mt-[3%] md:ml-[3%] logo '>
            <img src={logo} className="w-[30%] md:w-full mt-[3.5%] md:h-full md:mt-0 absolute md:relative z-20 logo    "  />
        </Link>
      
        <div className={sidebar ? 'nav active' : 'nav'}>
            <div className='navbars'>
                <div className="navItemsDiv cursor-pointer" onClick={toggleNavbar}>
                    <a href='#about' className='navItems 3xl:text-[24px]  4xl:text-[30px]'>About</a>
                    <a href='#blog' className='navItems 3xl:text-[24px] 4xl:text-[30px]'>Blog</a>
                    <a href='#contact' className='navItems 3xl:text-[24px]  4xl:text-[30px]'>Contact</a>
                    <a href='#faq' className='navItems 3xl:text-[24px]  4xl:text-[30px]'>FAQ</a>
                </div>
                <button className='joinUsBtn  4xl:text-[30px]'>Join us</button>
            </div>
        </div>
    </div>
    {/* //md above */}
    <div className='bg-black w-[100vw] px-[5%] py-[1.5vh] xl:py-[3vh] z-[200] md:fixed top-0 left-0 right-0 largeNav hidden landscape:flex md:flex justify-between '>
        <Link to='/' className=' w-[30%] largeLogo'>
            <img src={logo} className=" "/>
        </Link>
        <div className=' md:w-[60%] xl:w-[55%] flex justify-between items-center navsLandscape '>
            <div className="navItemsDiv2 cursor-pointer w-[60%] " onClick={toggleNavbar}>
                    <a href='#about' className='navItems 3xl:text-[24px]  4xl:text-[30px]'>About</a>
                    <a href='#blog' className='navItems 3xl:text-[24px] 4xl:text-[30px]'>Blog</a>
                    <a href='#contact' className='navItems 3xl:text-[24px]  4xl:text-[30px]'>Contact</a>
                    <a href='#faq' className='navItems 3xl:text-[24px]  4xl:text-[30px]'>FAQ</a>
            </div>
            <button className='joinUsBtn2  4xl:text-[30px]'>Join us</button>
        </div>
    </div>
    </>
    
  )
}
export default Navbar;

