import {
  RegStartupProvider,
  useRegStartupContext,
} from "../context/RegStartupContext";
import InputStartupProfile from "./InputStartupProfile";
import InputVerifyStartup from "./InputVerifyStartup";

const AddStartupInputs = () => {
  const { page } = useRegStartupContext();

  const display = { 0: <InputStartupProfile />, 1: <InputVerifyStartup /> };

  return <div className="md:w-1/3 w-full px-5">{display[page]}</div>;
};

export default AddStartupInputs;
