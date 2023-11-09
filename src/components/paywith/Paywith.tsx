import { useNavigate } from "react-router-dom"
import PayWithIcon from "./paywithicon.svg"

const Paywith = () => {
    const navigate = useNavigate()

    return (
        <section className="overflow-x-hidden px-5 py-10">
            <div className="grid md:grid-cols-2 gap-10 py-10 max-w-[1300px] mx-auto ">
                <div className="self-center ">
                    <div className="object-fill">
                        <img src={PayWithIcon} alt="PayWithIcon" />
                    </div>
                </div>
                <div className="text-base text-left self-center justify-items-center py-5 text-[#141C1F]">
                    <div className="">
                        <h1 className="font-bold text-3xl md:text-[32px]">Automate Employee Data</h1>
                        <p className="my-5"> Connect Aggro with your attendance and time-tracking systems. Employee hours and leave balances are automatically synced, eliminating manual data entry. Say goodbye to spreadsheet chaos!</p>
                      
                        {/* <button onClick={() => navigate('register')} className="bg-black p-5 px-12 rounded-xl text-white mb-5">SIgn Up</button> */}
                        {/* <button onClick={() => navigate('/register')} className="bg-[#065373] p-3 px-12 rounded-xl text-white mt-5">Sign Up for POS merchants</button> */}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Paywith
