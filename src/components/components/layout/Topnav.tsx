// import { AdminIcon } from '../../assets'

const Topnav = () => {
    return (
        <>
            <div className="flex items-center justify-between border-b border-[rgba(0, 0, 0, 0.20)] bg-white z-50 px-2 gap-x-3">
                <div className="flex items-center justify-center gap-3">
                    <div className="cursor-pointer">
                        <img src="/arrow-right.svg" alt="" />
                    </div>
                    <div className="cursor-pointer">
                        <img src="/arrow-left.svg" alt="" />
                    </div>
                </div>

                <div className="topnav__search">
                    <img src="search.svg" alt="" />
                    <input type="text" name="search" placeholder="Search employees, teams..." />
                </div>


                <div className="flex gap-2 items-center py-2">
                    <p className="text-black text-[16px] mr-4 flex items-start gap-2">
                        <img src="/calenda.svg" alt="calenda" />
                        <span className="whitespace-nowrap">August 8th 2022 . 09:00 AM</span>
                        {/* <AdminIcon className="cursor-pointer" /> */}
                    </p>
                    <div className="">
                        <img src="/notemsg.svg" alt="notemsg" />
                    </div>
                    <div className="">
                        <img src="/notification.svg" alt="notificationß" />
                    </div>
                    <div className="w-12 h-12 pr-3 py-2 flex gap-4 items-center justify-center rounded-full px-3 whitespace-nowrap text-[12px] font-bold text-white bg-[#1D8EE6]">
                        MB
                    </div>
                    {/* <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26" cy="26" r="24" fill="#1D8EE6" />
                        <circle cx="26" cy="26" r="25.5" stroke="#DBF1FA" />
                        <path d="M18.984 33L16.2 23.64H16.136C16.1467 23.8533 16.1627 24.1573 16.184 24.552C16.2053 24.936 16.2213 25.3573 16.232 25.816C16.2533 26.264 16.264 26.6853 16.264 27.08V33H14.344V21.576H17.288L20.008 30.552H20.056L22.824 21.576H25.784V33H23.768V26.984C23.768 26.6213 23.7733 26.2267 23.784 25.8C23.7947 25.3627 23.8107 24.952 23.832 24.568C23.8533 24.1733 23.8693 23.8693 23.88 23.656H23.816L20.952 33H18.984ZM31.829 21.576C32.789 21.576 33.5837 21.672 34.213 21.864C34.8423 22.0453 35.3063 22.344 35.605 22.76C35.9143 23.176 36.069 23.736 36.069 24.44C36.069 24.8773 35.9943 25.272 35.845 25.624C35.6957 25.976 35.4823 26.264 35.205 26.488C34.9383 26.712 34.629 26.8613 34.277 26.936V27.016C34.6397 27.0907 34.981 27.2293 35.301 27.432C35.621 27.624 35.877 27.9067 36.069 28.28C36.261 28.6427 36.357 29.1227 36.357 29.72C36.357 30.4133 36.197 31.0053 35.877 31.496C35.5677 31.9867 35.1197 32.36 34.533 32.616C33.9463 32.872 33.2477 33 32.437 33H28.469V21.576H31.829ZM32.021 26.232C32.7143 26.232 33.1943 26.104 33.461 25.848C33.7277 25.592 33.861 25.2133 33.861 24.712C33.861 24.2 33.701 23.832 33.381 23.608C33.0717 23.384 32.5757 23.272 31.893 23.272H30.613V26.232H32.021ZM30.613 27.88V31.288H32.181C32.9063 31.288 33.4077 31.128 33.685 30.808C33.973 30.488 34.117 30.0613 34.117 29.528C34.117 29.1867 34.053 28.8933 33.925 28.648C33.8077 28.4027 33.605 28.216 33.317 28.088C33.029 27.9493 32.629 27.88 32.117 27.88H30.613Z" fill="white" />
                    </svg> */}

                </div>
            </div>
        </>
    )
}

export default Topnav
