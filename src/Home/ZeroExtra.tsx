import { Button } from "arvara-pckage"
import PayWithIconz from "./zeroextra.svg"
import BlackAppPlay from "../../assets/auths/BlackAppPlay.svg"
import BlackGoogleIcon from "../../assets/auths/BlackGoogleIcon.svg"

const ZeroExtra = () => {
    return (
        <section className="overflow-x-hidden px-5 py-10">
            <div className="bg-no-repeat bg-contain bg-[url(./code7.png)] grid md:grid-cols-2 gap-10 py-10 max-w-[1300px] mx-auto">
                <div className="bg-opacity-70 bg-white text-base text-left self-center  py-5">
                    <h1 className="text-[#365b6b] text-3xl md:text-[40px] leading-10">Bill Payment Guaranteed with<br /> Arvo Wallet</h1>
                    <p className="my-5 text-[#2e4954]">
                        Every transaction is as it is. No hidden charges or extra cost for every transaction performed. We place extra value to ensure every customer is not burdened beyond reach for cost of service.
                    </p>

                    {/* <div className="flex rounded-lg gap-5 text-white mt-9">
                        <img className="cursor-pointer" src={BlackGoogleIcon} alt= "BlackGoogleIcon"onClick={() => window.location.href = 'https://arvofinance.page.link/download-app'} />
                        <img className="cursor-pointer" src={BlackAppPlay} alt="BlackAppPlay" onClick={() => window.location.href = 'https://arvofinance.page.link/download-app'} />
                    </div> */}
                </div>
                <div className="self-center justify-items-center">
                    <div className="object-fill">
                        <img src={PayWithIconz} alt="wewr" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ZeroExtra
