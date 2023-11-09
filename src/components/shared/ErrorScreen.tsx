// import { Spinner } from "arvara-pckage";

type Props = {
  message: string;
}

const ErrorScreen = ({ message }: Partial<Props>) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="m-auto">
        {/* <Spinner s='blue' size={3} /> */}
        <p className="text-red-1">{message || "Oops.. Something went wrong"} <span className="animate-ping">...</span></p>
      </div>
    </div>
  )
};

export default ErrorScreen;
