import { Button, Input } from "../components/components";


const GetUpdates = () => {
  return (
    <div>
      <section className="px-5 py-10 md:py-28">
        <div className=" max-w-[1200px] mx-auto rounded-3xl bg-[#F0F3F5]  py-10">
          <div className="text-center my-5 text-[#141C1F]">
            <p className="my-4 text-sm md:text-base">Don’t get left behind</p>
            <p className="text-lg md:text-4xl font-semibold">
              Get updates on our products & services
            </p>
          </div>
          <form action="" className='flex justify-center items-center"'>
            <div className="flex-wrap flex justify-center items-center gap-2">
              <div className="mb-6 md:mb-0">
                <Input
                  type="email"
                  className="
                                    text-[#668A99]
                                    block
                                    w-full
                                    px-1
                                    sm:mx-5
                                    border-transparent
                                    text-sm
                                    rounded-lg
                                    font-normal
                                    transition
                                    ease-in-out
                                    mx-3
                                    "
                  placeholder="Enter your email address"
                />
              </div>

              <div className="md:mr-auto mb-6 md:mb-0 ml-2 md:ml-4">
                <Button
                  type="submit"
                  className="!bg-[#065373] inline-block rounded-lg !px-6 !py-3 border-2 border-white text-white font-medium text-xs leading-tight uppercase hover:bg-[#065373] hover:bg-opacity-1 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" title="Submit" />
                  
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

{
  /* routes outside the sidebar or dashboard here */
}
export default GetUpdates;
