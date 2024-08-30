import { IoIosAdd, IoIosArrowRoundBack, IoIosClose } from "react-icons/io";
import MainHeader from "../../Components/General/Header";
import { Link, useNavigate } from "react-router-dom";
import CreateRequest from "../../Components/modals/CreateRequest";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";

const MyProfessionals = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [openTableButton, setOpenTableButton] = useState(false);

  return (
    <div className="">
      <MainHeader />
      <main className="py-5 px-5 md:px-60 space-y-10">
        <CreateRequest open={open} close={() => setOpen(false)} />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <button
              onClick={() => navigate(-1)}
              className=" text-2xl bg-primary p-1 rounded-full "
            >
              <IoIosArrowRoundBack />
            </button>
            <h1 className="text-xl font-medium">Professionals</h1>
          </div>
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

        <section className="flex gap-5">
          <div className="flex items-center gap-2 bg-primary/10  p-2 h-fit rounded-full">
            <span className="bg-primary rounded-full w-7 h-7  justify-center flex items-center">
              1
            </span>
            <p>all</p>
          </div>
          <div className="flex items-center  border gap-2  p-2 h-fit  rounded-full">
            <span className="bg-white rounded-full w-7 h-7  justify-center flex items-center ">
              1
            </span>
            <p>Active</p>
          </div>
          <div className="flex items-center gap-2 border   p-2 h-fit rounded-full">
            <span className="bg-white rounded-full w-7 h-7  justify-center flex items-center  ">
              0
            </span>
            <p>Inactive</p>
          </div>
          <input
            className="rounded-full px-5 w-full bg-primary/5"
            placeholder="search"
          />
        </section>

        <section className="relative overflow-x-auto bg-white rounded-lg">
          <table className="w-full">
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b ">
                <td className="text-sm px-6 py-4 flex items-center gap-4 ">
                  <img
                    className=" w-10 h-10 rounded-full"
                    src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                    alt="profile-picture"
                  />
                  <div
                    onClick={() => {
                      navigate("/professional-projects");
                    }}
                    className="cursor-pointer"
                  >
                    <p> John Doe</p>
                    <p className="text-xs opacity-30">Software Engineer</p>
                  </div>
                </td>
                <td className="text-sm px-6 py-4">
                  <p> Jan 01,2022</p>
                  <p className="text-xs opacity-30">Add date</p>
                </td>
                <td className="text-sm px-6 py-4">
                  <p> Development</p>
                  <p className="text-xs opacity-30">category</p>
                </td>
                <td className="px-6 py-4 ">
                  <div className="text-sm flex items-center gap-2">
                    <p> Active</p>
                    <p className=" bg-green-700  rounded-full w-2 h-2"></p>
                  </div>
                  <p className="text-xs opacity-30">status</p>
                </td>
                <td className=" px-6 py-4 text-sm">
                  <p> 4.5+</p>
                  <p className="text-xs opacity-30">rating</p>
                </td>
                <td className="px-6 py-4">
                  <div className="">
                    <div
                      onClick={() => setOpenTableButton(!openTableButton)}
                      className="cursor-pointer"
                    >
                      <CiMenuKebab />
                    </div>

                    <div>
                      <ul
                        className={`${
                          openTableButton ? `fixed` : `hidden`
                        } bg-white shadow-md text-xs p-4 rounded-md space-y-4 right-64 mt-4`}
                      >
                        <li
                          onClick={() => setOpenTableButton(!openTableButton)}
                          className="flex justify-end cursor-pointer"
                        >
                          <IoIosClose className="flex items-center justify-center text-lg bg-primary rounded-full h-5 w-5" />
                        </li>
                        <li className="">
                          <Link to={"/professional-projects"}>
                            View Projects
                          </Link>
                        </li>
                        <li className="">
                          <Link>Contracts</Link>
                        </li>
                        <li className="">
                          <Link>Milestones</Link>
                        </li>
                        <li className="">
                          <Link>End Collaboration</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default MyProfessionals;
