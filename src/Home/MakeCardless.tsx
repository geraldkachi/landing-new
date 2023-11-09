import Cardless from "./cardless.svg"
import BlackAppPlay from "../../assets/auths/BlackAppPlay.svg"
import BlackGoogleIcon from "../../assets/auths/BlackGoogleIcon.svg"

const MakeCardless = () => {
    return (
        <section className="overflow-x-hidden px-5 py-10">
            <div className="grid md:grid-cols-2 gap-10 py-10 max-w-[1300px] mx-auto place-items-center">
                <div className="text-base text-left self-center justify-items-center py-5 text-[#141C1F]">
                    <div className="">
                        <h1 className="font-bold text-[#065373] text-3xl md:text-[40px] md:pb-5">Pay with Arvo Link</h1>
                        <p className="my-5">
                            Experience the ease of simplified bulk payments through our smart solution. With our innovative tool, you can easily send money to multiple users at the same time. No need to deal with the complications of doing each transaction separately.                        </p>

                        <div className="flex rounded-lg gap-5 text-white mt-9">
                            <img src={BlackGoogleIcon} alt="BlackGoogleIcon" />
                            <img src={BlackAppPlay} alt="BlackAppPlay" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="w-1/2">
                        <img className='scale-150 my-4' src={Cardless} alt="cardless" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MakeCardless
