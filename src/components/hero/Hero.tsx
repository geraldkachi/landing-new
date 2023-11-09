import YellowHero from '../../assets/home/YelloHero'
import LandingPhone from '../../images/login/nmn.svg'
import GooglePlayHome from "./GooglePlayHome.svg"
import AppleStoreHome from "./AppleStoreHome.svg"
import { Link, useNavigate } from 'react-router-dom'

import { Rotate, Fade, LightSpeed, } from "react-reveal"
import Jump from "react-reveal"

const Hero = () => {
    const navigate = useNavigate()

    return (
        <section className="px-5 grid lg:grid-flow-col place-items-center my-10 h-[60%] mx-auto max-w-[1200px] overflow-hidden">
            <div className='justify-selt-center md:justify-self-start  text-start'>
                <Rotate top left>
                    <h1 className='text-5xl my-3'>Empowering Africa's Workforce  {'\n'}
                        <span className='block'>Simplifying Payroll, Elevating Businesses.</span></h1>
                    {/* <h1 className='text-5xl my-3'>Get Loan in {'\n'}
                        <span className='block'>Minutes</span></h1> */}
                </Rotate>
                <Fade bottom>
                    {/* <p className='text-xl my-5'>Arvo offers easy and convenient financial services<br /> on the go for everyone</p> */}
                    <p className='text-xl my-5'>Arvo Payroll: Transforming Traditional Payroll  <br /> into Seamless Efficiency, One Employee at a Time.</p>
                    <button onClick={() => navigate('register')} className="bg-black p-5 px-12 rounded-xl text-white mb-5">Create Web Account</button>
                    {/* Google app */}
                    <div className="flex items-center md:mt-5">
                        <img className='cursor-pointer' src={GooglePlayHome} alt="GooglePlayHome" onClick={() => window.location.href = 'https://arvofinance.page.link/download-app'} />
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <img className='cursor-pointer' src={AppleStoreHome} alt="AppleStoreHome" onClick={() => window.location.href = 'https://arvofinance.page.link/download-app'} />
                    </div>
                </Fade>
                <LightSpeed left>
                    <p className="py-3 text-base">Trusted by 1,500,000+ Customers</p>
                </LightSpeed>
            </div>

            <div className='relative my-10 py-3'>

                <div className="absolute  p-10 -z-10 left-[10%] md:left-[75%] -top-16 overflow-hidden">
                    <YellowHero className='' />
                </div>

                <div className="absolute  p-10 -z-10 left-[10%] md:left-[75%] -bottom-20 overflow-hidden">
                    <YellowHero className='' />
                </div>

                <div className="absolute  p-10 -z-10 left-[10%] md:-left-72 -bottom-0 overflow-hidden">
                    <YellowHero className='' />
                </div>
                <div className='animated-bounce' >
                    <Jump bottom>
                        {/* <LandingPhone /> */}
                        <a href=""></a>
                        <img src={LandingPhone} alt="LandingPhone" />
                    </Jump>
                </div>
            </div>
        </section>
    )
}

export default Hero
