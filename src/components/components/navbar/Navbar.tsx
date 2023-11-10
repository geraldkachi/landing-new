import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { ClickOutside } from '../../ClickOutside/ClickOutside';

const Navbar = () => {
    const navigate = useNavigate()
    const { width } = useWindowDimensions()
    const [nav, setNav] = useState<boolean>(true);
    // const [productOpen, setProductOpen] = useState(false)

  return (
    <div  className='bg-[#001027]'>
    <div className='px-5 py-5 flex flex-wrap items-center justify-between mx-auto max-w-[1350px]'>
      <div className=' md:flex items-center justify-between '>
        <Link to="/"><h1 className='text-3xl font-normal text-white'></h1></Link>

        {/* <div className=' items-center hidelogin lg:flex'>
                      <Link to="/" onClick={() =>
                        //   scrollToSection(whyavro)
                          null
                      } className='px-4 text-sm flex cursor-pointer'>Why Arvo?</Link>
          <div>
          <Link to="" onClick={() => setProductOpen(prev => !prev)} className='cursor-pointer px-4 text-sm flex items-center'>Products  {" "}  &nbsp;<span className="f"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9995 16.8C11.2995 16.8 10.5995 16.53 10.0695 16L3.54953 9.48C3.25953 9.19 3.25953 8.71 3.54953 8.42C3.83953 8.13 4.31953 8.13 4.60953 8.42L11.1295 14.94C11.6095 15.42 12.3895 15.42 12.8695 14.94L19.3895 8.42C19.6795 8.13 20.1595 8.13 20.4495 8.42C20.7395 8.71 20.7395 9.19 20.4495 9.48L13.9295 16C13.3995 16.53 12.6995 16.8 11.9995 16.8Z" fill="#141C1F" />
          </svg>
          </span></Link>
          <ClickOutside onclickoutside={() => setProductOpen(false)} className={` text-black`} >
            {productOpen && <>
              <div className="fdropdown__content absolute  bg-white shadow-xl m-4 p-2 z-50">
                  <div className="cursor-pointer flex items-center gap-2 p-4 text-sm hover:bg-[#F0FAFE] rounded-lg w-full">Wallet</div>

                  <div onClick={() => navigate('/fast-cash')} className="cursor-pointer flex items-center gap-2 p-4 text-sm hover:bg-[#F0FAFE] rounded-lg w-full">Fastcast</div>

                  <div onClick={() => navigate('/fedpay')} className="cursor-pointer flex items-center gap-2 p-4 text-sm hover:bg-[#F0FAFE] rounded-lg w-full">Fedpay</div>

                  <div className="cursor-pointer flex items-center gap-2 p-4 text-sm hover:bg-[#F0FAFE] rounded-lg w-full">Small & Medium Enterprises (SMEs)</div>

              </div>
            </>}
          </ClickOutside>

          </div>
          <Link to="faqs" className='cursor-pointer px-4 text-sm flex'>FAQs</Link>
                      <Link to="" onClick={() => null
                        //   scrollToSection(whyavro)
                      } className='cursor-pointer px-4 text-sm flex'>Blog</Link>
                      <Link to="" onClick={() => null
                        //   scrollToSection(contact)
                      } className='cursor-pointer px-4 text-sm flex'>Contact Us</Link>


        </div> */}
      </div>
      <div className=' items-center flex gap-1'>
        <div className='hidden lg:flex gap-8 text-xl font-normal text-white'>
          <button onClick={() => navigate('/login')} className=''>News</button>
          <button onClick={() => navigate('/register')} className="bg">Forms</button>
          <button onClick={() =>  window.location.href = `https://dashboard.arvopayroll.com/`} className="bg">Login</button>
          <button onClick={() =>  window.location.href = `https://dashboard.arvopayroll.com/`} className="text-[#9E7F56]">Sign up</button>
        </div>

        <div onClick={() => setNav(prev => !prev)} className='block lg:hidden text-black cursor-pointer'>
          {!nav ? <img src={''} alt="NavIcon" /> : <img src={''} alt="NavIcon" />}

        </div>
      </div>


      <ClickOutside onclickoutside={() => setNav(true)} className={(!nav && (width <= 1024)) ? 'fixed left-0 top-0 w-full border-r border-r-gray-300 bg-[#fff] ease-in-out duration-500 shadow-lg z-50' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <div className='flex flex-col justify-center items-center w-full p-6'>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>LATC</h1>
          <p className='p-4 cursor-pointer mb-4' onClick={() => { null
            // scrollToSection(whyavro)
            // handleNav()
          }}>Why Arvo ?</p>
          <p className='p-4 cursor-pointer mb-4' onClick={() => {
            // scrollToSection(whyavro)
            // handleNav()
          }}>Products</p>
          <p className='p-4 cursor-pointer mb-4'><Link to="" onClick={() => {
            // scrollToSection(faqs)
            // handleNav()
          }}>FAQs</Link></p>
          <p className='p-4 cursor-pointer mb-4'><Link to="/faqs" onClick={() => setNav(prev => !prev)}>Blogs</Link></p>
          <p className='p-4 cursor-pointer mb-4' onClick={() => {
            // scrollToSection(contact)
            // handleNav()
          }}>Contact Us</p>

          <button onClick={() =>  window.location.href = `https://dashboard.arvopayroll.com/`} className="p-5 px-12 text-black mb-5 rounded-2xl border-2 border-black w-full">Login</button>
          <button onClick={() =>   window.location.href = `https://dashboard.arvopayroll.com/`} className="bg-black p-5 px-12 rounded-2xl text-white mb-5 w-full">Create Account</button>

        </div>
      </ClickOutside>
    </div>
  </div>
  )
}

export default Navbar
