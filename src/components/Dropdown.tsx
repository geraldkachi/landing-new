import { AImoreoutlin } from 'arvara-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  items: any[];
  linkTo: any;
  record?:any,
  className?: string;
}
const Dropdown = (props: Props) => {
  const { items, linkTo, className, record } = props;
  const [dropdownShow, setDropdownShow] = useState(false);

  return (
    <>
      <AImoreoutlin
        type="button"
        className="mr-3 rotate-90"
        onClick={() => setDropdownShow(!dropdownShow)}
      />
        <>
          {items && dropdownShow && (
            <div
              className={`absolute bg-white shadow-2xl rounded-lg -ml-20 z-10 ${className}`}
              onClick={() => setDropdownShow(!dropdownShow)}
            >
              <div className="flex flex-col absolute">
                {items.map((item) => (
                  <div key={item.id} className="flex flex-row">
                    <div className="flex-1 font-normal text-base container mx-5 my-3">
                      {item.path && (
                        <Link to={item.path}>{item.name}</Link>
                      )}
                      {item.onclick && (
                        <div onClick={item.onclick}>{item.name}</div>
                      )}

                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
    </>
  );
};

export default Dropdown;
