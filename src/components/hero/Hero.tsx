import YellowHero from '../../assets/home/YelloHero'
// import LandingPhone from '../../images/login/nmn.svg'
import LandingPhone from '/africa.svg'
import GooglePlayHome from "./GooglePlayHome.svg"
import AppleStoreHome from "./AppleStoreHome.svg"
import {  useNavigate } from 'react-router-dom'
//@ts-ignore
import { Rotate, Fade, LightSpeed } from "react-reveal"
//@ts-ignore
import Jump from "react-reveal"

const Hero = () => {
    const navigate = useNavigate()

    return (
        <section className="px-5 grid lg:grid-flow-col place-items-center my-10 h-[60%] mx-auto max-w-[1200px] overflow-hidden">
            <div className='justify-selt-center md:justify-self-start  text-start'>
                <Rotate top left>
                    <h1 className='text-5xl my-3 md:leading-[1.3]'>Empowering Africa's Workforce  {'\n'}
                        <span className='block'>Simplifying Payroll, Elevating Businesses.</span></h1>
                </Rotate>
                <Fade bottom>
                    <p className='text-xl my-5'>Arvo Payroll: Transforming Traditional Payroll  <br /> into Seamless Efficiency.</p>
                    <button  onClick={() =>  window.location.href = `https://dashboard.arvopayroll.com/`} className="bg-black p-5 px-12 rounded-xl text-white mb-5">Create Account</button>
                    

                </Fade>
            
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
                        <img src={LandingPhone} alt="LandingPhone" className='md:h-[400px] my-10' />
                    </Jump>
                </div>
            </div>
        </section>
    )
}

export default Hero
