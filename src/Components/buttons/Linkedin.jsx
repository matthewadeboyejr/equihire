import { TiSocialLinkedinCircular } from "react-icons/ti";

const Linkedin = () => {
  return (
    <button className="flex items-center bg-[#0e76a8] py-2 px-3 rounded-full font-medium hover:scale-110 transition-all text-white ">
      <TiSocialLinkedinCircular className="text-3xl" />
      <p className="text-xs">Login with Linkedin </p>
    </button>
  );
};

export default Linkedin;
