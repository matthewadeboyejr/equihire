import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import AddStartupInputs from "./AddStartupInputs";
import { useRegStartupContext } from "../context/RegStartupContext";

const AddStartupForm = () => {
  const { setPage } = useRegStartupContext();

  const handlePrev = (e) => {
    e.preventDefault();
    setPage((prev) => prev - 1);
  };
  const handleNext = (e) => {
    e.preventDefault();
    setPage((prev) => prev + 1);
  };

  return (
    <form className="flex flex-col justify-center items-center h-screen ">
      <AddStartupInputs />
      <div className="md:w-1/3 w-full flex justify-end px-7 gap-3">
        <button
          onClick={handlePrev}
          className=" hover:bg-primary hover:text-black border-b-4 border-primary border text-black border-b-black rounded-full py-4 px-6  text-xs font-medium hover:scale-110 transition-all"
        >
          <div className="flex items-center gap-2">
            <div className="">
              <FaArrowLeftLong />
            </div>
            <span>Back</span>
          </div>
        </button>
        <button
          onClick={handleNext}
          className="text-black bg-primary border-b-4 border-black rounded-full py-4 px-6 text-xs font-medium hover:scale-110 transition-all"
        >
          <div className="flex items-center gap-2">
            <span>Next</span>
            <div className="">
              <FaArrowRightLong />
            </div>
          </div>
        </button>
      </div>
    </form>
  );
};

export default AddStartupForm;
