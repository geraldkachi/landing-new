import { format } from 'date-fns';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { NotifyProps, NotifyPropsObj } from '../../types';
import Dropdown from '../DropDown/DropDown';
import HelloIcon from '../../assets/dashboard/dashHomeIcon';
import SentTrans from '../../assets/notification/SentTrans';
import DepositIcon from '../../assets/notification/DepositIcon';
import WithdrawalIcon from '../../assets/notification/Withdrawal';
import NotificationIcon from '../../assets/navbar/NotificationIcon';
import { getNotifications } from '../../server/notification/notification';
import VerificationIcon from '../../assets/notification/VerificationIcon';

const renderNotificationItem = (item: NotifyPropsObj, index: number) => (
  <div
    className="flex px-2 py-5 hover:bg-opacity-5 hover:bg-black hover:rounded-xl gap-x-2"
    key={index}>
    <div className="whitespace-nowrap">
      {item.type === 'loan' ? (
        <SentTrans className="whitespace-nowrap" />
      ) : item.type === 'loan-repayment' ? (
        <DepositIcon />
      ) : item.type === 'transfer-debit' ? (
        <WithdrawalIcon />
      ) : item.type === 'transfer-credit' ? (
        <DepositIcon />
      ) : (
        <VerificationIcon />
      )}
    </div>

    <div className="break-all">
      <div className="text-[#141C1F] text-sm font-bold">{item?.title}</div>
      <span className="text-xs text-[#668A99]">{item?.description}</span>
      <span className="text-xs block text-[#668A99] mt-2">
        {format(new Date(item?.createdAt), 'do-MM-yyyy HH:mm aaa')}
      </span>
    </div>
  </div>
);

interface TopNavProps {
  image: string;
  title: string;
  icon: boolean;
  titleUser: string;
}

const TopNav = ({ title, titleUser, icon, image }: Partial<TopNavProps>) => {
  const { data, isLoading, isFetching, error } = useQuery<NotifyProps>('notification', () =>
    getNotifications(1)
  );



  const capitalizedFirstChar = titleUser?.replace(/^\w/, (c) => c.toUpperCase()) || 'A';


  return (
    <section>
      <div className="flex items-center justify-between py-2 mb-5">
        <div>
          <div className="flex items-center gap-x-1 mb-2">
            <span className="text-sm md:text-base text-[#668A99]">{`Hello ${capitalizedFirstChar},`} </span>
            {icon && <HelloIcon className="inline-block ml-3" />}
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold text-[#000000]">{title}</h1>
        </div>

        <div className="flex items-center gap-5">
          <Dropdown
            contentData={data?.notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="#">View More</Link>}
            loading={isLoading || isFetching}
            {...{ error }}>
            <div className="animate- notification w-12 h-12 cursor-pointer rounded-full border text-center border-[#C0C2C2] flex items-center justify-center">
              <NotificationIcon />
            </div>
          </Dropdown>

          <Link to="/account" className="w-12 h-12 animate- rounded-full">
            {image ? (
              <img
                src={image}
                alt="Avatar"
                className="rounded-full w-12 h-12 cursor-pointer shadow-lg"
              />
            ) : (
              <div className="rounded-full w-12 h-12 cursor-pointer shadow-lg bg-blue-1 text-white flex items-center justify-center text-center ">
                {capitalizedFirstChar[0]}
                </div>
            )}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopNav;
