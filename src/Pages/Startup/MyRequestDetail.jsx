import { IoIosArrowRoundBack, IoMdEye } from "react-icons/io";
import MainHeader from "../../Components/General/Header";
import { useNavigate } from "react-router-dom";

const MyRequestDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <MainHeader />

      <div className="flex md:flex-row flex-col gap-4 md:p-10 p-5 ">
        <section>
          <div className="space-y-5 bg-white p-10 rounded-md w-full border-t-4 border-yellow-600 ">
            <button
              onClick={() => navigate(-1)}
              className=" text-2xl bg-primary p-1 rounded-full "
            >
              <IoIosArrowRoundBack />
            </button>
            <div className="flex items-center gap-5 pb-7 ">
              <div className="">
                {/*  <p className="text-sm opacity-50">Request</p> */}
                <p className="font-medium text-lg border border-gray-400 rounded-full p-3">
                  Software Engineer{" "}
                </p>
              </div>
              <div className="flex items-center gap-2 opacity-50">
                <p className="text-sm ">
                  <IoMdEye />
                </p>
                <p className="font-medium text-xs">200</p>
              </div>
            </div>

            <div className="border-b border-gray-400 pb-5">
              <p className="text-xs opacity-50 font-medium">DESCRIPTION</p>
              <p className="font-medium text-sm">
                A fintech company that want to unify all you spend money
              </p>
            </div>
            <div className="flex gap-8">
              <div>
                <p className="text-xs opacity-50 font-medium">EQUITY PAY</p>
                <p className="font-medium text-sm">3%</p>
              </div>
              <div>
                <p className="text-xs opacity-50 font-medium">UPFRONT</p>
                <p className="font-medium text-sm">NGN 0</p>
              </div>
              <div>
                <p className="text-xs opacity-50 font-medium">DURATION</p>
                <p className="font-medium text-sm">6 Month</p>
              </div>
              <div>
                <p className="text-xs opacity-50 font-medium">VALUATION</p>
                <p className="font-medium text-sm">NGN 10M</p>
              </div>
            </div>

            <div>
              <p className="text-xs opacity-50 font-medium">Company overview</p>
              <p className=" text-sm">
                This versatile and intelligent scanner app transforms your
                smartphone or tablet into a powerful portable scanner, making it
                easy to scan, print, and share documents directly from your
                mobile device. It features advanced scanning modes and document
                recognition, streamlining the process of managing your digital
                files efficiently.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-2 bg-white p-10 rounded-md w-full  ">
          <h2 className="font-medium text-2xl ">
            Private information is unavailable
          </h2>

          <p className=" text-sm">
            Private information will only be shared with Professional whom you
            choose to grant access to and will never be shared without your
            consent
          </p>
        </section>
      </div>
    </div>
  );
};

export default MyRequestDetail;
