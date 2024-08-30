import React from "react";
import { useNavigate } from "react-router-dom";
import { LandingHeader } from "../../Components/General/Header";
import { MdOutlineStar } from "react-icons/md";

const Professionals = () => {
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
            onClick={() => navigate("/professional-profile")}
            className="space-y-7 bg-white md:p-10 p-5 rounded-md border hover:shadow-lg "
          >
            <div className="flex justify-between">
              <div className="flex gap-2 items-center border rounded-full py-2 pr-20 pl-2">
                <img
                  className=" w-10 h-10 rounded-full"
                  src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                  alt="profile-picture"
                />

                <div>
                  <p className="font-medium text-lg text-primary">John doe</p>
                  <p className="text-xs opacity-80 ">Software Engineer</p>
                </div>
              </div>
              <div className="flex h-fit p-1 items-center text-xs rounded-md text-black bg-primary/20">
                <MdOutlineStar />
                <p> 4.5</p>
              </div>
            </div>

            <div>
              <p className=" text-sm">
                With over 8 years of experience in software development, I
                specialize in building scalable web and mobile applications ..
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

            <div className="flex text-nowrap  items-center gap-10 overflow-x-auto ">
              <div className="flex flex-col   items-start gap-1">
                <p className="font-medium text-sm">5% - 10%</p>
                <p className="text-xs opacity-50">Equity</p>
              </div>
              <div className="flex flex-col first-line:items-start gap-1">
                <p className="font-medium text-sm">NGN 10,000,000+</p>
                <p className="text-xs opacity-50">Charge value</p>
              </div>

              <div className="flex flex-col  items-start gap-1">
                <p className="font-medium text-sm">20hr/week</p>
                <p className="text-xs opacity-50">Working hours</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Professionals;
