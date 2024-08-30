//import RegVerifyStartup from "../../Components/RegVerifyStartup";
import AddStartupForm from "../../Components/AddStartup/AddStartupForm";
import { RegStartupProvider } from "../../Components/context/RegStartupContext";

const AddStartup = () => {
  return (
    <RegStartupProvider>
      <AddStartupForm />
    </RegStartupProvider>
  );
};

export default AddStartup;
