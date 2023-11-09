import { AIeyebol, AIeyeslashbol } from "arvara-icons";
interface Props {
  showPassword: boolean;
  setShowPassword: (password: boolean) => void;
}
const PasswordMe = (props: Props) => {
  const { showPassword, setShowPassword } = props;
  return (
    <div onClick={() => setShowPassword(!showPassword)}>
      {showPassword ? (
        <AIeyebol className="icon solid text-blue-2" />
        ) : (
        <AIeyeslashbol className="icon solid text-blue-2" />
      )}
    </div>
  );
};

export default PasswordMe;
