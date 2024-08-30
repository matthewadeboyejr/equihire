import { IoIosAdd, IoMdEye } from "react-icons/io";
import MainHeader from "../../Components/General/Header";
import { useNavigate } from "react-router-dom";
import CreateRequest from "../../Components/modals/CreateRequest";
import { useState } from "react";

const StartupDashboad = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <MainHeader />
      <main className="px-5 space-y-10">
        <CreateRequest open={open} close={() => setOpen(false)} />

        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium">Requests</h1>
          <button
            onClick={() => {
              setOpen(true);
            }}
            className="p-3 flex items-center bg-primary rounded-full font-medium border-b-4 border-black hover:scale-105 transition-all hover:border-b-2"
          >
            <IoIosAdd />
            <p className="text-xs"> Add Request</p>
          </button>
        </div>

        <section className="flex md:flex-row flex-col gap-4">
          <div
            onClick={() => navigate("/request-detail")}
            className="space-y-5 bg-white p-10 rounded-md w-fit border-b-4 border-yellow-600 hover:shadow-2xl "
          >
            <div className="flex items-center gap-5 pb-7 ">
              <div className="">
                {/*  <p className="text-sm opacity-50">Request</p> */}
                <p className="font-medium text-sm border rounded-full p-3">
                  Software Engineer{" "}
                </p>
              </div>
              <div className="flex items-center gap-2 opacity-50">
                <p className="text-sm ">
                  <IoMdEye />
                </p>
                <p className="font-medium text-xs">200</p>
              </div>
            </div>

            <div>
              <p className="text-xs opacity-50 font-medium">Description</p>
              <p className=" text-sm">
                A fintech company that want to unify all you spend money{" "}
              </p>
            </div>
            <div className="flex gap-8">
              <div>
                <p className="text-xs opacity-50 font-medium">Equity</p>
                <p className=" text-sm">3%</p>
              </div>
              <div>
                <p className="text-xs opacity-50 font-medium">Upfront</p>
                <p className="text-sm">NGN 0</p>
              </div>
              <div>
                <p className="text-xs opacity-50 font-medium">Duration</p>
                <p className=" text-sm">6 Month</p>
              </div>
              <div>
                <p className="text-xs opacity-50 font-medium">Valuation</p>
                <p className=" text-sm">NGN 10M</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StartupDashboad;
