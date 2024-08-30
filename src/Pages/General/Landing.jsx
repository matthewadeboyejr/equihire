import React from "react";
import { LandingHeader } from "../../Components/General/Header";
import { MdArrowOutward, MdOutlineStar } from "react-icons/md";

const Landing = () => {
  return (
    <div className="md:px-20 px-5 space-y-14 py-14 ">
      <LandingHeader />

      <section className="border-b-4 border-b-primary bg-white rounded-lg md:p-32  py-32 px-10   ">
        <div className=" space-y-5 text-center">
          <h1 className="md:text-7xl text-3xl font-black bg-gradient-to-r  from-black via-black to-primary inline-block  text-transparent bg-clip-text ">
            Hire professionals, <br /> Pay with equity
          </h1>
          <p className="text-sm  flex justify-center  tracking-wide">
            Connect with top professionals who are ready to invest in your
            vision.
            <br /> Exchange equity for expert services.
          </p>

          <form className="flex justify-center  ">
            <div className="bg-white md:w-2/3 w-full border border-black flex  justify-between rounded-full ">
              <input
                className="placeholder:text-sm w-full px-5 rounded-full outline-none"
                placeholder="Search by skills or role"
              />
              <button
                //to={"/login"}
                className=" bg-primary  m-2 rounded-full py-4 px-6 text-white text-xs font-medium hover:scale-110 transition-all"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </section>
      {/*    <section className="border-b-4 border-b-primary bg-white rounded-lg md:p-32  py-32 px-10  flex ">
        <div>
          <h1 className="md:text-7xl text-3xl font-medium bg-gradient-to-r  from-black via-black to-primary inline-block  text-transparent bg-clip-text border-b ">
            FIND THE RIGHT
            <br /> PROFESSIONALS,
            <br /> PAY WITH EQUITY
          </h1>
          <div className="flex gap-20 items-center">
            <p>MISSION</p>
            <p className="text-sm  flex justify-center  tracking-wide">
              Connect startup with top professionals who are ready to invest in
              your vision.Exchange equity for expert services.
            </p>
          </div>
        </div>

        <div className=""></div>
      </section> */}

      {/*  <section className="mt-10">
        <p className=" text-center text-4xl tracking-tighter ">
          All you have to do to start,
          <span className="font-bold"> SHARE</span>
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-14 md:mx-28 border-2 border-b-4 border-black bg-white rounded-md py-16 px-16">
          <div className="flex flex-col items-center gap-4">
            <p className="w-7 h-7 rounded-full border border-black  flex items-center justify-center">
              1
            </p>
            <p className="text-sm flex flex-col items-center gap-2  text-center">
              <span className="font-semibold">Create an Account</span>
              <span className="">
                Create an account and setup profile as a startup or professional
              </span>
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="w-7 h-7 rounded-full border border-black  flex items-center justify-center">
              2
            </p>
            <p className="text-sm flex flex-col items-center gap-2  text-center">
              <span className="font-semibold text-nowrap">
                Verified/Validate Account
              </span>
              <span className="">
                Upload document to verified startup or professional{" "}
              </span>
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="w-7 h-7 rounded-full border border-black  flex items-center justify-center">
              3
            </p>
            <p className="text-sm flex flex-col items-center gap-2">
              <span className="font-semibold text-nowrap">
                Create/Accept request
              </span>
              <span className=" text-center">
                As a startup you can create a request or accept request as a
                professional{" "}
              </span>
            </p>
          </div>

          <div className="flex gap-2 place-self-center md:col-span-3 mt-10">
            <button className="p-3 flex items-center w-fit  bg-primary rounded-md gap-2 font-medium hover:scale-105 transition-all hover:border-b-2">
              <p className="text-xs">Sign up for free</p>
            </button>
            <button className="p-3 flex items-center w-fit border border-primary  rounded-md gap-2 font-medium hover:scale-105 transition-all hover:border-b-2">
              <MdArrowOutward />
              <p className="text-xs">Learn More</p>
            </button>
          </div>
        </div>
      </section> */}

      <section className=" ">
        <div className="flex  flex-col  md:flex-row ">
          <div className="md:w-1/2   rounded-l-md overflow-auto  ">
            <img
              className="h-full  "
              src="https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>

          <div className="flex flex-col gap-5 md:w-1/2 bg-primary/10 rounded-r-md py-16 px-16">
            <p className=" text-center text-4xl tracking-tighter ">
              All you have to do to start,
              <span className="font-bold"> SHARE</span>
            </p>
            <div className="flex items-center gap-4">
              <p className="w-7 h-7 rounded-full border border-black  flex items-center justify-center">
                1
              </p>
              <p className="text-sm flex flex-col  ">
                <span className="font-semibold">Create an Account</span>
                <span className="">
                  Create an account and setup profile as a startup or
                  professional
                </span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="w-7 h-7 rounded-full border border-black  flex items-center justify-center">
                2
              </p>
              <p className="text-sm flex flex-col  ">
                <span className="font-semibold">Verified/Validate Account</span>
                <span className="">
                  Upload document to verified startup or professional
                </span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="w-7 h-7 rounded-full border border-black  flex items-center justify-center">
                3
              </p>
              <p className="text-sm flex flex-col  ">
                <span className="font-semibold">Create/Accept request</span>
                <span className="">
                  As a startup you can create a request or accept request as a
                  professional
                </span>
              </p>
            </div>

            <div className="flex gap-2 mt-10">
              <button className="p-3 flex items-center w-fit text-white bg-primary rounded-md gap-2 font-medium hover:scale-105 transition-all hover:border-b-2">
                <p className="text-xs">Sign up for free</p>
              </button>
              <button className="p-3 flex items-center w-fit border border-primary  rounded-md gap-2 font-medium hover:scale-105 transition-all hover:border-b-2">
                <MdArrowOutward />
                <p className="text-xs">Learn More</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className=" flex md:flex-row flex-col space-y-10  bg-white p-10 rounded-md">
        <div className="flex flex-col gap-2  justify-center text-sm px-10  ">
          <h3 className="font-semibold">Explore Available Professional</h3>
          <p>
            This are varified professionals ready to work with you on equity
            base
          </p>
          <button className="p-3 flex items-center w-fit  bg-black text-white rounded-md gap-2 font-medium hover:scale-105 transition-all hover:border-b-2">
            <MdArrowOutward />
            <p className="text-xs">Explore all</p>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-3 md:w-2/3">
          <div className=" space-y-4 p-5 rounded-md border-2 border-black border-b-4 bg-primary/10 ">
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <img
                  className=" w-10 h-10 rounded-full"
                  src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                  alt="profile-picture"
                />

                <div>
                  <p className=" text-lg font-medium ">Chris Joe</p>
                  <p className="text-xs opacity-80 ">Software Engineer</p>
                </div>
              </div>
              <div className="flex h-fit p-1 items-center text-xs rounded-md text-black bg-white">
                <MdOutlineStar />
                <p> 4.5</p>
              </div>
            </div>
            <p className="text-xs">
              I am a professional software Engineer with an experience of about
              5 years in this profession. Working as a frontend/backend have
              build more than 100 web applications
            </p>

            <div className="flex gap-2 text-xs">
              <p className=" p-2 rounded-sm bg-white">3+ Equity</p>
              <p className=" p-2 rounded-sm bg-white">0 Upfront</p>
              <p className=" p-2 rounded-sm bg-white">Available</p>
            </div>
          </div>
          <div className=" space-y-4 p-5 rounded-md border-2 border-black border-b-4 bg-primary/10 ">
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <img
                  className=" w-10 h-10 rounded-full"
                  src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                  alt="profile-picture"
                />

                <div>
                  <p className=" text-lg font-medium ">Chris Joe</p>
                  <p className="text-xs opacity-80 ">Software Engineer</p>
                </div>
              </div>
              <div className="flex h-fit p-1 items-center text-xs rounded-md text-black bg-white">
                <MdOutlineStar />
                <p> 4.5</p>
              </div>
            </div>
            <p className="text-xs">
              I am a professional software Engineer with an experience of about
              5 years in this profession. Working as a frontend/backend have
              build more than 100 web applications
            </p>

            <div className="flex gap-2 text-xs">
              <p className=" p-2 rounded-sm bg-white">3+ Equity</p>
              <p className=" p-2 rounded-sm bg-white">0 Upfront</p>
              <p className=" p-2 rounded-sm bg-white">Available</p>
            </div>
          </div>
          <div className=" space-y-4 p-5 rounded-md border-2 border-black border-b-4 bg-primary/10 ">
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <img
                  className=" w-10 h-10 rounded-full"
                  src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                  alt="profile-picture"
                />

                <div>
                  <p className=" text-lg font-medium ">Chris Joe</p>
                  <p className="text-xs opacity-80 ">Software Engineer</p>
                </div>
              </div>
              <div className="flex h-fit p-1 items-center text-xs rounded-md text-black bg-white">
                <MdOutlineStar />
                <p> 4.5</p>
              </div>
            </div>
            <p className="text-xs">
              I am a professional software Engineer with an experience of about
              5 years in this profession. Working as a frontend/backend have
              build more than 100 web applications
            </p>

            <div className="flex gap-2 text-xs">
              <p className=" p-2 rounded-sm bg-white">3+ Equity</p>
              <p className=" p-2 rounded-sm bg-white">0 Upfront</p>
              <p className=" p-2 rounded-sm bg-white">Available</p>
            </div>
          </div>
          <div className=" space-y-4 p-5 rounded-md border-2 border-black border-b-4 bg-primary/10 ">
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <img
                  className=" w-10 h-10 rounded-full"
                  src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                  alt="profile-picture"
                />

                <div>
                  <p className=" text-lg font-medium ">Chris Joe</p>
                  <p className="text-xs opacity-80 ">Software Engineer</p>
                </div>
              </div>
              <div className="flex h-fit p-1 items-center text-xs rounded-md text-black bg-white">
                <MdOutlineStar />
                <p> 4.5</p>
              </div>
            </div>
            <p className="text-xs">
              I am a professional software Engineer with an experience of about
              5 years in this profession. Working as a frontend/backend have
              build more than 100 web applications
            </p>

            <div className="flex gap-2 text-xs">
              <p className=" p-2 rounded-sm bg-white">3+ Equity</p>
              <p className=" p-2 rounded-sm bg-white">0 Upfront</p>
              <p className=" p-2 rounded-sm bg-white">Available</p>
            </div>
          </div>
        </div>
      </section>
      <section className=" flex md:flex-row flex-col space-y-10 bg-primary/10 p-10 rounded-md">
        <div className="flex flex-col gap-2  justify-center text-sm px-10  ">
          <h3 className="font-semibold">Explore Startup request</h3>
          <p>This are varified startup ready to work with you on equity base</p>
          <button className="p-3 flex items-center w-fit  bg-black text-white rounded-md gap-2 font-medium hover:scale-105 transition-all hover:border-b-2">
            <MdArrowOutward />
            <p className="text-xs">Explore all</p>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-3 md:w-2/3">
          <div className=" space-y-4 p-5 rounded-md border-2 border-black border-b-4 bg-white ">
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <img
                  className=" w-10 h-10 rounded-full"
                  src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                  alt="profile-picture"
                />

                <div className="space-y-2">
                  <p className=" text-sm rounded-full font-medium border p-2 ">
                    Software Engineer
                  </p>
                  <p className="text-xs px-2 opacity-80 ">Altas</p>
                </div>
              </div>
              <div className="flex h-fit p-1 items-center text-xs rounded-md text-black bg-primary/10">
                <MdOutlineStar />
                <p> 4.5</p>
              </div>
            </div>
            <p className="text-xs">
              A fintech company that want to unify all you spend money
            </p>

            <div className="flex gap-2 text-xs">
              <p className=" p-2 rounded-sm bg-primary/10">3+ Equity</p>
              <p className=" p-2 rounded-sm bg-primary/10">0 Upfront</p>
              <p className=" p-2 rounded-sm bg-primary/10">Available</p>
              <p className=" p-2 rounded-sm bg-primary/10">6 month</p>
            </div>
          </div>
          <div className=" space-y-4 p-5 rounded-md border-2 border-black border-b-4 bg-white ">
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <img
                  className=" w-10 h-10 rounded-full"
                  src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                  alt="profile-picture"
                />

                <div className="space-y-2">
                  <p className=" text-sm rounded-full font-medium border p-2 ">
                    Software Engineer
                  </p>
                  <p className="text-xs px-2 opacity-80 ">Altas</p>
                </div>
              </div>
              <div className="flex h-fit p-1 items-center text-xs rounded-md text-black bg-primary/10">
                <MdOutlineStar />
                <p> 4.5</p>
              </div>
            </div>
            <p className="text-xs">
              A fintech company that want to unify all you spend money
            </p>

            <div className="flex gap-2 text-xs">
              <p className=" p-2 rounded-sm bg-primary/10">3+ Equity</p>
              <p className=" p-2 rounded-sm bg-primary/10">0 Upfront</p>
              <p className=" p-2 rounded-sm bg-primary/10">Available</p>
              <p className=" p-2 rounded-sm bg-primary/10">6 month</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
