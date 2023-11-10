import { Dispatch, RefObject, SetStateAction, useState, } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ArvoIcon from '../../images/svg/ArvoIcon';
import NavIcon from "./navicons.svg"
import { ClickOutside } from '../ClickOutside/ClickOutside';
import useWindowDimensions from '../../hooks/useWindowDimensions';
// import { useWindowDimensions } from 'arvara-pckage';



interface NavBarProps {
  whyavro: RefObject<HTMLDivElement> | any
  scrollToSection: (n: RefObject<HTMLDivElement> | any) => void,
  contact: RefObject<HTMLDivElement> | any
  product: RefObject<HTMLDivElement> | any
  faqs: RefObject<HTMLDivElement> | any
  nav: boolean
  setNav: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({ whyavro, scrollToSection, contact, nav, setNav }: NavBarProps) => {
  const [productOpen, setProductOpen] = useState(false)
  const navigate = useNavigate()
  const { width } = useWindowDimensions()

  const handleNav = () => {
    setNav(prev => !prev)
  };

  return (
    <div ref={whyavro} className=''>
      <div className='px-5 pt-5 flex flex-wrap items-center justify-between mx-auto max-w-[1350px]'>
        <div className=' md:flex items-center justify-between '>
          <Link to="/"><h1 className='text-3xl font-bold mr-4'>
            <ArvoIcon />
            </h1></Link>

          <div className=' items-center hidelogin lg:flex'>
            <Link to="/" onClick={() => scrollToSection(whyavro)} className='px-4 text-sm flex cursor-pointer'>Why Arvo Payroll</Link>
            <div>
            {/* <Link to="" onClick={() => setProductOpen(prev => !prev)} className='cursor-pointer px-4 text-sm flex items-center'>Products  {" "}  &nbsp;<span className="f"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9995 16.8C11.2995 16.8 10.5995 16.53 10.0695 16L3.54953 9.48C3.25953 9.19 3.25953 8.71 3.54953 8.42C3.83953 8.13 4.31953 8.13 4.60953 8.42L11.1295 14.94C11.6095 15.42 12.3895 15.42 12.8695 14.94L19.3895 8.42C19.6795 8.13 20.1595 8.13 20.4495 8.42C20.7395 8.71 20.7395 9.19 20.4495 9.48L13.9295 16C13.3995 16.53 12.6995 16.8 11.9995 16.8Z" fill="#141C1F" />
            </svg>
            </span></Link> */}
            <ClickOutside onclickoutside={() => setProductOpen(false)} className={` text-black`} >
              {productOpen && <>
                <div className="fdropdown__content absolute  bg-white shadow-xl m-4 p-2 z-50">
                    <div className="cursor-pointer flex items-center gap-2 p-4 text-sm hover:bg-[#F0FAFE] rounded-lg w-full">Wallet (Coming Soon)</div>

                    <div onClick={() => navigate('/fast-cash')} className="cursor-pointer flex items-center gap-2 p-4 text-sm hover:bg-[#F0FAFE] rounded-lg w-full">Fastcast</div>

                    <div onClick={() => navigate('/fedpay')} className="cursor-pointer flex items-center gap-2 p-4 text-sm hover:bg-[#F0FAFE] rounded-lg w-full">Fedpay</div>

                    {/* <div className="cursor-pointer flex items-center gap-2 p-4 text-sm hover:bg-[#F0FAFE] rounded-lg w-full">Small & Medium Enterprises (SMEs)</div> */}

                </div>
              </>}
            </ClickOutside>

            </div>
            {/* <Link to="faqs" className='cursor-pointer px-4 text-sm flex'>FAQs</Link> */}
            {/* <Link to="" onClick={() => scrollToSection(whyavro)} className='cursor-pointer px-4 text-sm flex'>Blog</Link> */}
            <Link to="" onClick={() => scrollToSection(contact)} className='cursor-pointer px-4 text-sm flex'>Contact Us</Link>


          </div>
        </div>
        <div className=' items-center flex gap-1'>
          <div className='hidelogin lg:flex gap-4 text-base font-bold'>
            <button  onClick={() =>  window.location.href = `https://dashboard.arvopayroll.com/`} className='bg-white border-[#065373] border-2 p-3 px-7 rounded-xl text-[#065373]'>Sign In</button>
            <button  onClick={() =>  window.location.href = `https://dashboard.arvopayroll.com/`} className="bg-[#065373] p-3 px-12 rounded-xl text-white">Create Account</button>
          </div>

          <div onClick={handleNav} className='block lg:hidden text-black cursor-pointer'>

            {!nav ? <img src={NavIcon} alt="NavIcon" /> : <img src={NavIcon} alt="NavIcon" />}

          </div>
        </div>


        <ClickOutside onclickoutside={() => setNav(true)} className={(!nav && (width <= 1024)) ? 'fixed left-0 top-0 w-full border-r border-r-gray-300 bg-[#fff] ease-in-out duration-500 shadow-lg z-50' : 'ease-in-out duration-500 fixed top-[-100%]'}>
          <div className='flex flex-col justify-center items-center w-full p-6'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>
              <ArvoIcon />
              </h1>
            <p className='p-4 cursor-pointer mb-4' onClick={() => {
              scrollToSection(whyavro)
              handleNav()
            }}>Why Arvo Payroll</p>
            {/* <p className='p-4 cursor-pointer mb-4' onClick={() => {
              scrollToSection(whyavro)
              handleNav()
            }}>Products</p> */}
            {/* <p className='p-4 cursor-pointer mb-4'><Link to="" onClick={() => {
              scrollToSection(faqs)
              handleNav()
            }}>FAQs</Link></p> */}
            {/* <p className='p-4 cursor-pointer mb-4'><Link to="/faqs" onClick={() => handleNav() }>Blogs</Link></p> */}
            <p className='p-4 cursor-pointer mb-4' onClick={() => {
              scrollToSection(contact)
              handleNav()
            }}>Contact Us</p>

            <button  onClick={() =>  window.location.href = `https://dashboard.arvopayroll.com/`} className="p-5 px-12 text-black mb-5 rounded-2xl border-2 border-black w-full">Login</button>
            <button  onClick={() =>  window.location.href = `https://dashboard.arvopayroll.com/`} className="bg-black p-5 px-12 rounded-2xl text-white mb-5 w-full">Create Account</button>

          </div>
        </ClickOutside>
      </div>
    </div>
  );
};

export default Navbar;


