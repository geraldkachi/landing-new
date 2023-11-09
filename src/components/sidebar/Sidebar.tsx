import Cookies from "js-cookie";
import { useWindowDimensions } from "arvara-pckage"
import { Dispatch, SetStateAction, useCallback } from "react"
import { Link, useLocation, useNavigate } from 'react-router-dom'

import './sidebar.css'
import HomeIcon from '../../assets/home/HomeIcon'
import MenuIcon from '../../assets/sidebar/MenuIcon'
import LoanIcon from '../../assets/sidebar/LoanIcon'
import ArvopayIcon from '../../assets/home/ArvopayIcon'
import LogOutIcon from '../../assets/sidebar/LogOutIcon'
import { routeList } from '../../assets/data/sidebarList'
import AccountIcon from '../../assets/sidebar/AccountIcon'
import HomeLogoIcon from '../../assets/sidebar/HomeLogoIcon'
import TransactionsIcon from '../../assets/sidebar/TransactionIcon'


interface SidebarProps {
    open: boolean
    setOpen?: Dispatch<SetStateAction<boolean>>
}
const Sidebar = ({ open, setOpen }: SidebarProps) => {
    const location = useLocation()
    const { width } = useWindowDimensions()
    const navigate = useNavigate();

   const logout = useCallback(() => {
        navigate("/");
        Cookies.remove('Authenticated')
        Cookies.remove('secret')
        localStorage.clear()
   }, [])

    return (
        <section className={`sidebar hidden sm:block  ${open && 'hidden'}`}>
            <div className={` ${open ? "sm:w-60" : "w-max"} flex flex-col justify-between transition-all ease-in-out  top-0 left-0 bg-[#065373] text-white p-5 h-screen pt-8 relative duration-300`}>

                <div className={`pt-6 ${open && " mx-aut"}`}>
                    <div className={`${open && 'flex items-center justify-center'} inline-flex items-center pb-10 gap-4`}>
                        <MenuIcon onClick={() => setOpen(!open)} className={`ml-4 cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} />
                        <HomeLogoIcon className={`${!open && "scale-0 hidden"}`} />
                    </div>
                    {routeList.map((item, index) => {
                        const activeItem = location.pathname.includes(item.route);
                        const iconArr = [
                            <HomeIcon key={1} index={activeItem} />,
                            <LoanIcon key={2} index={activeItem} />,
                            <TransactionsIcon key={3} index={activeItem} />,
                            <ArvopayIcon key={4} index={activeItem} />,
                            <AccountIcon key={5} index={activeItem} />,
                        ]
                        return (
                            <Link to={item.route} key={index}
                                className={`${activeItem && "bg-white rounded-2xl text-[#065373]"} flex items-center rounded-full px- py-3 cursor-pointer mb-3 text-sm px-6 space-x-4 w-max
                                `}
                            >
                                <div key={index}> {iconArr[index]}</div>

                                <span className={`${!open && "hidden"} ${width < 1200 ? "" : ""} origin-left duration-200`}>
                                    {item.title}
                                </span>
                            </Link>
                        )
                    }
                    )}
                </div>

                <div className="flex items-center justify-center" onClick={logout}>
                    <div  className="flex items-center  gap-5 cursor-pointer" >
                        <LogOutIcon />
                        <div className={`${!open && "hidden"} text-white text-sm`}> Logout</div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Sidebar
