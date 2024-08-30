import {
  IoIosArrowRoundBack,
  IoIosChatbubbles,
  IoIosHourglass,
  IoIosVideocam,
  IoMdEye,
} from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { LandingHeader } from "../../Components/General/Header";
import { GoDash } from "react-icons/go";
import { GiReceiveMoney } from "react-icons/gi";
import { FaCheckToSlot } from "react-icons/fa6";

const RequestDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="py-14">
      <LandingHeader />
      <div className="flex md:flex-row flex-col gap-4 md:p-10 p-5 ">
        <section className="">
          <div className="space-y-5 bg-white p-10 rounded-md w-full ">
            <button
              onClick={() => navigate(-1)}
              className=" text-2xl bg-primary text-white p-1 rounded-full "
            >
              <IoIosArrowRoundBack />
            </button>
            <div className="flex  flex-col  gap-2 pb-7 ">
              <p className="font-medium text-lg text-primary w-fit  ">
                Full-Stack Developer for Web App MVP
              </p>

              <div className="flex items-center gap-2 opacity-50">
                <p className="text-sm ">
                  <IoMdEye />
                </p>
                <p className="font-medium text-xs">200</p>
              </div>
            </div>

            <div className="border-b border-gray-400 pb-5 space-y-3">
              <p className="text-lg font-semibold ">Request Details</p>
              <p className="leading-loose font-light text-sm">
                We are an early-stage startup building a marketplace platform
                and need a full-stack developer to build our MVP. The project
                includes developing user authentication, profile management, a
                payment gateway, and a dashboard for both users and
                administrators. Experience with React, Node.js, and cloud
                hosting is essential. We expect clear documentation, scalable
                code, and ongoing support during the testing phase. This project
                will be a key milestone in launching our startup, and we are
                open to long-term collaboration.
              </p>
            </div>
            <div className="border-b border-gray-400 pb-5 space-y-3">
              <p className="text-lg font-semibold ">Timeline</p>
              <p className="flex items-center font-light text-sm space-x-2">
                <span className="border p-2 rounded-full">August 30, 2024</span>
                <GoDash />
                <span className="border p-2 rounded-full">
                  {" "}
                  October 30, 2024
                </span>
              </p>
            </div>
            <div className="border-b border-gray-400 pb-5 space-y-3">
              <p className="text-lg font-semibold ">Budget & Equity Offer</p>
              <p className="flex items-center font-light text-sm space-x-2">
                Offering 3-5% equity depending on the level of involvement and
                project scope.
              </p>
            </div>
            <div className="border-b border-gray-400 pb-5 space-y-3">
              <p className="text-lg font-semibold "> Additional Details</p>
              <div className="flex text-nowrap  items-center gap-10 overflow-x-auto ">
                <div className="flex flex-col   items-start gap-1">
                  <p className="font-medium text-sm">5%</p>
                  <p className="text-xs opacity-50">Equity</p>
                </div>
                <div className="flex flex-col first-line:items-start gap-1">
                  <p className="font-medium text-sm">NGN 0</p>
                  <p className="text-xs opacity-50">Upfront</p>
                </div>
                <div className="flex flex-col  items-start gap-1">
                  <p className="font-medium text-sm  ">6 Month</p>
                  <p className="text-xs opacity-50">Duration</p>
                </div>
                <div className="flex flex-col  items-start gap-1">
                  <p className="font-medium text-sm">NGN 10M</p>
                  <p className="text-xs opacity-50">Valuation</p>
                </div>
                <div className="flex flex-col  items-start gap-1">
                  <p className="font-medium text-sm">20hr/week</p>
                  <p className="text-xs opacity-50">Working hours</p>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-400 pb-5 space-y-3">
              <p className="text-lg font-semibold ">Experience/Skills</p>
              <div className="flex text-xs text-nowrap items-center bg-primary/5 p-5 gap-2 overflow-x-auto">
                <p className="p-3  rounded-full bg-white">MongoDB</p>
                <p className="p-3 bg-white rounded-full ">Django</p>
                <p className="p-3 bg-white rounded-full ">Python</p>
                <p className="p-3 bg-white rounded-full ">Leadership</p>
                <p className="p-3 bg-white text-sm rounded-full ">
                  Architural design
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-2  bg-primary/5 p-5 rounded-md w-full  ">
          <p className="font-medium text-xl ">
            Show interest to explore offer further
          </p>
          <div className="flex  gap-2 my-10">
            <button className="p-4 flex justify-center w-full text-white bg-primary rounded-md font-medium  hover:scale-105 transition-all hover:border-b-2">
              <p className="text-lg">I'm Interested</p>
            </button>
          </div>

          <div className="flex flex-col gap-5  border border-black bg-white  rounded-md p-5">
            <p className=" text-center text-xl tracking-tighter ">
              Steps for completing your project
            </p>
            <div className="flex items-center gap-4">
              <p className="  text-primary  flex items-center justify-center">
                <IoMdEye />
              </p>
              <p className="text-sm flex flex-col  ">
                <span className="font-semibold">Show Interest</span>
                <span className="">
                  Express interest, and you'll receive the startup's legal
                  agreement to sign or decline.
                </span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="  text-primary  flex items-center justify-center">
                <IoIosVideocam />
              </p>
              <p className="text-sm flex flex-col  ">
                <span className="font-semibold">Intro meeting </span>
                <span className="">
                  If accepted, you'll get a meeting link to discuss the project
                  with the startup.
                </span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className=" text-primary flex items-center justify-center">
                <FaCheckToSlot />
              </p>
              <p className="text-sm flex flex-col  ">
                <span className="font-semibold">Acceptance</span>
                <span className="">
                  After the meeting, both parties can accept or reject the
                  request.
                </span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-primary  flex items-center justify-center">
                <IoIosHourglass />
              </p>
              <p className="text-sm flex flex-col  ">
                <span className="font-semibold">Project Kickoff</span>
                <span className="">
                  Once accepted, start working on the project with clear
                  milestones.
                </span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-primary flex items-center justify-center">
                <IoIosChatbubbles />
              </p>
              <p className="text-sm flex flex-col  ">
                <span className="font-semibold">Communication</span>
                <span className="">
                  Stay connected through our platform for updates and feedback.
                </span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className=" text-primary flex items-center justify-center">
                <GiReceiveMoney />
              </p>
              <p className="text-sm flex flex-col  ">
                <span className="font-semibold">Equity & Payment</span>
                <span className="">
                  On completion, equity or payment will be finalized as per your
                  agreement.
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RequestDetail;
