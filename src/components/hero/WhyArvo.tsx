import { RefObject, useEffect, useState } from 'react'
// import GifMoney from "./money-5944_256.gif"
import GifMoney from "./loop1.png"
import CodeOne from "./code1.jpg"
import CodeTwo from "./code2.jpg"
import CodeThree from "./code3.jpg"

// import AnimationGif from "./animation_lkl5nsdb_small.gif"
interface WhtAvroProps {
  whyavro: RefObject<HTMLDivElement>;
}
const WhyArvo = ({ whyavro }: WhtAvroProps) => {
  const arr = [1, 2, 3];
  const [tabIndex, setTabIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the index and loop back to 0 when it reaches the end of the array
      setTabIndex((prevIndex) => (prevIndex + 1) % arr.length);
    }, 3000); // Change the interval time (in milliseconds) to adjust the loop speed

    // Clean up the interval when the component is unmounted to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [arr.length]);

  return (
    <div id='why-avro' ref={whyavro} className='bg-[#F6F8F9] px-5 py-12 mb-8 sm:mb-auto'>
      <div className=' max-w-7xl mx-auto mt-10 py-10'>

        <div className="my-5 text-center">
          <h1 className='text-[#141C1F] text-[40px] my-5'>Why Arvo?</h1>
          {/* <p>Get instant loans without collateral and delays, create wealth with our<br /> peer-to-peer platform on arvo</p> */}
          <p>Create and manage your wealth with<br />  platform on Arvo</p>
        </div>

        {/* a better approach */}
        <div className="grid md:grid-cols-2 sm:gap-10 md:h-[500px] max-w-[1200px] mx-auto mb-3">
          <div className="text-left self-center flex gap-6  flex-col my-4 ml-4 border-l-4 border-[#F1F3FF] text-[#949AB1] relative">
            <div className={"flex items-center tabIndex pl-5 mb-5  my-1 hover:border-l-4 hover:border-[#02C39A] cursor-pointer hover:text-[#02C39A]" + (tabIndex === 0 && "tabIndex text-[#02C39A] border-l-4 h-20 border-b-[#02C39A]")}>
              <div>
                <p className={`font-bold text-[#141C1F] ${tabIndex === 0 && " text-[#02C39A] "}`}>Quick Loan Disbursement</p>
                <p className={` ${tabIndex === 0 && " text-[#668A99] "}`}>Quick and secured loans guaranteed instantly</p>
              </div>
            </div>

            <div className={"flex items-center tabIndex pl-5 mb-5  my-1 hover:border-l-4 hover:border-[#065373] cursor-pointer hover:text-[#065373]" + (tabIndex === 1 && " text-[#065373] border-l-4 border-b-[#065373]")}>
              <div>
                <p className={`font-bold text-[#141C1F] ${tabIndex === 1 && " text-[#065373 ]"}`}>Affordable Bills Payment</p>
                <p className={`${tabIndex === 1 && " text-[#668A99] "}`}>A dedicated channel for airtime vending/topup at appropriate pricing, Bills Payment (Utilities & bills) at discounted rates.</p>
              </div>
            </div>

            <div className={"flex items-center tabIndex pl-5 mb-5  my-1 hover:border-l-4 hover:border-[#2E63EA] cursor-pointer hover:text-[#2E63EA]" + (tabIndex === 2 && " text-[#2E63EA] border-l-4 border-b-[#2E63EA]")}>
              <div>
                <p className={`font-bold text-[#141C1F] ${tabIndex === 2 && " text-[#2E63EA] "}`}>Arvo Payment</p>
                <p className={`${tabIndex === 2 && " text-[#668A99] "}`}>Experience a new era of payment solutions with Arvo Pay and POS services.</p>
              </div>
            </div>
          </div>

          <div className="bg-contain over">
            <div className='grid md:grid-cols-1- mt-20 sm:mt-0 h-auto'>

              {tabIndex === 0 && (<>
                <div className='overflow-hidden h-full bg-contain'>
                  <img src={CodeOne} alt="GifMoney" className="bg-[#02C39A] h-auto bg-contain self-stretch flex items-center justify-center sm:py-5 -my-10 md:my-0 w-full" />
                </div>
              </>)}
              {tabIndex === 1 && (<>
                <div className='overflow-hidden h-full bg-contain'>
                  <img src={CodeTwo} alt="GifMoney" className="bg-[#065373] h-auto bg-contain self-stretch flex items-center justify-center sm:py-5 -my-10 md:my-0 w-full" />
                </div>


                {/* <img src={AnimationGif} alt="AnimationGif" className="bg-[#065373]  self-stretch flex items-center justify-center sm:py-5 -my-10 md:my-0 w-full h-full" /> */}
                {/* <div className="bg-[#065373]  self-stretch flex items-center justify-center sm:py-5 -my-10 md:my-0 w-full h-full">
                <div className="bg-white shadow-xl self-center bg-blue-600 rounded-2xl w-52  h-52">
                  <img src={AnimationGif} alt="AnimationGif" className="absolute  shadow-xl rounded-2xl w-20 h-10" />
                </div>
              </div> */}
              </>)}
              {tabIndex === 2 && (<>
                <div className='overflow-hidden h-full bg-contain'>
                  <img src={CodeThree} alt="GifMoney" className="bg-[#2E63EA] object-cover h-auto bg-contain self-stretch flex items-center justify-center sm:py-5 -my-10 md:my-0 w-full" />
                </div>

                {/* <img src={AnimationGif} alt="AnimationGif" className="bg-[#2E63EA]  self-stretch flex items-center justify-center sm:py-5 -my-10 md:my-0 w-full h-full" /> */}
                {/* <div className="bg-[#2E63EA]  self-stretch flex items-center justify-center sm:py-5 -my-10 md:my-0">
                <div className="bg-white shadow-xl self- bg-blue-600 rounded-2xl w-52  h-52">
                  <div className="absolute shadow-xl rounded-2xl w-20 h-10"></div>
                </div>
              </div> */}
              </>)}
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}

export default WhyArvo



