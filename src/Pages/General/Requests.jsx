import React from "react";
import { useNavigate } from "react-router-dom";
import { LandingHeader } from "../../Components/General/Header";

const Requests = () => {
  const navigate = useNavigate();
  return (
    <div className="md:px-20 px-5  py-14 space-y-14 ">
      <LandingHeader />

      <div className="flex flex-col gap-4 bg-white rounded-lg p-5   ">
        <section className=" text-center bg-white py-5 space-y-6">
          <h3 className="text-2xl font-semibold">
            Check out request posted on equihire.
          </h3>
          <form className="flex justify-center  ">
            <div className="bg-white md:w-2/3 h-14 w-full border border-black flex  justify-between rounded-full ">
              <input
                className="placeholder:text-sm w-full px-5 rounded-full outline-none"
                placeholder="Search by skills or role"
              />
              <button
                //to={"/login"}
                className=" bg-primary  m-2 rounded-full px-6 text-white text-xs font-medium hover:scale-110 transition-all"
              >
                Search
              </button>
            </div>
          </form>
        </section>

        <section className="flex md:flex-row flex-col gap-4 ">
          <div
            onClick={() => navigate("/request-detail")}
            className="space-y-7 bg-white md:p-10 p-5 rounded-md border hover:shadow-lg "
          >
            <div className="flex flex-col  items-start gap-2 ">
              <p className="font-medium text-lg border rounded-full p-3 text-primary">
                Full-Stack Developer for Web App MVP
              </p>
              <p className="text-xs px-3 opacity-50">
                Equity Only ‐ Posted 5 days ago
              </p>
            </div>
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

            <div>
              <p className=" text-sm">
                Are you an experienced infrastructure engineer with a knack for
                problem-solving and a strategic mindset? We seek a Process
                Automation E…
              </p>
            </div>

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
        </section>
      </div>
    </div>
  );
};

export default Requests;
