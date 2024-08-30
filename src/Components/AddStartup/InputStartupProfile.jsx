import React from "react";

const InputStartupProfile = () => {
  return (
    <div className="space-y-1 pb-5">
      <div className="flex flex-row gap-2   items-center ">
        <span className="rounded-full px-2 border-primary border ">1</span>
        <h1 className=" text-2xl font-medium bg-gradient-to-r  from-black via-black to-[#00A5CF] inline-block  text-transparent bg-clip-text ">
          Setup your profile
        </h1>
      </div>

      <div className="">
        <div className="flex flex-col p-3">
          <label className="text-sm opacity-40" htmlFor="">
            what best discribe your startup/business
          </label>

          <select className="border-[#00A5CF] border-b bg-transparent placeholder:text-sm outline-none">
            <option>Sass</option>
            <option>Marketplace</option>
            <option>Agency</option>
            <option>Mobile App</option>
            <option>Ecommerce</option>
            <option>Main Street</option>
            <option>Others</option>
          </select>
        </div>
        <div className="flex flex-col relative  p-3">
          <label className="text-sm opacity-40" htmlFor="">
            Startup Name
          </label>
          <input
            className=" text-sm  border-primary border-b bg-transparent placeholder:text-sm outline-none"
            type="text"
            id=""
          />
        </div>
        <div className="flex flex-col relative  p-3">
          <label className="text-sm opacity-40" htmlFor="">
            Startup website(Optional)
          </label>
          <input
            className=" text-sm  border-primary border-b bg-transparent placeholder:text-sm outline-none"
            type="text"
            id=""
          />
        </div>
        <div className="flex flex-col relative  p-3">
          <label className="text-sm opacity-40" htmlFor="">
            Description Startup
          </label>
          <textarea
            className=" text-sm  border-primary border-b bg-transparent placeholder:text-sm outline-none"
            type="textarea"
            id=""
          />
        </div>
      </div>
    </div>
  );
};

export default InputStartupProfile;
