import PayWithIconz from "./zeroextra.svg"

const ZeroExtra = () => {
    return (
        <section className="overflow-x-hidden px-5 py-10">
            <div className="my-5 text-center">
          <h1 className='text-[#141C1F] text-[40px] my-5'>How it works</h1>
         
        </div>
            <div className="bg-no-repeat bg-contain bg-[url(./code7.png)] grid md:grid-cols-2 gap-10 py-10 max-w-[1300px] mx-auto">
                <div className="bg-opacity bg-wite text-base text-left self-center  py-5">
                    <h1 className="text-[#365b6b] text-3xl md:text-[40px] leading-10">Setup in Minutes<br /></h1>
                    <p className="my-5 text-[#2e4954]">Sign up on Avro effortlessly. Create your company profile, input basic employee details, and set your payroll preferences. Our intuitive interface guides you through the process, ensuring a quick and seamless setup.</p>

                   
                </div>
                <div className="self-center justify-items-center">
                    <div className="object-fill rounded-full flex items-center justify-center">
                        <img src={PayWithIconz} alt="wewr"  />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ZeroExtra
