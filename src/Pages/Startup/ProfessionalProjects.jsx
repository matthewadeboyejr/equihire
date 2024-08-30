import MainHeader from "../../Components/General/Header";
import { useNavigate } from "react-router-dom";
import { BiChat } from "react-icons/bi";
import { MdArrowOutward, MdOutlineStar } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";

const ProfessionalProjects = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <MainHeader />

      <div className="md:px-52 py-10 px-5  ">
        <section className="flex items-center justify-between  mb-10">
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
              <p className="text-sm opacity-80 font-light">Software Engineer</p>
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
            <button
              onClick={() => {
                navigate("/professional-profile");
              }}
              className="p-3 flex items-center border border-black text-black rounded-md gap-2 font-medium hover:scale-105 transition-all hover:border-b-2"
            >
              <MdArrowOutward />
              <p className="text-xs">About Professional</p>
            </button>
            <button className="p-3 flex items-center bg-black text-white rounded-md gap-2 font-medium hover:scale-105 transition-all hover:border-b-2">
              <p className="text-xs">Contact </p>
              <BiChat />
            </button>
          </div>
        </section>
        <div className="text-xl font-semibold px-10 mb-5 ">Projects</div>
        <section className=" relative overflow-x-auto bg-white rounded-lg">
          <table className="w-full">
            <tbody>
              <tr className="border-b">
                <td className="text-sm px-6 py-4 flex items-center gap-4 ">
                  <div
                    onClick={() => {
                      navigate("/project-detail");
                    }}
                    className="cursor-pointer"
                  >
                    <p> Backend App development</p>
                    <p className="text-xs opacity-30">Job description</p>
                  </div>
                </td>
                <td className="text-sm px-6 py-4">
                  <p> Jan 01,2022</p>
                  <p className="text-xs opacity-30">Start date</p>
                </td>
                <td className="text-sm px-6 py-4">
                  <p> Jan 01,2022</p>
                  <p className="text-xs opacity-30">end date</p>
                </td>
                <td className="text-sm px-6 py-4">
                  <p> 5% </p>
                  <p className="text-xs opacity-30">Equity </p>
                </td>
                <td className=" px-6 py-4 text-sm">
                  <p> NGN 0</p>
                  <p className="text-xs opacity-30">Upfront</p>
                </td>
                <td className="px-6 py-4 ">
                  <div className="text-sm flex items-center gap-2">
                    <p> Active</p>
                    <p className=" bg-green-700  rounded-full w-2 h-2"></p>
                  </div>
                  <p className="text-xs opacity-30">status</p>
                </td>

                <td className="px-6 py-4">
                  <CiMenuKebab />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default ProfessionalProjects;
