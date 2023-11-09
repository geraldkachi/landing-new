import { RefObject } from "react";
import { Fade } from "react-reveal";

import BankIconSvg from "./bankicon.svg";
import BlackAppPlay from "../../assets/auths/BlackAppPlay.svg";
import BlackGoogleIcon from "../../assets/auths/BlackGoogleIcon.svg";



interface BankProps {
    product: RefObject<HTMLDivElement>;
}

const Bank = ({ product }: BankProps) => {

    return (
        <div ref={product} className="overflow-x-hidden px-5 py-10">

            <div className="grid md:grid-cols-2 gap-10 py-10 max-w-[1300px] mx-auto">


                <div className="text-base text-left self-center justify-items-center py-5">
                    <h1 className="text-[#065373] font-bold text-4xl md:text-[56px] md:pb-5">Bank in Style</h1>
                    <p className="my-5">
                        Affords you the luxury of access to financial services and payments outside the brick-and-mortar approach of a traditional banking system.<br className="mt-4" /> <span className="pt-4 my-4"> With just your smart phone, you bank-on-the-go and your funds are just within your fingertips.</span>
                    </p>

                    {/* <div className="flex items-center rounded-lg gap-5 text-white mt-9">
                        <img className="cursor-pointer" src={BlackGoogleIcon} alt="BlackGoogleIcon" onClick={() => window.location.href = 'https://arvofinance.page.link/download-app'} />
                        <img className="cursor-pointer" src={BlackAppPlay} alt="BlackAppPlay" onClick={() => window.location.href = 'https://arvofinance.page.link/download-app'} />
                    </div> */}
                </div>
                <div className="self-center justify-items-center">
                    < >
                        <img src={BankIconSvg} alt="" />
                    </>
                </div>
            </div>
        </div>
    )
}

export default Bank
