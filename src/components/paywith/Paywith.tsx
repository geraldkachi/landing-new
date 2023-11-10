import PayWithIcon from "./paywithicon.svg"

const Paywith = () => {

    return (
        <section className="overflow-x-hidden px-5 py-10">
            <div className="grid md:grid-cols-2 gap-10 py-10 max-w-[1300px] mx-auto ">
                <div className="self-center ">
                    <div className="object-fill flex items-center justify-center">
                        <img src={PayWithIcon} alt="PayWithIcon" className="rounded-full" />
                    </div>
                </div>
                <div className="text-base text-left self-center justify-items-center py-5 text-[#141C1F]">
                    <div className="">
                        <h1 className="font-bold text-3xl md:text-[32px]">Automate Employee Data</h1>
                        <p className="my-5"> Connect Arvo with your attendance and time-tracking systems. Employee hours and leave balances are automatically synced, eliminating manual data entry. Say goodbye to spreadsheet chaos!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Paywith
