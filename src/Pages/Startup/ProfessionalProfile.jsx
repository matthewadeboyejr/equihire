import MainHeader from "../../Components/General/Header";
//import { useNavigate } from "react-router-dom";
import { BiChat } from "react-icons/bi";
import { FaCheckToSlot } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";

import {
  IoIosChatbubbles,
  IoIosHourglass,
  IoIosVideocam,
  IoMdEye,
} from "react-icons/io";
import { MdArrowOutward, MdOutlineStar } from "react-icons/md";

const ProfessionalProfile = () => {
  return (
    <div className="">
      <MainHeader />

      <div className="flex md:flex-row flex-col gap-4 md:p-10 p-5">
        <section className="py-10 px-5 bg-white  ">
          <div className="flex items-center justify-between  mb-10">
            <div className="flex gap-2 items-center">
              <img
                className=" w-28 border h-28 rounded-full"
                src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                alt="profile-picture"
              />
              <div className="space-y-1">
                <p className=" flex items-center gap-3 ">
                  <span className="text-xl font-semibold">John Doe</span>
                  <span className=" text-xs px-2 py-1 rounded-full text-white bg-primary">
                    verified
                  </span>
                </p>
                <p className="text-sm opacity-80 font-light">
                  Software Engineer
                </p>
                <p className=" flex items-center gap-1 ">
                  <span className="text-xl font-semibold">
                    <MdOutlineStar />
                  </span>
                  <div className="space-x-3 text-sm flex items-center">
                    <span className="  rounded-full ">4.5+ </span>
                    <span>|</span>
                    <span className="  rounded-full ">100 reviews</span>
                    <span>|</span>
                    <span className="  rounded-full ">50 Jobs</span>
                  </div>
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              {/*    <button className="p-3 flex items-center border border-black text-black rounded-md gap-2 font-medium hover:scale-105 transition-all hover:border-b-2">
              <MdArrowOutward />
              <p className="text-xs">About Professional</p>
            </button> */}
              <button className="p-3 flex items-center bg-black text-white rounded-md gap-2 font-medium hover:scale-105 transition-all hover:border-b-2">
                <p className="text-xs">Contact </p>
                <BiChat />
              </button>
            </div>
          </div>
          <div className="rounded-lg flex  gap-5">
            <div className="bg-primary/10 p-5 md:w-1/2 rounded-md ">
              <h3 className="font-medium text-lg">About</h3>
              <p className="text-xs">
                I am a professional software Engineer with an experience of
                about 5 years in this profession. Working as a frontend/backend
                have build more than 100 web applications
              </p>
            </div>
            <div className=" space-y-5 bg-primary/10 p-5 rounded-md md:w-1/2">
              <div className="space-y-3 ">
                <h3 className="font-medium text-start text-sm">
                  Skills/Expertise
                </h3>
                <div className="flex gap-3 flex-wrap">
                  <span className="rounded-full text-xs border p-2 border-black text-nowrap">
                    System Architure
                  </span>
                  <span className="rounded-full text-xs border p-2 border-black text-nowrap">
                    Authentication
                  </span>
                  <span className="rounded-full text-xs border p-2 border-black text-nowrap">
                    Backend Architure
                  </span>
                  <span className="rounded-full text-xs border p-2 border-black text-nowrap">
                    frontend design
                  </span>
                  <span className="rounded-full text-xs border p-2 border-black text-nowrap">
                    DataBase design
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-medium text-sm">Location</h3>
                <div className="flex items-center gap-2">
                  <img
                    className="rounded-full w-5 h-5"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAACVBMVEUAh1H///8AfDudGzJvAAABX0lEQVR4nO3QQQ0AIAzAwIF/0Yi4ZA/Sc9DObLlnzV2L2tM+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+8uW+B3AYRFPn9q1JAAAAAElFTkSuQmCC"
                    alt=""
                  />
                  <p>Abuja, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-lg">CaseStudy/Portfolio</h3>
              <button className="p-3 flex items-center   text-black rounded-md gap-2 font-medium hover:scale-105 transition-all hover:border-b-2">
                <MdArrowOutward />
                <p className="text-xs">view more</p>
              </button>
            </div>

            <div className="flex   flex-col justify-center items-center py-10">
              <p>Nothing to show</p>
              <p className="text-xs opacity-50">
                when professional upload Portfolio you will see it here{" "}
              </p>
            </div>
          </div>
          <div className="p space-y-10">
            <div className="flex items-center justify-between pb-5">
              <h3 className="font-medium text-lg">100 Reviews</h3>
              <button className="p-3 flex items-center   text-black rounded-md gap-2 font-medium hover:scale-105 transition-all hover:border-b-2">
                <MdArrowOutward />
                <p className="text-xs">view more</p>
              </button>
            </div>

            <div className="space-y-4 p-5 rounded-md shadow-md">
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <img
                    className=" w-10 h-10 rounded-full"
                    src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                    alt="profile-picture"
                  />

                  <div>
                    <p className=" text-lg font-medium ">Chris Joe</p>
                    <p className="text-xs opacity-80 ">Co-founder, truview</p>
                  </div>
                </div>
                <div className="flex h-fit p-1 items-center text-xs rounded-md text-white bg-primary">
                  <MdOutlineStar />
                  <p> 4.5</p>
                </div>
              </div>
              <p className="text-sm">
                Has exceeded my expectations. The result turned out great. He
                was very proactive and also helped me with difficulties and set
                everything up perfectly.
              </p>
            </div>
            <div className="space-y-4 p-5 rounded-md shadow-md">
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <img
                    className=" w-10 h-10 rounded-full"
                    src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                    alt="profile-picture"
                  />

                  <div>
                    <p className=" text-lg font-medium ">Chris Joe</p>
                    <p className="text-xs opacity-80 ">Co-founder, truview</p>
                  </div>
                </div>
                <div className="flex h-fit p-1 items-center text-xs rounded-md text-white bg-primary">
                  <MdOutlineStar />
                  <p> 4.5</p>
                </div>
              </div>
              <p className="text-sm">
                Has exceeded my expectations. The result turned out great. He
                was very proactive and also helped me with difficulties and set
                everything up perfectly.
              </p>
            </div>
            <div className="space-y-4 p-5 rounded-md shadow-md">
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <img
                    className=" w-10 h-10 rounded-full"
                    src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                    alt="profile-picture"
                  />

                  <div>
                    <p className=" text-lg font-medium ">Chris Joe</p>
                    <p className="text-xs opacity-80 ">Co-founder, truview</p>
                  </div>
                </div>
                <div className="flex h-fit p-1 items-center text-xs rounded-md text-white bg-primary">
                  <MdOutlineStar />
                  <p> 4.5</p>
                </div>
              </div>
              <p className="text-sm">
                Has exceeded my expectations. The result turned out great. He
                was very proactive and also helped me with difficulties and set
                everything up perfectly.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-2  bg-primary/5 p-5 rounded-md  ">
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
              How it works
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

export default ProfessionalProfile;
