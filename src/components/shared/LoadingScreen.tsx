import { Spinner } from "arvara-pckage";

type Props = {
  message: string;
}

const LoadingScreen = ({ message }: Partial<Props>) => {
  return (
    <div className="flex items-center justify-center h-full mt-20">
      <div className="m-auto">
        <Spinner color='blue' size={3} />
        {message && <p>{message || "Retrieving your data"} <span className="animate-pulse">...</span></p>}
      </div>
    </div>
  )
};

export default LoadingScreen;
