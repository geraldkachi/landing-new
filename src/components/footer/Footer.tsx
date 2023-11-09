import { Link } from "react-router-dom"
// import ArvoIcon from "../../images/svg/ArvoIcon"
// import FacebookIcon from '../../assets/home/Facebook.svg'
// import InstagramIcon from '../../assets/home/Instagram.svg'
// import TwitterIcon from '../../assets/home/Twitter.svg'
// import LinkedinIcon from '../../assets/home/Linkedin.svg'
// import Googleplay from "./googleplay.svg"
// import AppStore from "./AppStore.svg"
import { RefObject } from "react"
interface Props {
    whyavro: RefObject<HTMLDivElement> | any
    scrollToSection: (n: RefObject<HTMLDivElement>) => void,
    contact: RefObject<HTMLDivElement> | any
}
const Footer = ({ whyavro, scrollToSection, contact, }: Props) => {
    return (
        <section className="bg-[#043144] text-white px-5 pt-10">
            <footer className="py-8 max-w-[1300px] mx-auto text-center">
                <div className="flex items-center justify-center">
                    {/* <ArvoIcon /> */}
                </div>
                <div className="flex items-center justify-center my-8 text-[#9BADV4]">
                    <p>Arvo as a licensed fintech payment institution headquartered in Lagos is positioned to re-define and reposition digital banking infrastructure,<br /> payments & services for Generation X, Millennials and  Generation Z.</p>
                </div>

                {/* <div className="flex items-center justify-center my-5 gap-5 mb-6">
                    <div className="flex gap-5 text-white mt-9">
                        <Link to="" className="cursor-pointer px-3 py-3">
                            <img src={Googleplay} alt="Googleplay" className="cursor-pointer" onClick={() => window.location.href = 'https://arvofinance.page.link/download-app'} />
                        </Link>
                        <Link to="" className="cursor-pointer px-3 py-3">
                            <img src={AppStore} alt="AppStore" className="cursor-pointer" onClick={() => window.location.href = 'https://arvofinance.page.link/download-app'} />
                        </Link>
                    </div>
                </div> */}

                <div className="flex items-center flex-wrap justify-center gap-10 lg:justify-between text-white mx-auto max-w-[800px]">
                    <Link to="#" onClick={() => scrollToSection(whyavro)}>Why Arvo?</Link>
                    {/* <Link to="#">Blog</Link> */}
                    <Link to="#" onClick={() => scrollToSection(contact)}>Contact Us</Link>
                    <Link to="/terms-of-use" onClick={() => scrollToSection(whyavro)}>Terms ofUse</Link>
                    <Link to="/terms-of-use" onClick={() => scrollToSection(whyavro)}>Privacy Policy</Link>
                </div>

                <hr className="opacity-10 my-10" />
                {/* tail */}
                <div className="flex flex-wrap items-center justify-center lg:justify-between">
                    <p>© {new Date().getFullYear()} Arvofinance. All rights reserved</p>
                    {/* <div className="flex items-center gap-5 my-5">
                        <a className="cursor-pointer" href='https://web.facebook.com/arvo.finance.7?_rdc=1&_rdr'><img src={FacebookIcon} alt="facebook" /></a>
                        <a className="cursor-pointer" href="https://twitter.com/ArvoFinance"><img src={TwitterIcon} alt="twitter" /></a>
                        <a className="cursor-pointer" href='https://www.instagram.com/ArvoFinance/'><img src={InstagramIcon} alt="instgram" /></a>
                        <a className="cursor-pointer" href='https://www.linkedin.com/company/arvofinance/'><img src={LinkedinIcon} alt="linkdin" /></a>
                    </div> */}
                </div>
                <div className="opacity-60 text-center my-5">
                    {/* <a href='https://olivermead.com' >Powered by Olivermead Investment Ltd.</a> */}
                    <a href='https://olivermead.com' >Arvo.</a>
                </div>
            </footer>
        </section>
    )
}

export default Footer
