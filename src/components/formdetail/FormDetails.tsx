import { RefObject, useState } from "react";



// import FacebookIcon from '../../assets/home/Facebook.svg'
// import InstagramIcon from '../../assets/home/Instagram.svg'
// import TwitterIcon from '../../assets/home/Twitter.svg'
// import LinkedinIcon from '../../assets/home/Linkedin.svg'

import AddressIcon from "./AddressIcon";
import CallIcon from "./CallIcon";
import SmsIcon from "./SmsIcon";
import SocialIcon from "./SocialIcon";
import { Button, Input } from "../components";

const initalValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
}

interface ContactProps {
    contact: RefObject<HTMLDivElement> | any
}

const FormDetails = ({ contact }: ContactProps) => {

    const [formValue, setFormValue] = useState(initalValues)

    const {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
    } = formValue

    const onFinish = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const values = {
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValue({ ...formValue, [event.target.name]: (event.target as HTMLInputElement).value })
    }

    return (
        <div ref={contact} className="bg-[#F6F8F9] text-[#141C1F] px-5 py-10">
            <div className="grid lg:grid-cols-2 mx-auto gap-10 max-w-[1300px]">
                <div className="items-center self-center max-h-screen text-left basis-1/2">
                    <div className="mb-20">
                        <h1 className="text-lg md:text-[40px] font-bold ">Reach Out to Us</h1>
                        <p className="my-2">Contact our customer support 24/7</p>
                    </div>
                    <div>
                        <div className="bg-[#F6AE2D] p-3 rounded-full inline-flex">
                            <AddressIcon />
                        </div>
                        <h2 className="text-xl font-semibold">Address</h2>
                        <p className="mb-5 text-base">Plot 2 Block 128B Remi Olowude Stree off Marwa Bus-Stop, Lekki<br /> Phase 1, Lekki Lagos.</p>
                        <p className="mb-5 text-base">Bethel House, 1A, Akin Osiyem Street off Allen Avenuie, Ikeja Lagos</p>
                    </div>

                    <div className="flex items-center gap-20">
                        <div>
                            <div className="bg-[#02C39A] p-3 rounded-full inline-flex">
                                <CallIcon />
                            </div>
                            <p className="font-semibold mb-5">Switch Board</p>
                            <p>(+234) 802 181 0034</p>
                            <p className='cursor-pointer mt-3' onClick={()=> window.location.href= "https://wa.link/3djnug"}>(Whatsapp) 2349071380694</p>
                        </div>

                        <div>
                            <div className="bg-[#2E63EA] p-3 rounded-full inline-flex"> 
                                <SmsIcon />
                            </div>
                            <p className="font-semibold mb-5">Email</p>
                            <p>hello@arvopayroll.com</p>
                        </div>
                    </div>

                    <div className="mt-5">
                        <div className="bg-[#F46036] p-3 rounded-full inline-flex">
                            <SocialIcon />
                        </div>

                        <p>Socials</p>
                        {/* <div className="flex items-center gap-5 my-5">
                            <a href='https://web.facebook.com/arvo.finance.7?_rdc=1&_rdr'><img src={FacebookIcon} alt="facebook" /></a>
                            <a href="https://twitter.com/ArvoFinance"><img src={TwitterIcon} alt="twitter" /></a>
                            <a href='https://www.instagram.com/ArvoFinance/'><img src={InstagramIcon} alt="instgram" /></a>
                            <a href='https://www.linkedin.com/company/arvofinance/'><img src={LinkedinIcon} alt="linkdin" /></a>
                        </div> */}
                    </div>
                </div>

                <div className="flex  h-full my-4 w-full ">
                    <div className="bg-white p-5 max-w-2xl mx-auto rounded-3xl shadow-lg w-full">
                        <form onSubmit={onFinish}>
                            <Input
                                label="Full Name"
                                placeholder="First name, Last name"
                                onChange={handleChange}
                                value={firstName}
                                className="mt-5 border-[#C2D0D6]"
                            />

                            <Input
                                label="Email Address"
                                placeholder="Enter your email address"
                                onChange={handleChange}
                                value={email}
                                className="mt-5 border-[#C2D0D6]"
                            />
                            <Input
                                label="Phone Number"
                                placeholder="Enter your phone number"
                                onChange={handleChange}
                                value={phoneNumber}
                                className="mt-5 border-[#C2D0D6]"
                            />

                            <div className="mt-5">
                                <label className="block border-[#C2D0D6] text-left mb-2 text-sm font-medium text-gray-900">Your message</label>
                                <textarea id="message" placeholder="Type your message here..." className=" h-32 block border-[#C2D0D6] p-2.5 w-full text-sm rounded-lg border  focus:outline-none focus:border-blue-3  placeholder:text-[#668A99]"></textarea>
                            </div>

                            <div className="mt-8">
                                <Button variant="link" className="w-full !bg-[#065373] !text-[#ffffff] hover:bg-white hover:text-[#065373]" title="Send Message" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormDetails
