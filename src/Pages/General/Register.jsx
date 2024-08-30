import Linkedin from "../../Components/buttons/Linkedin";
import RegisterForm from "../../Components/forms/RegisterForm";

const Register = () => {
  return (
    <div className="h-screen flex items-center justify-center ">
      <section className="md:w-1/4  w-full px-7 space-y-6">
        <div className="space-y-1">
          <h1 className=" text-2xl font-medium bg-gradient-to-r  from-black via-black to-[#00A5CF] inline-block  text-transparent bg-clip-text ">
            Register
          </h1>
          <p className="text-xs">Please Enter Your Details </p>
        </div>
        <Linkedin />
        <hr className="border-black/20 border-b-0.1"></hr>
        <RegisterForm />
      </section>
    </div>
  );
};

export default Register;
