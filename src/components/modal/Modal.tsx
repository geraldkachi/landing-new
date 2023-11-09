import { AIclosecirclebol } from 'arvara-icons';

interface Props {
  type?: string
  show: boolean;
  title?: string;
  subTitle?: string;
  icon?: JSX.Element;
  children?: JSX.Element;
  closeModal: (n?: boolean) => void;
}

const Modal = (props: Props) => {
  const { type, icon, show, title, children, subTitle, closeModal } = props;
  return (
    <>
      {show && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto">
              <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <AIclosecirclebol
                  className="icon solid text-grey-slate cursor-pointer float-right m-4 absolute top-0 right-0"
                  onClick={() => closeModal(false)}
                />
                {type === "icon" && (
                  <div className="flex items-center justify-center m-auto mt-10  rounded-full">
                    {icon}
                  </div>
                )}
                <div className="mx-auto p-5">
                  <h5 className="text-3xl text-700 mt-5 text-center w-80">
                    {title}
                  </h5>
                  <p className="text-center container mt-2 text-grey-slate text-base w-80">
                    {subTitle}
                  </p>
                </div>
                {children}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default Modal;
