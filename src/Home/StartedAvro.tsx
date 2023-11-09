
import IMG from './startavro.svg'
import GetStartIcon from './getstarted.svg'
import StartedAvroIcons from '../../assets/home/StartAvroIcon';

import GooglePlayHome from "./GooglePlayHome.svg"
import AppleStoreHome from "./AppleStoreHome.svg"
import { Button } from '../components/components';
const StartedAvro = () => {
    return (
        <section className='overflow-x-hidden px-5 py-10'>
            <div className="my-28 bg-[#043144] rounded-[40px] grid md:grid-cols-2 place-items-center gap-10 py-10 max-w-[1300px] mx-auto pr-3">
                <div className="ml-3 md:ml-16 text-left md:order-last">
                    <h1 className='md:text-5xl text-3xl text-white font-bold pb-10'>Get Started on Arvo</h1>
                    <div className='mb-5'>
                        <div className="flex items-center">
                            <span className='inline-block mr-5'>
                                <img src={IMG} className="inline-flex" alt="mobile" />
                            </span>
                            <p className="text-xl lg:text-3xl font-semibold text-white md:text-xl mb-1 ">
                                Download the Mobile Application</p>
                        </div>
                        <p className="text-white ml-14 opacity-60 text-base">Get & Install the Arvo mobile app from Google Play Store &<br /> App Store</p>
                    </div>
                    <div className='mb-5'>
                        <div className="flex items-center">
                            <span className='inline-block mr-5'>
                                <img src={IMG} className="inline-flex" alt="register" />
                            </span>
                            <p className="text-xl lg:text-3xl font-semibold text-white md:text-xl mb-1 ">
                                Register with your Details</p>
                        </div>
                        <p className="text-white ml-14 opacity-60 text-base">First & Last Name, Email Address, Phone Number and Password</p>
                    </div>
                    <div className='mb-5'>
                        <div className="flex items-center">
                            <span className='inline-block mr-5'>
                                <img src={IMG} className="inline-flex" alt="Bank with Arvo" />
                            </span>
                            <p className="text-xl lg:text-3xl font-semibold text-white md:text-xl mb-1 ">
                                Bank with Arvo</p>
                        </div>
                        <p className="text-white ml-14 opacity-60 text-base">Make Financial Transaction on the Mobile App (Pay Bills, Send<br /> Money, Get Loans) and so much more</p>
                    </div>
                    <Button type="submit" className='w-full sm:w-auto p-3 mt-10 bg-white' style={{ background: 'white', color: '#065373' }} onClick={() => window.location.href ="https://arvofinance.page.link/download-app"} title="Check the App" />
                </div>
                <div className="self-center scale-75 order-1 flex flex-col items-center">
                    <img src={GetStartIcon} alt="star" />

                    <div className="flex items-center md:mt-5">
                    <img className='cursor-pointer bg-white rounded' src={GooglePlayHome} alt="GooglePlayHome" onClick={() => window.location.href = 'https://arvofinance.page.link/download-app'} />
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <img className='cursor-pointer bg-white rounded' src={AppleStoreHome} alt="AppleStoreHome" onClick={() => window.location.href = 'https://arvofinance.page.link/download-app'} />
                </div>
                </div>
            </div>
        </section>
    )
}

export default StartedAvro
