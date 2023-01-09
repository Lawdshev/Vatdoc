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
    <div className='bg-black z-[200] md:fixed top-0 left-0 right-0 '>
    <div className='absolute right-5 z-20 block top-4 bar md:hidden' onClick={toggleNavbar}>
        <i className="fa-solid fa-bars text-white text-[20px] " ></i>
    </div>
    <Link to='/' className='bg-white w-[20%] h-full logo'>
        <img src={logo} className="w-[30%] mt-[3.5%] md:mt-0 absolute md:top-[25%] xl:top-[19%] z-20 md:w-[20%] lg:w-[16%] ml-[3.5%] logo 2xl:w-[10%]"  />
    </Link>
    <div className={sidebar ? 'nav active' : 'nav'}>
        <div className='navbars'>
            <div className="navItemsDiv cursor-pointer" onClick={toggleNavbar}>
                <Link to='/about' className='navItems 3xl:text-[24px]  4xl:text-[30px]'>About</Link>
                <p className='navItems 3xl:text-[24px] 4xl:text-[30px]'>Blog</p>
                <p className='navItems 3xl:text-[24px]  4xl:text-[30px]'>Contact</p>
                <p className='navItems 3xl:text-[24px]  4xl:text-[30px]'>FAQ</p>
            </div>
            <button className='joinUsBtn  4xl:text-[30px]'>Join us</button>
        </div>
    </div>
    </div>
  )
}
export default Navbar;

