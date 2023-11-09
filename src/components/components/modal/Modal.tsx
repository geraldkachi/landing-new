import { ClickOutside } from "./ClickOutside";

interface Props {
  type?: string
  show: boolean;
  title?: string;
  subTitle?: string;
  icon?: JSX.Element;
  children?: JSX.Element;
  closeModal: (n: boolean) => void;
}

const Modal = (props: Props) => {
  const { type, icon, show, title, children, subTitle, closeModal } = props;
  return (
    <>
      {show && (
        <>

            <div  className={`justify-center items-center flex overflow-x-hidden overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none mx-3 ${show ? 'block' : 'hidden'}`}>
          <ClickOutside
            onclickoutside={() => closeModal(false)}
            className={` fixed z-50 rounded-xl mx-0 overflow-hidden`}
            style={{
              top: show ? '50%' : '-50%',
              opacity: show ? 1 : 0,
              // width: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
              <div className="relative my-6 mx-auto">
                <div className="border-0 rounded-3xl p-5 sm:p-10 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {type === "icon" && (
                    <div className="flex items-center justify-center m-auto mt-10 w-20 h-20 rounded-full">
                      {icon}
                    </div>
                  )}
                  <div className="mx-auto">
                    <h5 className="text-4xl font-semibold mt-5 text- w-80">
                      {title && title}
                    </h5>
                    <p className="text-center container mt-2 text-grey-slate text-base w-80">
                      {subTitle}
                    </p>
                  </div>
                  {children}
                </div>
              </div>
          </ClickOutside>
            </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default Modal;