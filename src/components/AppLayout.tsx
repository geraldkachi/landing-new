import { ReactNode } from 'react';

import TopNav from './topnav/Topnav';
import { getCustomerRecord } from '../helpers/customer_info';
import { ICustomer } from '../types';
import Ads from '../pages/ads/Ads';

type Props = {
  title?: string;
  children: ReactNode;
  fullPage?: boolean;
};

const AppLayout = ({ children, title, fullPage = false }: Props) => {
  const customer = getCustomerRecord<ICustomer>();
  return (
    <>
      <TopNav
        title={title || 'Welcome Back!'}
        titleUser={customer?.firstName}
        image={customer?.image}
        icon
      />
      <div
        className={`${fullPage ? '' : 'grid lg:grid-cols-3 gap-10'}`}
      >
        <div className={`${fullPage ? 'col-span-1' : 'col-span-2'} `}>{children}</div>

        {fullPage ? null :
          <div className={fullPage ? '' : "col-span-1 h-max hidden sm:block"}>
            <Ads />
          </div>
        }
      </div>
    </>
  );
};

export default AppLayout;
