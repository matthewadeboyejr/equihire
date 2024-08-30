import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const CreateRequest = ({ open, close }) => {
  return (
    <div
      className={`${
        open ? `flex` : `hidden`
      } bg-black/70 z-30 fixed flex justify-center items-center h-full inset-0 `}
    >
      <div className=" bg-white p-5  md:w-1/3 ">
        <div className="">
          <div className="flex items-center justify-between pb-10">
            <h1 className=" text-2xl font-medium bg-gradient-to-r  from-black via-black to-[#00A5CF] inline-block  text-transparent bg-clip-text ">
              Create New Request
            </h1>
            <button
              onClick={close}
              className="bg-primary p-2 rounded-full    hover:scale-105 transition-all"
            >
              <IoMdClose />
            </button>
          </div>

          <form className=" space-y-5">
            <fieldset className="border border-black space-y-4 p-5 rounded-md ">
              <legend className="">About Service</legend>

              <div className="flex flex-col gap-3 relative ">
                <label className="text-sm opacity-40" htmlFor="">
                  Service Title
                </label>
                <input
                  className=" text-sm  border-primary border-b bg-transparent placeholder:text-sm outline-none"
                  type="text"
                  id=""
                  placeholder="e.g software engineer "
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm opacity-40" htmlFor="">
                  what best discribe your startup/business
                </label>

                <select className="border-[#00A5CF] border-b bg-transparent placeholder:text-sm outline-none">
                  <option>Legal</option>
                  <option>Marketing</option>
                  <option>Development</option>
                  <option>Design</option>
                  <option>Finance</option>
                </select>
              </div>

              <div className="flex flex-col relative gap-3">
                <label className="text-sm opacity-40" htmlFor="">
                  Service Description
                </label>
                <textarea
                  className=" text-sm  border-primary border-b bg-transparent placeholder:text-sm outline-none"
                  type="textarea"
                  id=""
                />
              </div>
            </fieldset>

            <fieldset className="border border-black space-y-4 p-5 rounded-md">
              <legend>Project details/Offer </legend>

              <div className="flex flex-col relative  gap-3">
                <label className="text-sm opacity-40" htmlFor="">
                  Equity Offer(%)
                </label>
                <input
                  className=" text-sm  border-primary border-b bg-transparent placeholder:text-sm outline-none"
                  type="number"
                  id=""
                />
              </div>
              <div className="flex flex-col relative  gap-3">
                <label className="text-sm opacity-40" htmlFor="">
                  Startup Valuation
                </label>
                <input
                  className=" text-sm  border-primary border-b bg-transparent placeholder:text-sm outline-none"
                  type="number"
                  id=""
                />
              </div>
              <div className="flex flex-col relative  gap-3">
                <label className="text-sm opacity-40" htmlFor="">
                  Upfront commitment(NGN)
                </label>
                <input
                  className=" text-sm  border-primary border-b bg-transparent placeholder:text-sm outline-none"
                  type="number"
                  id=""
                />
              </div>
              <div className="flex flex-col relative  gap-3">
                <label className="text-sm opacity-40" htmlFor="">
                  Project timeline
                </label>
                <div className="flex gap-3">
                  <input
                    className="w-1/2 text-sm  border-primary border-b bg-transparent placeholder:text-sm outline-none"
                    type="date"
                    id=""
                  />
                  to
                  <input
                    className="w-1/2 text text-sm  border-primary border-b bg-transparent placeholder:text-sm outline-none"
                    type="date"
                    id=""
                  />
                </div>
              </div>
            </fieldset>

            <button className=" bg-primary border-b-4 border-black rounded-full py-4 px-6 text-white text-xs font-medium hover:scale-110 transition-all">
              <div className="flex items-center gap-2">
                <span>Preview</span>
                <div className="">
                  <FaArrowRightLong />
                </div>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateRequest;
