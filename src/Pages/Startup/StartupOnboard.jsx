import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const StartupOnboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="px-7">
        <section className="space-y-1 pb-5">
          <Link>
            <FaArrowLeftLong />
          </Link>
          <h1 className=" text-2xl font-medium bg-gradient-to-r  from-black via-black to-[#00A5CF] inline-block  text-transparent bg-clip-text ">
            Let's get you ready for the marketplace
          </h1>
          <p className="text-xs">
            You're two steps away from finding the perfect professionals for
            your startup.
          </p>
        </section>
        <section className="space-y-4 ">
          <div className="flex flex-row gap-2   items-center ">
            <span className="rounded-full px-2 border-primary border ">1</span>
            <p>Setup your profile</p>
          </div>
          <div className="flex flex-row gap-2 items-center ">
            <span className="rounded-full px-2 border-primary border ">2</span>
            <p>Verify your ID/business and submit for approval</p>
          </div>
          {/*  <div className="flex flex-row gap-2 items-center ">
            <span className="rounded-full p-2 border-primary border ">3</span>
            <p>Specify the services you require</p>
          </div>
          <div className="flex flex-row gap-2 items-center ">
            <span className="rounded-full p-2 border-primary border ">4</span>
            <p>Set your equity offer</p>
          </div>
          <div className="flex flex-row gap-2 items-center ">
            <span className="rounded-full p-2 border-primary border ">5</span>
            <p>Post your first request</p>
          </div> */}

          <div className="flex items-center gap-4">
            <Link className="font-semibold text-sm hover:underline">Skip</Link>
            <button
              onClick={() => navigate("/add-startup")}
              className=" bg-primary border-b-4 border-black rounded-full py-4 px-6 text-white text-xs font-medium hover:scale-110 transition-all"
            >
              <div className="flex items-center gap-2">
                <span>Next</span>
                <div className="">
                  <FaArrowRightLong />
                </div>
              </div>
            </button>
          </div>

          <p className="text-sm italic py-5">
            This should take less than 4 minutes to complete
          </p>
        </section>
      </div>
    </div>
  );
};

export default StartupOnboard;
