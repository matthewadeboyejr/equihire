import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { LandingHeader } from "../../Components/General/Header";

const PickAccount = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div>
          <div className="space-y-1 pb-5">
            <h1 className=" text-2xl font-medium bg-gradient-to-r  from-black via-black to-[#00A5CF] inline-block  text-transparent bg-clip-text ">
              What do you want to do on Co?
            </h1>
            <p className="text-xs">
              This will help us personize your experience{" "}
            </p>
          </div>
          <form className="space-y-4 ">
            <div className="flex flex-row gap-2 border p-3 border-primary rounded-full">
              <input
                className=" border-[#00A5CF] border-b bg-transparent placeholder:text-sm outline-none"
                type="radio"
                id="expert"
              />
              <label htmlFor="expert">I'm a Startup</label>
            </div>
            <div className="flex flex-row gap-2 border p-3 border-primary rounded-full">
              <input
                className=" border-[#00A5CF] border-b bg-transparent placeholder:text-sm outline-none"
                type="radio"
                id="startup"
              />
              <label htmlFor="startup">I'm a professional</label>
            </div>
            <button
              onClick={() => {
                navigate("/startup-onboard");
              }}
              className=" bg-primary border-b-4 border-black rounded-full py-4 px-6 text-white text-xs font-medium hover:scale-110 transition-all"
            >
              <div className="flex items-center gap-2">
                <span>Next</span>
                <div className="">
                  <FaArrowRightLong />
                </div>
              </div>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PickAccount;
