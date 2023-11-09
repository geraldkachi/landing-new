// const ProductOnFedpay = () => {
//   return (
//     <div>ProductOnFedpay</div>
//   )
// }

// export default ProductOnFedpay

import Googel from './googleproduct.svg'
import Apple from './applestoreproduct.svg'
import { Button, Input } from 'arvara-pckage'
import ThreesPhone from './threePhonefedfast.svg'

const ProductOnFedpay = () => {
    return (
        <div className="">

            <section className="max-w-[1300px] mx-auto bg-[#F9FAFB] py-16 px-3">

                <h1 className="text-black text-[32px] md:text-[40px] font-bold leading-[56px] ">How to get started on Fedpay</h1>

                <div className="text-xl font-normal leading-8">Download the arvofinance mobile app to see our range of product to suite your financial needs.</div>
            </section>

            <div className='bg-black'>
            <section className="max-w-[1300px] pt-20 text-center text-white mx-auto px-4">
                <h1 className="font-bold text-[32px] md:text-5xl leading-[56px]">Get Started with Arvo!</h1>
                <div className="mt-4 font-normal text-xl leading-8">Available to all government workers who receive their salaries via remitta. Access loans from as low as ₦10,000 to as high as ₦1,000,000 in just a few minutes.</div>

                <div className='flex items-center justify-center gap-x-4 mt-20'>
                    <img src={Apple} alt="apple" className='cursor-pointer' onClick={() => window.location.href='https://arvofinance.page.link/download-app'}/>
                    <img src={Googel} alt="google" className='cursor-pointer' onClick={() => window.location.href='https://arvofinance.page.link/download-app'}/>
                </div>

                <div className="mt-20 flex items-center justify-center">
                    <img src={ThreesPhone} alt="phones" />
                </div>
            </section>
            </div>


            <div>
                <section className="px-5 py-10 md:py-28 bg-white">
                    <div className=" max-w-[1200px] mx-auto rounded-3xl bg-[#F0F3F5]  py-10">
                        <div className="text-center my-5 text-[#141C1F]">
                            <p className="my-4 text-sm md:text-base">Don&apos;t get left behind</p>
                            <p className="text-lg md:text-[32px] font-semibold">Get Notified About Our Updates</p>
                        </div>

                        <form action="" className='flex justify-center items-center"'>
                            <div className="flex-wrap flex justify-center items-center">
                                <div className="md:mb-6">
                                    <Input
                                        type="email"
                                        className="
                                    text-[#668A99]
                                    w-full
                                    sm:w-[300px]
                                    px-4
                                    sm:px-3
                                    border-transparent
                                    text-sm
                                    rounded-lg
                                    font-normal
                                    text-gray-700
                                    transition
                                    ease-in-out
                                    m-0
                                    "
                                        placeholder="Enter your email address"
                                    />
                                </div>

                                <div className="md:mr-auto md:mb-6">
                                    <Button
                                        type="submit"
                                        className="w-full md:w-[unset] inline-block rounded-lg px-6 py-3 border-2 border-white text-white font-medium text-xs leading-tight uppercase hover:bg-[ #065373] hover:bg-opacity-1 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProductOnFedpay
