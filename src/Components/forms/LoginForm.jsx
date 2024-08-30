import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <form className="flex flex-col gap-7">
      <input
        className="border-[#00A5CF] border-b bg-transparent placeholder:text-sm outline-none"
        placeholder="Email"
      />
      <input
        className="border-[#00A5CF] border-b bg-transparent placeholder:text-sm outline-none"
        placeholder="Password"
      />
      <Link className="text-right text-sm hover:underline">
        Forget password
      </Link>
      <button
        onClick={() => {
          navigate("/startup-dashboard");
        }}
        className=" bg-primary border-b-4 border-black rounded-full py-4 px-6 text-white text-xs font-medium hover:scale-105 transition-all"
      >
        Login
      </button>
      <p className="text-sm text-center">
        Dont an Account?{" "}
        <Link to={"/register"} className="hover:underline text-primary">
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
