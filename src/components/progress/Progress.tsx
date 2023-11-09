// import { Fade } from "react-reveal"
const Progress = () => {
    return (
        <section className="bg-[#043144] text-white px-5 py-10 text-center ">
            <section className="mx-auto max-w-[1200px]">
                <>
                    <div className="progres-text py-10">
                        <h1 className="text-4xl font-bold my-5">Our Milestones</h1>
                        {/* <p>Our achievement in the journey depicted in numbers</p> */}
                        <p>Our Journey So Far</p>
                    </div>
                </>

                < >
                    <div className="grid md:grid-cols-5 grid-cols-2 gao-10 place-items center">
                        <div className="my-5">
                            <h3 className="text-[#02C39A] text-3xl md:text-[40px]">5+</h3>
                            <p className="text-">Years 5+</p>
                            {/* <p className="text-">Years in the industry</p> */}
                        </div>

                        <div className="my-5">
                            <h3 className="text-[#02C39A] text-3xl md:text-[40px]">1,500,000+</h3>
                            <p className="text-">Trusted Customers</p>
                        </div>

                        <div className="my-5">
                            <h3 className="text-[#02C39A] text-3xl md:text-[40px]">2,000,000</h3>
                            <p className="text-">Executed Transactions</p>
                        </div>
                        {/* <div className="my-5 order-">
                            <h3 className="text-[#02C39A] text-3xl md:text-[40px]">20,000+</h3>
                            <p className="text-">Dispensed Loans / day</p>
                        </div> */}
                        <div className="my-5">
                            <h3 className="text-[#02C39A] text-3xl md:text-[40px]">20,000+</h3>
                            <p className="text-">Loans disbursed till date</p>
                        </div>
                        <div className="my-5">
                            <h3 className="text-[#02C39A] text-3xl md:text-[40px]">1,000,000</h3>
                            <p className="text-">Pin Disbursed</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-2 gao-10 place-items center">
                    </div>
                </>
            </section>
        </section>
    )
}

export default Progress
