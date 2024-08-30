import MainHeader from "../../Components/General/Header";
//import { useNavigate } from "react-router-dom";
import { BiChat } from "react-icons/bi";
import { FaFileSignature } from "react-icons/fa6";
import { IoMdCheckmark, IoMdEye } from "react-icons/io";
import { IoDownloadOutline } from "react-icons/io5";
import { MdArrowOutward, MdOutlineStar } from "react-icons/md";

const ProjectDetail = () => {
  return (
    <div className="">
      <MainHeader />

      <div className="py-10 px-5 bg-white md:mx-52 ">
        <section className="flex items-center justify-between  mb-10">
          <div className="flex gap-2 items-center">
            <img
              className=" w-14 border h-14 rounded-full"
              src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
              alt="profile-picture"
            />
            <div className="space-y-1">
              <p className=" flex items-center gap-3 ">
                <span className="text-sm font-semibold">John Doe</span>
                <span className=" text-xs px-2 py-1 rounded-full text-white bg-primary">
                  verified
                </span>
              </p>
              <p className="text-sm opacity-80 font-light">Software Engineer</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <button className="p-3 flex items-center border border-black text-black rounded-md gap-2 font-medium hover:scale-105 transition-all hover:border-b-2">
              <MdArrowOutward />
              <p className="text-xs">About Professional</p>
            </button>
            <button className="p-3 flex items-center bg-black text-white rounded-md gap-2 font-medium hover:scale-105 transition-all hover:border-b-2">
              <p className="text-xs">Contact </p>
              <BiChat />
            </button>
          </div>
        </section>
        <section className="rounded-lg flex  gap-5">
          <div className="bg-primary/10 p-5 md:w-1/2 rounded-md space-y-3 ">
            <h3 className="font-medium text-lg">Job Description</h3>
            <p className="text-sm">
              Working as a frontend/backend to build a functional fintech
              applications
            </p>
          </div>
          <div className=" space-y-3 bg-primary/10 p-5 rounded-md md:w-1/2">
            <h4 className="font-medium text-sm">Startup Offer</h4>
            <div className="flex gap-8 text-sm">
              <div>
                <p className="opacity-50 border border-primary rounded-md p-1 text-xs mb-2 ">
                  Equity
                </p>
                <p className=" ">3%</p>
              </div>
              <div>
                <p className=" mb-2 opacity-50 border border-primary rounded-md p-1 text-xs">
                  Upfront
                </p>
                <p className=" ">NGN 0</p>
              </div>
              <div>
                <p className="mb-2  opacity-50 border border-primary rounded-md p-1 text-xs ">
                  Duration
                </p>
                <p className=" ">6 Month</p>
              </div>
              <div>
                <p className=" mb-2 opacity-50 border border-primary rounded-md p-1 text-xs">
                  Valuation
                </p>
                <p className="">NGN 10M</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-lg">Contracts</h3>
          </div>

          <div className="flex items-center justify-between border rounded-md p-3 ">
            <p className="flex items-center  gap-2">
              <span>
                <FaFileSignature />
              </span>
              <span className="text-sm">Contract (Both Party Signed)</span>
              <span className=" text-green-700 rounded-full bg-green-200 p-1 text-sm  ">
                <IoMdCheckmark />
              </span>
            </p>

            <button className="p-3 flex items-center bg-black text-white rounded-md gap-2 font-medium hover:scale-105 transition-all hover:border-b-2">
              <p className="text-xs">Download </p>
              <IoDownloadOutline />
            </button>
          </div>
        </section>
        <section className="py-5">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-lg">Deliverable</h3>
          </div>

          <div className="flex   flex-col justify-center items-center py-10">
            <p>Nothing to show</p>
            <p className="text-xs opacity-50">
              when professional upload Portfolio you will see it here{" "}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
