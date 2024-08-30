import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  return (
    <form className="flex flex-col gap-7">
      <input
        className="pb-2 border-[#00A5CF] border-b bg-transparent placeholder:text-sm outline-none"
        placeholder="First Name"
      />
      <input
        className="pb-2 border-[#00A5CF] border-b bg-transparent placeholder:text-sm outline-none"
        placeholder="Last Name"
      />

      <input
        className="pb-2 border-[#00A5CF] border-b bg-transparent placeholder:text-sm outline-none"
        placeholder="Email"
      />
      <input
        className=" pb-2 border-[#00A5CF] border-b bg-transparent placeholder:text-sm outline-none"
        placeholder="password"
      />

      <button
        onClick={() => {
          navigate("/pick-account");
        }}
        className="  border-b-4 border-black bg-primary rounded-full py-4 px-6 text-white text-xs font-medium hover:scale-105 transition-all"
      >
        Login
      </button>
      <p className="text-sm text-center">
        Have an Account?{" "}
        <Link
          to={"/login"}
          className="hover:underline text-primary cursor-pointer "
        >
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
