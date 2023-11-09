import './bottomnav.css'
import { Link, useLocation } from 'react-router-dom';
import HomeBot from '../../assets/home/bottom-nav/HomeBot';
import LoanBot from '../../assets/home/bottom-nav/LoanBot';
import MoreBot from '../../assets/home/bottom-nav/MoreBot';
import { routeListBottomNav } from '../../assets/data/sidebarList';
import ArvopayIcon from '../../assets/home/bottom-nav//ArvopayIcon';
import TransactionsBot from '../../assets/home/bottom-nav/TransactionsBot';


const BottomNav = () => {
    const location = useLocation()

    return (
        <section className="sm:hidden bottomnav px-3 fixed  bottom-0 bg-white w-full shadow-xl flex items-center gap-3 justify-between overflow-x-hidden">
            {routeListBottomNav.map((item, index) => {
                const activeItem = location.pathname.includes(item.route);
                const iconArr = [
                    <HomeBot index={activeItem} key={1} />,
                    <LoanBot index={activeItem} key={2} />,
                    <TransactionsBot index={activeItem} key={3} />,
                    <ArvopayIcon key={4} index={activeItem} />,
                    <MoreBot index={activeItem} key={5} />,
                ]
                return (
                    <Link to={item.route} key={index}
                        className={`${activeItem && "text-white rounded-2xl bg-[#065373] w-max whitespace-nowrap"} flex justify-between gap-x-4 items-center rounded-full p-3 cursor-pointer my-3  text-sm space-x-1`}>
                        <div> {iconArr[index]}</div>

                        <span className={`${!activeItem && "scale(0) hidden"} origin-left duration-200`}>
                            {item.title}
                        </span>
                    </Link>
                )
            }
            )}
        </section>
    )
}

export default BottomNav
