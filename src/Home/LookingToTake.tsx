// import { Button } from "arvara-pckage"
import LookingToTakeIcon from './lookingtotake.svg'
import Check from './check-green.svg'
import {useNavigate} from 'react-router-dom'
import { Button } from '../components/components'

const LookingToTake = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-[#043144] px-5 pt-20 pb-10 text-white">
            <div className="text-center max-w-5xl mx-auto">
                {/* <h1 className='text-bold md:text-4xl text-3xl mb-4'>Looking to take charge of your Finances</h1> */}
                <h1 className='text-bold md:text-4xl text-3xl mb-4'>Arvo Loan</h1>
                <p className="text-base md:text-lg">With the Arvo App, users can access loans of up to ₦1,000,000 with competitive interest rates and flexible repayment plans.
                </p>
            </div>
            <div className="max-w-[1300px] my-10 grid lg:grid-cols-2 place-items-center  mx-auto">
                <div className='justify-selt-center md:justify-self-start  text-start'>
                    <div className="mb-8">
                        <h1 className='font-bold text-lg md:text-3xl'>Fastcash Loan</h1>
                        <p className='text-base text-[#FDFFFC]'>Apply to receive funds instantly into your arvo wallet</p>
                    </div>

                    <div className='flex items-center gap-4 text-[#FDFFFC]'>
                        <div>
                            <div className='pb-5'>
                                <img className='inline-flex' src={Check} alt="checkicon" /> &nbsp;
                                <p className='inline sm:inline-flex text-sm sm:text-base mb-3'>Competitive Interest Rate</p>
                            </div>
                            <div className='pb-5'>
                                <img className='inline-flex' src={Check} alt="checkicon" /> &nbsp;
                                <p className='inline sm:inline-flex text-sm sm:text-base mb-3'>Fast and Secured</p>
                            </div>
                            <div className='pb-5'>
                                <img className='inline-flex' src={Check} alt="checkicon" /> &nbsp;
                                <p className='inline sm:inline-flex text-sm sm:text-base mb-3'>Flexible Repayment Plan</p>
                            </div>
                        </div>
                        <div>
                            <div className='pb-5'>
                                <img className='inline-flex' src={Check} alt="checkicon" /> &nbsp;
                                <p className='inline sm:inline-flex text-sm sm:text-base mb-3'>Tenure of 7-90 days</p>
                            </div>
                            <div className='pb-5'>
                                <img className='inline-flex' src={Check} alt="checkicon" /> &nbsp;
                                <p className='inline sm:inline-flex text-sm sm:text-base mb-3'>No Collateral </p>
                            </div>
                            <div className='pb-5'>
                                <img className='inline-flex' src={Check} alt="checkicon" /> &nbsp;
                                <p className='inline sm:inline-flex text-sm sm:text-base mb-3'>Higher amount</p>
                            </div>
                        </div>
                    </div>

                    <Button type="submit" className=' md:w-auto px-16 p-3 mt-5 bg-white' style={{ background: 'white', color: '#065373' }} onClick={() => navigate('fast-cash')} >Learn more</Button>
                </div>
                <div className='self-center scale-95 overflow-hidden'>
                    <img className='' src={LookingToTakeIcon} alt="lookingtotake" />
                </div>
            </div>
            {/* Three Dots */}
            {/* <div className="flex items-center justify-center gap-x-3">
                <div className="h-3 w-3 bg-white rounded-full"></div>
                <div className="h-3 w-3 bg-white rounded-full"></div>
                <div className="h-3 w-3 bg-white rounded-full"></div>
            </div> */}
        </div>
    )
}

export default LookingToTake
