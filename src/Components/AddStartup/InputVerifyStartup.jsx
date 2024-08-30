import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const InputVerifyStartup = () => {
  return (
    <div className="space-y-5 pb-5">
      <div className="flex flex-row gap-2   items-center ">
        <span className="rounded-full px-2 border-primary border ">2</span>
        <h1 className="  text-xl font-medium bg-gradient-to-r  from-black via-black to-[#00A5CF] inline-block  text-transparent bg-clip-text ">
          Verify your ID / business document
        </h1>
      </div>

      <div className="space-y-5">
        <div className="flex flex-col relative gap-2 border rounded-md border-primary p-3">
          <label className="text-sm opacity-40" htmlFor="">
            Government Issued ID
          </label>
          <input
            className=" text-sm    bg-transparent placeholder:text-sm outline-none"
            type="file"
            id=""
          />
        </div>
        <div className="flex flex-col relative gap-2 border rounded-md border-primary p-3">
          <label className="text-sm opacity-40" htmlFor="">
            Business Registration Documents
          </label>
          <input
            className=" text-sm    bg-transparent placeholder:text-sm outline-none"
            type="file"
            id=""
          />
        </div>
        <div className="flex flex-col relative gap-2 border rounded-md border-primary p-3">
          <label className="text-sm opacity-40" htmlFor="">
            Business Tax ID (Optional)
          </label>
          <input
            className=" text-sm    bg-transparent placeholder:text-sm outline-none"
            type="file"
            id=""
          />
        </div>
      </div>
    </div>
  );
};

export default InputVerifyStartup;
